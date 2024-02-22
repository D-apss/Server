"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let bidData = require(`../data/bid.json`).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Bids", bidData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Bids", null, {
      restartIdentity: true,
    });
  },
};