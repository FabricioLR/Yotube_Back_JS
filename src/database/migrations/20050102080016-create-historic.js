'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users_historic', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userd_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      video_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "videos", key: "id"},
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('users_historic');
  }
};
