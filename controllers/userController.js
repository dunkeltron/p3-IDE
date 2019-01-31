const db = require("../models");

// // Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    console.log("FINDALLUSERS");
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //Deleting where makes this work flawlessly
  findByUsername: function(req, res) {
    // console.log("FINDBYUSERNAME");
    db.User.findOne({
      username: req.params.user
    })
      .populate("ownedProjects")
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUsernameThenProject: function(req, res) {
    console.log("FINDBYUSERNAMETHENPROJECT: ", req.body);
    db.User.findOneAndUpdate(
      { username: req.body.owner},
      { $push: { ownedProjects: req.body._id } }
    )
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.User.findOneAndUpdate({ username: req.params.user, projectName: req.params.id }, req.body)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err));
  // },

  //
  //
  //
  findByEmail: function(req, res) {
    // console.log(req);
    db.User.findOne({
      where: {
        email: req.email
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  test: function(req, res) {
    res.json({ test: "User test worked" });
  }
  //   remove: function(req, res) {
  //     db.User.findById(req.params.id)
  //       .then(dbUser => dbUser.remove())
  //       .then(dbUser => res.json(dbUser))
  //       .catch(err => res.status(422).json(err));
  //   }
};
