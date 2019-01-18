const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  owner: {
    //I think this is what we wanted to do not sure?
    type: Schema.Types.ObjectId,
    required: Boolean,
    ref: "User"
  },
  projectName: {
    type: String,
    required: Boolean
  },
  codeBundle: {
      html: {},
      js: {},
      css: {},
  },
  isPublic: Boolean,
  settings: [],
  comments: [],
  views: 0,
  watchers: 0,
  collaborators: []
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
