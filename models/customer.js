'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order,{
        foreignKey:"customer_id"
      })
      this.hasMany(models.Payment,{
        foreignKey:"customer_id"
      })
      this.hasMany(models.Bills,{
        foreignKey:"customer_id"
      })
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ktp: DataTypes.STRING,
    date_born: DataTypes.DATE,
    user_image: DataTypes.STRING,
    ktp_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};