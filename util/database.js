const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const sequelize = new Sequelize({
 	host: process.env.HOST,
 	username: process.env.USER,
 	password: process.env.PASS,
 	port: 5432,
 	database: process.env.DATABASE,
 	dialect: 'postgres',
 	dialectOptions: {
 		ssl: {
 			require: true,
 			rejectUnauthorized: false,
 		},
 	},
});


module.exports = { sequelize };
