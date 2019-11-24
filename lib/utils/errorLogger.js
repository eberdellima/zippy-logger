const { customFormat, timestampFormat } = require('./logFormat')

/**
 * 
 * @param { logger: Winston.createLogger, directory: logs_directory, transports: Winston.transports } param0 
 */
const errorLogger = ({logger, transports}) => {
  const level = 'error'
  const loggerObj = logger({
    level,
    format: customFormat,
    transports: [
      new transports.File({ filename: `${__dirname}/../../../../logs/${timestampFormat()}.log`})
    ]
  })

  const log = ({message, path}) => {
    const timestamp = new Date().toLocaleTimeString()
    loggerObj.log({level, timestamp, message, path})
  }

  return log
}

module.exports = {
  errorLogger
}