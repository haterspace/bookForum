

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({User, Book}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Book, {foreignKey: 'book_id'})
    }
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};