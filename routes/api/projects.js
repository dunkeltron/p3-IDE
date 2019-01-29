const router = require("express").Router();
const projectController = require("../../controllers/projectController");
console.log("inside project routes");

// // Matches with "/api/projects"
 router.route("/")
   .get(projectController.findAll)
   .post(projectController.create);

// // Matches with "/api/projects/:id"
 router
   .route("/:id")
   .get(projectController.findByProjectName)
   .put(projectController.update)
//   .delete(projectController.remove);
module.exports = router;
