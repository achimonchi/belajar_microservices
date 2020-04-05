const mongoose = require('mongoose');

const{asiaTime} = require('./../config/config')

const productSchema = mongoose.Schema({
    _id :mongoose.Types.ObjectId,
    p_name : {
        type : String,
        required : true,
    },
    p_img : {
        type : String,
        required : true
    },
    p_price : {
        type : Number,
        required : true,
    },
    p_stok : {
        type : Number,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    created_at : {
        type : Date,
        default : asiaTime()
    },
    updated_at :{
        type : Date,
        default : asiaTime()
    },
})

module.exports = mongoose.model('Users', productSchema);