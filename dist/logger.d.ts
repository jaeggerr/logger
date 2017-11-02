import LogLevel from './log-levels';
export declare class Logger {
    static readonly default: Logger;
    /**
     * The log severity to display. Default is info.
     * Can be only one level or a set of bit masks.
     */
    level: LogLevel;
    /**
     * Display logs of severity "level" and bigger.
     * If false, only logs of severity "level" will be displayed.
     */
    isMinLevel: boolean;
    /**
     * Add time in the log message
     */
    logTime: boolean;
    /**
     * Date format for logged time
     */
    timeFormat: string;
    /**
     * Use styles, colors, ... for logs
     */
    stylize: boolean;
    /**
     * Logs a message to the console
     * @param level The log level
     * @param message The message to log
     * @return {Boolean} If the message can be logged
     */
    log(level: LogLevel, ...message: any[]): boolean;
    _log(logParts: any[]): void;
    verbose(...message: any[]): void;
    debug(...message: any[]): void;
    info(...message: any[]): void;
    warn(...message: any[]): void;
    error(...message: any[]): void;
}
export default Logger;
