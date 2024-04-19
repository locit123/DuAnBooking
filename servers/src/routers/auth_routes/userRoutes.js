const userController = require("../../controllers/auth_controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/login-user", userController.login);

module.exports = userRouter;
