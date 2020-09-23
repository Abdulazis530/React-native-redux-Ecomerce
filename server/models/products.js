'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detail_product: DataTypes.TEXT,
    image: DataTypes.ARRAY(DataTypes.STRING),
    testimonials: DataTypes.ARRAY(DataTypes.JSON),
    vote: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    color: DataTypes.ARRAY(DataTypes.STRING),
    stock: DataTypes.INTEGER,
    capacities: DataTypes.ARRAY(DataTypes.STRING),
    stock: DataTypes.INTEGER,
    size: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};