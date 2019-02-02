const db = require("../models");

// // Defining methods for the ProjectController
module.exports = {
  findAll: function(req, res) {
    console.log("FINALLPROJECTS");
    db.Project.find(req.query)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body.projectObject);
    db.Project.findOneAndUpdate(
      { _id: req.body.projectObject._id },
      { codeBundle: req.body.projectObject.codeBundle }
    )
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body.newProjectObj: ", req.body.newProjectObj);
    db.Project.create(req.body.newProjectObj)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("remove: ", req.body.deleteProjectData.username);
    db.Project.findOne(
      { owner: req.body.deleteProjectData.username },
      { projectName: req.body.deleteProjectData.projectName }
    )
      .then(dbProject => dbProject.remove())
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  }

  // findByProjectName: function(req, res) {
  //   // console.log("findbyprojectname: ", req.body);
  //   db.Project.findOneAndUpdate({
  //     username: req.params.user,
  //     projectName: req.params.id
  //   })
  //     .then(dbProject => res.json(dbProject))
  //     .catch(err => res.status(422).json(err));
  // },
};
