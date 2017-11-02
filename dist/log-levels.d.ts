declare enum LogLevel {
    None = 0,
    Verbose = 1,
    Debug = 2,
    Info = 4,
    Warn = 8,
    Error = 16,
}
declare namespace LogLevel {
    function tagName(level: LogLevel): string | null;
    function stylize(level: LogLevel, ...log: string[]): string[];
}
export default LogLevel;
