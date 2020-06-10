const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const MediaController = require("../../controllers/MediaController");
const PricesController = require("../../controllers/PricesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", PlacesController.list);
route.get("/:placeId", ReqValidator.paramsPlace, PlacesController.getOne);
route.get("/categories/:categoryId", ReqValidator.paramsPlace, PlacesController.getByCategory);
route.get("/:placeId/media", ReqValidator.paramsPlace, MediaController.list);
route.get("/:placeId/media/:mediaType", ReqValidator.paramsPlace, MediaController.getByType);
route.get("/:placeId/prices", ReqValidator.paramsPlace, PricesController.list);

module.exports = route;
