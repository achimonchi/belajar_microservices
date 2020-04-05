const 
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    env  = require('dotenv'),
    passport = require('passport'),
    morgan = require('morgan');

const authRoutes = require('./api/routes/auth_routes');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
env.config();

app.use(passport.initialize());
require("./api/config/passport")(passport);

app.use('/auth', authRoutes);


module.exports = app;