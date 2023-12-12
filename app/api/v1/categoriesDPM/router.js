const express = require('express')
const route = express()
const { create, index } = require('./controller')

route.post('/dpm', create)
route.get('/dpm', index)

module.exports = route