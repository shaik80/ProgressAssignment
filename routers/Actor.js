const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Actor = mongoose.model('Actor');
const jwt = require('jsonwebtoken');

// @route       POST api/Actor/AddActor
// @desc        ADD Actor
// @access      Public

router.get('/AddActor', (req, res, next) => {
    res.send("AddActor")
})

// @route       POST api/Actor/ViewActor
// @desc        View Actor
// @access      Public

router.get('/ViewActor', (req, res, next) => {
    res.send("ViewActor")
})



module.exports = router;