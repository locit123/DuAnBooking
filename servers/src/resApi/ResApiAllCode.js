const db = require("../models/index");

const getAllCodeService = async (type) => {
  try {
    let data = {};
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", type);
    if (!type) {
      return {
        EM: "không tìm thấy type",
        EC: 2,
        DT: data,
      };
    } else {
      const dataAllCode = await db.AllCode.findAll({ where: { type: type } });
      if (dataAllCode.length > 0) {
        data = dataAllCode;
        return {
          EM: "success all code",
          EC: 0,
          DT: data,
        };
      } else {
        return {
          EM: "failed all code",
          EC: 1,
          DT: data,
        };
      }
    }
  } catch (error) {
    console.log("error getAllCodeService", error);
    return {
      EM: "error getAllCodeService",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = { getAllCodeService };
