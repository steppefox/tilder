function initApi(app) {
  app.get('/api/projects', require('./projects/list'));
  app.post('/api/project', require('./projects/add'));
  app.get('/api/project/:projectId', require('./groups/list'));
  app.post('/api/group', require('./groups/add'));
}

module.exports = initApi;
