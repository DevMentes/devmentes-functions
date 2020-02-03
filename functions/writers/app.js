const express = require("express");
const cors = require("cors");
const writersRepository = require("./writersRepository");

const app = express();

app.use(cors());

app.get("/writers", async (request, response) => {
  try {
    const writers = await writersRepository.all();
    response.json({
      data: writers
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.get("/writers/:writerId", async (request, response) => {
  try {
    const writer = await writersRepository.byId(request.params.writerId);
    response.json({
      data: writer
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
});

module.exports = app;
