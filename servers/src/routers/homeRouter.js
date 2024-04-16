const homeController = require("../controllers/homeController");
const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", homeController.demo);

module.exports = homeRouter;
