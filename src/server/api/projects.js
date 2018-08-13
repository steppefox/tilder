function apiProjects(req, res) {
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
}

module.exports = apiProjects;
