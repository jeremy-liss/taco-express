var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getTacos: getTacos,
  saveTacos: saveTacos
}

function getTacos () {
  return knex('tacos').select()
}

function saveTacos (name, price, topping, shell, cheese) {
  // tacos.id = tacos.length + 1
  // tacos.push(tacos)
  knex('tacos').insert({name: name, price: price, topping: topping, shell: shell, cheese: cheese})
}

// saveTacos('1', '2', '3', '4', '5')
