const mongoose = require('mongoose')
const {Schema, model} = mongoose

const careerSchema = new Schema({
    title:{type: String, require},
    content:{type: String, require},
    sortDate:{type: Number, require},
})

const careerInfo = model('career', careerSchema)
module.exports = careerInfo
