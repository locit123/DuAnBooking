const homeController = require("../controllers/homeController");
const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", homeController.demo);
homeRouter.get("/create", homeController.getCreate);
homeRouter.post("/create", homeController.create);
homeRouter.delete("/delete/:id", homeController.deleteUser);
homeRouter.get("/edit/", homeController.editUser);
homeRouter.put("/edit/:id", homeController.updateUser);

module.exports = homeRouter;
