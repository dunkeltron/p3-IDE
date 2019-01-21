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
  owner: "anon",
  projectName: "55",
  codeBundle: {
    html: "<p class='textStuff'> This is database HTML </p>",
    js: "let i = 3",
    css: ".textStuff { color: blue }",
  },
  isPublic: true,
  settings: [],
  comments: ["test1", "test2", "test3", "test4"],
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
