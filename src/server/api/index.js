function initApi(app) {
  app.get('/api/projects', require('./projects/list'));
  app.get('/api/project/:projectId', require('./groups'));
  app.post('/api/project', require('./projects/add'));
}

module.exports = initApi;
