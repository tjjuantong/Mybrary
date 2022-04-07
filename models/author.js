const mongoose = require('mongoose')

// Create a schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)   // name of table in DB