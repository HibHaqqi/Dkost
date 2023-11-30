'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Rooms,{
        foreignKey:"Kost_id"
      })
      this.belongsTo(models.Admin,{
        foreignKey:"admin_id"
      })
    }
  }
  Kost.init({
    name: DataTypes.STRING,
    admin_id: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kost',
  });
  return Kost;
};