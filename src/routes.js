const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostingController = require('./controllers/PostingController')
const LokasiController = require('./controllers/LokasiController')
const KategoriController = require('./controllers/KategoriController')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  // // // // // // //
  // Post Section
  app.post('/post',
    PostingController.save)

  app.delete('/post/:id',
    PostingController.delete)

  app.get('/post',
    PostingController.getAll)

  app.get('/post/:id',
    PostingController.getOne)

  app.post('/post/:id',
    PostingController.update)

  // // // // // // //
  // Lokasi Section
  app.post('/lokasi',
    LokasiController.save)

  app.get('/lokasi',
    LokasiController.getAll)

  app.get('/lokasi/:id',
    LokasiController.getOne)

  app.delete('/lokasi/:id',
    LokasiController.delete)

  app.post('/lokasi/:id',
    LokasiController.update)
  // // // // // // //
  // Kategori Section
  app.post('/kategori',
    KategoriController.save)

  app.get('/kategori',
    KategoriController.getAll)

  app.get('/kategori/:id',
    KategoriController.getOne)

  app.delete('/kategori/:id',
    KategoriController.delete)

  app.post('/kategori/:id',
    KategoriController.update)

  // // // // // // //
  // Users Section
  app.get('/users',
    UserController.getAll)

  app.get('/user/:id',
    UserController.getOne)

  app.delete('/user/:id',
    UserController.delete)

  app.post('/user/:id',
    UserController.update)
}
