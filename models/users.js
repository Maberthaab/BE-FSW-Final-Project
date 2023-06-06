'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      nama_lengkap: DataTypes.STRING,
      alamat: DataTypes.STRING,
      email: DataTypes.STRING,
      nomor_telepon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return users;
};
