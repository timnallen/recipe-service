'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    foodType: DataTypes.STRING,
    calorieCount: DataTypes.INTEGER,
    prepTime: DataTypes.INTEGER,
    url: DataTypes.STRING,
    ingredientCount: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};