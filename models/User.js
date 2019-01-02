const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8

//   if (!user.change('password')) {
//     return
//   }

//   return bcrypt
//     .genSaltSync(SALT_FACTOR)
//     .then(salt => bcrypt.hashSync(user.password, salt, null))
//     .then(hash => {
//       user.setDataValue('password', hash)
//     })
// }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (user) {
        const SALT_FACTOR = 5
        if (!user.changed('password')) {
          return sequelize.Promise.reject('not modified')
        }

        return bcrypt.genSaltAsync(SALT_FACTOR).then(function (salt) {
          return bcrypt.hashAsync(user.password, salt, null)
        }).then(function (hash) {
          user.setDataValue('password', hash)
        }).catch(function (err) {
          return sequelize.Promise.reject(err)
        })
      }
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
