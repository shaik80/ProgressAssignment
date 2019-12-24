const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Actor = mongoose.model('Actor');


// @route       POST api/Actor/AddActor
// @desc        ADD Actor
// @access      Public

router.post('/AddActor', (req, res, next) => {
    
    const actor = new Actor({
        name: req.body.name,
        sex : req.body.sex,
        dob : req.body.dob,
        Bio : req.body.Bio,
        Movie : req.body.Movie
    });

    actor.save()
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });
})



// @route       POST api/Actor/ViewActor
// @desc        View Actor
// @access      Public

router.get('/ViewActor', (req, res, next) => {
    Actor.find({})
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });
})



module.exports = router;