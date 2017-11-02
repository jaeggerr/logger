import Logger from './logger'
import LogLevel from './log-levels'

/**
 * Logs a message to the console with verbose severity
 * @param message The message to log
 */
export function verbose (...message: string[]) {
  Logger.default.verbose(...message)
}

/**
 * Logs a message to the console with debug severity
 * @param message The message to log
 */
export function debug (...message: string[]) {
  Logger.default.debug(...message)
}

/**
 * Logs a message to the console with info severity
 * @param message The message to log
 */
export function info (...message: string[]) {
  Logger.default.info(...message)
}
/**
 * Logs a message to the console with warning severity
 * @param message The message to log
 */
export function warn (...message: string[]) {
  Logger.default.warn(...message)
}

/**
 * Logs a message to the console with error severity
 * @param message The message to log
 */
export function error (...message: string[]) {
  Logger.default.error(...message)
}

export { Logger, LogLevel }
