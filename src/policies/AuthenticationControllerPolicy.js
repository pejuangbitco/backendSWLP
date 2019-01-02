const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
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
