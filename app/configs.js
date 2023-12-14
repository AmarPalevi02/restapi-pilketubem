const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    gmail: process.env.GMAIL,
    password: process.env.PASSWORD
}