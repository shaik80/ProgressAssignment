const mongoose = require('mongoose');

//connect db 
mongoose.connect('mongodb+srv://root:root@cluster0-mp92k.mongodb.net/ProgressAssignment?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (!err) {
        console.log("db connection sucessed")
    } else {
        console.log("db connection error " + err)
    }
});


require('../models/Actor.model')
require('../models/Movie.model')
require('../models/Producer.model')