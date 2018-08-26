const ProjectModel = require('../../db/models/index').ProjectModel;

function addProject(req, res) {
  const { name } = req.body.data;

  const model = new ProjectModel({
    title: name,
    description: '',
    date: Date.now(),
  });

  model.save().then(() => {
    res.json({
      status: 'ok',
    });
  });
}

module.exports = addProject;
