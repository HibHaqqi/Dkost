'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
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
      bill_id: {
        type: Sequelize.INTEGER,
        allowNull:'false',
        ondelete:'CASCADE',
        references:{
          model:"Bills",
          key:"id"
        }
      },
      date_payment: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Payments');
  }
};