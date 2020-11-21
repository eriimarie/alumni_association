const express = require('express')
const officers = require('../model/officers')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, `officer_${Date.now()}.jpg`)
    }
})
const uploadPhoto = multer({storage: storage})


router.get('/detail', async (req, res)=>{
    const one = await officers.findOne({path: req.query.id})
    return res.send(one)
})

router.get('', async (req, res)=>{
    const list = await officers.find().sort({path: -1})
    return res.send(list)
})
router.post('/addOfficerPhoto', uploadPhoto.single('officer_photo'), async (req,res)=>{
    console.log('req.file', req.file.path)
    console.log('name', req.body.name)
    const officerPhoto = await officers.findOne({name: req.body.name})
    console.log(officerPhoto)
    const myQuery = {name: req.body.name}
    const newValues = {$set: {path: req.file.path}}
    await officers.updateOne(myQuery, newValues)
    fs.unlink(officerPhoto.path, (err)=>{
        if (err){
            console.log(err)
        }
    })
    return res.send(req.file.path)
})



module.exports = router
