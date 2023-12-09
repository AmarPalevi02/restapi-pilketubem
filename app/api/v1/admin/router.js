const express = require('express')
const route = express()
const { SigUp, SigIn } = require('./controller')

route.post('/auth/admin/sigup', SigUp)
route.post('/auth/admin/sigin', SigIn)

module.exports = route