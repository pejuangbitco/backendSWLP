'use strict'
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    judul_post: DataTypes.STRING,
    status_post: DataTypes.STRING,
    perjam: DataTypes.STRING,
    perhari: DataTypes.STRING,
    perbulan: DataTypes.STRING,
    pertahun: DataTypes.STRING,
    deskripsi_umum: DataTypes.STRING,
    titik: DataTypes.GEOMETRY
  }, {})
  Post.associate = function (models) {
    Post.belongsTo(models.Kategori)
    Post.hasMany(models.Fasilitas)
    Post.belongsTo(models.Lokasi)
    Post.hasMany(models.Fotopost)
    Post.belongsTo(models.Penyedia)
  }
  return Post
}
