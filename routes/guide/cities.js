const express = require("express");
const route = express.Router();
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", CitiesController.list);
route.get("/:cityId", ReqValidator.paramsCity, CitiesController.getOne);
route.get("/:cityId/places", ReqValidator.paramsCity, PlacesController.getByCity);

module.exports = route;
