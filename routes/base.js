const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Home"
    })
});

route.use("/admin", require("./admin/admin"));
route.use("/guide", require("./guide/guide"));
route.use("/client", require("./client/client"));

module.exports = route;
