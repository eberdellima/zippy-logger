const { customFormat, timestampFormat } = require('./logFormat')

/**
 * 
 * @param { logger: Winston.createLogger, directory: logs_directory, transports: Winston.transports } param0 
 */
const infoLogger = ({winston}) => {
  const level = 'info'
  const loggerObj = winston.createLogger({
    level,
    format: customFormat,
    transports: [
      new winston.transports.File({ filename: `${__dirname}/../../../../logs/${timestampFormat()}.log`})
    ]
  })

  const log = ({message, path}) => {
    const timestamp = new Date().toLocaleTimeString()
    loggerObj.log({message, path, level, timestamp})
  }

  return log
}

module.exports = {
  infoLogger
}