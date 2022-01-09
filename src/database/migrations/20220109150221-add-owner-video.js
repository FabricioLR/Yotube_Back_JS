'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('videos', 'owner', { type: Sequelize.INTEGER, allowNull: false });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('videos', 'owner');
  }
};
