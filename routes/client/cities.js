const express = require("express");
const route = express.Router();
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");

route.get("/", CitiesController.list);
route.get("/:cityId", CitiesController.getOne);
route.get("/:cityId/places", PlacesController.getByCity);

module.exports = route;
