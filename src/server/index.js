const next = require('next');
const express = require('express');
const routes = require('../routes');

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src/',
});

const handler = routes.getRequestHandler(nextApp, ({ req, res, route, query }) => {
  nextApp.render(req, res, route.page, query)
});

const init = () => {
  const app = express();

  app.use('/api/projects', (req, res) => {
    res.json({
      projects: [
        { id: '1-project-schedule', title: 'Project Schedule', },
        { id: '2-project-tickets', title: 'Project Tickets', },
        { id: '3-project-ui-tests', title: 'Project UI Tests', },
        { id: '4-project-some-results-page', title: 'Project Some Results Page', },
        { id: '5-project-ios-application', title: 'Project IOS Application', },
        { id: '6-project-android-application', title: 'Project Android Application', },
      ]
    });
  });

  app.use('/api/project/:projectId', (req, res) => {
    const { projectId } = req.params;
    res.json({
      groups: [
        { id: `${projectId}-some.name`, },
        { id: `${projectId}-group2`, },
        { id: `${projectId}-group3`, },
      ]
    });
  });

  app.use(handler);

  app.listen(3000)
};


nextApp.prepare().then(init);
