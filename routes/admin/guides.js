const express = require("express");
const route = express.Router();
const GuidesController = require("../../controllers/GuidesController");
const ReqValidator = require("../../validators/ReqValidator");
const AuthValidator = require("../../validators/AuthValidator");

route.get("/", GuidesController.list);
route.get("/:guideId", ReqValidator.paramsGuide, GuidesController.getOne);
route.post("/", AuthValidator.register, GuidesController.create);
route.delete("/:guideId", ReqValidator.paramsGuide, GuidesController.deleteOne);

module.exports = route;
