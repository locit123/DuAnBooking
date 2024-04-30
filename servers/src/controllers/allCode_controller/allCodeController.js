const allCodeService = require("../../resApi/ResApiAllCode");

class allCodeController {
  async getAllCode(req, res) {
    try {
      let type = req.query.type;
      const result = await allCodeService.getAllCodeService(type);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      } else {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
    } catch (error) {
      console.log("error getAllCode", error);
      return res.status(500).json({ error: error });
    }
  }
}

module.exports = new allCodeController();
