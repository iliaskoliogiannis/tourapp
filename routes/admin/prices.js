const express = require("express");
const route = express.Router({mergeParams: true});
const PricesController = require("../../controllers/PricesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", PricesController.list);
route.post("/", ReqValidator.bodyPrices, PricesController.add);
route.put("/:priceId", ReqValidator.paramsPrices, ReqValidator.bodyPrices, PricesController.update);
route.delete("/:priceId", ReqValidator.paramsPrices, PricesController.deleteOne);

module.exports = route;
