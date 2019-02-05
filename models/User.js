const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  },
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
  profilePic: {
    type: String,
    default: 'http://www.vibro.no/wp-content/uploads/2018/01/default-user-image.png'
},
  ownedProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects"
    }
  ],
  collabProjects: [],
  gitLink:  {
      type: String,
      default: 'http://www.github.com'
  },
    linkedInLink:  {
      type: String,
      default: 'http://www.linkedin.com'
  },
    personalSiteLink:  {
      type: String,
      default: '/'
  }
  
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
