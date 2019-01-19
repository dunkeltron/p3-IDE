const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const authRoutes = require("./auth");
console.log("inside api folder");
// User Routes
router.use("/users", userRoutes);

// Project Routes
router.use("/projects", projectRoutes);

//Auth Routes
router.use("/auth",authRoutes);



module.exports = router;
