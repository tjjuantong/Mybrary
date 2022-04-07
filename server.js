// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//import router
const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')     //for header footer of HTML
app.use(expressLayouts)
app.use(express.static('public')) //contains styling sheets, js files

//install library npm i mongoose
const mongoose = require('mongoose')
var mongoDB = 'mongodb://localhost:27017'
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
mongoose.connect(mongoDB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)