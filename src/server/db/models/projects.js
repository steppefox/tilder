const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; // relation stuff

const ProjectSchema = new Schema({
  // id: ObjectId,
  title: String,
  description: String,
  date: Number,
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
