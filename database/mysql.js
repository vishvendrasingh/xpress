const Sequelize = require('sequelize');

var config = require('../config/config');

// console.log(typeof config.mysql.connectionLimit);
// console.log(config.mysql.username);

const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: config.mysql.connectionLimit,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;