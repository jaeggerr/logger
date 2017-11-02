import _Logger from './../logger';
export default class Logger extends _Logger {
    static readonly default: Logger;
    /**
     * File to which logs should be redirected
     */
    private logWriteStream;
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
    _log(logParts: any[]): void;
}
