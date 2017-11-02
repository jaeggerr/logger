import Logger from './logger';
import LogLevel from './log-levels';
/**
 * Logs a message to the console with verbose severity
 * @param message The message to log
 */
export declare function verbose(...message: string[]): void;
/**
 * Logs a message to the console with debug severity
 * @param message The message to log
 */
export declare function debug(...message: string[]): void;
/**
 * Logs a message to the console with info severity
 * @param message The message to log
 */
export declare function info(...message: string[]): void;
/**
 * Logs a message to the console with warning severity
 * @param message The message to log
 */
export declare function warn(...message: string[]): void;
/**
 * Logs a message to the console with error severity
 * @param message The message to log
 */
export declare function error(...message: string[]): void;
export { Logger, LogLevel };
