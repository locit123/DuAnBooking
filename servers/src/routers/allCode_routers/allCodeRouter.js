const express = require("express");
const allCodeRouter = express.Router();
const allCodeController = require("../../controllers/allCode_controller/allCodeController");
allCodeRouter.get("/", allCodeController.getAllCode);
module.exports = allCodeRouter;
