let router = require('express').Router()
let mongoose = require('mongoose')
let playlist = require('../models/Playlist')

router.get('', (req, res, next)=>{
    playlist.find({})
    .then(playlist=>{
        return res.send(playlist)
    })
    .catch(next)
})

router.post('', (req, res, next)=>{
    playlist.create(req.body)
    .then(playlist=>{
        return res.send(playlist)
    })
    .catch(next)
})

router.put(':id', (req, res, next)=>{
    playlist.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
        message: 'ADDED SUCCESSFULLY'
    }))
    .catch(next)
})

router.delete(':id', (req, res, next)=>{
    playlist.findByIdAndRemove(req.params.id, req.body)
    .then(()=>res.send({
        mesage: 'DELETED SUCCESSFULLY'
    }))
})

module.exports = router