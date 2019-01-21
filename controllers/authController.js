const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require("./userController");
console.log("inside auth routes");
module.exports = {


    // Register mapped to /api/auth/register=
    register: function (req, res) {
        console.log("register");
        const {
            name,
            email,
            password,
            password2
        } = req.body;
        console.log(req.body);
        let errors = [];

        if (!name || !email || !password || !password2) {
            console.log("all fields must be filled in.")
        }

        if (password != password2) {
            console.log("Passwords must match")
        }

        if (password.length < 5){}
        

        if (errors.length > 0) {
            res.redirect('/register');
        } else {
            console.log("hash password");
            const newUser = {
                name,
                email,
                password
            };

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    
                    User.findByEmail(newUser);
                    res.status(200).redirect("/");
                    
                        
                });
            });
            
        }
        console.log("user register");

    },

    // Login mapped to /api/auth/login
    login: function (req, res,next) {
        console.log("login function");
        passport.authenticate('local', {
            successRedirect: '/anon',
            failureRedirect: '/'
        })(req, res, next);
        console.log("exit login");
    },

    // Logout mapped to /api/auth/logout
    logout: function (req, res) {

        req.logout().then(msg => res.redirect('/'));

    }
}
