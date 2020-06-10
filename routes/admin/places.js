const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", PlacesController.list);
route.get("/:placeId",
    ReqValidator.paramsPlace,
    PlacesController.getOne
);
route.get("/guide/:guideId",
    ReqValidator.paramsPlace,
    PlacesController.getByGuide
);
route.get("/admin/created", PlacesController.getCreatedByGuide);
route.get("/categories/:categoryId",
    ReqValidator.paramsPlace,
    PlacesController.getByCategory
);
route.post("/",
    ReqValidator.bodyPlace,
    PlacesController.create
);
route.put("/:placeId",
    ReqValidator.paramsPlace,
    ReqValidator.bodyPlace,
    PlacesController.update
);
route.put("/:placeId/childplace/:childplaceId",
    ReqValidator.paramsPlace,
    PlacesController.nestedAdd
);
route.delete("/:placeId/childplace/:childplaceId",
    ReqValidator.paramsPlace,
    PlacesController.nestedDelete
);
route.delete("/:placeId",
    ReqValidator.paramsPlace,
    PlacesController.deleteOne
);

route.use("/:placeId/media", ReqValidator.paramsPlace, require("./media"));
route.use("/:placeId/prices", ReqValidator.paramsPlace, require("./prices"));

module.exports = route;
