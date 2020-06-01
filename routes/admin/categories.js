const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");

route.get("/", CategoriesController.list);
route.get("/:categoryId", CategoriesController.getOne);
route.post("/", CategoriesController.create);
route.put("/:categoryId", CategoriesController.update);
route.delete("/:categoryId", CategoriesController.deleteOne);

module.exports = route;
