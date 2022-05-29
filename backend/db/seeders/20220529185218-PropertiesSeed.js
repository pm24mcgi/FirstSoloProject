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
    return queryInterface.bulkInsert('Properties', [
      {address: '2 Oak Valley St', userId: 4, tagId: 3},
      {address: '9482 Deerfield Rd', userId: 4, tagId: 6},
      {address: '462 Alderwood Rd', userId: 4, tagId: 3},
      {address: '919 Virginia Dr', userId: 4, tagId: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
