'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddsProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AddsProducts.init({
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detail: DataTypes.TEXT,
    image: DataTypes.ARRAY(DataTypes.STRING),
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AddsProducts',
  });
  return AddsProducts;
};