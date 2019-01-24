const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

console.log("inside routes folder");
//If no API routes are hit, send the React app
router.use((req, res) => {
console.log(req);
 res.sendFile(path.join(__dirname, "../client/public/index.html"))
}
);

module.exports = router;