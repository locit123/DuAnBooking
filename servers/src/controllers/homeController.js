const userService = require("../useServer/userServer");
class homeController {
  async demo(req, res, next) {
    try {
      let result = await userService.userServiceAll();
      console.log("result:", result);
      return res.render("home", {
        data: result,
      });
    } catch (error) {
      console.log("error: demo", error);
    }
  }
}

module.exports = new homeController();
