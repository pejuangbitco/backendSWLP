const { Kategori } = require('../../models')
module.exports = {
  save (req, res) {
    Kategori.create(req.body)
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getAll (req, res) {
    Kategori.findAll()
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getOne (req, res) {
    Kategori.findById(req.params.id)
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  delete (req, res) {
    Kategori.destroy({
      where: {
        id: req.params.id
      }
    }).then(rsl => {
      res.status(200).send(`success deleted`)
    }).catch(err => {
      res.send(err)
    })
  },
  update (req, res) {
    Kategori.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(rsl => {
      res.send(rsl)
    }).catch(err => {
      res.send(err)
    })
  }
}
