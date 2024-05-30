const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();
const connectHandleBars = require("../config/connectHandlebars");
const bodyParser = require("body-parser");
const appRouter = require("../routers/index");
const db = require("../config/connectDB");
const methodOverride = require("method-override");
const cors = require("cors");

//connect cors
app.use(cors());
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//connect bodyParser
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb" }));
//connect Handlebars
connectHandleBars(app);
//connect appRouter
appRouter(app);
//connect DB
db.connectDB();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
