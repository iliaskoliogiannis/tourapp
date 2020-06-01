const express = require("express");
const route = express.Router();
const ClientsController = require("../../controllers/ClientsController");

route.get("/", ClientsController.listFavorites);
route.post("/:placeId", ClientsController.addToFavorites);
route.delete("/:placeId", ClientsController.deleteFromFavorites);

module.exports = route;
