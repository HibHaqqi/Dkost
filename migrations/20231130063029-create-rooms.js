'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Kost_id: {
        type: Sequelize.INTEGER,
        allowNull:'false',
        ondelete:'CASCADE',
        references:{
          model:"Kosts",
          key:"id"
        }
      },
      room_number: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      imgRoom: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('Rooms');
  }
};