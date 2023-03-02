const express = require('express');

const productsRourter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use(`/products`, productsRourter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
