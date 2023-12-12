const express = require('express')
const route = express()
const { create, index, deletOne} = require('./controller')

route.post('/dpm', create)
route.get('/dpm', index)
route.delete('/dpm/:id', index)

module.exports = route