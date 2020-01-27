const express = require("express");
const cors = require("cors");
const writersRepository = require("./writersRepository");

const app = express();

app.use(cors());

app.get("/writers", (request, response) => {
  response.json({
    data: writersRepository.all()
  });
});

app.get("/writers/:writerId", (request, response) => {
  response.json({
    data: writersRepository.byId(request.params.writerId)
  });
});

module.exports = app;
