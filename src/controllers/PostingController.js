const Posting = require('../../models').Posting
const FotoPost = require('../../models').FotoPost

module.exports = {
  async save (req, res) {
    try {
      const posting = await Posting.create(req.body, { include: [FotoPost] })
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async delete (req, res) {
    try {
      await Posting.destroy({
        where: {
          id: req.params.id_Posting
        }
      })
      res.status(200).send({
        message: `success deleted`
      })
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async getAll (req, res) {
    try {
      const posting = await Posting.findAll({
        include: [ FotoPost ]
      })
      res.status(200).send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  },
  async getOne (req, res) {
    try {
      const posting = await Posting.findById(req.params.id_Posting)
      res.send(posting)
    } catch (error) {
      res.status(404).send({
        error: `something error happen: ${error}`
      })
    }
  }
}
