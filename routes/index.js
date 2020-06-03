const express = require('express')
const router = express.Router()

// retrieve the application's status
router.get('/', function(req, res, next) {
  res.json({ 'Status': 'Service is running' })
})

module.exports = router
