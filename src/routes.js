const routes = require('next-routes');

module.exports = routes()
  .add('main', '/', 'main/main')
  .add('project', '/project/:id', 'project/project');
