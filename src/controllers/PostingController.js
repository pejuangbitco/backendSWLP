const { Post, Fotopost, Lokasi, Fasilitas, Penyedia } = require('../../models')
const { sequelize } = require('../../models')
module.exports = {
  async save (req, res) {
    try {
      const post = req.body
      const posting = await sequelize
        .query(`CALL PostAddorEdit(${post.id},'${post.judulPost}','${post.statusPost}','${post.perjam}','${post.perhari}','${post.perbulan}','${post.pertahun}','${post.deskripsiUmum}','${post.latitude}','${post.longitude}','${post.namaPenyedia}','${post.alamat}','${post.kecamatan}','${post.kota}','${post.provinsi}','${post.alamatPenyedia}','${post.kecamatanPenyedia}','${post.kotaPenyedia}','${post.provinsiPenyedia}',${post.KategoriId},${post.Penyedium},${post.LokasiId},${post.LokasiIdPenyedia})`).spread((result, metadata) => {
          post.Fotopost.forEach(element => {
            element.PostId = result.id
          })
          post.Fasilitas.forEach(element => {
            element.PostId = result.id
          })
          Fotopost.bulkCreate(post.Fotopost)
          Fasilitas.bulkCreate(post.Fasilitas)
          return result
        })
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something SAVE error happen: ${error}`
      })
    }
  },
  async delete (req, res) {
    try {
      await Post.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).send({
        message: `success deleted`
      })
    } catch (error) {
      res.status(404).send({
        error: `something error DELETE happen: ${error}`
      })
    }
  },
  async getAll (req, res) {
    try {
      const posting = await Post.findAll({
        include: [ Fotopost, Lokasi, Fasilitas, Penyedia ]
      })
      res.status(200).send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async getOne (req, res) {
    try {
      const posting = await Post.findByPk(req.params.id, {
        include: [
          Fotopost, Lokasi, Fasilitas, { model: Penyedia, include: [ Lokasi ] }
        ]
      })
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  }
}
