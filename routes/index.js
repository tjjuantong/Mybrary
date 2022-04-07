//create all routes for the application

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')     //pass name of view
}) //root application

module.exports = router