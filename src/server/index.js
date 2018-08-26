const next = require('next');
const express = require('express');
const bodyParser = require("body-parser");

const routes = require('../routes');
const initApi = require('./api/index');
const initDatabaseConnection = require('./db/index');

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src/',
});

const handler = routes.getRequestHandler(nextApp, ({ req, res, route, query }) => {
  nextApp.render(req, res, route.page, query)
});

const init = () => {
  const app = express();

  app.use(bodyParser.json());

  initApi(app);
  initDatabaseConnection();

  app.use(handler);

  app.listen(3000)
};


nextApp.prepare().then(init);
