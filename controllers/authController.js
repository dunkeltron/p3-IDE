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
            
        }

        if (password != password2) {
        }

        if (password.length < 5) {
        }

        if (errors.length > 0) {
            res.redirect( '/register');
        } else {
            User.findByEmail({
                email: email
            }).then(user => {
                if (user) {
                    res.redirect( '/register');
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    
                                    res.redirect('/');
                                })
                                .catch(err => console.log("error"));
                        });
                    });
                }
            });
            console.log("user register");
        }
    },

    // Login mapped to /api/auth/login
    login: function (req, res) {
        passport.authenticate('local', {
            successRedirect: '/anon',
            failureRedirect: '/'
        })(req, res, next);
    },

    // Logout mapped to /api/auth/logout
    logout: function (req, res) {

        req.logout().then(msg => res.redirect('/'));
        
    }
}
