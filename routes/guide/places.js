const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const PlacesValidator = require("../../validators/PlacesValidator");
const Auth = require("../../middlewares/Auth");

route.get("/", PlacesController.list);
route.get("/:placeId",
    PlacesValidator.params,
    PlacesController.getOne
);
route.post("/",
    PlacesValidator.edit,
    PlacesController.create
);
route.put("/:placeId",
    PlacesValidator.params,
    PlacesValidator.edit,
    Auth.guideAccess,
    PlacesController.update);
route.put("/:placeId/childplace/:childplaceId",
    PlacesValidator.params,
    PlacesValidator.edit,
    Auth.guideAccess,
    PlacesController.nestedAdd
);
route.delete("/:placeId/childplace/:childplaceId",
    PlacesValidator.params,
    Auth.guideAccess,
    PlacesController.nestedDelete
);
route.delete("/:placeId",
    PlacesValidator.params,
    Auth.guideAccess,
    PlacesController.deleteOne
);
route.get("/guide/created", PlacesController.getOwnByGuide); // places created by this guide
route.get("/categories/:categoryId",
    PlacesValidator.params,
    PlacesController.getByCategory
);

route.use("/:placeId/media", require("./media"));
route.use("/:placeId/prices", require("./prices"));

module.exports = route;
