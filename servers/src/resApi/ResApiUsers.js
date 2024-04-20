const db = require("../models/index");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
//MÃ HÓa PASSWORD
const hashPassword = (password) => {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
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
  let checkPhone = db.User.phoneNumber({ where: { phoneNumber: phoneNumber } });
  if (checkPhone) {
    return true;
  } else {
    return false;
  }
};

const loginUserService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let email = data.email;
      let password = data.password;
      let dataUser = {};
      if (!email && !password) {
        resolve({
          EM: "Vui lòng nhập dữ liệu",
          EC: 1,
          DT: "",
        });
      } else {
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

module.exports = { loginUserService };
