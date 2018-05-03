module.exports = {
  pessoa: function pessoa (queryInterface, Sequelize) {
    return queryInterface.define(
      'tb_pessoa',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING
        },
        cpf: {
          type: Sequelize.STRING
        },
        rg: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        obs: {
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
  }
};
