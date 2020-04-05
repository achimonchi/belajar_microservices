const 
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("OK");
})

module.exports = app;