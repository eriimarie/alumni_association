const mongoose = require('mongoose')
const {Schema, model} = mongoose

const officersSchema = new Schema({
    name:{type: String, require},
    path:{type: String, require},
    phone:{type: Number, require},
    email:{type: String, require},
    description:{type: String, require},
})

const officersInfo = model('officers', officersSchema)
module.exports = officersInfo
