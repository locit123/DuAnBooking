const doctorController = require("../../controllers/doctorControllers/doctorController");
const express = require("express");
const doctorRouter = express.Router();

doctorRouter.get("/get-doctor", doctorController.getDoctorLimit);

module.exports = doctorRouter;
