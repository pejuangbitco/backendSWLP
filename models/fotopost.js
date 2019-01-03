'use strict'
module.exports = (sequelize, DataTypes) => {
  const Fotopost = sequelize.define('Fotopost', {
    nama_foto: DataTypes.STRING
  }, {})
  Fotopost.associate = function (models) {
    // associations can be defined here
    Fotopost.belongsTo(models.Post)
  }
  return Fotopost
}
