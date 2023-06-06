'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airlines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER,
      },
=======
        type: Sequelize.INTEGER
      },
     
>>>>>>> 267039e36f9728590ead76ebf4f4ab96b68d3664
      nama_maskapai: {
        type: Sequelize.STRING,
      },
      kode_maskapai: {
        type: Sequelize.STRING,
      },
      tipe_maskapai: {
        type: Sequelize.STRING,
      },
      harga_tiket: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('airlines');
  },
};
