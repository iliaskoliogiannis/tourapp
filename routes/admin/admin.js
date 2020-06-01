const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});

route.use("/guides", require("./guides"));
route.use("/clients", require("./clients"));
route.use("/categories", require("./categories"));
route.use("/countries", require("./countries"));
route.use("/cities", require("./cities"));
route.use("/places", require("./places"));
route.use("/key1/:key1", function (req, res, next) {
    req.key1 = req.params.key1;
    next();
},require("./test"));

module.exports = route;
