# logshipper

logshipper is a Node.js library for logging with several configuration options. It allows you to log log messages at different levels, customize log formatting, choose between output to console or files, and much more.

## Installation
To get started with logshipper, you can install it via npm or yarn:

```bash
npm install logshipper
```

or

```bash
yarn add logshipper
```

## Basic Usage
Here is a simple example of how to use logshipper in your Node.js project:

```js
const { Logger, LogType } = require('logshipper');

// Create a Logger instance
const logger = new Logger();

// Log a log message
logger.log('This is a log message.');

// Log a warning message
logger.log('This is a warning.', LogType.WARNING);

// Log an error message
logger.log('This is an error.', LogType.ERROR);
```
## Custom Log Levels
In addition to the default log levels (INFO, WARNING, ERROR), logshipper now supports custom log levels, allowing you to define your own log levels for more granular logging.

### Adding Custom Log Levels
You can add a custom log level using the addCustomLogLevel method:

```bash
logger.addCustomLogLevel('DEBUG', 100); // Example custom log level
```

### Logging with Custom Log Levels
Once you've added custom log levels, you can log messages with those levels using the logCustom method:

```js
logger.logCustom('This is a custom debug message.', 'DEBUG');
```

Make sure to define custom log levels before using them for logging. If a custom log level is not defined, a warning message will be displayed in the console.

## Configuration Options
logshipper offers several configuration options that you can adjust according to your needs:

- consoleOutput (boolean): Enables or disables log output to the console.
- fileOutput (boolean): Enables or disables the output of logs to files.
- logFilePath (string): The log file path (if file output is enabled).
- logLevel (string): Sets the minimum log level to be logged (e.g. 'INFO', 'WARNING', 'ERROR').
- logFormat (function): Allows you to customize the format of the logs.
- Here is an example of how to configure logshipper with custom options:

Here is an example of how to configure logshipper with custom options:

```js
const { Logger } = require('logshipper');

const logger = new Logger({
   consoleOutput: true,
   fileOutput: true,
   logFilePath: 'myapp.log',
   logLevel: 'INFO',
   logFormat: (message, logLevel) => `[${logLevel}] ${message}`,
});

logger.log('This is a log message.');
```
## Contributing

If you want to contribute to the development of logshipper, feel free to submit pull requests or report issues on [GitHub](https://github.com/jgb27/logshipper).

## License

This project is licensed under the [GPL-3.0 License](LICENSE) - see the [LICENSE](LICENSE) file for details.
