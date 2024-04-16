const hbs = require("express-handlebars");
const path = require("path");
const connectHandlerBars = (app) => {
  app.engine("hbs", hbs.engine({ extname: "hbs" }));
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../../src/views"));
};

module.exports = connectHandlerBars;
