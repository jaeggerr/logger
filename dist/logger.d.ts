import LogLevel from './log-levels';
declare class Logger {
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
     * File to which logs should be redirected
     */
    private logWriteStream;
    /**
     * Logs a message to the console
     * @param level The log level
     * @param message The message to log
     * @return {Boolean} If the message can be logged
     */
    log(level: LogLevel, ...message: any[]): boolean;
    /**
     * Redirect logs to a file
     * @param path The path of the file which is going to contain logs
     * @param append Append logs to the file instead of recreating it
     * @param stylize Use styles, colors, ... for logs
     */
    logToFile(path: string, append?: boolean, stylize?: boolean): void;
    /**
     * Display logs in the console
     * @param stylize Use styles, colors, ... for logs
     */
    logToConsole(stylize?: boolean): void;
    verbose(...message: any[]): void;
    debug(...message: any[]): void;
    info(...message: any[]): void;
    warn(...message: any[]): void;
    error(...message: any[]): void;
}
export default Logger;
