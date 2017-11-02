import LogLevel from '../log-levels'
import Logger from '../logger'

const message = 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?'

console.log('Log in verbose mode...')
Logger.default.level = LogLevel.Verbose
logMessageInAllModes()

console.log('Log in error mode...')
Logger.default.level = LogLevel.Error
logMessageInAllModes()

console.log('Log in only debug mode...')
Logger.default.level = LogLevel.Debug
Logger.default.isMinLevel = false
logMessageInAllModes()

console.log('Log in none mode...')
Logger.default.level = LogLevel.None
Logger.default.isMinLevel = true
logMessageInAllModes()

console.log('Log only hour')
Logger.default.level = LogLevel.None
Logger.default.isMinLevel = false
Logger.default.level = LogLevel.Info
Logger.default.timeFormat = 'HH:mm'
logMessageInAllModes()

function logMessageInAllModes () {
  Logger.default.verbose(message)
  Logger.default.debug(message)
  Logger.default.info(message)
  Logger.default.warn(message)
  Logger.default.error(message)

  Logger.default.error(JSON.stringify({
    bobo: 'biboi',
    zbu: 7
  }))
}
