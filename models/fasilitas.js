'use strict'
module.exports = (sequelize, DataTypes) => {
  const Fasilitas = sequelize.define('Fasilitas', {
    nama_fasilitas: DataTypes.STRING
  }, {})
  Fasilitas.associate = function (models) {
    // associations can be defined here
    Fasilitas.belongsTo(models.Post)
  }
  return Fasilitas
}
