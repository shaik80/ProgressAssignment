const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD +'@cluster0-mp92k.mongodb.net/Ecommerce?retryWrites=true&w=majority', {
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

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})


module.exports = app;