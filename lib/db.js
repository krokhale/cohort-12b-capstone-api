// This file deals with connecting to the database
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:password@localhost/cohort12b-capstone-api', {logging: false});
module.exports = {sequelize};
