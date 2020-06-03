const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthValidator = require("../../validators/AuthValidator");

route.post("/login", AuthValidator.login, AuthController.clientLogin);
route.post("/register", AuthValidator.registerClient, AuthController.clientRegister);

module.exports = route;
