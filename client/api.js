import request from 'superagent'

var tacoUrl = 'http://localhost:3000/tacos'

export default {
  getTacos: getTacos,
  appendTaco: appendTaco
}

function getTacos (callback) {
  // var data = [
  //   {id: 1, name: 'Chicken', price: 3, topping: 'Guacamole', shell: 'Soft', cheese: 'Edam'},
  //   {id: 2, name: 'Fish', price: 4, topping: 'Salsa', shell: 'Hard', cheese: 'Cheddar'},
  //   {id: 3, name: 'Beans', price: 2, topping: 'Guacamole', shell: 'Soft', cheese: 'Roquefort'}
  // ]
  // callback (null, data)

  request
    .get(tacoUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendTaco (taco, callback) {
  request
    .post(tacoUrl)
    .send(taco)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}
