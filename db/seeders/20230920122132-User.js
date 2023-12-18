/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Alex',
      email: 'alex@mail.ru',
      password: '123',
    },
    {
      name: 'zarina',
      email: 'zarina@mail.ru',
      password: '123',
    },
    {
      name: 'damir',
      email: 'damir@mail.ru',
      password: '123',
    },
    {
      name: 'gosha',
      email: 'gosha@mail.ru',
      password: '123',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
