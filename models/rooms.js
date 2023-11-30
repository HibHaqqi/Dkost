'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     this.belongsTo(models.Kost,{
      foreignKey:`Kost_id`
     }) 
     this.hasMany(models.Order,{
      foreignKey:`room_id`
     }) 
     
    }
  }
  Rooms.init({
    Kost_id: DataTypes.INTEGER,
    room_number: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};