const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");

// User Routes
router.use("/users", userRoutes);

// Project Routes
router.use("/projects", projectRoutes);

module.exports = router;
