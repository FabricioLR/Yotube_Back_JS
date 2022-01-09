'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('videos', 'owner', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('videos', 'owner', {
        type: Sequelize.INTEGER,
        allowNull: false,
    })
  }
};
