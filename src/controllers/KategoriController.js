const { Kategori } = require('../../models')
module.exports = {
  async save (req, res) {
    try {
      const data = Kategori.create(req.body)
      res.send(data)
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
      const data = Kategori.findAll(sortClause)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async getOne (req, res) {
    try {
      const data = Kategori.findById(req.params.id)
      res.send(data)
    } catch (err) {
      res.status(503).send(`something error happen: ${err}`)
    }
  },
  async delete (req, res) {
    try {
      const data = Kategori.destroy({
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
      const data = Kategori.update(req.body, {
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
