'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airlines extends Model {
  
    static associate(models) {
  
    }
  }
  airlines.init(
    {
      nama_maskapai: DataTypes.STRING,
      kode_maskapai: DataTypes.STRING,
      tipe_maskapai: DataTypes.STRING,
      harga_tiket: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'airlines',
    }
  );
  return airlines;
};
