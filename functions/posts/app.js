const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("express-async-errors");
const compression = require("compression");
const postsRepository = require("./postsRepository");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.get("/posts", async (request, response) => {
  const posts = await postsRepository.all();

  response.json({
    data: posts.map(
      ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
    )
  });
});

app.get("/posts/:postId", async (request, response) => {
  const post = await postsRepository.byId(request.params.postId);
  response.json({
    data: post
  });
});

app.get("/writers/:writerId/posts", async (request, response) => {
  const posts = await postsRepository.byWriterId(request.params.writerId);
  response.json({
    data: posts.map(
      ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
    )
  });
});

module.exports = app;
