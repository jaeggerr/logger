"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Verbose"] = 1] = "Verbose";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 4] = "Info";
    LogLevel[LogLevel["Warn"] = 8] = "Warn";
    LogLevel[LogLevel["Error"] = 16] = "Error";
})(LogLevel || (LogLevel = {}));
(function (LogLevel) {
    function tagName(level) {
        switch (level) {
            case LogLevel.Verbose:
                return 'verbose';
            case LogLevel.Debug:
                return 'debug';
            case LogLevel.Info:
                return 'info';
            case LogLevel.Warn:
                return 'warn';
            case LogLevel.Error:
                return 'error';
        }
        return null;
    }
    LogLevel.tagName = tagName;
    function stylize(level) {
        var log = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            log[_i - 1] = arguments[_i];
        }
        var message = [];
        var tag = LogLevel.tagName(level);
        if (tag) {
            tag = " " + tag.toUpperCase() + " ";
            switch (level) {
                case LogLevel.Verbose:
                    tag = chalk_1["default"].bgBlack.bold.white(tag);
                    break;
                case LogLevel.Debug:
                    tag = chalk_1["default"].bgBlue.bold.white(tag);
                    break;
                case LogLevel.Info:
                    tag = chalk_1["default"].bgGreen.bold.black(tag);
                    break;
                case LogLevel.Warn:
                    tag = chalk_1["default"].bgYellow.bold.black(tag);
                    break;
                case LogLevel.Error:
                    tag = chalk_1["default"].bgRed.bold.white(tag);
                    break;
                default:
                    tag = chalk_1["default"].bgBlack.bold.white(tag);
                    break;
            }
            message.push(tag);
        }
        if (level === LogLevel.Error) {
            var logPart = (_a = chalk_1["default"].bgRed).white.apply(_a, log);
            message.push(logPart);
        }
        else if (level === LogLevel.Warn) {
            var logPart = (_b = chalk_1["default"].bgYellow).black.apply(_b, log);
            message.push(logPart);
        }
        else {
            message = message.concat(log);
        }
        // Definitions return a bool although it is a string so we need to cast the clack result in any and return a string...
        return message;
        var _a, _b;
    }
    LogLevel.stylize = stylize;
})(LogLevel || (LogLevel = {}));
exports["default"] = LogLevel;
