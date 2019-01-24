const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: Boolean
  },
  email: {
    type: String,
    required: Boolean
  },
  password: {
    type: String,
    required: Boolean
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
  }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
