const { Router } = require("express");
const articles = require("../../data/articles.js");
const response = require("./response");
const users = require("../../data/users");
const { nanoid } = require("nanoid");

const articleRouter = Router();

articleRouter
  .route("/articles")
  .get((req, res) => {
    response({ error: false, message: articles, res, status: 200 });
  })
  .post((req, res) => {
    const {
      body: { name, brand, description, price },
    } = req;

    articles.push({
      id: nanoid(),
      name,
      brand,
      description,
      price,
    });

    response({ error: false, message: articles, res, status: 201 });
  });
articleRouter
  .route("/articles/:id")
  .delete((req, res) => {
    const {
      params: { id },
    } = req;

    const articleIndex = articles.findIndex((article) => {
      article.id === id;
    });

    if (articleIndex == -1) {
      return response({
        message: `the article with ${id} id was not found`,
        res,
        status: 404,
      });
    }

    articles.splice(articleIndex, 1);
    response({ error: false, message: articles, res, status: 200 });
  })
  .patch((req, res) => {
    const {
      body: { name, brand, description, price },
      params: { id },
    } = req;

    const articleIndex = articles.findIndex((article) => {
      article.id === id;
    });

    if (articleIndex == -1) {
      return response({
        message: `the article with ${id} id was not found`,
        res,
        status: 404,
      });
    }

    articles.splice(articleIndex, 1, {
      ...articles[articleIndex],
      ...(name && { name }),
      ...(brand && { brand }),
      ...(description && { description }),
      ...(price && { price }),
    });

    response({ error: false, message: articles, res, status: 200 });
  });

module.exports = articleRouter;
