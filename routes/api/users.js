const router = require("express").Router();
const userController = require("../../controllers/userController");
console.log("inside user routes");

// // Matches with "/api/users"
 router.route("/")
   .get(userController.findAll)
  // .get(userController.findByUsername)
   .post(userController.create);

// // Matches with "/api/users/:id"
 router
  .route("/:user")
   .get(userController.findByUsername)
//   .put(userController.update)
//   .delete(userController.remove);
module.exports = router;
