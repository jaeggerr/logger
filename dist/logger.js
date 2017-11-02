"use strict";
exports.__esModule = true;
var fs = require("fs");
var log_levels_1 = require("./log-levels");
var moment = require("moment");
var Logger = (function () {
    function Logger() {
        /**
         * The log severity to display. Default is info.
         * Can be only one level or a set of bit masks.
         */
        this.level = log_levels_1["default"].Info;
        /**
         * Display logs of severity "level" and bigger.
         * If false, only logs of severity "level" will be displayed.
         */
        this.isMinLevel = true;
        /**
         * Add time in the log message
         */
        this.logTime = true;
        /**
         * Date format for logged time
         */
        this.timeFormat = 'DD/MM/YYYY HH:mm:ss';
        /**
         * Use styles, colors, ... for logs
         */
        this.stylize = true;
    }
    /**
     * Logs a message to the console
     * @param level The log level
     * @param message The message to log
     * @return {Boolean} If the message can be logged
     */
    Logger.prototype.log = function (level) {
        var message = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            message[_i - 1] = arguments[_i];
        }
        if (this.level === log_levels_1["default"].None) {
            return false;
        }
        if (this.isMinLevel) {
            if (level < this.level)
                return false;
        }
        else if (!(this.level & level)) {
            return false;
        }
        var logParts = message;
        logParts.unshift("[" + moment().format(this.timeFormat) + "]");
        if (this.stylize) {
            logParts = log_levels_1["default"].stylize.apply(log_levels_1["default"], [level].concat(logParts));
        }
        else {
            var tag = log_levels_1["default"].tagName(level);
            if (tag)
                logParts.unshift("[" + tag.toUpperCase() + "]");
        }
        // Redirect logs to a file
        if (this.logWriteStream) {
            var line = logParts.join(' ') + '\n';
            this.logWriteStream.write(line);
        }
        else {
            console.log.apply(console, logParts);
        }
        return true;
    };
    /**
     * Redirect logs to a file
     * @param path The path of the file which is going to contain logs
     * @param append Append logs to the file instead of recreating it
     * @param stylize Use styles, colors, ... for logs
     */
    Logger.prototype.logToFile = function (path, append, stylize) {
        if (append === void 0) { append = false; }
        if (stylize === void 0) { stylize = true; }
        var options = {
            defaultEncoding: 'utf8',
            autoClose: true
        };
        if (append) {
            options.flags = 'a';
        }
        this.logWriteStream = fs.createWriteStream(path, options);
        this.stylize = stylize;
    };
    /**
     * Display logs in the console
     * @param stylize Use styles, colors, ... for logs
     */
    Logger.prototype.logToConsole = function (stylize) {
        if (stylize === void 0) { stylize = true; }
        if (this.logWriteStream) {
            this.logWriteStream.end();
        }
        this.logWriteStream = null;
        this.stylize = stylize;
    };
    Logger.prototype.verbose = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.log.apply(this, [log_levels_1["default"].Verbose].concat(message));
    };
    Logger.prototype.debug = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.log.apply(this, [log_levels_1["default"].Debug].concat(message));
    };
    Logger.prototype.info = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.log.apply(this, [log_levels_1["default"].Info].concat(message));
    };
    Logger.prototype.warn = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.log.apply(this, [log_levels_1["default"].Warn].concat(message));
    };
    Logger.prototype.error = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.log.apply(this, [log_levels_1["default"].Error].concat(message));
    };
    Logger["default"] = new Logger();
    return Logger;
}());
exports["default"] = Logger;
