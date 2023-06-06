'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER,
=======
        type: Sequelize.INTEGER
>>>>>>> 267039e36f9728590ead76ebf4f4ab96b68d3664
      },
      nama_bandara: {
        type: Sequelize.STRING,
      },
      kode_bandara: {
        type: Sequelize.STRING,
      },
      kota: {
        type: Sequelize.STRING,
      },
      negara: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('airports');
  },
};
