'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Customer_id: {
        type: Sequelize.INTEGER,
        allowNull:'false',
        ondelete:'CASCADE',
        references:{
          model:"Customers",
          key:"id"
        }
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull:'false',
        ondelete:'CASCADE',
        references:{
          model:"Orders",
          key:"id"
        }
      },
      date_payment: {
        type: Sequelize.DATE
      },
      amount_bill: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bills');
  }
};