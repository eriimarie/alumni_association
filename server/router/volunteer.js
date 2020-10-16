const express = require('express')
const volunteer = require('../model/volunteer')
const router = express.Router()

router.get('/', async (req, res)=>{
    console.log(req.query)
    const list = await volunteer.find({category: req.query.category}).sort({sortDate: -1})
    console.log(list)
    res.send(list)
})

router.post('/add', async (req, res)=>{
    await new volunteer(req.body).save()
    console.log(req.body)
    return res.send("success")
})

router.get('/page', async (req, res)=>{
    const urlObj = req.query
    console.log(urlObj)
    const list = await volunteer.find({category: urlObj.category}).sort({sortDate: -1}).skip(10*(urlObj.page-1)).limit(10)
    console.log(list)
    return res.send(list)
})

module.exports = router
