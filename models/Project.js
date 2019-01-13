var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  owner: {
    //I think this is what we wanted to do not sure?
    type: Schema.Types.ObjectId,
    required: true
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
  isPublic: true,
  settings: [],
  comments: [],
  views: 0,
  watchers: 0,
  collaborators: []
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
