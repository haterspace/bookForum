

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({User, Comment, Liked}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.hasMany(Comment, {foreignKey: 'user_id'})
      this.hasMany(Liked, {foreignKey: 'user_id'})
    }
  }
  Book.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    file: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};