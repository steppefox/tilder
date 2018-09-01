const ProjectModel = require('../../db/models/index').ProjectModel;

function listProjects(req, res) {
  ProjectModel.find((err, data) => {
    res.json({
      items: data.reduce((acc, item) => {
        acc[item._id] = {
          id: item._id,
          name: item.name
        };

        return acc;
      }, {})
    });
  });
}

module.exports = listProjects;
