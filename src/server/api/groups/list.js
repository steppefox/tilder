const GroupModel = require('../../db/models/index').GroupModel;

function listGroups(req, res) {
  GroupModel.find({
    project_id: req.params.projectId,
  }).then((data) => {
    res.json({
      items: data.reduce((acc, item) => {
        acc[item._id] = {
          id: item._id,
          title: item.title
        };
        return acc;
      }, {})
    });
  });
}

module.exports = listGroups;
