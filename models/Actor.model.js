const mongoose = require('mongoose')

const ActorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    Bio:{
        type:String,
        require:true
    },
    Movie:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            default:""
        }
    ]
});

module.exports = Actor = mongoose.model('Actor', ActorSchema);