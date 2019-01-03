'use strict'
module.exports = (sequelize, DataTypes) => {
  const Lokasi = sequelize.define('Lokasi', {
    alamat: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kota: DataTypes.STRING,
    provinsi: DataTypes.STRING
  }, {})
  Lokasi.associate = function (models) {
    // associations can be defined here
    Lokasi.hasOne(models.Post)
  }
  return Lokasi
}
