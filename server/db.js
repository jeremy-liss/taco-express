var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getTacos: getTacos,
  // saveWidget: saveWidget
}

function getTacos () {
  return knex('tacos').select()
}

// function saveWidget (widget) {
//   widget.id = widgets.length + 1
//   widgets.push(widget)
// }
