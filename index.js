const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const cors = require("cors")
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const users = require('./app/api/v1/user/router')

const v1 = '/api/v1'

app.use(`${v1}/cms`, users)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})