import { LogType } from './logTypes';
import { saveToFile } from './fileLogger';
import { colorizeLog } from './colorLogger';

export class Logger {
  private logToFile: boolean;
  private logToConsole: boolean;
  private customLogLevels: Record<string, number> = {}

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

  addCustomLogLevel(levelName: string, levelValue: number) {
    this.customLogLevels[levelName] = levelValue;
  }

  logCustom(message: string, customLogLevel: string) {
    if (this.customLogLevels[customLogLevel] !== undefined) {
      const logMessage = `[${new Date().toISOString()}] [${customLogLevel}] ${message}`;

      if (this.logToFile) {
        saveToFile(logMessage);
      }

      if (this.logToConsole) {
        console.log(colorizeLog(logMessage, customLogLevel as LogType));
      }
    } else {
      console.warn(`Nível de log personalizado '${customLogLevel}' não definido.`);
    }
  }
}
