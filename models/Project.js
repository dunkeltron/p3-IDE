const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  owner: {
    //I think this is what we wanted to do not sure?
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  projectName: {
    type: String,
    required: true
  },
  codeBundle: {
      html: {},
      js: {},
      css: {},
  },
  isPublic: {type: Schema.Types.Boolean,
  default: true},
  settings: [],
  comments: [],
  views: 0,
  watchers: 0,
  collaborators: []
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
