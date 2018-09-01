const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeySchema = new Schema({
  name: String,
  project_id: {
    type: Schema.ObjectId,
    ref: 'Project',
  },
  group_id: {
    type: Schema.ObjectId,
    ref: 'Group',
  },
  translations: Map,
  created_at: Number,
  updated_at: Number,
});

const KeyModel = mongoose.model('Key', KeySchema);

module.exports = KeyModel;
