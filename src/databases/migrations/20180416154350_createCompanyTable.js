
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('Company', function(t){
  		t.increments()
  		t.string('name')
  		t.text('description')
  		t.string('imageLink')
  		t.string('location')
  	
  	})

};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('Company')
};
