"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var logger_1 = require("./../logger");
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    Logger.prototype._log = function (logParts) {
        // Redirect logs to a file
        if (this.logWriteStream) {
            var line = logParts.join(' ') + '\n';
            this.logWriteStream.write(line);
        }
        else {
            _super.prototype._log.call(this, logParts);
        }
    };
    Logger["default"] = new Logger();
    return Logger;
}(logger_1["default"]));
exports["default"] = Logger;
