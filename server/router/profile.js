const express = require('express')
const user = require('../model/register')
const orders = require('../model/orders')
const router = express.Router()
const multer = require('multer')
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
    console.log('req.file', req.file)
    /**
     * router accept one more param in body - user_id/email
     * query user row with user_id
     * save this path to user schema
     * path is in req.file.path
     * seudo code: User.where(email: email).update(avatar: req.file.path)
     */
    return res.send("success")
})

module.exports = router
