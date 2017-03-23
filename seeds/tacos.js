exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tacos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tacos').insert([
        {id: 1, name: 'Chicken', price: 3, topping: 'Guacamole', shell: 'Soft', cheese: 'Edam'},
        {id: 2, name: 'Fish', price: 4, topping: 'Salsa', shell: 'Hard', cheese: 'Cheddar'},
        {id: 3, name: 'Beans', price: 2, topping: 'Guacamole', shell: 'Soft', cheese: 'Roquefort'}
      ]);
    });
};
