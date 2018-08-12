const routes = require('next-routes');

module.exports = routes()
  .add('index', '/', 'index')
  .add('project', '/project/:id')
