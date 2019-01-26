const router = require("express").Router();


const userRoutes = require("./users");
const projectRoutes = require("./projects");
const authRoutes = require("./auth2");
console.log("inside api folder");
// User Routes
router.use("/users", userRoutes);

// Project Routes
router.use("/projects", projectRoutes);

router.use("/auth",authRoutes);



module.exports = router;
