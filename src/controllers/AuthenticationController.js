const { User } = require('../../models')
const jwt = require('jsonwebtoken')
const config = require('../../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      const tokenUser = jwtSignUser(userJson)
      res.send({
        user: user,
        token: tokenUser
      })
    } catch (error) {
      res.status(400).send({
        error: `something error: ${error}`
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: `Akun tidak ditemukan.`
        })
      }
      console.log(`password: ${password}`)
      const isPasswordValid = await user.comparePassword(password)
      console.log(`ispassword: ${isPasswordValid}`)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: `Password salah.`
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(500).send({
        error: `an error occured trying to log in`
      })
    }
  }
}
