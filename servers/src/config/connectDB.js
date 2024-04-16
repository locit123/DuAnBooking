const { Sequelize } = require("sequelize");
require("dotenv").config;
const database = process.env.DATABASE || "app_booking";
const username = process.env.USERNAME || "root";
const password = process.env.PASSWORD || null;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("app_booking", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectDB };
