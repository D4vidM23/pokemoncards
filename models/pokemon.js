'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    numberhp: DataTypes.INTEGER,
    icon: DataTypes.STRING,
    image: DataTypes.STRING,
    attack1: DataTypes.STRING,
    energycard: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    attack2: DataTypes.STRING,
    energycard2: DataTypes.STRING,
    damage2:  DataTypes.INTEGER,
    energy4:  DataTypes.STRING,
    energy5:  DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemontable',
    timestamps: false,
  });
  return Pokemon;
};