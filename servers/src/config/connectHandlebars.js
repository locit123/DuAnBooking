const hbs = require("express-handlebars");
const path = require("path");
const connectHandlerBars = (app) => {
  app.engine(
    "hbs",
    hbs.engine({
      extname: "hbs",
      helpers: {
        sum: (a, b) => a + b,
      },
    })
  );
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../../src/views"));
};

module.exports = connectHandlerBars;
