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
      perjam: {
        type: Sequelize.STRING
      },
      perhari: {
        type: Sequelize.STRING
      },
      perbulan: {
        type: Sequelize.STRING
      },
      pertahun: {
        type: Sequelize.STRING
      },
      deskripsi_umum: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kecamatan: {
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
