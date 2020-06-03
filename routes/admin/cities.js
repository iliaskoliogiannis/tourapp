const express = require("express");
const route = express.Router();
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");
const UsersValidator = require("../../validators/UsersValidator");

route.get("/", CitiesController.list);
route.get("/:cityId", UsersValidator.city, CitiesController.getOne);
route.get("/:cityId/places", UsersValidator.city, PlacesController.getByCity);
route.post("/", CitiesController.create);
route.put("/:cityId", UsersValidator.city, CitiesController.update);
route.delete("/:cityId", UsersValidator.city, CitiesController.deleteOne);

module.exports = route;
