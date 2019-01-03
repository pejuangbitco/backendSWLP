'use strict'
module.exports = (sequelize, DataTypes) => {
  const Kategori = sequelize.define('Kategori', {
    nama_kategori: DataTypes.STRING
  }, {})
  Kategori.associate = function (models) {
    // associations can be defined here
    Kategori.hasMany(models.Post)
  }
  return Kategori
}
