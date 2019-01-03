const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostingController = require('./controllers/PostingController')
const LokasiController = require('./controllers/LokasiController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/post',
    PostingController.save)

  app.delete('/post/:id_post',
    PostingController.delete)

  app.get('/post',
    PostingController.getAll)

  app.get('/post/:id_post',
    PostingController.getOne)

  app.post('/lokasi',
    LokasiController.save)

  app.get('/lokasi',
    LokasiController.getAll)

  app.get('/lokasi/:id',
    LokasiController.getOne)

  app.delete('/lokasi/:id',
    LokasiController.delete)
}