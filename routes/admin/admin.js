const express = require("express");
const route = express.Router();
const Auth = require("../../middlewares/Auth");

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});

route.use("/auth", require("./auth"));
/*Auth middleware apply*/
route.use(Auth.admin);
route.use("/guides", require("./guides"));
route.use("/clients", require("./clients"));
route.use("/categories", require("./categories"));
route.use("/countries", require("./countries"));
route.use("/cities", require("./cities"));
route.use("/places", require("./places"));

module.exports = route;
