'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
          orders.belongsTo(models.users, {
        foreignKey: "id_user",
        as: "id_pesanan",
      });
      orders.hasMany(models.flights, {
        foreignKey: "id_pesanan",
        as: "id_penerbangan",
      });
    }
  }
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
