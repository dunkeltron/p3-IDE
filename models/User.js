var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Passportjs
  userName: {
    type: String,
    required: true
  },
  //Passportjs
  password: {
    type: String,
    required: true
  },
  //Not totally sure if date needs required: true or not
  dateCreation: { type: Date, default: Date.now },
  name: String,
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

var User = mongoose.model("User", UserSchema);

module.exports = User;
