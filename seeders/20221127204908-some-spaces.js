"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Test title 1",
        description: "",
        backgroundColor: "#ffffff",
        color: "#000000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Test title 2",
        description: "",
        backgroundColor: "#ffffff",
        color: "#000000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
