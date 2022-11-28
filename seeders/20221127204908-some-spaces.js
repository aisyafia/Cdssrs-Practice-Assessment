"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Apple's Space",
        description: "Welcome to Apple's mock space",
        backgroundColor: "#ffffff",
        color: "#000000",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "Space Banananana",
        description: "Banananananana",
        backgroundColor: "#ffffff",
        color: "#000000",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
