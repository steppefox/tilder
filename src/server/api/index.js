function initApi(app) {
  app.use('/api/projects', require('./projects'));
  app.use('/api/project/:projectId', require('./project'));
}

module.exports = initApi;
