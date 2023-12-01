'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, {
        foreignKey: "customer_id"
      });
      this.belongsTo(models.Order, {
        foreignKey: "order_id"
      });
     
    }
  }
  Bills.init({
    customer_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    date_payment: DataTypes.DATE,
    amount_bill: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bills',
  });
  return Bills;
};