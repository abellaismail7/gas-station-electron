module.exports = {
  	development: {
  	  	client: 'sqlite3',
  	  	connection: {
  	  		filename: './db/gasdb.sqlite',
		},
		useNullAsDefault:true,
		migrations: {
  	  	  directory: './db/migrations',
  	  	  tableName: 'knex_migrations',
  	  	},
  	  	seeds: {
  	  	  directory: './db/seeds',
  	  	},
  	},


}
