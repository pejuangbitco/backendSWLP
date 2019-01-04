const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      firstname: Joi.string(),
      lastname: Joi.string(),
      role: Joi.string(),
      foto_user: Joi.string(),
      no_hp: Joi.string().regex(
        new RegExp('^[0-9]{11,12}$')
      ),
      wa: Joi.string().regex(
        new RegExp('^[0-9]{11,12}$')
      ),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `Masukan email yang benar`
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password harus memiliki:
              <br>
              1. Huruf besar, huruf kecil, dan angka.
              <br>
              2. Memiliki minimal 8 huruf atau angka.
            `
          })
          break
        case 'no_hp':
          res.status(400).send({
            error: `No HP hanya terdiri dari angka dan memiliki 11-12`
          })
          break
        case 'wa':
          res.status(400).send({
            error: `wa hanya terdiri dari angka dan memiliki 11-12`
          })
          break
        default:
          res.status(400).send({
            error: `invalid information registration`
          })
          break
      }
    } else {
      next()
    }
  }
}
