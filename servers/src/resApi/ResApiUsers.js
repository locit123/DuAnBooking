const db = require("../models/index");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

//check email
const checkEmail = async (email) => {
  let checkEmail = await db.User.findOne({
    where: { email: email },
    raw: true,
  });
  if (checkEmail) {
    return true;
  } else {
    return false;
  }
};

//check phone
const checkPhoneExists = async (phoneNumber) => {
  let checkPhone = await db.User.findOne({
    where: { phoneNumber: phoneNumber },
  });
  if (checkPhone) {
    return true;
  } else {
    return false;
  }
};
//MÃ HÓa PASSWORD
const hashPassword = (password) => {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};

const loginUserService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let email = data.email;
      let password = data.password;
      let dataUser = {};
      if (email && password) {
        let cEmail = checkEmail(email);
        if (cEmail) {
          let cUser = await db.User.findOne({
            where: { email: email },
            attributes: ["id", "email", "password", "roleId"],
            raw: true,
          });
          if (cUser) {
            let cPass = await bcrypt.compareSync(password, cUser.password);
            if (cPass) {
              delete cUser.password;
              resolve({
                EM: "Ok Success",
                EC: 0,
                DT: cUser,
              });
            } else {
              resolve({
                EM: "Email hoặc mật khẩu sai?",
                EC: 1,
                DT: dataUser,
              });
            }
          } else {
            resolve({
              EM: "Email Ko Chính Xác",
              EC: 1,
              DT: dataUser,
            });
          }
        } else {
          resolve({
            EM: "Email Ko Chính Xác",
            EC: 1,
            DT: dataUser,
          });
        }
      } else {
        resolve({
          EM: "Vui lòng nhập dữ liệu",
          EC: 1,
          DT: "",
        });
      }
    } catch (error) {
      console.log("error loginUserService", error);
      reject({
        EM: "EM lỗi ở đây",
        EC: -1,
        DT: "",
      });
    }
  });
};

const getAllUsersService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (id === "all") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
        if (users) {
          resolve({
            EM: "success get all users",
            EC: 0,
            DT: users,
          });
        }
      }
      if (id && id !== "all") {
        users = await db.User.findOne({
          where: { id: id },
          attributes: {
            exclude: ["password"],
          },
        });
        if (users) {
          resolve({
            EM: "success get one user",
            EC: 0,
            DT: users,
          });
        } else {
          resolve({
            EM: "error get one user",
            EC: 1,
            DT: users,
          });
        }
      }
      resolve({
        EM: "error get users",
        EC: 2,
        DT: users,
      });
    } catch (error) {
      console.log("Error getAllUsersService", error);
      reject({
        EM: "error get all users",
        EC: -1,
        DT: "",
      });
    }
  });
};

const createNewUserService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let createUser = {};
      if (
        data.email &&
        data.password &&
        data.firstName &&
        data.lastName &&
        data.address &&
        data.gender &&
        data.roleId &&
        data.phoneNumber
      ) {
        //mã hóa pass
        let hPass = hashPassword(data.password);
        //cEmail
        let cEmail = await checkEmail(data.email);
        if (cEmail) {
          resolve({
            EM: "email đã tồn tại",
            EC: 2,
            DT: createUser,
          });
          return false;
        }
        //check phone
        let cPhone = await checkPhoneExists(data.phoneNumber);
        if (cPhone) {
          resolve({
            EM: "phone đã tồn tại",
            EC: 2,
            DT: createUser,
          });
          return false;
        }
        let dataUser = await db.User.create(
          {
            email: data.email,
            password: hPass,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            gender: data.gender,
            roleId: data.roleId,
            phoneNumber: data.phoneNumber,
          },
          { raw: true }
        );
        let res = dataUser.get({ plain: true });
        if (res) {
          delete res.password;
          resolve({
            EM: "success createNewUser",
            EC: 0,
            DT: res,
          });
        }
      } else {
        resolve({
          EM: "vui lòng nhập dữ liệu",
          EC: 1,
          DT: createUser,
        });
      }
    } catch (error) {
      console.log("error createNewUserService", error);
      reject({
        EM: "error createNewUserService",
        EC: -1,
        DT: error,
      });
    }
  });
};

const deleteUserService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let idUser = await db.User.findOne({ where: { id: id } });
      if (!idUser) {
        resolve({
          EM: "id undefined",
          EC: 1,
          DT: "",
        });
      } else {
        let result = await db.User.destroy({ where: { id: id } });
        resolve({
          EM: "delete user success",
          EC: 0,
          DT: result,
        });
      }
    } catch (error) {
      console.log("error deleteUserService", error);
      reject({
        EM: "error createNewUserService",
        EC: -1,
        DT: error,
      });
    }
  });
};
const putUserService = async (idUser, data) => {
  try {
    let id = await db.User.findOne({ where: { id: idUser } });
    if (!(id && data.firstName && data.lastName && data.address)) {
      return {
        EM: "Vui lòng không để trống dữ liệu",
        EC: 1,
        DT: "",
      };
    } else {
      let result = await db.User.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
        },
        { where: { id: idUser } }
      );
      return {
        EM: "success update user",
        EC: 0,
        DT: result,
      };
    }
  } catch (error) {
    console.log("error putUserService", error);
    return {
      EM: "error putUserService failed",
      EC: -1,
      DT: "",
    };
  }
};
module.exports = {
  loginUserService,
  getAllUsersService,
  createNewUserService,
  deleteUserService,
  putUserService,
};
