const router = require("express").Router();
const passport = require('passport');
const authController = require("../../controllers/authController");
console.log("inside project routes");

router.route("/register").post(authController.register);

router.route("/login").post(passport.authenticate("local"),function(req,res){
    console.log(req.user);
    res.redirect("/"+req.user.username);
});

router.route("/logout").get(authController.logout);

module.exports = router;