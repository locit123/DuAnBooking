class homeController {
  demo(req, res, next) {
    res.render("home");
  }
}

module.exports = new homeController();
