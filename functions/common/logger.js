const winston = require("winston");
const { format } = require("winston");

/*
*
* This logger was made with only dev and debugging purposes
*  */
const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.json()
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;
