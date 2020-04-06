// define modules
const 
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    env = require('dotenv'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// define routes
const 
    userRoutes = require('./api/routes/user_routes');

// use modules
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

env.config();

// define DB
try{
    const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/userservices`
    mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology:true});
    console.log('Connection db userservices success')
}
catch (err) {
    console.log({err, port:process.env.MONGODB_PORT})
}

// use routes
app.use('/users', userRoutes);

module.exports = app;
