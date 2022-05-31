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
      {street: '2 Oak Valley St', city: 'Clifton Park', state: 'NY', postal: '12065', userId: 4, tagId: 3},
      {street: '9482 Deerfield Rd', city: 'Orlando', state: 'FL', postal: '32789', userId: 4, tagId: 6},
      {street: '462 Alderwood Rd', city: 'Oakland', state: 'CA', postal: '94501', userId: 4, tagId: 3},
      {street: '919 Virginia Dr', city: 'Killington', state: 'VT', postal: '05751', userId: 4, tagId: 1},
      {street: '7392 Gainsway Rd.', city: 'Lancaster', state: 'NY', postal: '14086', userId: 4, tagId: 9},
      {street: '8150 Homestead Court', city: 'Lewis Center', state: 'OH', postal: '43035', userId: 4, tagId: 9},
      {street: '387 Grant St.', city: 'Ozone Park', state: 'NY', postal: '11417', userId: 4, tagId: 9},
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
