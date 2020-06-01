const express = require("express");
const route = express.Router();
const CountriesController = require("../../controllers/CountriesController");
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");

route.get("/", CountriesController.list);
route.get("/:countryId", CountriesController.getOne);
route.get("/:countryId/cities", CitiesController.getByCountry);
route.get("/:countryId/places", PlacesController.getByCountry);
route.post("/", CountriesController.create);
route.delete("/:countryId", CountriesController.deleteOne);

module.exports = route;
