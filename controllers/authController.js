const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require("./userController");
const NewUser = require("../models/User");
console.log("inside auth routes");
module.exports = {


    // Register mapped to /api/auth/register=
    register: function (req, res) {
        console.log("register");
        //console.log(req.body);
        const {
            name,
            username,
            email,
            password,
            password2
        } = req.body;
        let errors = [];

        if (!name || !username  || !email || !password || !password2) {
            errors.push("all fields must be filled in.")
        }

        if (password != password2) {
            errors.push("Passwords must match")
        }

        if (password.length < 5){
            errors.push("length less than five")
        }
        

        if (errors.length > 0) {
            res.redirect('/register');
        } else {
            console.log("hash password");
            const newUser = new NewUser({
                name,
                username,
                email,
                password,
                socialLinks
              });

            bcrypt.genSalt(10, (err, salt) => {
                
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  console.log("gonna save");
                    if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      console.log("success");
                      res.status(200).redirect('/');
                    })
                    .catch(err => console.log(err));
                });
            });

            
        }
        console.log("user register");

    },

    // Login mapped to /api/auth/login deprecated
    // login: function (req, res, next) {
    //     console.log("login function");
    //     //console.log(req);
    //     passport.authenticate('local', function(err,user,info){
    //         if(err) {return next(err)}
    //         if(!user) { return res.redirect("/")}
    //         res.json(req.user);
    //     }
    //     );
        
    // },

    // Logout mapped to /api/auth/logout
    logout: function (req, res) {
        if(req.user) {
            req.session.destroy()
            res.clearCookie('connect.sid');
            console.log('logged out');
            res.send(200);
            
        }
       
        else{
            res.json({msg: " no user to log out!"});
        }

    }
}
