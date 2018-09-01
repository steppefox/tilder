const GroupModel = require('../../db/models/index').GroupModel;

function addGroup(req, res) {
  const { name, projectId } = req.body.data;

  const model = new GroupModel({
    name,
    project_id: projectId,
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

module.exports = addGroup;
