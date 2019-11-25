const winston = require('winston')
const { errorLogger } = require('./utils/errorLogger')
const { warningLogger } = require('./utils/warningLogger')
const { infoLogger } = require('./utils/infoLogger')

const createLoggers = () => {

  const logError = errorLogger({winston})
  const logInfo = infoLogger({winston})
  const logWarning = warningLogger({winston})

  return {
    logError,
    logInfo,
    logWarning
  }
}

const loggers = createLoggers()

module.exports = loggers