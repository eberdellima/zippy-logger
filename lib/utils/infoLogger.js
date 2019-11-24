const { customFormat, timestampFormat } = require('./logFormat')

/**
 * 
 * @param { logger: Winston.createLogger, directory: logs_directory, transports: Winston.transports } param0 
 */
const infoLogger = ({logger, transports}) => {
  const level = 'info'
  return logger({
    level,
    format: customFormat,
    transports: [
      transports.File({ filename: `${__dirname}/../../../logs/${timestampFormat}.log` })
    ]
  })
}

module.exports = {
  infoLogger
}