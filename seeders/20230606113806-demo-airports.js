'use strict';

const airports = require('../models/airports');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'airports',
    [
      {
        nama_bandara:'Soekarno-Hatta',
        kode_bandara:"AA90",
        kota:'Jakarta',
        negara:'Indonesia',
  
        createdAt:new Date(),
        updatedAt: new Date(),
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('airports', null, {});

   
  }
};
