const ProjectModel = require('../../db/models/index').ProjectModel;

function addProject(req, res) {
  const { name } = req.body.data;

  const model = new ProjectModel({
    name: name,
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  model.save().then((data) => {
    res.json({
      status: 'ok',
      data: {
        id: data._id,
        name: data.name,
      }
    });
  });
}

module.exports = addProject;
