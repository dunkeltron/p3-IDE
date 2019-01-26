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
        console.log(req.body);
        const {
            name,
            username,
            email,
            password,
            password2
        } = req.body;
        let errors = [];

        if (!name || !username  || !email || !password || !password2) {
            console.log("all fields must be filled in.")
        }

        if (password != password2) {
            console.log("Passwords must match")
        }

        if (password.length < 5){
            console.log("length less than five")
        }
        

        if (errors.length > 0) {
            res.redirect('/register');
        } else {
            console.log("hash password");
            const newUser = new NewUser({
                name,
                username,
                email,
                password
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
                    .catch(err => console.log("didn't work =("));
                });
            });

            
        }
        console.log("user register");

    },

    // Login mapped to /api/auth/login
    login: function (req, res,next) {
        console.log("login function");
        //console.log(req);
        passport.authenticate('local', function(err,user,info){
            if(err) {return next(err)}
            if(!user) { return res.redirect("/")}
            console.log(req.user);
            res.redirect("/tryme");
        }
        );
        
    },

    // Logout mapped to /api/auth/logout
    logout: function (req, res) {

        req.logout();
        console.log('loged out');
        res.redirect('/');

    }
}
