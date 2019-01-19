const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require("../../controllers/userController");
console.log("inside auth routes");

// Register mapped to /api/auth/register
router.post('/register', (req, res) => {
  console.log("register");
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 5) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.redirect('/register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findByEmail({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.redirect('/register', {
          errors,
          name,
          email,
          password,
          password2
        });
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
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
    console.log("user register");
  }
});

// Login mapped to /api/auth/login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/anon',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
});

// Logout mapped to /api/auth/logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/');
});
module.exports = router;
