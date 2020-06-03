const express = require("express");
const route = express.Router({mergeParams: true});
const PricesController = require("../../controllers/PricesController");
const PlacesValidator = require("../../validators/PlacesValidator");

route.get("/", PricesController.list);
route.post("/", PlacesValidator.prices, PricesController.add);
route.put("/:priceId", PlacesValidator.params, PlacesValidator.prices, PricesController.update);
route.delete("/:priceId", PlacesValidator.params, PricesController.deleteOne);

module.exports = route;
