const resApiUser = require("../../resApi/ResApiUsers");
class userController {
  async login(req, res, next) {
    try {
      let result = await resApiUser.loginUserService(req.body);
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
      console.log("error login", error);
      return res.status(500).json({
        EM: "error login",
        EC: -1,
        DT: "",
      });
    }
  }
}

module.exports = new userController();
