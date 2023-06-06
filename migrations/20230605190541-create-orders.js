'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
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
      id_user: {
        type: Sequelize.INTEGER,
      },
      id_penerbangan: {
        type: Sequelize.INTEGER,
      },
      tanggal_pesan: {
        type: Sequelize.DATE,
      },
      jumlah_penumpang: {
        type: Sequelize.INTEGER,
      },
      total_tiket: {
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
    await queryInterface.dropTable('orders');
  },
};
