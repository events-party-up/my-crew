const express = require('express')
const router = express.Router()

router.use('/api/v1/account', require('./account'))
router.use('/api/v1/event', require('./event'))
router.use('/api/v1/profile', require('./profile'))

module.exports = router
