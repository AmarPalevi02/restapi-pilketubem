const express = require("express")
const router = express()
const {getAllUser, sigup} = require('./controler')

router.get('/index', getAllUser)
router.post('/sigup', sigup)

module.exports = router