'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul_post: {
        type: Sequelize.STRING
      },
      status_post: {
        type: Sequelize.STRING
      },
      deskripsi_umum: {
        type: Sequelize.STRING
      },
      titik: {
        type: Sequelize.GEOMETRY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts')
  }
}