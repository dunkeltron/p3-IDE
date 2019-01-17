const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name:{
    type:String
  },
  dateCreation: { type: Date, default: Date.now },
  profilePic: String,
  ownedProjects: [],
  collabProjects: [],
  socialLinks: {
    git: String,
    linkedIn: String,
    personalSite: String,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project"
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
