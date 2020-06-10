const express = require("express");
const route = express.Router();
const ClientsController = require("../../controllers/ClientsController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", ClientsController.listFavorites);
route.post("/:placeId", ReqValidator.paramsPlace, ClientsController.addToFavorites);
route.delete("/:placeId", ReqValidator.paramsPlace, ClientsController.deleteFromFavorites);

module.exports = route;
