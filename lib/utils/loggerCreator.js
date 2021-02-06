const { timestampFormat } = require('./logFormat')

class LoggerCreator {

  constructor(winston, logLevel, format) {
    this.winston = winston;
    this.logLevel = logLevel;
    this.logger = null;
    this.format = format;
    this._init(this.winston, this.logLevel, this.format);
  }

  _init(winston, logLevel) {

    this.logger = winston.createLogger({
      logLevel,
      format: this.format,
      transports: [
        new winston.transports.File({ filename: `${__dirname}/../../../../logs/${timestampFormat()}.log`})
      ]
    });
  }

  log(message, path = "") {

    if (this.logger === null) {
      return;
    }

    if (typeof message !== "string" || message === "") {
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    const logLevel = this.logLevel;
    this.logger.log({message, path, level: logLevel, timestamp});
  }
}

module.exports.LoggerCreator = LoggerCreator;