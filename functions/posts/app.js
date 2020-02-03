const express = require("express");
const cors = require("cors");
const postsRepository = require("./postsRepository");

const app = express();

app.use(cors());

app.get("/posts", async (request, response) => {
  try {
    const posts = await postsRepository.all();

    response.json({
      data: posts.map(
        ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
      )
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
});

app.get("/posts/:postId", async (request, response) => {
  try {
    const post = await postsRepository.byId(request.params.postId);
    response.json({
      data: post
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
});

app.get("/writers/:writerId/posts", async (request, response) => {
  try {
    const posts = await postsRepository.byWriterId(request.params.writerId);
    response.json({
      data: posts.map(
        ({ markdown_body, html_body, cover, updatedAt, ...post }) => post
      )
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
});

module.exports = app;
