const express = require("express");
const route = express.Router({mergeParams: true});
const PricesController = require("../../controllers/PricesController");
const PlacesValidator = require("../../validators/PlacesValidator");
const Auth = require("../../middlewares/Auth");

route.use(Auth.guideAccess);
route.get("/", PricesController.list);
route.post("/", PricesController.add);
route.put("/:priceId", PlacesValidator.params, PlacesValidator.prices, PricesController.update);
route.delete("/:priceId", PlacesValidator.params, PlacesValidator.prices, PricesController.deleteOne);

module.exports = route;
