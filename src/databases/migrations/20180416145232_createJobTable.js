
exports.up = function(knex, Promise) {
	return knex
		.schema
		.createTable('Job',function(t){
			t.increments()
			t.string('title')
			t.text('description')
			t.string('location')
			t.integer('salary')
			t.boolean('fullTime')
			t.integer('companyId')
		})
};

exports.down = function(knex, Promise) {
	return knex
		.schema
		.dropTableIfExists('Job')
};
