const express = require('express')
const user = require('../model/register')
const router = express.Router()

router.get('/', async(req, res)=>{
    console.log(req.query.email)
    const foundUser = await user.findOne({email: req.query.email})
    console.log(foundUser)
    return res.send(foundUser)
})

router.post('/change', async(req, res) => {
    console.log(req.body)
    const myQuery = {email: req.body.email}
    const newValues = {$set: {password: req.body.password}}
    await user.updateOne(myQuery, newValues)
    return res.send('success')
})

module.exports = router
