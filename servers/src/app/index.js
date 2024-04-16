const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();
const connectHandleBars = require("../config/connectHandlebars");
const bodyParser = require("body-parser");
const appRouter = require("../routers/index");
const db = require("../config/connectDB");

//connect bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//connect Handlebars
connectHandleBars(app);
//connect appRouter
appRouter(app);
//connect DB
db.connectDB();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
