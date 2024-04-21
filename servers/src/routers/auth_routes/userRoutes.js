const userController = require("../../controllers/auth_controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/get-all-user/:id", userController.getAllUsers);
userRouter.post("/login-user", userController.login);

module.exports = userRouter;
