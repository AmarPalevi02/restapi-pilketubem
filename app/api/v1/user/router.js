const express = require("express")
const router = express()
const {getAllUser, sigup, sigin} = require('./controler')

router.get('/index', getAllUser)
router.post('/sigup', sigup)
router.post('/sigin', sigin)

module.exports = router