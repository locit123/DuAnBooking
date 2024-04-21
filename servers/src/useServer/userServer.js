const { raw } = require("body-parser");
const db = require("../models/index");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
//MÃ HÓa PASSWORD
const hashPassword = (password) => {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
//CHECk EMAIL
const checkEmailExists = async (email) => {
  let checkEmail = await db.User.findOne({ where: { email: email } });
  if (checkEmail) {
    console.log("email đã có" + checkEmail);
    return true;
  } else {
    return false;
  }
};
//CHECk PHONE
const checkPhoneExists = async (phoneNumber) => {
  let checkPhone = await db.User.findOne({
    where: { phoneNumber: phoneNumber },
  });
  if (checkPhone) {
    console.log("phone đã có", checkPhone.phoneNumber);
    return true;
  } else {
    return false;
  }
};

const createUserService = async (data) => {
  try {
    if (
      data.email === "" &&
      data.email === "" &&
      data.password === "" &&
      data.firstName === "" &&
      data.lastName === "" &&
      data.address === "" &&
      data.gender === "" &&
      data.roleId === "" &&
      data.phoneNumber === ""
    ) {
      console.log("vui lòng nhập dữ liệu");
    } else {
      //hashPass
      let hPassword = hashPassword(data.password);
      //check email
      let cEmail = await checkEmailExists(data.email);
      if (cEmail) {
        console.log("email đã tồn tại", cEmail);
        return false;
      }
      //check phoneNumber
      let cPhone = await checkPhoneExists(data.phoneNumber);
      if (cPhone) {
        console.log("phoneNumber đã tồn tại", cPhone);
        return false;
      }

      let dataUser = await db.User.create({
        email: data.email,
        password: hPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });

      return dataUser;
    }
  } catch (error) {
    console.log("error createUserService", error);
  }
};

const userServiceAll = async (req, res, next) => {
  try {
    let users = [];
    let data = await db.User.findAll();
    if (data && data.length > 0) {
      users = data;
    }
    return users;
  } catch (error) {
    console.log("error userServiceAll", error);
  }
};
const deleteUserService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.destroy({ where: { id: id } });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const editUserService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = {};
      if (id) {
        let data = await db.User.findOne({ where: { id: id }, raw: true });
        user = data;
        resolve(user);
      } else {
        resolve(user);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserService = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (id) {
        //check phone
        let cPhone = await checkPhoneExists(data.phoneNumber);
        if (cPhone) {
          return false;
        }
        let result = await db.User.update(
          {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            gender: data.gender,
            roleId: data.roleId,
            phoneNumber: data.phoneNumber,
          },
          { where: { id: id } }
        );
        resolve(result);
      } else {
        console.log("Lôĩ ở đây");
        resolve("id không lấy đc");
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  userServiceAll,
  createUserService,
  deleteUserService,
  editUserService,
  updateUserService,
};
