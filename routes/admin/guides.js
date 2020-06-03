const express = require("express");
const route = express.Router();
const GuidesController = require("../../controllers/GuidesController");
const UsersValidator = require("../../validators/UsersValidator");
const AuthValidator = require("../../validators/AuthValidator");

route.get("/", GuidesController.list);
route.get("/:guideId", UsersValidator.guide, GuidesController.getOne);
route.post("/", AuthValidator.register, GuidesController.create);
route.delete("/:guideId", UsersValidator.guide, GuidesController.deleteOne);

module.exports = route;
