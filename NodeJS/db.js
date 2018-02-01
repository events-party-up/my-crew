var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		dialect: 'sqlite',
		storage: __dirname + '/data/mycrew.sqlite'
	});
}

var db = {};

db.person = sequelize.import(__dirname + '/models/person.js');
db.event = sequelize.import(__dirname + '/models/event.js');
db.signup = sequelize.import(__dirname + '/models/signup.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
