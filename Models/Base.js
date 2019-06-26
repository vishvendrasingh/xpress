const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../database/mysql.js');

module.exports.Model = Model;
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;