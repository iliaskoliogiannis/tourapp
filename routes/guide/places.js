const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const Auth = require("../../middlewares/Auth");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", PlacesController.list);
route.get("/:placeId",
    ReqValidator.paramsPlace,
    PlacesController.getOne
);
route.get("/guide/created", PlacesController.getCreatedByGuide); // places created by this guide
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
    Auth.guideAccess,
    PlacesController.update);
route.put("/:placeId/childplace/:childplaceId",
    ReqValidator.paramsPlace,
    Auth.guideAccess,
    PlacesController.nestedAdd
);
route.delete("/:placeId/childplace/:childplaceId",
    ReqValidator.paramsPlace,
    Auth.guideAccess,
    PlacesController.nestedDelete
);
route.delete("/:placeId",
    ReqValidator.paramsPlace,
    Auth.guideAccess,
    PlacesController.deleteOne
);

route.use("/:placeId/media", ReqValidator.paramsPlace, require("./media"));
route.use("/:placeId/prices", ReqValidator.paramsPlace, require("./prices"));

module.exports = route;
