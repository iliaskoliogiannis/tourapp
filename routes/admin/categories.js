const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");
const UsersValidator = require("../../validators/UsersValidator");

route.get("/", CategoriesController.list);
route.get("/:categoryId", UsersValidator.category, CategoriesController.getOne);
route.post("/", CategoriesController.create);
route.put("/:categoryId", UsersValidator.category, CategoriesController.update);
route.delete("/:categoryId", CategoriesController.deleteOne);

module.exports = route;
