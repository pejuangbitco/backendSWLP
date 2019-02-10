const { Kategori } = require('../../models')
module.exports = {
  async save (req, res) {
    try {
      const data = await Kategori.create(req.body)
      res.send({
        data: data
      })
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async getAll (req, res) {
    let sortClause = {}
    if (req.query.sort) {
      if (req.query.sort === 'asc') {
        sortClause['order'] = [['nama_kategori', `${req.query.sort}`]]
      }
    }
    try {
      const data = await Kategori.findAll(sortClause)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async getOne (req, res) {
    try {
      const data = await Kategori.findById(req.params.id)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async delete (req, res) {
    try {
      const data = await Kategori.destroy({
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
      const data = await Kategori.update(req.body, {
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
