const express = require('express')
const register = require('../model/register')
const router = express.Router()



router.post('/', async (req,res)=>{
    console.log(req.body)
    const user = await register.findOne({email:req.body.email})
    console.log(user)
    if (!user){return res.send('Please register first before login.')}
    const dbPassword = user.password
    const password = req.body.password
    if (dbPassword !== password){
        return res.send('Invalid password, please try again or reset password.')}
    else {
        return res.send('valid password, login successfully')
    }

})

module.exports = router