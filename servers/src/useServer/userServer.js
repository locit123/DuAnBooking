const { raw } = require("body-parser");
const db = require("../models/index");

const userServiceAll = async (req, res, next) => {
  try {
    let users = [];
    let data = await db.User.findAll();
    if (data && data.length > 0) {
      users = data.map((user) => user.dataValues);
    }
    console.log("users:", users);
    return users;
  } catch (error) {
    console.log("error userServiceAll", error);
  }
};

module.exports = { userServiceAll };
