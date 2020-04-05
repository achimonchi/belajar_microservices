const 
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const { asiaTime } = require('./../helper/generate_time')

const User = require('./../models/User');

exports.userFindAll = async(req, res) =>{
    try{
        const users = await User.find({u_status:1})
        res.status(200).json({
            users
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    }   
}

exports.userFindInActive = async(req,res) =>{
    try{
        const users = await User.find({u_status:0})
        res.status(200).json({
            users
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    }   
}

exports.userFindByID = async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({
            user
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    }   
}

exports.userFindByEmail = async(req,res) =>{
    User.findOne({u_email:req.body.u_email})
        .then(user=>{
            if(!user){
                res.status(404).json({
                    error : "invalid email or password"
                })
            }
            res.status(200).json({
                user
            })
        })
        .catch(err=>{
            res.status(500).json({
                error : err
            })
        })
}

exports.userSave = async(req,res) =>{
    try{
        const body = req.body;
        const hash = await bcrypt.hash(body.u_password, 10);
        const user = new User ({
            _id : mongoose.Types.ObjectId(),
            u_name : body.u_name,
            u_email : body.u_email,
            u_password : hash,
        });
        console.log(body)
        await user.save()
        res.status(200).json({
            message : "Add new user success !"
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    } 
}

exports.userPatch = async(req,res) =>{
    try{
        const id = req.params.id;
        const body = req.body;
        const string = JSON.stringify(body).split("}")[0]+`,\"updated_at\":\"${asiaTime()}\"\}`;
        await User.findOneAndUpdate({_id:id}, JSON.parse(string));
        res.status(200).json({
            message : "Updated success !",
        })

    } catch(err){
        res.status(500).json({
            error : err
        })
    } 
}

exports.userDelete = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = {u_status : 0, updated_at:asiaTime()};
        await User.findOneAndUpdate({_id:id}, data);
        res.status(200).json({
            message : "Deleted success !",
        })
    } catch(err){
        res.status(500).json({
            error : err
        })
    } 
}