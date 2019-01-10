'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lokasis', [{
      kota: 'Jakarta Selatan',
      Provinsi: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Jakarta Pusat',
      Provinsi: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Jakarta Barat',
      Provinsi: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Jakarta Timur',
      Provinsi: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Jakarta Utara',
      Provinsi: 'DKI Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Tangerang',
      Provinsi: 'Banten',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Depok',
      Provinsi: 'Jawa Barat',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Bekasi',
      Provinsi: 'Jawa Barat',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kota: 'Bogor',
      Provinsi: 'Jawa Barat',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lokasis', null, {})
  }
}
