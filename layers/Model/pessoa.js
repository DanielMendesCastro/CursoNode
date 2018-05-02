module.exports = {
  user: function user (queryInterface, Sequelize) {
    return queryInterface.define(
      'tb_usuarios',
      {
        idUsuario: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        userName: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        timestamps: false
      }
    );
  }
};
