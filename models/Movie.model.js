const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    year:{
        type:String,
        required:true
    },
    plot:{
        type:Date,
        required:true
    },
    poster:{
        type:String
    },
    producer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Actor',
        required:true,
        unique:true
    },
    Actor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    }
});

module.exports = Movie = mongoose.model('Movie',MovieSchema);