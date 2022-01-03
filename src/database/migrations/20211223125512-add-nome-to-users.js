'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('users', 'nome', { type: Sequelize.STRING, allowNull: false });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('users', 'nome');
  }
};
