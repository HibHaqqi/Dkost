'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer,{
        foreignKey:`customer_id`
       }) 
       this.belongsTo(models.Bills,{
        foreignKey:`bill_id`
       }) 
    }
  }
  Payment.init({
    customer_id: DataTypes.INTEGER,
    bill_id: DataTypes.INTEGER,
    date_payment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};