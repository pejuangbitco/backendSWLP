const { Lokasi } = require('../../models')
module.exports = {
  async save (req, res) {
    try {
      const data = Lokasi.create(req.body)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async getAll (req, res) {
    let whereClause = {}
    let orderClause = []
    if (req.query.kota) {
      whereClause['kota'] = req.query.kota
    }
    if (req.query.provinsi) {
      whereClause['provinsi'] = req.query.provinsi
    }
    if (req.query.sort) {
      if (req.query.sort.kota === 'asc' || req.query.sort.kota === 'desc') {
        orderClause = [['kota', `${req.query.sort.kota}`]]
      }
      if (req.query.sort.provinsi === 'asc' || req.query.sort.provinsi === 'desc') {
        orderClause = [['provinsi', `${req.query.sort.provinsi}`]]
      }
    }
    try {
      const data = await Lokasi.findAll({
        where: whereClause,
        order: orderClause
      })
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async getOne (req, res) {
    try {
      const data = Lokasi.findByPk(req.params.id)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async delete (req, res) {
    try {
      const data = Lokasi.destroy({
        where: {
          id: req.params.id
        }
      })
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async update (req, res) {
    try {
      const data = Lokasi.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  }
}
