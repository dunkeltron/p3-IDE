const db = require("../models");

// // Defining methods for the ProjectController
 module.exports = {
  findAll: function(req, res) {
    console.log("FINALLPROJECTS")
    db.Project.find(req.query)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project.findById(req.params.id)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Project.findOneAndUpdate({ projectName: req.params.id }, req.body)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
//   remove: function(req, res) {
//     db.Project.findById(req.params.id)
//       .then(dbProject => dbProject.remove())
//       .then(dbProject => res.json(dbProject))
//       .catch(err => res.status(422).json(err));
//   }
 };
