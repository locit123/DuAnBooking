const doctorService = require("../../resApi/ResApiDoctor");
class doctorController {
  async getDoctorLimit(req, res, next) {
    try {
      let limit = req.query.limit;
      if (!limit) limit = 10;
      let doctors = await doctorService.getDoctorService(+limit);
      if (doctors) {
        return res.status(200).json({
          EM: doctors.EM,
          EC: doctors.EC,
          DT: doctors.DT,
        });
      }
    } catch (error) {
      console.log("error getDoctorLimit", error);
      return res.status(500).json({ mess: "error getDoctorLimit" });
    }
  }
}

module.exports = new doctorController();
