const express = require("express");
const route = express.Router();
const CountriesController = require("../../controllers/CountriesController");
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");
const UsersValidator = require("../../validators/UsersValidator");

route.get("/", CountriesController.list);
route.get("/:countryId", UsersValidator.country, CountriesController.getOne);
route.get("/:countryId/cities", UsersValidator.country, CitiesController.getByCountry);
route.get("/:countryId/places", UsersValidator.country, PlacesController.getByCountry);

module.exports = route;
