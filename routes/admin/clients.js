const express = require("express");
const route = express.Router();
const ClientsController = require("../../controllers/ClientsController");

route.get("/", ClientsController.list);

module.exports = route;
