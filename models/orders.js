'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
    orders.belongsTo(models.Users, {
      foreignKey: 'id_user',
      as: 'user',
    });
    orders.hasMany(models.Flights, {
      foreignKey: 'id_pesanan',
      as: 'flights',
    });
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
