

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Book, Comment, Liked}) {
      this.hasMany(Book, {foreignKey: 'user_id'})
      this.hasMany(Comment, {foreignKey: 'user_id'})
      this.hasMany(Liked, {foreignKey: 'user_id'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};