const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const errorHendelerMiddlewares = require('./app/middlewares/hendeler-error')
const NotFound = require('./app/middlewares/not-found')
const port = 3000
const cors = require("cors")

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// import route
const usersRouter = require('./app/api/v1/user/router')
const adminRouter = require('./app/api/v1/admin/router')
const imagesRouter = require('./app/api/v1/images/router')
const himaRouter = require('./app/api/v1/categoriesHiMA/router')
const bemRouter = require('./app/api/v1/categoriesBEM/router')
const dpmRouter = require('./app/api/v1/categoriesDPM/router')

const v1 = '/api/v1'

app.use(`${v1}`, usersRouter)
app.use(`${v1}`, adminRouter)
app.use(`${v1}/cms`, imagesRouter)
app.use(`${v1}/cms`, himaRouter)
app.use(`${v1}/cms`, bemRouter)
app.use(`${v1}/cms`,dpmRouter)


app.use(errorHendelerMiddlewares)
app.use(NotFound)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})