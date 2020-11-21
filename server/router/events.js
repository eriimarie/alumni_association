const express = require('express')
const events = require('../model/events')
const router = express.Router()

router.get('', async (req, res)=>{
    return res.send(await events.find().sort({sortDate: -1}))
})

router.get('/dance', async (req, res)=>{
    return res.send(await events.find({category: "Annual Dinner Dance"}).sort({sortDate:-1}))
})

router.get('/fundraiser', async (req, res)=>{
    return res.send(await events.find({category: "FundRaisers"}).sort({sortDate:-1}))
})

router.get('/family', async (req, res)=>{
    return res.send(await events.find({category: "Family Fun Day"}).sort({sortDate:-1}))
})

module.exports = router
