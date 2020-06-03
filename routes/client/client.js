const express = require("express");
const route = express.Router();
const Auth = require("../../middlewares/Auth");

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Client Area"
    });
});

route.use("/auth", require("./auth"));
route.use("/countries", require("./countries"));
route.use("/cities", require("./cities"));
route.use("/places", require("./places"));
route.use("/favorites", Auth.client, require("./favorites"));

module.exports = route;
