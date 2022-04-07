const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

//import routers
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')     //for header footer of HTML
app.use(expressLayouts)
app.use(express.static('public')) //contains styling sheets, js files
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

//install library npm i mongoose
const mongoose = require('mongoose')
var mongoDB = 'mongodb://localhost:27017'
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter) // Prepend the route with authors/

app.listen(process.env.PORT || 3000)