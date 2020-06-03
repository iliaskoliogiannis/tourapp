const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const MediaController = require("../../controllers/MediaController");
const PricesController = require("../../controllers/PricesController");
const PlacesValidator = require("../../validators/PlacesValidator");

route.get("/", PlacesController.list);
route.get("/:placeId", PlacesValidator.params, PlacesController.getOne);
route.get("/categories/:categoryId", PlacesValidator.params, PlacesController.getByCategory);
route.get("/:placeId/media", PlacesValidator.params, MediaController.list);
route.get("/:placeId/media/:mediaType", PlacesValidator.params, MediaController.getByType);
route.get("/:placeId/prices", PlacesValidator.params, PricesController.list);

module.exports = route;
