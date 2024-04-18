"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User", [
      {
        email: "admin@gmail.com",
        password: "admin123",
        firstName: "ad",
        lastName: "min",
        address: "Di an,Dong Hoa",
        gender: "male",
        roleId: "R1",
        phoneNumber: "0702593867",
        positionId: "ok",
        image: "a.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
