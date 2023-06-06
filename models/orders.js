'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
    }
  }
  orders.init({
    id_pesanan: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_penerbangan: DataTypes.INTEGER,
    tanggal_pesan: DataTypes.DATE,
    jumlah_penumpang: DataTypes.INTEGER,
    total_tiket: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};