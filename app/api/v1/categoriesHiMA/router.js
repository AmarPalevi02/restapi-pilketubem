const express = require('express')
const route = express()
const { create, index, deletOne } = require('./controller')

route.post('/hima', create)
route.get('/hima', index)
route.delete('/hima/:id', deletOne)

module.exports = route