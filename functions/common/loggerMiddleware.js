const logger = require("./logger");

module.exports = {
  input: (req, res, next) => {
    const log = {
      type: "INCOMING_REQUEST",
      headers: req.headers,
      body: req.body,
      params: req.params,
      ip: req.ip,
      method: req.method,
      endpoint: req.originalUrl
    };
    logger.info(log);
    next();
  },
  output: (err, req, res, next) => {
    if (err) {
      logger.error(err);
    } else {
      const log = {
        type: "OUTPUT_DATA",
        data: res.data
      };
      logger.info(log);
    }
    next();
  }
};
