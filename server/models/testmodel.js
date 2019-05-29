const mongoose = require('mongoose')

const testmodelSchema = mongoose.Schema({
    test:{
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        trim: true,
        lowercase: true
    }
})

const Test = mongoose.model('Test', testmodelSchema)

module.exports = Test