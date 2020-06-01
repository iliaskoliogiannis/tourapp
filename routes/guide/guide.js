const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Guide Area"
    });
});

route.use("/countries", require("./countries"));
route.use("/cities", require("./cities"));
route.use("/places", require("./places"));

module.exports = route;
