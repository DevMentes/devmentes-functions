const express = require("express");
const cors = require("cors");
const writersRepository = require("./writersRepository");
const errorCatcher = require("./../common/errorCatcher");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());

app.get("/writers", async (request, response) => {
  const writers = await writersRepository.all();
  response.json({
    data: writers
  });
});

app.get("/writers/:writerId", async (request, response) => {
  const writer = await writersRepository.byId(request.params.writerId);
  response.json({
    data: writer
  });
});

app.use((err, req, res, next) => {
  errorCatcher(err, res);
});

module.exports = app;
