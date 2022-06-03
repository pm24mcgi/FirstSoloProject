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
    return queryInterface.bulkInsert('Notes', [
      {description: 'Description', body: '22 very private acres with mountain, river and square butte views will sit this rustic farmhouse custom to be built home with over 2800 sq feet of living space just on the main floor!   Home will feature 5 bedrooms 3.5 baths, vaulted ceilings, three car garage, main floor primary and main floor laundry.  Please see rendering and call Dustin Young at 406-868-0736 or Audrey Lazzarini at 760-978-9580 or your real estate professional.  Start now and customized your way! Picture is a rendering and does not include the pool.  Builder has right to make changes.', propertyId: 1},
      {description: 'Description', body: 'A fantastic opportunity, this 3 bedroom - 3 bathroom home features an airy interior and comprises a flow-through living/dining area and a bonus room above a 713 square foot garage. Enjoy the inviting kitchen, which features laminate countertops and a large center island. A place for calm and relaxation, the master bathroom is akin to a 5-star hotel and features a walk-in shower and double sinks. Have plenty of room for vehicles and belongings in a spacious 3-car attached garage.', propertyId: 2},
      {description: 'Description', body: 'Price reduction. Wide open space to make your own oasis. Close to hunting, fishing and river activities. 2 acres, 2 houses. Your main house and a guest dwelling or rental. Several outbuildings and a large shop area. RV parking. Bathroom floors in the main house are heated. Updated roof and siding on the main house. The shop has radiant floor heat and a newer boiler that could heat the whole shop area. The shop has office space with electric baseboard heat.', propertyId: 3},
      {description: 'Description', body: 'Modern two story units with luxury vinyl plank floors, quartz counter tops throughout, attached 24x22 garage, 10x12 deck off kitchen, tons of light, open floor plan, great location close to Benefis, Providence, the new Touro Medical school, the Great Falls Clinic, and Malmstrom!  Easy living and plenty of good sized bedrooms and three full bathrooms.', propertyId: 4},
      {description: 'Description', body: 'Modern two story units with luxury vinyl plank floors, quartz counter tops throughout, attached 24x22 garage, 10x12 deck off kitchen, tons of light, open floor plan, great location close to Benefis, Providence, the new Touro Medical school, the Great Falls Clinic, and Malmstrom!  Easy living and plenty of good sized bedrooms and three full bathrooms.', propertyId: 4},
      {description: 'Description', body: 'Modern two story units with luxury vinyl plank floors, quartz counter tops throughout, attached 24x22 garage, 10x12 deck off kitchen, tons of light, open floor plan, great location close to Benefis, Providence, the new Touro Medical school, the Great Falls Clinic, and Malmstrom!  Easy living and plenty of good sized bedrooms and three full bathrooms.', propertyId: 4},
      {description: 'Description', body: 'Modern two story units with luxury vinyl plank floors, quartz counter tops throughout, attached 24x22 garage, 10x12 deck off kitchen, tons of light, open floor plan, great location close to Benefis, Providence, the new Touro Medical school, the Great Falls Clinic, and Malmstrom!  Easy living and plenty of good sized bedrooms and three full bathrooms.', propertyId: 4},
      {description: 'Description', body: 'Modern two story units with luxury vinyl plank floors, quartz counter tops throughout, attached 24x22 garage, 10x12 deck off kitchen, tons of light, open floor plan, great location close to Benefis, Providence, the new Touro Medical school, the Great Falls Clinic, and Malmstrom!  Easy living and plenty of good sized bedrooms and three full bathrooms.', propertyId: 4},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
