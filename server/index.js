const express = require('express')
const app = new express
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./router')
const mongo = require('./config/db')


mongo(app)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
routes(app)

app.use('/upload', express.static(__dirname + '/upload'));

app.listen(4000, ()=>{
    console.log('Server is running')
})
