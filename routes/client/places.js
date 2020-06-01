const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const MediaController = require("../../controllers/MediaController");
const PricesController = require("../../controllers/PricesController");

route.get("/", PlacesController.list);
route.get("/:placeId", PlacesController.getOne);
route.get("/:placeId/media", MediaController.list);
route.get("/:placeId/media/:mediaType", MediaController.getByType);
route.get("/:placeId/prices", PricesController.list);

module.exports = route;
