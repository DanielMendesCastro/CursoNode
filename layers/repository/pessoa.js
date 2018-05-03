const config = require('../../config/env/development');
const pessoa = require('../Model/pessoa');
let obj = config.dataConfig.MYSQL;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(obj.database, obj.user, obj.password, {
  host: obj.host,
  port: obj.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: 'path/to/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

async function get (cpf) {
  return await pessoa.pessoa(sequelize, Sequelize).findOne({
    where: {
      cpf: cpf
    }
  });
}

async function getAll () {
  return await pessoa.pessoa(sequelize, Sequelize).findAll();
}

async function post (p) {
  await pessoa.pessoa(sequelize, Sequelize).create(p);
}

async function put (p) {
  await pessoa.pessoa(sequelize, Sequelize).update(p, { where: { id: p.id } });
}

async function del (id) {
  await pessoa.pessoa(sequelize, Sequelize).destroy({ where: { id: id } });
}

module.exports = { get, getAll, post, put, del };
