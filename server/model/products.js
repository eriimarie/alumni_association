const mongoose = require('mongoose')
const {Schema, model} = mongoose

const productSchema = new Schema({

})

const productInfo = model('product', productSchema)
module.exports = productInfo
