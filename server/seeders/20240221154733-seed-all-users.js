"use strict";

const { encodePassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let Userdata = require(`../data/users.json`).map((el) => {
      el.password = encodePassword(el);
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert(`Users`, Userdata);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
    });
  },
};