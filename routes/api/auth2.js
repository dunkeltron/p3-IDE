const router = require("express").Router();
const passport = require('passport');
const authController = require("../../controllers/authController");
console.log("inside project routes");

router.route("/register").post(authController.register);


router.route("/logout").get(authController.logout);

router.route("/login").post(function(req, res, next) {
    console.log("req.body",req.body)
    console.log('================')
    next()
},passport.authenticate("local"),function(req,res){
    //console.log(req.user);
    //i think cookie savign goes here
    //res.send(req.user);
    //res.redirect("/"+req.user.username);

    //copy pasta code
    console.log("inside authenticate callback")
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
});


module.exports = router;