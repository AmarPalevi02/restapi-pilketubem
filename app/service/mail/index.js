const nodemailer = require("nodemailer")
const Mustach = require("mustache")
const { gmail, password } = require('../../configs')
const fs = require('fs')

const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //true for 465, false for outher ports
    auth: {
        user: gmail,
        pass: password
    }
})