const express = require('express')
const register = require('../model/register')
const router = express.Router()



router.post('/', async (req, res)=>{
    const user = await register.findOne({email: req.body.email})
    console.log(user)
    if (user){
        return res.send("User already exist")
    }else{
        await new register(req.body).save()
        return res.send("register successfully")
    }


})

router.get('/user', async (req,res)=>{
    const list = await register.find()
    res.send(list)
})

module.exports = router