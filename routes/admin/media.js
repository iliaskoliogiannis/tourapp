const express = require("express");
const route = express.Router({mergeParams: true});
const MediaController = require("../../controllers/MediaController");
const PlacesValidator = require("../../validators/PlacesValidator");

route.get("/", MediaController.list);
route.get("/:mediaType", PlacesValidator.params, MediaController.getByType);
route.post("/", PlacesValidator.media, MediaController.add);
route.delete("/:mediaId", PlacesValidator.params, MediaController.deleteOne);

module.exports = route;
