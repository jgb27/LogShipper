import { LogType } from './logTypes';
import { saveToFile } from './fileLogger';
import { colorizeLog } from './colorLogger';

export class Logger {
  private logToFile: boolean;
  private logToConsole: boolean;

  constructor(logToFile: boolean = false, logToConsole: boolean = true) {
    this.logToFile = logToFile;
    this.logToConsole = logToConsole;
  }

  log(message: string, type: LogType = LogType.INFO) {
    const logMessage = `[${new Date().toISOString()}] [${type}] ${message}`;

    if (this.logToFile) {
      saveToFile(logMessage);
    }

    if (this.logToConsole) {
      console.log(colorizeLog(logMessage, type));
    }
  }
}
