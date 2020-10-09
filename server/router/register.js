const express = require('express')
const register = require('../model/register')
const router = express.Router()



router.post('/', async (req, res)=>{
    const user = await register.findOne({email: req.body.email})
    console.log(user)
    if (user){return res.status(409).send('User already exist')}
    const newUser = await new register(req.body).save()
    console.log(newUser)
    res.send(newUser)
})

router.get('/user', async (req,res)=>{
    const list = await register.find()
    res.send(list)
})

module.exports = router