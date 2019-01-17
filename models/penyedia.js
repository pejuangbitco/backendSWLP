'use strict'
module.exports = (sequelize, DataTypes) => {
  const Penyedia = sequelize.define('Penyedia', {
    nama_penyedia: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kecamatan: DataTypes.STRING
  }, {})
  Penyedia.associate = function (models) {
    // associations can be defined here
    Penyedia.belongsTo(models.Lokasi)
    Penyedia.hasMany(models.Post)
  }
  return Penyedia
}
