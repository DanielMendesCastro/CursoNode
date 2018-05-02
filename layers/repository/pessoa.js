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
  
module.exports = {  };
