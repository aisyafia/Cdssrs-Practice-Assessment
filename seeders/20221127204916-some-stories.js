"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stories", [
      {
        name: "Fudgy brownies",
        content:
          "So today I decided that I want to make brownies. Not my first time. Blame the cold, rainy weather, or perhaps my PMS. All I know is, I want brownies 🤤",
        imageUrl:
          "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*",
        createdAt: new Date(),
        updatedAt: new Date(),
        spaceId: 1,
      },
      {
        name: "Basque Burnt Cheesecake",
        content:
          "Easiest cheesecake I have ever made. So simple. Much more so if you have a standing mixer!",
        imageUrl:
          "https://www.justonecookbook.com/wp-content/uploads/2020/12/Basque-Burnt-Cheesecake-2520.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        spaceId: 2,
      },
      {
        name: "Fudgy Cookies",
        content:
          "Cookies are tricky to make. The key to a good result: measurement! Do not eyeball them.",
        imageUrl:
          "https://sugarspunrun.com/wp-content/uploads/2022/02/Fudge-Cookies-1-of-1-500x500.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        spaceId: 1,
      },
      {
        name: "Coconut Muffin ?????",
        content:
          "I have never tried this before. I was running out of ideas of sweets to display in the mock data.",
        imageUrl:
          "https://bake-eat-repeat.com/wp-content/uploads/2019/07/Lemon-Coconut-Muffins-3-copy-720x720.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        spaceId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
