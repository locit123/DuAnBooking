const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();
const connectHandleBars = require("../configs/connectHandlebars");
const bodyParser = require("body-parser");
const appRouter = require("../routers/index");

//connect bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//connect Handlebars
connectHandleBars(app);
//connect appRouter
appRouter(app);
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
