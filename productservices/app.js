const 
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    env = require('dotenv'),
    mongoose = require('mongoose'),
    axios = require('axios'),
    bodyParser = require('body-parser');


const productRoutes = require('./api/routes/product_routes')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

env.config();

// define DB

const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/productservices`
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Connection db productservices success')
    })
    .catch(err=>{
        const uri = `https://api.telegram.org/bot1189685923:AAFhUdJKLsPTAQsX8iSWZ5yZA6LfP4Mpnuk/sendMessage?chat_id=401330815&text=Koneksi DB di Product Services Gagal nih...`;
        axios.get(`${uri}`)
        console.log({err})        
    })


app.use('/products', productRoutes);


module.exports = app;