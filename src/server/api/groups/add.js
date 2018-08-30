const GroupModel = require('../../db/models/index').GroupModel;

function addGroup(req, res) {
  const { title, projectId } = req.body.data;

  const model = new GroupModel({
    title,
    project_id: projectId,
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  model.save().then((data) => {
    res.json({
      status: 'ok',
      data: {
        id: data._id,
        title: data.title,
      }
    });
  });
}

module.exports = addGroup;
