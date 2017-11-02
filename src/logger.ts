import * as fs from 'fs'
import { log } from 'util'
import LogLevel from './log-levels'
import * as moment from 'moment'

class Logger {
  static readonly default = new Logger()

  /**
   * The log severity to display. Default is info.
   * Can be only one level or a set of bit masks.
   */
  level: LogLevel = LogLevel.Info

  /**
   * Display logs of severity "level" and bigger.
   * If false, only logs of severity "level" will be displayed.
   */
  isMinLevel: boolean = true

  /**
   * Add time in the log message
   */
  logTime: boolean = true

  /**
   * Date format for logged time
   */
  timeFormat: string = 'DD/MM/YYYY HH:mm:ss'

  /**
   * Use styles, colors, ... for logs
   */
  stylize: boolean = true

  /**
   * File to which logs should be redirected
   */
  private logWriteStream: fs.WriteStream | null

  /**
   * Logs a message to the console
   * @param level The log level
   * @param message The message to log
   * @return {Boolean} If the message can be logged
   */
  log (level: LogLevel, ...message: any[]): boolean {
    if (this.level === LogLevel.None) {
      return false
    }
    if (this.isMinLevel) {
      if (level < this.level) return false
    } else if (!(this.level & level)) {
      return false
    }

    let logParts = message
    logParts.unshift(`[${moment().format(this.timeFormat)}]`)
    if (this.stylize) {
      logParts = LogLevel.stylize(level, ...logParts)
    } else {
      const tag = LogLevel.tagName(level)
      if (tag) logParts.unshift(`[${tag.toUpperCase()}]`)
    }

    // Redirect logs to a file
    if (this.logWriteStream) {
      const line = logParts.join(' ') + '\n'
      this.logWriteStream.write(line)
    } else {
      console.log(...logParts)
    }
    return true
  }

  /**
   * Redirect logs to a file
   * @param path The path of the file which is going to contain logs
   * @param append Append logs to the file instead of recreating it
   * @param stylize Use styles, colors, ... for logs
   */
  logToFile (path: string, append: boolean = false, stylize: boolean = true) {
    const options: any = {
      defaultEncoding: 'utf8',
      autoClose: true
    }
    if (append) {
      options.flags = 'a'
    }
    this.logWriteStream = fs.createWriteStream(path, options)
    this.stylize = stylize
  }

  /**
   * Display logs in the console
   * @param stylize Use styles, colors, ... for logs
   */
  logToConsole (stylize: boolean = true) {
    if (this.logWriteStream) {
      this.logWriteStream.end()
    }
    this.logWriteStream = null
    this.stylize = stylize
  }

  verbose (...message: any[]) {
    this.log(LogLevel.Verbose, ...message)
  }

  debug (...message: any[]) {
    this.log(LogLevel.Debug, ...message)
  }

  info (...message: any[]) {
    this.log(LogLevel.Info, ...message)
  }

  warn (...message: any[]) {
    this.log(LogLevel.Warn, ...message)
  }

  error (...message: any[]) {
    this.log(LogLevel.Error, ...message)
  }
}

export default Logger
