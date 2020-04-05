const 
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    env = require('dotenv'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


const productRoutes = require('./api/routes/product_routes')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

env.config();

// define DB
try{
    const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/productservices`
    mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology:true});
    console.log('Connection db productservices success')
}
catch (err) {
    console.log(err)
}

app.use('/products', productRoutes);


module.exports = app;