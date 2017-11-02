"use strict";
exports.__esModule = true;
var logger_1 = require("./logger");
exports.Logger = logger_1["default"];
var log_levels_1 = require("./log-levels");
exports.LogLevel = log_levels_1["default"];
/**
 * Logs a message to the console with verbose severity
 * @param message The message to log
 */
function verbose() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    (_a = logger_1["default"]["default"]).verbose.apply(_a, message);
    var _a;
}
exports.verbose = verbose;
/**
 * Logs a message to the console with debug severity
 * @param message The message to log
 */
function debug() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    (_a = logger_1["default"]["default"]).debug.apply(_a, message);
    var _a;
}
exports.debug = debug;
/**
 * Logs a message to the console with info severity
 * @param message The message to log
 */
function info() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    (_a = logger_1["default"]["default"]).info.apply(_a, message);
    var _a;
}
exports.info = info;
/**
 * Logs a message to the console with warning severity
 * @param message The message to log
 */
function warn() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    (_a = logger_1["default"]["default"]).warn.apply(_a, message);
    var _a;
}
exports.warn = warn;
/**
 * Logs a message to the console with error severity
 * @param message The message to log
 */
function error() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    (_a = logger_1["default"]["default"]).error.apply(_a, message);
    var _a;
}
exports.error = error;
