const express = require('express')
const route = express()
const { 
    create, 
    index, 
    deletOne, 
    update
} = require('./controller')

route.post('/dpm', create)
route.get('/dpm', index)
route.delete('/dpm/:id', deletOne)
route.put('/dpm/:id', update)

module.exports = route