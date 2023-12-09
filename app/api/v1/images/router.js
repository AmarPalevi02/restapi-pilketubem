const express = require('express')
const route = express()
const {upload} = require('./controller')
const uploadMidleware = require('../../../middlewares/multer')

route.post('/images', uploadMidleware.single('avatar'), upload)

module.exports  = route