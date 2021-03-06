const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: String,
  project_id: {
    type: Schema.ObjectId,
    ref: 'Project',
  },
  created_at: Number,
  updated_at: Number,
});

const GroupModel = mongoose.model('Group', GroupSchema);

module.exports = GroupModel;
