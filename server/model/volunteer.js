const mongoose = require('mongoose')
const {Schema, model} = mongoose

const volunteerSchema = new Schema({
    title:{type:String, require:true},
    content:{type:String, require:true},
    date:{type:String, require:true},
    category:{type:String, require:true},
    sortDate:{type:Number, require:true},
})

const volunteerInfo = model('volunteer', volunteerSchema)
module.exports = volunteerInfo
