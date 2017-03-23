var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getTacos().then( (result) => {
    res.send(result)
  })
  .catch( (err) => {
    res.status(500).send(err)
  })
})

router.post('/', function (req, res) {
  db.saveTacos(req.body)
  res.sendStatus(200)
})

module.exports = router
