const Joi = require('joi')

module.exports = {
  newData (req, res, next) {
    const schema = {
      kota: Joi.string(),
      provinsi: Joi.string()
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'kota':
          res.status(400).send({ error: 'masukan nama kota' })
          break
        case 'provinsi':
          res.status(400).send({ error: 'masukan nama provinsi' })
          break
        default:
          res.status(400).send({
            error: 'invalid information lokasi'
          })
      }
    } else {
      next()
    }
  }
}
