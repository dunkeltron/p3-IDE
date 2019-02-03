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
    profilePic: "https://static.seattletimes.com/wp-content/uploads/2017/08/3d6cec34-7bd5-11e7-9d5c-00ff6fbfa61f-780x574.jpg",
    ownedProjects: [],
    collabProjects: [],
    socialLinks: {
      git: "github.com",
      linkedIn: "linkedin.com",
      personalSite: "personalSite.com"
    }
  },
  {
    username: "anon",
    email: "anon@email.com",
    password: "TestPassword",
    name: "TestNameAnon",
    dateCreation: new Date(Date.now()),
    profilePic: "https://static.seattletimes.com/wp-content/uploads/2017/08/3d6cec34-7bd5-11e7-9d5c-00ff6fbfa61f-780x574.jpg",
    ownedProjects: [],
    collabProjects: [],
    socialLinks: {
      git: "github.com",
      linkedIn: "lifnkedin.com",
      personalSite: "perfsonalSite.com"
    }
  }
];

const projectSeed = [
  {
    owner: "TestUsername",
    projectName: "55",
    codeBundle: {
      html: "<p class='textStuff'> This is database HTML TestUsername's PROJECT </p>",
      js: "let i = 3",
      css: ".textStuff { color: blue }"
    },
    isPublic: true,
    settings: [],
    comments: ["test1", "test2", "test3", "test4"],
    views: 2030,
    watchers: 3,
    collaborators: []
  },
  {
    owner: "TestUsername",
    projectName: "77",
    codeBundle: {
      html: "<p class='textStuff'> This is database HTML TestUsername's PROJECT 77</p>",
      js: "let i = 3333333",
      css: ".textStuff { color: green }"
    },
    isPublic: true,
    settings: [],
    comments: ["test1", "test2", "test3", "test4", "test5"],
    views: 2030,
    watchers: 3,
    collaborators: []
  },
  {
    owner: "anon",
    projectName: "88",
    codeBundle: {
      html: "<p class='textStuff'> This is database HTML ANON's PROJECT </p>",
      js: "let i = 43",
      css: ".textStuff { color: yellow }"
    },
    isPublic: true,
    settings: [],
    comments: ["test1", "test2", "test3", "test4", "test5"],
    views: 2030,
    watchers: 3,
    collaborators: []
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " userinfo inserted!");
  })
  .catch(err => {
    console.error(err);
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
