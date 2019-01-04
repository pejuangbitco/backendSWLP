const { Post, Fotopost, Lokasi, Harga, Fasilitas, Penyedia } = require('../../models')

module.exports = {
  async save (req, res) {
    try {
      // const posting = await Post.create(req.body, {
      //   include: [ Fotopost ]
      // })

      const posting = await Lokasi.create(req.body.Lokasi)
        .then(lokasi => {
          Penyedia.create(req.body.Lokasi)
          return lokasi.id
        })
        // req.body.post.LokasiId = lokasi.id
        // console.log(`PelapakId: ${pelapak}`)
        // req.body.post.Penyedium = pelapak
        // return Post.create(req.body.post, { include: [Fotopost, Fasilitas] })
        // })
        // .then(post => {
        //   req.body.post.Harga.PostId = post.id
        //   Harga.create(req.body.post.Harga)
        //   return post
        // })
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
          id: req.params.id_Post
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
        include: [ Fotopost, Lokasi, Harga, Fasilitas, Penyedia ]
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
      const posting = await Post.findById(req.params.id_Post)
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  }
}
