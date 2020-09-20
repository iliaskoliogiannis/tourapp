const express = require("express");
const route = express.Router({mergeParams: true});
const GalleriesController = require("../../controllers/GalleriesController");
const Auth = require("../../middlewares/Auth");

route.use(Auth.guideAccess);
route.get("/", GalleriesController.list);
route.post("/", GalleriesController.add);
route.put("/", GalleriesController.rearrange);
route.delete("/:galleryImgId", GalleriesController.deleteOne);
route.delete("/", GalleriesController.deleteMany);

module.exports = route;
