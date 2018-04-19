
exports.up = function(knex, Promise) {
	return knex
		.schema
		.table('Job',function(t) {
			t
				.integer('companyId')
				.unsigned()
				.references('id')
				.inTable('Company')
		})  
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.table('Job', function(t){
  		t
  			.dropForeign('companyId')
  			.dropColumns('companyId')
  	})
};
