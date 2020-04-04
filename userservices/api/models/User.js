const mongoose = require('mongoose');

const {
    asiaTime
} = require('./../helper/generate_time')

const userSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    u_name : {
        type : String,
        required : true
    },
    u_email : {
        type : String,
        required : true,
        unique : true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    u_password : {
        type : String,
        required : true,
    },
    created_at : {
        type : Date,
        default : asiaTime()
    },
    updated_at :{
        type : Date,
        default : asiaTime()
    },
    u_status : {
        type : Number,
        default : 1
    }
});

module.exports = mongoose.model('Users', userSchema);