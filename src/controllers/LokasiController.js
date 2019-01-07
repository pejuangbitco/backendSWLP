const { Lokasi } = require('../../models')
module.exports = {
  save (req, res) {
    Lokasi.create(req.body)
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getAll (req, res) {
    Lokasi.findAll()
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getOne (req, res) {
    Lokasi.findById(req.params.id)
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  delete (req, res) {
    Lokasi.destroy({
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
    Lokasi.update(req.body, {
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
