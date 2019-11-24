const winston = require('winston')

/**
 * Specifies the log format to be used
 */
const customFormat = winston.format.printf( ({level, message, path, timestamp}) => {
  return `[${timestamp}] | ${level} | ${path} - ${message}`
} )

/**
 * @returns {string} YYYY-MM-DD timestamp format
 */
const timestampFormat = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

module.exports = {
  customFormat,
  timestampFormat
}