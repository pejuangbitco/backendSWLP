'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kategoris', [{
      nama_kategori: 'Mini market',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_kategori: 'Kios',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_kategori: 'Bazaar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_kategori: 'Food court',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_kategori: 'Lapak',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kategoris', null, {})
  }
}
