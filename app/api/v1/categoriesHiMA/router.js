const express = require('express')
const route = express()
const { create } = require('./controller')

route.post('/hima', create)

module.exports = route