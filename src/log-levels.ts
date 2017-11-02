import chalk from 'chalk'

enum LogLevel {
  None = 0, // No logs
  Verbose = 1 << 0,
  Debug = 1 << 1,
  Info = 1 << 2,
  Warn = 1 << 3,
  Error = 1 << 4
}

namespace LogLevel {
  export function tagName (level: LogLevel): string | null {
    switch (level) {
      case LogLevel.Verbose:
        return 'verbose'

      case LogLevel.Debug:
        return 'debug'

      case LogLevel.Info:
        return 'info'

      case LogLevel.Warn:
        return 'warn'

      case LogLevel.Error:
        return 'error'
    }
    return null
  }

  export function stylize (level: LogLevel, ...log: string[]): string[] {
    let message: string[] = []

    let tag: any = LogLevel.tagName(level)
    if (tag) {
      tag = ` ${tag.toUpperCase()} `
      switch (level) {
        case LogLevel.Verbose:
          tag = chalk.bgBlack.bold.white(tag)
          break

        case LogLevel.Debug:
          tag = chalk.bgBlue.bold.white(tag)
          break

        case LogLevel.Info:
          tag = chalk.bgGreen.bold.black(tag)
          break

        case LogLevel.Warn:
          tag = chalk.bgYellow.bold.black(tag)
          break

        case LogLevel.Error:
          tag = chalk.bgRed.bold.white(tag)
          break

        default:
          tag = chalk.bgBlack.bold.white(tag)
          break
      }
      message.push(tag)
    }

    if (level === LogLevel.Error) {
      const logPart: any = chalk.bgRed.white(...log)
      message.push(logPart)
    } else if (level === LogLevel.Warn) {
      const logPart: any = chalk.bgYellow.black(...log)
      message.push(logPart)
    } else {
      message = message.concat(log)
    }

    // Definitions return a bool although it is a string so we need to cast the clack result in any and return a string...
    return message
  }
}

export default LogLevel
