const express = require('express')
const multer = require('multer')
const user = require('../model/register')
const orders = require('../model/orders')
const router = express.Router()
const upload = multer({dest: 'upload/'})


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
    const findOrders = await orders.find({email: req.body.email})
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
    console.log(req.file)
    return res.send("success")
})

module.exports = router
