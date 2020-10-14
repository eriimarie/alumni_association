const mongoose = require('mongoose')
const {Schema, model} = mongoose

const orderSchema = new Schema({
    email:{type: String, require: true},
    orderNumber:{type:String, require: true},
    status:{type:String, default: 'pending'},
    track:{type:String},
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    cellphone:{type:String, require:true},
    streetAddress:{type:String, require:true},
    streetAddress2:{type:String},
    city:{type:String, require:true},
    state:{type:String, require:true},
    zipCode:{type:String, require:true},
    items:{type:Array,}
})

const orderInfo = model('order', orderSchema)
module.exports = orderInfo