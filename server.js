require('./config/db');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const session = require('express-session');
const bodyparser = require('body-parser');
const Actor = require('./routers/Actor')
const Movie = require('./routers/Movie')
app.use(express.static('public'));

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(cors());
app.use(bodyparser.json());



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));


app.listen(port,() => console.log('server started on port 5000.....'));

app.use('/api/Actor',Actor);
app.use('/api/Movie',Movie);