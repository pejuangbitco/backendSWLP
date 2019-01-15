const { Post, Fotopost, Lokasi, Fasilitas, Penyedia, Kategori } = require('../../models')
// const md5 = require('md5')
module.exports = {
  async save (req, res) {
    try {
      const posting = await Penyedia.create(req.body, {
        include: [{
          model: Post,
          include: [
            Fotopost, Fasilitas, Lokasi, Kategori
          ]
        }, Lokasi ]
      })
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async delete (req, res) {
    try {
      await Post.findByPk(req.params.id, {
        include: [
          Fotopost, Lokasi, Fasilitas, Kategori, { model: Penyedia, include: [ Lokasi ] }
        ]
      }).then(post => {
        return post.destroy()
      }).then(() => {
        res.status(200).send({
          message: `success deleted`
        })
      })
    } catch (error) {
      res.status(404).send({
        error: `something error DELETE happen: ${error}`
      })
    }
  },
  async getAll (req, res) {
    try {
      let whereKategori = {}
      let whereLokasi = {}
      let limitOrderClause = {}
      if (req.query.kategori) {
        whereKategori['nama_kategori'] = req.query.kategori
      }
      if (req.query.kota) {
        whereLokasi['kota'] = req.query.kota
      }
      if (req.query.provinsi) {
        whereLokasi['provinsi'] = req.query.provinsi
      }
      if (req.query.harga) {
        switch (req.query.harga) {
          case 'height' :
            limitOrderClause['order'] = [['perbulan', 'DESC']]
            break
          case 'lowest' :
            limitOrderClause['order'] = [['perbulan', 'ASC']]
            break
          default:
            break
        }
      }
      if (req.query.limit) {
        limitOrderClause['limit'] = parseInt(req.query.limit)
      }
      if (req.query.offset) {
        limitOrderClause['offset'] = parseInt(req.query.offset)
      }
      const posting = await Post.findAll(limitOrderClause, {
        include: [ Fotopost, { model: Lokasi, where: whereLokasi }, Fasilitas, { model: Kategori, where: whereKategori }, { model: Penyedia, include: [ Lokasi ] } ]
      })
      res.send(posting)
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
          Fotopost, Lokasi, Fasilitas, Kategori, { model: Penyedia, include: [ Lokasi ] }
        ]
      })
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async update (req, res) {
    try {
      await Post.update(req.body, {
        where: {
          id: req.params.id
        }
      })

      await Penyedia.update(req.body.Penyedia, {
        where: {
          id: req.body.PenyediumId
        }
      })

      await Fasilitas.destroy({
        where: {
          PostId: req.params.id
        }
      })
      await Fotopost.destroy({
        where: {
          PostId: req.params.id
        }
      })
      if (req.body.Fasilitas !== null) {
        req.body.Fasilitas.forEach(element => {
          element['PostId'] = req.params.id
        })
        await Fasilitas.bulkCreate(req.body.Fasilitas)
      }
      if (req.body.Fotopost !== null) {
        req.body.Fotopost.forEach(element => {
          element['PostId'] = req.params.id
        })
        await Fotopost.bulkCreate(req.body.Fotopost)
      }

      res.send(`SUCCESS`)
    } catch (error) {
      res.status(404).send({
        error: `something UPDATE error happen: ${error}`
      })
    }
  }
}
