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
  async getAllUsers(req, res, next) {
    try {
      let id = req.params.id;
      let result = await resApiUser.getAllUsersService(id);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        EM: "error getAllUsers",
        EC: -1,
        DT: "",
      });
    }
  }
  async createNewUser(req, res, next) {
    try {
      let result = await resApiUser.createNewUserService(req.body);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
    } catch (error) {
      console.log("error createNewUser", error);
      return res.status(500).json({
        EM: "error createNewUser",
        EC: -1,
        DT: "",
      });
    }
  }
  async deleteUser(req, res, next) {
    try {
      let id = req.params.id;
      console.log(id);
      let result = await resApiUser.deleteUserService(id);
      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
    } catch (error) {
      console.log("error deleteUser", error);
      return res.status(500).json({
        EM: "error deleteUser",
        EC: -1,
        DT: "",
      });
    }
  }
  async putUser(req, res, next) {
    try {
      let id = req.params.id;
      let body = req.body;
      let result = await resApiUser.putUserService(id, body);

      if (result) {
        return res.status(200).json({
          EM: result.EM,
          EC: result.EC,
          DT: result.DT,
        });
      }
    } catch (error) {
      console.log("error putUser", error);
      return res.status(500).json({
        EM: "error putUser",
        EC: -1,
        DT: "",
      });
    }
  }
}

module.exports = new userController();
