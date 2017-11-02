import * as fs from 'fs'
import LogLevel from '../log-levels'
import _Logger from './../logger'

export default class Logger extends _Logger {
  static readonly default = new Logger()

  /**
   * File to which logs should be redirected
   */
  private logWriteStream: fs.WriteStream | null

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

  _log (logParts: any[]) {
    // Redirect logs to a file
    if (this.logWriteStream) {
      const line = logParts.join(' ') + '\n'
      this.logWriteStream.write(line)
    } else {
      super._log(logParts)
    }
  }
}
