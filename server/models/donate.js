'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  donate.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    donateAmount: DataTypes.INTEGER,
    status: DataTypes.STRING,
    proofAttachment: DataTypes.TEXT,
    idFund: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donate',
  });
  return donate;
};