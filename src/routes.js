const routes = require('next-routes');

module.exports = routes()
  .add('main', '/', 'main/main')
  .add('project-group', '/project/:id/group/:groupId', 'project/project')
  .add('project', '/project/:id', 'project/project');
