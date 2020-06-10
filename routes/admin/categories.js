const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");
const ReqValidator = require("../../validators/ReqValidator");

route.get("/", CategoriesController.list);
route.get("/:categoryId", ReqValidator.paramsCategory, CategoriesController.getOne);
route.post("/", CategoriesController.create);
route.put("/:categoryId", ReqValidator.paramsCategory, CategoriesController.update);
route.delete("/:categoryId", CategoriesController.deleteOne);

module.exports = route;
