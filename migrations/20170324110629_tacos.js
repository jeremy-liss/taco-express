
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tacos', function (table) {
   table.increments();
   table.string('name');
   table.string('price');
   table.string('topping');
   table.string('shell');
   table.string('cheese');
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tacos')
};
