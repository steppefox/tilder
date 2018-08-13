const next = require('next');
const express = require('express');
const routes = require('../routes');
const initApi = require('./api/index');

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src/',
});

const handler = routes.getRequestHandler(nextApp, ({ req, res, route, query }) => {
  nextApp.render(req, res, route.page, query)
});

const init = () => {
  const app = express();

  initApi(app);

  app.use(handler);

  app.listen(3000)
};


nextApp.prepare().then(init);
