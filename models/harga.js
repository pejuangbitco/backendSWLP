'use strict'
module.exports = (sequelize, DataTypes) => {
  const Harga = sequelize.define('Harga', {
    jam: DataTypes.STRING,
    hari: DataTypes.STRING,
    bulan: DataTypes.STRING,
    tahun: DataTypes.STRING
  }, {})
  Harga.associate = function (models) {
    // associations can be defined here
  }
  return Harga
}
