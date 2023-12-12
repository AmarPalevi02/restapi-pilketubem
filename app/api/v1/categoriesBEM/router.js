const express = require('express')
const route = express()
const { create, index } = require('./controller')

route.post('/bem', create)
route.get('/bem', index)

module.exports = route