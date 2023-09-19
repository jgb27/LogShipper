import chalk from 'chalk';
import { LogType } from './logTypes';

export function colorizeLog(logMessage: string, type: LogType): string {
  switch (type) {
    case LogType.INFO:
      return chalk.blue(logMessage);
    case LogType.WARNING:
      return chalk.yellow(logMessage);
    case LogType.ERROR:
      return chalk.red(logMessage);
    default:
      return logMessage;
  }
}
