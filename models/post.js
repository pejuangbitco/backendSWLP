'use strict'
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    judul_post: DataTypes.STRING,
    status: DataTypes.STRING,
    perjam: DataTypes.STRING,
    perhari: DataTypes.STRING,
    perbulan: DataTypes.STRING,
    pertahun: DataTypes.STRING,
    deskripsi_umum: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {})
  Post.associate = function (models) {
    Post.belongsTo(models.Kategori)
    Post.hasMany(models.Fasilitas)
    Post.belongsTo(models.Lokasi)
    Post.belongsTo(models.Penyedia)
  }
  return Post
}
