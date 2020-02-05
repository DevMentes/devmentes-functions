const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("express-async-errors");
const compression = require("compression");
const postsRepository = require("./postsRepository");
const errorCatcher = require("./../common/errorCatcher");
const loggerMiddleware = require("./../common/loggerMiddleware");
const logger = require("./../common/logger");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use((req, res, next) => loggerMiddleware.input(req, res, next));

app.get("/posts", async (request, response) => {
  const posts = await postsRepository.all();
  logger.info({ type: "FOUND_DATA", data: posts });
  response.json({
    data: posts.map(
      ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
    )
  });
});

app.get("/posts/:postId", async (request, response) => {
  const post = await postsRepository.byId(request.params.postId);
  logger.info({ type: "FOUND_DATA", data: post });
  response.json({
    data: post
  });
});

app.get("/writers/:writerId/posts", async (request, response) => {
  const posts = await postsRepository.byWriterId(request.params.writerId);
  logger.info({ type: "FOUND_DATA", data: posts });
  response.json({
    data: posts.map(
      ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
    )
  });
});

app.use((err, req, res, next) => loggerMiddleware.output(err, req, res, next));

app.use((err, req, res, next) => {
  errorCatcher(err, res);
});

module.exports = app;
