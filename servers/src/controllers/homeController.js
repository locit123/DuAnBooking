const userService = require("../useServer/userServer");
class homeController {
  async demo(req, res, next) {
    try {
      let result = await userService.userServiceAll();
      return res.render("home", {
        data: result,
      });
    } catch (error) {
      console.log("error: demo", error);
    }
  }
  getCreate(req, res) {
    res.render("create");
  }

  async create(req, res, next) {
    try {
      let result = await userService.createUserService(req.body);
      if (result && result != null) {
        return res.redirect("/");
      }
    } catch (error) {
      console.log("error: create", error);
      return res.status(500).json(error);
    }
  }
  async deleteUser(req, res) {
    try {
      let id = req.params.id;
      if (id) {
        let result = await userService.deleteUserService(id);
        console.log(result);
        return res.status(200).redirect("/");
      } else {
        return res.send("id undefined");
      }
    } catch (error) {
      console.log("error delete", error);
      return res.status(500).json({ mess: "lỗi ở đây delete" });
    }
  }
  async editUser(req, res) {
    try {
      let id = req.query.id;
      if (id) {
        let result = await userService.editUserService(id);
        return res.render("update", { data: result });
      } else {
        return res.send("id undefined");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async updateUser(req, res) {
    try {
      let id = req.params.id;
      let body = req.body;
      await userService.updateUserService(id, body);
      return res.redirect("/");
    } catch (error) {
      console.log("error update", error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new homeController();
