const express = require("express");
const route = express.Router();
const PlacesController = require("../../controllers/PlacesController");
const UsersValidator = require("../../validators/UsersValidator");
const PlacesValidator = require("../../validators/PlacesValidator");

route.get("/", PlacesController.list);
route.get("/:placeId",
    PlacesValidator.params,
    PlacesController.getOne
);
route.get("/guide/:guideId",
    UsersValidator.guide,
    PlacesController.getByGuide
);
route.get("/admin/created", PlacesController.getOwnByGuide);
route.get("/categories/:categoryId",
    PlacesValidator.params,
    PlacesController.getByCategory
);
route.post("/",
    PlacesValidator.edit,
    PlacesController.create
);
route.put("/:placeId",
    PlacesValidator.params,
    PlacesValidator.edit,
    PlacesController.update
);
route.put("/:placeId/childplace/:childplaceId",
    PlacesValidator.params,
    PlacesController.nestedAdd
);
route.delete("/:placeId/childplace/:childplaceId",
    PlacesValidator.params,
    PlacesController.nestedDelete
);
route.delete("/:placeId",
    PlacesValidator.params,
    PlacesController.deleteOne
);

route.use("/:placeId/media", require("./media"));
route.use("/:placeId/prices", require("./prices"));

module.exports = route;
