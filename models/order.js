"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, {
        foreignKey: `customer_id`
      });
      this.belongsTo(models.Rooms, {
        foreignKey: `room_id`
      });
      this.hasMany(models.Bills,{
        foreignKey:`order_id`
       }) 
    }
  }
  Order.init(
    {
      customer_id: DataTypes.INTEGER,
      room_id: DataTypes.INTEGER,
      date_order: DataTypes.DATE,
      date_checkout: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
