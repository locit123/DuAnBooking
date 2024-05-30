const db = require("../models/index");

const getDoctorService = async (limit) => {
  try {
    let data = [];
    const result = await db.User.findAll({
      limit: limit,
      where: { roleId: "R2" },
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: db.AllCode,
          as: "positionData",
          attributes: ["valueEn", "valueVi"],
        },
        {
          model: db.AllCode,
          as: "genderData",
          attributes: ["valueEn", "valueVi"],
        },
      ],
      raw: true,
      nest: true,
    });
    if (result) {
      data = result;
      return {
        EM: "get doctor success",
        EC: 0,
        DT: data,
      };
    }
    return {
      EM: "get doctor failed",
      EC: 1,
      DT: data,
    };
  } catch (error) {
    return {
      EM: error,
      EC: -1,
      DT: [],
    };
  }
};

module.exports = { getDoctorService };
