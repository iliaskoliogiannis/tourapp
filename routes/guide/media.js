const express = require("express");
const route = express.Router({mergeParams: true});
const MediaController = require("../../controllers/MediaController");
const Auth = require("../../middlewares/Auth");
const ReqValidator = require("../../validators/ReqValidator");

route.use(Auth.guideAccess);
route.get("/", MediaController.list);
route.get("/:mediaType", ReqValidator.paramsMedia, MediaController.getByType);
route.post("/", ReqValidator.bodyMedia, MediaController.add);
route.delete("/:mediaId", ReqValidator.paramsMedia, MediaController.deleteOne);

module.exports = route;
