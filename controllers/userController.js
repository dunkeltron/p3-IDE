const db = require("../models");

// // Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User.findOneAndUpdate(
      {
      where: {  //search by email address
        email: req.email
      },
      update:{  //update with the body of the request object
        req
      },
      options:{     //options object
        new:true,   //returns modified document instead of original
        upsert:true //creates the object if it doesn't exist
      }
    })
      
      .catch(err => {return err})
      .then(dbUser => {return dbUser});
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  test: function(req,res){
      res.json({test:"User test worked"});
  }
  //   remove: function(req, res) {
  //     db.User.findById(req.params.id)
  //       .then(dbUser => dbUser.remove())
  //       .then(dbUser => res.json(dbUser))
  //       .catch(err => res.status(422).json(err));
  //   }
};
