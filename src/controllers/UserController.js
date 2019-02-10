const { User } = require('../../models')

module.exports = {
  async getAll (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (error) {
      res.status(404).send(`something error: ${error}`)
    }
  },
  async getOne (req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      if (user === null) {
        res.status(404).send('user tidak ditemukan')
      } else {
        res.send(user)
      }
    } catch (error) {
      res.status(404).send(`something error: ${error}`)
    }
  },
  async delete (req, res) {
    try {
      await User.destroy({
        where: {
          id: req.params.id
        }
      })
      res.send(`success deleted`)
    } catch (error) {
      res.status(404).send(`something error: ${error}`)
    }
  },
  async update (req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then(rsl => {
        res.send(rsl)
      }).catch(err => {
        res.send(err)
      })
    } catch (error) {
      res.status(404).send(`something error: ${error}`)
    }
  }
}
