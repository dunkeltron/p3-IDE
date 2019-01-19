const router = require("express").Router();
const authController = require("../../controllers/authController");
console.log("inside project routes");

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router.route("/logout").get(authController.logout);

module.exports = router;