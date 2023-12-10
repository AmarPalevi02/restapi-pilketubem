const express = require('express')
const route = express()
const { create } = require('./controller')

route.post('/dpm', create)

module.exports = route