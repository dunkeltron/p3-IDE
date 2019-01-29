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
    console.log("u-----------------------pdateproject: ", req.body.projectObject);
    db.Project.findOneAndUpdate({ "_id" : req.body.projectObject._id }, {"codeBundle" : req.body.projectObject.codeBundle})
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },

  //
  //
  //
  // findByProjectName: function(req, res) {
  //   // console.log("findbyprojectname: ", req.body);
  //   db.Project.findOneAndUpdate({
  //     username: req.params.user,
  //     projectName: req.params.id
  //   })
  //     .then(dbProject => res.json(dbProject))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  }
  //   remove: function(req, res) {
  //     db.Project.findById(req.params.id)
  //       .then(dbProject => dbProject.remove())
  //       .then(dbProject => res.json(dbProject))
  //       .catch(err => res.status(422).json(err));
  //   }
};
