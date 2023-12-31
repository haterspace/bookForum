/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      name: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      description: '451 градус по Фаренгейту — одно из самых популярных произведений в жанре научной фантастики. Впервые опубликовано в 1953 году. Гай Монтэг — главный герой книги. Он работает "пожарным", которые сжигают книги в американском обществе будущего. Вскоре герой разочаровывается в идеалах своего общества и присоединяется к группе людей, которые заучивают книги наизусть.',
      file: '1695380980231.webp',
      rating: 9.5,
      user_id: 1,
    },

    {
      name: 'как делать много денег, бизнес книга',
      author: 'гоша бабаян',
      description: 'Согласно теории автора, все люди делятся на два типа: с фиксированным сознанием — те, кто верит, что наши способности даны от рождения, и с гибким сознанием — они понимают, что любые навыки можно развивать. Книга последовательно доказывает, почему у вторых больше шансов преуспеть в жизни.',
      file: '1695232450324.webp',
      rating: 9.5,
      user_id: 4,
    },
    {
      name: 'Важные годы',
      author: 'Мэг Джей',
      description: 'Кто-то называет годы с двадцатого по тридцатый второй молодостью, кто-то — началом взрослой жизни. Доктор Мэг Джей, клинический психолог, утверждает, что это самое важное десятилетие в жизни человека с точки зрения развития важных сфер жизни: работы, любви, физического и интеллектуального развития.  Книга основана на десятилетней работе с сотнями студентов и клиентов, сочетая в себе актуальные научные исследования и реальные истории тех, кто вступил в третий десяток.  Книга содержит все необходимые инструменты для максимально результативного использования самых важных десяти лет. Автор делится тем, что знают о критической важности этого периода психологи, социологи, неврологи, экономисты и топ-менеджеры, занимающиеся кадровой политикой. То, что вы делаете и чего не делаете в период с двадцатого по тридцатый год, может оказать огромное воздействие на вашу карьеру, личностный рост, развитие мозга, ваши взаимоотношения и на построение деловых и личных связей.',
      file: '1695233841369.webp',
      rating: 9.5,
      user_id: 2,
    },
    {
      name: 'Шесть имен кота-демона',
      author: 'Чжан Юнь и Ксения Исаева',
      description: 'Императрица У Цзэтянь по-настоящему ненавидит две вещи: кошек и город Чанъань, в котором она провела свою молодость. Вскоре после ее вынужденного возвращения в Чанъань на стене императорской спальни появляются пугающие письмена. Ребенка из резиденции принцессы находят с расколотым черепом. Сокровищница разграблена, а стая поющих и танцующих котов, которые сопровождали повозку, полную серебра, испаряется в воздухе. Все эти события происходят за одну ночь и могут значить только одно — кот-демон вернулся, чтобы отомстить!',
      file: '1695380844956.webp',
      rating: 9.5,
      user_id: 1,
    },
    {
      name: 'Десять негритят',
      author: 'А кристи',
      description: 'Десять никак не связанных между собой людей в особняке на уединенном острове... Кто вызвал их сюда таинственным приглашением? Зачем кто-то убивает их, одного за другим, самыми невероятными способами? Почему все происходящее так тесно переплетено с веселым детским стишком?',
      file: '1695234185843.webp',
      rating: 9.5,
      user_id: 3,
    },
    ], {});
    await queryInterface.bulkInsert('Comments', [{
      user_id: 1,
      book_id: 2,
      body: 'top',
    },
    {
      user_id: 1,
      book_id: 2,
      body: 'bad',
    },
    {
      user_id: 1,
      book_id: 1,
      body: 'top',
    },
    {
      user_id: 1,
      book_id: 1,
      body: 'top',
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
