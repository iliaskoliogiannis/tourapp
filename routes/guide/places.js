const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const MediaController = require("../../controllers/MediaController");
const PricesController = require("../../controllers/PricesController");

/*apply middleware so POST/PUT/DELETE can be performed only on :guideId documents*/
route.get("/", PlacesController.list);
route.get("/:placeId", PlacesController.getOne);
route.get("/guide/:guideId", PlacesController.getByGuide);
route.post("/", PlacesController.create);
route.put("/:placeId", PlacesController.update);
route.put("/:placeId/childplace/:childplaceId", PlacesController.nestedAdd);
route.delete("/:placeId/childplace/:childplaceId", PlacesController.nestedDelete);
route.delete("/:placeId", PlacesController.deleteOne);
/*---- MEDIA ----*/
route.get("/:placeId/media", MediaController.list);
route.get("/:placeId/media/:mediaType", MediaController.getByType);
route.post("/:placeId/media", MediaController.add);
route.delete("/:placeId/media/:mediaId", MediaController.deleteOne);
/*---- PRICES ----*/
route.get("/:placeId/prices", PricesController.list);
route.post("/:placeId/prices", PricesController.add);
route.put("/:placeId/prices/:priceId", PricesController.update);
route.delete("/:placeId/prices/:priceId", PricesController.deleteOne);

module.exports = route;
