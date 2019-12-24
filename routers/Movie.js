const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');


// @route       POST api/Actor/AddMovie
// @desc        ADD Movie
// @access      Public

router.post('/AddMovie', (req, res, next) => {
    const movie = new Movie({
        name: req.body.name,
        year : req.body.year,
        plot : req.body.plot,
        poster : req.body.poster,
        Actor : req.body.Actor
    });

    movie.save()
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



// @route       POST api/Movie/ViewMovie
// @desc        View Actor
// @access      Public

router.get('/ViewMovie', (req, res, next) => {
    res.send("ViewMovie")
})



module.exports = router;