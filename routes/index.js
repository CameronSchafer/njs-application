const express = require('express')
const router = express.Router()
const vector = require('../scripts/vector')

// retrieve the application's status
router.get('/', function(req, res, next) {
  res.json({ 'Status': 'Service is running' })
})

router.post('/addition', (req, res) => {
  res.send(`${req.body.x} + ${req.body.y} = ${req.body.x + req.body.y}`)
})

router.post('/magnitudeOfVector', (req, res) => {
  res.send(`Magnitude of vector |AB| is ${vector.magnitudeOfVector(req.body.pointA, req.body.pointB)}`)
})

module.exports = router
