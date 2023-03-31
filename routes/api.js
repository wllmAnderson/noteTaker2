const router = require('express').Router();

const { response } = require('express');
const Store = require('../db/files.js')

router.get('/notes', (req,res) =>{
    Store.getNotes().then(notes => res.json(notes)).catch(err => res.json(err))
});
router.post('/notes', (req, res)=>{
    Store.addNote(req.body).then(response => res.json({
        Msg:'Okay'
    }))
})
router.delete('/notes/:id', (req,res)=>{
    Store.removeNote(req.params.id).then(()=>res.json({
        msg:'Okay'
    }))
})
module.exports = router;
