'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tags', [
      {userId: 4, title: 'Rental-Residential'},
      {userId: 4, title: 'Rental-Commercial'},
      {userId: 4, title: 'Sale-Residential'},
      {userId: 4, title: 'Sale-Commercial'},
      {userId: 4, title: 'Sale-Land'},
      {userId: 4, title: 'Purchase-Residential'},
      {userId: 4, title: 'Purchase-Commercial'},
      {userId: 4, title: 'Purchase-Land'},
      {userId: 4, title: 'Watch List'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
