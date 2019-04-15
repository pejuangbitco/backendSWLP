const Joi = require('joi')

module.exports = {
  newData (req, res, next) {
    const schema = {
      nama_penyedia: Joi.string(),
      alamat: Joi.string(),
      kecamatan: Joi.string(),
      judul_post: Joi.string(),
      perjam: Joi.string(),
      perhari: Joi.string(),
      perbulan: Joi.string(),
      pertahun: Joi.string(),
      deskripsi_umum: Joi.string(),
      PenyediumId: Joi.number(),
      LokasiId: Joi.number(),
      KategoriId: Joi.number()
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'nama_kategori':
          res.status(400).send({ error: 'masukan nama kategori' })
          break
        default:
          res.status(400).send({
            error: `NYA: ${error.details[0].context}`
          })
      }
    } else {
      next()
    }
  }
}
