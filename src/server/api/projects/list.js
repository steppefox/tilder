const ProjectModel = require('../../db/models/index').ProjectModel;

function listProjects(req, res) {
  ProjectModel.find((err, data) => {
    res.json({
      projects: data.map((item) => {
        return {
          id: item._id,
          title: item.title
        };
      })
    });
  });
}

module.exports = listProjects;
