const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Home"
    })
});

const GC = require("../controllers/GalleriesController");
route.get("/galleries", GC.add);
route.use("/admin", require("./admin/admin"));
route.use("/guide", require("./guide/guide"));
route.use("/client", require("./client/client"));

module.exports = route;
