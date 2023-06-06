'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {

    static associate(models) {
   
    }
  }
  flights.init({
    id: DataTypes.INTEGER,
    id_maskapai: DataTypes.INTEGER,
    kode_penerbangan: DataTypes.STRING,
    id_bandara_asal: DataTypes.INTEGER,
    id_bandara_tujuan: DataTypes.INTEGER,
    tanggal_berangkat: DataTypes.DATE,
    jam_berangkat: DataTypes.TIME,
    jam_kedatangan: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};