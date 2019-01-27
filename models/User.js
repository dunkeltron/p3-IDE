const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  name: {
    type: String
  },
  dateCreation: { type: Date, default: Date.now },
  profilePic: String,
  ownedProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects"
    }
  ],
  collabProjects: [],
  socialLinks: {
    git: String,
    linkedIn: String,
    personalSite: String
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
