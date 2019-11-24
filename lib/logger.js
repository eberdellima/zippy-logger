const winston = require('winston')
const { errorLogger } = require('./utils/errorLogger')
const { warningLogger } = require('./utils/warningLogger')
const { infoLogger } = require('./utils/infoLogger')

const createLoggers = () => {

  const logOptions = {
    logger: winston.createLogger,
    transports: winston.transports
  }

  const logError = errorLogger(logOptions).log
  const logInfo = infoLogger(logOptions).log
  const logWarning = warningLogger(logOptions).log

  return {
    logError,
    logInfo,
    logWarning
  }
}

const loggers = createLoggers()

module.exports = loggers