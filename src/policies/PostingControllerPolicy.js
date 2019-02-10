const Joi = require('joi')

module.exports = {
  newData (req, res, next) {
    const schema = {
      judul_post: Joi.string(),
      perjam: Joi.string(),
      perhari: Joi.string(),
      perbulan: Joi.string(),
      pertahun: Joi.string(),
      deskripsi_umum: Joi.string(),
      titik: Joi.point(),
      PenyediumId: Joi.number(),
      LokasiId: Joi.number()
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'nama_kategori':
          res.status(400).send({ error: 'masukan nama kategori' })
          break
        default:
          res.status(400).send({
            error: 'invalid information kategori'
          })
      }
    } else {
      next()
    }
  }
}
