const express = require('express')
const career = require('../model/news')
const events = require('../model/events')
const orders = require('../model/orders')
const products = require('../model/products')
const volunteer = require('../model/volunteer')
const users = require('../model/register')
const officers = require('../model/officers')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, `product_${Date.now()}.jpg`)
    }
})
const storageNews = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, `news_${Date.now()}.jpg`)
    }
})
const uploadPhoto = multer({storage: storage})
const uploadNewsPhoto = multer({storage: storageNews})

router.post('/addNewsPhoto', uploadNewsPhoto.single('news_photo'), async (req,res)=>{
    console.log('req.file', req.file.path)
    console.log('name', req.body.name)
    const newsPhoto = await career.findOne({title: req.body.name})
    console.log(newsPhoto)
        const myQuery = {title: req.body.name}
        const newValues = {$set: {path: req.file.path}}
        await career.updateOne(myQuery, newValues)
        fs.unlink(newsPhoto.path, (err)=>{
            if (err){
                console.log(err)
            }
        })
        return res.send(req.file.path)
})

router.post('/addCareer', async (req, res)=>{
    await new career(req.body).save()
    return res.send("success")
})

router.post('/deleteCareer', async (req, res)=>{
    console.log(req.body)
    const result = await career.deleteOne({sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.post('/changeCareer', async (req, res)=>{
    console.log(req.body)
    const result = await career.updateOne({sortDate: req.body.oldSortDate}, {title: req.body.title, content: req.body.content,
        sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.get('/findCareer', async (req, res)=>{
    console.log(req.query.title)
    const foundCareer = await career.findOne({title: req.query.title})
    if (foundCareer === null){
        return  res.send('not found')
    } else{
        return res.send(foundCareer)
    }
})

router.get('/volunteer', async (req, res)=>{
    const list = await volunteer.find().sort({sortDate: -1})
    return res.send(list)
})

router.post('/addVolunteer', async (req, res)=>{
    await new volunteer(req.body).save()
    return res.send("success")
})

router.get('/findVolunteer', async (req, res)=>{
    console.log(req.query.title)
    const foundVolunteer = await volunteer.findOne({title: req.query.title})
    if (foundVolunteer === null){
        return res.send('not found')
    } else {
        return res.send(foundVolunteer)
    }
})

router.post('/deleteVolunteer', async (req, res)=>{
    console.log(req.body)
    const result = await volunteer.deleteOne({sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.post('/changeVolunteer', async (req, res)=>{
    console.log(req.body)
    const result = await volunteer.updateOne({sortDate: req.body.oldSortDate}, {title: req.body.title, content: req.body.content,
        date: req.body.date, category: req.body.category, sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.post('/addEvents', async (req, res)=>{
    await new events(req.body).save()
    return res.send("success")
})

router.get('/findEvent', async (req, res)=>{
    console.log(req.query.title)
    const foundEvent = await events.findOne({title: req.query.title})
    if (foundEvent === null){
        return res.send('not found')
    } else {
        return res.send(foundEvent)
    }
})

router.post('/deleteEvent', async (req, res)=>{
    console.log(req.body)
    const result = await events.deleteOne({sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.post('/changeEvent', async (req, res)=>{
    console.log(req.body)
    const result = await events.updateOne({sortDate: req.body.oldSortDate}, {title: req.body.title, content: req.body.content,
        date: req.body.date, sortDate: req.body.sortDate})
    console.log(result)
    return res.send(result)
})

router.get('/users', async (req, res)=>{
    console.log(req.body)
    const list = await users.find().sort({sortDate: -1})
    return res.send(list)
})

router.post('/deleteUser', async (req, res)=>{
    const result = await users.deleteOne({email: req.body.email})
    return res.send(result)
})

router.get('/findUser', async (req, res)=>{
    console.log(req.query.email)
    const foundUser = await users.findOne({email: req.query.email})
    console.log(foundUser)
    if (foundUser === null){
        return res.send('not found')
    } else {
        return res.send(foundUser)
    }
})

router.post('/updateUser', async (req, res)=>{
    console.log(req.body)
    const result = await users.updateOne({email: req.body.email}, {firstName: req.body.firstName, lastName: req.body.lastName,
        universityId: req.body.universityId, email: req.body.email, password: req.body.password, cellphone: req.body.cellphone,
        streetAddress: req.body.streetAddress, streetAddress2: req.body.streetAddress2, city: req.body.city, state: req.body.state,
        zipCode: req.body.zipCode, question1: req.body.question1, answer1: req.body.answer1, question2: req.body.question2,
        answer2: req.body.answer2, isAdmin: req.body.isAdmin, })
    console.log(result)
    return res.send(result)
})

router.post('/addProduct', async (req, res)=>{
    console.log(req.body)
    await new products(req.body).save()
    return res.send('success')
})

router.get('/findProduct', async (req, res)=>{
    console.log(req.query)
    const foundProduct = await products.findOne({name: req.query.name})
    console.log(foundProduct)
    if (foundProduct === null){
        return res.send('not exist')
    } else {
        return res.send(foundProduct)
    }
})


router.post('/addPhoto', uploadPhoto.single('product_photo'), async (req, res)=>{
    console.log('req.file', req.file.path)
    console.log('name', req.body.name)
    const photo = await products.findOne({name: req.body.name})
    console.log(photo)
    const myQuery = {name: req.body.name}
    const newValues = {$set: {path: req.file.path}}
    await products.updateOne(myQuery, newValues)
    fs.unlink(photo.path, (err)=>{
        if (err){
            console.log(err)
        }
    })
    return res.send(req.file.path)
})



router.post('/deleteProduct', async (req, res)=>{

    const result = await products.deleteOne({name: req.body.name})
    return res.send(result)
})

router.get('/products', async (req, res)=>{
    const list = await products.find().sort({path: -1})
    return res.send(list)
})

router.post('/changeProduct', async (req, res)=>{
    console.log(req.body)
    const result = await products.updateOne({path: req.body.path}, {name: req.body.name, price: req.body.price, amount: req.body.amount,
        size: req.body.size, description: req.body.description, category: req.body.category})
    console.log(result)
    return res.send(result)
})

router.post('/addTracking', async (req, res)=>{
    console.log(req.body)
    const result = await orders.updateOne({orderNumber: req.body.orderNumber}, {$set: {track: req.body.tracking, status: "shipped"}})
    console.log(result)
    return res.send(result)
})

router.post('/deleteOrder', async (req, res)=>{
    const result = await orders.deleteOne({orderNumber: req.body.orderNumber})
    return res.send(result)
})

router.post('/delivered', async (req, res)=>{
    console.log(req.body)
    const result = await orders.updateOne({orderNumber: req.body.orderNumber}, {$set: {status: "delivered"}})
    return res.send(result)
})

router.get('/findOrder', async (req, res)=>{
    console.log(req.query)
    const foundOrder = await orders.find({email: req.query.email})
    console.log(foundOrder)
    if (foundOrder === null){
        return res.send('not exist')
    } else {
        return res.send(foundOrder)
    }
})

router.get('/findPending', async (req, res)=>{
    return res.send(await orders.find({status: "pending"}).sort({orderNumber: -1}))
})

router.get('/findShipping', async (req, res)=>{
    return res.send(await orders.find({status: "shipped"}).sort({orderNumber: -1}))
})

router.get('/findDelivered', async (req, res)=>{
    return res.send(await orders.find({status: "delivered"}).sort({orderNumber: -1}))
})

router.get('/changePage', async (req, res)=>{
    const urlObj = req.query
    console.log(req.query)
    console.log(10*(urlObj.page))
    console.log(urlObj.status)
    const list = await orders.find({status: urlObj.status}).sort({orderNumber: -1}).skip(10*(urlObj.page-1)).limit(10)
    console.log(list)
    return res.send(list)
})

router.get('/changeFindPage', async (req, res)=>{
    const urlObj = req.query
    console.log(10*(urlObj.page-1))
    console.log(10*(urlObj.email))
    const list = await orders.find({email: urlObj.email}).sort({orderNumber: -1}).skip(10*(urlObj.page-1)).limit(10)
    console.log(list)
    return res.send(list)
})

router.post('/addOrder', async (req, res)=>{
    console.log(req.body)
    await new orders(req.body).save()
    return res.send('success')
})

router.post('/addOfficer', async (req, res)=>{
    console.log(req.body)
    await new officers(req.body).save()
    return res.send('success')
})

router.get('/findOfficer', async (req, res)=>{
    console.log(req.query)
    const foundOfficer = await officers.findOne({name: req.query.name})
    console.log(foundOfficer)
    if (foundOfficer === null){
        return res.send('not exist')
    } else {
        return res.send(foundOfficer)
    }
})





router.post('/deleteOfficer', async (req, res)=>{

    const result = await officers.deleteOne({name: req.body.name})
    return res.send(result)
})


router.post('/changeOfficer', async (req, res)=>{
    console.log(req.body)
    const result = await officers.updateOne({path: req.body.path}, {name: req.body.name, phone: req.body.phone, email: req.body.email,
        description: req.body.description})
    console.log(result)
    return res.send(result)
})






module.exports = router
