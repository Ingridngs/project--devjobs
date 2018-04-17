const devConfig = {
	client: 'mysql',
	connection: {
		host:'127.0.0.1',
		port:'3306',
		user:'root',
		password:'',
		database: 'localDatabase'
	},
	migrations: {
		directory:'./src/databases/migrations'
	},
	seeds: {
		directory:'./src/databases/seeds'
	}
};

module.exports = {
	development: devConfig,
	production: {}
};