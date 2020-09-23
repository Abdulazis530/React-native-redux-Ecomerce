'use strict';

const bcrypt = require("bcrypt");
const saltRounds = 10;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });


  Users.beforeCreate(async (user, options) => {
    console.log('test')

    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    console.log(hashedPassword)
    user.password = hashedPassword;
  });
  return Users;
};