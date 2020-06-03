const express = require("express");
const route = express.Router();
const ClientsController = require("../../controllers/ClientsController");
const PlacesValidator = require("../../validators/PlacesValidator");

route.get("/", ClientsController.listFavorites);
route.post("/:placeId", PlacesValidator.params, ClientsController.addToFavorites); // id in token or url
route.delete("/:placeId", PlacesValidator.params, ClientsController.deleteFromFavorites);

module.exports = route;
