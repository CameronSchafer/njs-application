const express = require('express')
const router = express.Router()

// retrieve the application's status
router.get('/', function(req, res, next) {
  res.json({ 'Status': 'Service is running' })
})

router.post('/addition', (req, res) => {
  res.send(`${req.body.x} + ${req.body.y} = ${req.body.x + req.body.y}`)
})

module.exports = router
