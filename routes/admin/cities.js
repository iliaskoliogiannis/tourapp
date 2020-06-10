const express = require("express");
const route = express.Router();
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", CitiesController.list);
route.get("/:cityId", ReqValidator.paramsCity, CitiesController.getOne);
route.get("/:cityId/places", ReqValidator.paramsCity, PlacesController.getByCity);
route.post("/", CitiesController.create);
route.put("/:cityId", ReqValidator.paramsCity, CitiesController.update);
route.delete("/:cityId", ReqValidator.paramsCity, CitiesController.deleteOne);

module.exports = route;
