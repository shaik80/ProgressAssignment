const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    plot:{
        type:Date,
        required:true
    },
    poster:{
        type:String
    },
    Actor:[
        {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Actor',
                default:""   
        }
    ]
});

module.exports = Movie = mongoose.model('Movie',MovieSchema);