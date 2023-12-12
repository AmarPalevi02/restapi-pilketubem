const express = require('express')
const route = express()
const { create, index } = require('./controller')

route.post('/hima', create)
route.get('/hima', index)

module.exports = route