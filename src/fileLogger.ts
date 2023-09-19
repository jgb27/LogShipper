import fs from 'fs';

export function saveToFile(logMessage: string) {
  const logFilePath = 'app.log';

  fs.appendFile(logFilePath, logMessage + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}
