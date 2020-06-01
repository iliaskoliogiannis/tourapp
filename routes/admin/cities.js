const express = require("express");
const route = express.Router();
const CitiesController = require("../../controllers/CitiesController");
const PlacesController = require("../../controllers/PlacesController");

route.get("/", CitiesController.list);
route.get("/:cityId", CitiesController.getOne);
route.get("/:cityId/places", PlacesController.getByCity);
route.post("/", CitiesController.create);
route.put("/:cityId", CitiesController.update);
route.delete("/:cityId", CitiesController.deleteOne);

module.exports = route;
