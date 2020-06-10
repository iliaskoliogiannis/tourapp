const express = require("express");
const route = express.Router();
const CountriesController = require("../../controllers/CountriesController");
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", CountriesController.list);
route.get("/:countryId", ReqValidator.paramsCountry, CountriesController.getOne);
route.get("/:countryId/cities", ReqValidator.paramsCountry, CitiesController.getByCountry);
route.get("/:countryId/places", ReqValidator.paramsCountry, PlacesController.getByCountry);

module.exports = route;
