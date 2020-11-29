const express = require('express')
const user = require('../model/register')
const orders = require('../model/orders')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, `user_profile_${Date.now()}.jpg`)
    }
})
const upload = multer({storage: storage})


router.post('/user', async (req, res)=>{
    const findUser = await user.findOne({email: req.body.email})
    res.send(findUser)
})

router.post('/shipping', async (req, res)=>{
    console.log(req.body)
    const myQuery = {email: req.body.email}
    const newValues = {$set: {firstName: req.body.firstName, lastName: req.body.lastName, cellphone: req.body.cellphone,
            streetAddress: req.body.streetAddress, streetAddress2: req.body.streetAddress2, city: req.body.city,
            state: req.body.state, zipCode: req.body.zipCode,}}
    await user.updateOne(myQuery, newValues)
    return res.send('success')
})

router.post('/changePassword', async (req, res)=>{
    console.log(req.body)
    const myQuery = {email: req.body.email}
    const newValues = {$set: {password: req.body.password}}
    await user.updateOne(myQuery, newValues)
    return res.send('success')
})

router.post('/orders', async (req, res)=>{
    console.log(req.body)
    const findOrders = await orders.find({email: req.body.email}).sort({orderNumber: -1})
    console.log(findOrders)
    res.send(findOrders)

})

router.post('/changeDescription', async (req, res)=>{
    console.log(req.body)
    const myQuery = {email: req.body.email}
    const newValues = {$set: {description: req.body.description}}
    await user.updateOne(myQuery, newValues)
    return res.send('success')
})

router.post('/changePhoto', upload.single('profile_photo'), async (req, res)=>{
    console.log('req.file', req.file)
    console.log('email', req.body.email)
    const avatarPath = await user.findOne({email: req.body.email})
    console.log(avatarPath)
    const myQuery = {email: req.body.email}
    const newValues = {$set: {avatarPath: req.file.path}}
    await user.updateOne(myQuery, newValues)
    fs.unlink(avatarPath.avatarPath, (err)=>{
        if (err){
            console.log(err)
        }
    })
    return res.send(req.file.path)
})

router.get('/orderNumber', async (req, res)=>{
    console.log(req.query.orderNumber)
    const foundOrder = await orders.find({orderNumber: req.query.orderNumber}).sort({orderNumber: -1})
    return res.send(foundOrder)
})



module.exports = router
