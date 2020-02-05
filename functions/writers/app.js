const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const writersRepository = require("./writersRepository");
const errorCatcher = require("./../common/errorCatcher");
const loggerMiddleware = require("./../common/loggerMiddleware");
const logger = require("./../common/logger");

const app = express();

app.use(cors());
app.use(helmet());
app.use(helmet());
app.use(compression());

app.use((req, res, next) => loggerMiddleware.input(req, res, next));

app.get("/writers", async (request, response) => {
  const writers = await writersRepository.all();
  logger.info({ type: "FOUND_DATA", data: writers });
  response.json({
    data: writers
  });
});

app.get("/writers/:writerId", async (request, response) => {
  const writer = await writersRepository.byId(request.params.writerId);
  logger.info({ type: "FOUND_DATA", data: writers });
  response.json({
    data: writer
  });
});

app.use((err, req, res, next) => {
  errorCatcher(err, res);
});

app.use((err, req, res, next) => loggerMiddleware.output(err, req, res, next));

module.exports = app;
