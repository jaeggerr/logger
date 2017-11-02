# Jaeger logger library

Simple logging library.

### Dispatch logs to a file

```typescript
// Append new logs to the existing file content.
// If false, the file will be cleared if if already exists.
const append = false
// Write special characters for colors in the log file.
// Those characters are invisible in the console and with special tools. 
const stylize = true 
Logger.default.logToFile('/path/to/logs.log', append, stylize)
```

### Log something

```typescript
const message = 'Hello world!'
const logger = Logger.default

// Log with all severity levels
logger.verbose(message)
logger.log(LogLevel.Verbose, message) // Alternative

logger.debug(message)
logger.log(LogLevel.Debug, message) // Alternative

logger.info(message)
logger.log(LogLevel.Info, message) // Alternative

logger.warn(message)
logger.log(LogLevel.Warn, message) // Alternative

logger.error(message)
logger.log(LogLevel.Error, message) // Alternative

// Log a json object
Logger.default.info(JSON.stringify(myObject))

// Log a number
logger.info(7)

// Log multiple things
logger.info(message, JSON.stringify(myObject), 7)
```

### Set the severity levels

```typescript
enum LogLevel {
  None    = 0, // No logs
  Verbose = 1 << 0,
  Debug   = 1 << 1,
  Info    = 1 << 2,
  Warn    = 1 << 3,
  Error   = 1 << 4
}

Logger.default.level = LogLevel.Error

// If true: Only display logs of severity "level" and bigger.
// If false: Only logs of severity "level" will be displayed.
Logger.default.isMinLevel = false
```

### Time format

```typescript
// Add time in the log message
Logger.default.timeFormat = true
// Specify the time format. Default is 'DD/MM/YYYY HH:mm:ss'.
Logger.default.timeFormat = 'HH:mm'
```