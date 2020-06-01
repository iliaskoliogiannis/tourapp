const express = require("express");
const route = express.Router();
const GuidesController = require("../../controllers/GuidesController");

route.get("/", GuidesController.list);
route.get("/:guideId", GuidesController.getOne);
route.post("/", GuidesController.create);
route.delete("/:guideId", GuidesController.deleteOne);

module.exports = route;
