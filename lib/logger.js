const winston = require('winston');
const { LoggerCreator } = require('./utils/loggerCreator');
const { LogLevels } = require('./utils/logLevels');
const { customFormat } = require('./utils/logFormat');

const createLoggers = () => {

  const logError = new LoggerCreator(winston, LogLevels.ERROR, customFormat);
  const logInfo = new LoggerCreator(winston, LogLevels.INFO, customFormat);
  const logWarning = new LoggerCreator(winston, LogLevels.WARNING, customFormat);

  return {
    logError,
    logInfo,
    logWarning
  }
}

const loggers = createLoggers()

module.exports = loggers