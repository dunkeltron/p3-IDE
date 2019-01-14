const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");

// User Routes
router.use("/profile", userRoutes);

// Project Routes
router.use("/editor", projectRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
