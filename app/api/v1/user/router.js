const express = require("express")
const router = express()
const {getAllUser, sigup, sigin} = require('./controler')

router.get('/auth/index', getAllUser)
router.post('/auth/sigup', sigup)
router.post('/auth/sigin', sigin)

module.exports = router