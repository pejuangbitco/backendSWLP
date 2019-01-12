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
    let whereClause = {}
    if (req.query.kota) {
      whereClause['kota'] = req.query.kota
    }
    if (req.query.provinsi) {
      whereClause['provinsi'] = req.query.provinsi
    }
    Lokasi.findAll({
      where: whereClause
    })
      .then(rsl => {
        res.send(rsl)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getOne (req, res) {
    Lokasi.findByPk(req.params.id)
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
