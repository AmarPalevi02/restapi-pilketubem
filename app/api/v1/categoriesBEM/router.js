const express = require('express')
const route = express()
const { create } = require('./controller')

route.post('/bem', create)

module.exports = route