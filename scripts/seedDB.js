const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/p3database");

const userSeed = [
  {
    username: "TestUsername",
    email: "TestEmail@email.com",
    password: "TestPassword",
    name: "TestName",
    dateCreation: new Date(Date.now()),
    profilePic: "IMG@URL.COM",
    ownedProjects: [],
    collabProjects: [],
    socialLinks: {
      git: "github.com",
      linkedIn: "linkedin.com",
      personalSite: "personalSite.com"
    }
  }
];

const projectSeed = [{
  owner: "notsurehowtorefuser",
  projectName: "22",
  codeBundle: {
    html: {},
    js: {},
    css: {},
  },
  isPublic: true,
  settings: [],
  comments: [],
  views: 2030,
  watchers: 3,
  collaborators: [],
}];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " userinfo inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " Projectinfo inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
