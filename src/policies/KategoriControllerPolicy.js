const Joi = require('joi')

module.exports = {
  newData (req, res, next) {
    const schema = {
      nama_kategori: Joi.string()
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
