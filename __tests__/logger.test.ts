import { Logger } from '../src/logger';
import { LogType } from '../src/logTypes';
import { saveToFile } from '../src/fileLogger';
import { colorizeLog } from '../src/colorLogger';
import { jest } from '@jest/globals';

jest.mock('../src/fileLogger', () => ({
  saveToFile: jest.fn(),
}));

jest.spyOn(console, 'log');

describe('Logger', () => {
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a Logger instance with default options', () => {
    expect(logger instanceof Logger).toBe(true);
    expect(logger['logToFile']).toBe(false);
    expect(logger['logToConsole']).toBe(true);
  });

  it('should create a Logger instance with custom options', () => {
    logger = new Logger(true, false);
    expect(logger['logToFile']).toBe(true);
    expect(logger['logToConsole']).toBe(false);
  });

  it('should log a message to console with default log type', () => {
    logger.log('Test message');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[INFO] Test message'));
  });

  it('should log a message to console with custom log type', () => {
    logger.log('Error message', LogType.ERROR);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[ERROR] Error message'));
  });

  it('should not log to file when logToFile is false', () => {
    logger.log('File message');
    expect(saveToFile).not.toHaveBeenCalled();
  });

  it('should log to file when logToFile is true', () => {
    logger = new Logger(true, false);
    logger.log('File message');
    expect(saveToFile).toHaveBeenCalledWith(expect.stringContaining('[INFO] File message'));
  });
});
