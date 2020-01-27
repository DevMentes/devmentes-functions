const express = require("express");
const cors = require("cors");
const postsRepository = require("./postsRepository");

const app = express();

app.use(cors());

app.get("/posts", (request, response) => {
  response.json({
    data: postsRepository.all()
  });
});

app.get("/posts/:postId", (request, response) => {
  response.json({
    data: postsRepository.byId(request.params.postId)
  });
});

app.get("/writers/:writerId/posts", (request, response) => {
  response.json({
    data: postsRepository.byWriterId(request.params.writerId)
  });
});

module.exports = app;
