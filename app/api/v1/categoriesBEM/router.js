const express = require('express')
const route = express()
const { create, index, deletOne } = require('./controller')

route.post('/bem', create)
route.get('/bem', index)
route.delete('/bem/:id', deletOne)

module.exports = route