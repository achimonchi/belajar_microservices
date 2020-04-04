// define modules
const 
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    env = require('dotenv'),
    bodyParser = require('body-parser');

// define routes


// use modules
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

env.config();

module.exports = app;
