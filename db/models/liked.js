

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Liked extends Model {
    static associate({User, Book}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Book, {foreignKey: 'book_id'})
    }
  }
  Liked.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Liked',
  });
  return Liked;
};