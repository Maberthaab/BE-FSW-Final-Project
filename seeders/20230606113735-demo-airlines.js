'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'airlines',
    [
      {
        nama_maskapai:'Lion Air',
        kode_maskapai:"80J",
        tipe_maskapai:'Bisnis',
        harga_tiket:'1200000',
  
        createdAt:new Date(),
        updatedAt: new Date(),
      }]);
    },
  
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('airlines', null, {});
     
    }
  };
  