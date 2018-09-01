const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  defaultLocale: {
    type: String,
    default: 'en',
  },
  locales: Array,
  created_at: Number,
  updated_at: Number,
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
