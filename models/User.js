const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  profilePic: {
    type: String
  },
  gitHub: {
    type: String
  },
  linkedIn: {
    type: String
  }, 
  personalSite: {
    type: String
  }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
