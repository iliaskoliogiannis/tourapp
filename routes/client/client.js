const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Client Area"
    });
});

route.use("/countries", require("./countries"));
route.use("/cities", require("./cities"));
route.use("/places", require("./places"));
route.use("/favorites", require("./favorites"));

module.exports = route;
