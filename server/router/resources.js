const express = require('express')
const career = require('../model/career')
const events = require('../model/events')
const router = express.Router()

router.get('/career', async (req, res)=>{
    const list = await career.find().sort({sortDate:-1})
    return res.send(list)
})

router.get('/career/page', async (req, res)=>{
    const urlObj = req.query
    console.log(10*(urlObj.page-1))
    const list = await career.find().sort({sortDate:-1}).skip(10*(urlObj.page-1)).limit(10)
    console.log(list)
    return res.send(list)
})

router.get('/events', async (req, res)=>{
    const list = await events.find().sort({sortDate:-1})
    return res.send(list)
})

router.get('/events/page', async (req, res)=>{
    const urlObj = req.query
    console.log((10*urlObj.page-1))
    const list = await events.find().sort({sortDate:-1}).skip(10*(urlObj.page-1)).limit(10)
    console.log(list)
    return res.send(list)
})

router.get('/events/detail', async (req, res)=>{
    const event = await events.findOne({sortDate: req.query.id})
    return res.send(event)
})
module.exports = router
