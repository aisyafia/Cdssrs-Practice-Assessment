"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stories", [
      {
        name: "test name 1",
        content: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "test name 2",
        content: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "test name 3",
        content: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "test name 4",
        content: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
