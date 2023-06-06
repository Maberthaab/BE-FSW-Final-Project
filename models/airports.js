'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airports extends Model {
 
    static associate(models) {
      
    }
  }
  airports.init({
    nama_bandara: DataTypes.STRING,
    kode_bandara: DataTypes.STRING,
    kota: DataTypes.STRING,
    negara: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'airports',
  });
  return airports;
};