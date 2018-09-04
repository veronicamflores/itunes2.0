let router = require('express').Router()
let mongoose = require('mongoose')
let song = require('../models/Song')

router.get('', (req, res, next)=>{
    song.find({})
    .then(song=>{
        return res.send(song)
    })
    .catch(next)
})

router.post('', (req, res, next)=>{
    song.create(req.body)
    .then(song=>{
        return res.send(song)
    })
    .catch(next)
})
router.delete(':id', (req, res, next)=>{
    song.findByIdAndRemove(req.params.id, req.body)
    .then(()=>res.send({
        mesage: 'DELETED SUCCESSFULLY'
    }))
})

module.exports = router