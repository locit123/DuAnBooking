const userController = require("../../controllers/auth_controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/get-all-user/:id", userController.getAllUsers);
userRouter.post("/login-user", userController.login);
userRouter.post("/create-user", userController.createNewUser);
userRouter.delete("/delete-user/", userController.deleteUser);
userRouter.put("/put-user/", userController.putUser);
module.exports = userRouter;
