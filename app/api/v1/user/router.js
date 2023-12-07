const express = require("express")
const router = express()
const {getAllUser, sigin} = require('./controler')

router.get('/index', getAllUser)
router.post('/sigin', sigin)

module.exports = router