const{
    getURI
} = require('../config/keys');

const bcrypt = require('bcrypt');

const axios = require('axios');

const signUp = async(req,res) => {
    try{
        const body = req.body;
        axios.post(`${getURI()}/users`,{
            u_email : body.u_email,
            u_password : body.u_password,
            u_name : body.u_name,
        })
            .then(results=>{
                console.log(results)
                res.status(200).json({
                    message : "OK"
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    message : "Your email already registered!",
                    error : err
                })
            })
    } catch(err){
        res.send("err")
    }
}

const signIn = async(req,res) => {
    try{
        const body = req.body;
        const data = await axios.post(`${getURI()}/users/search/email`,{u_email:body.u_email});
        const user = data.data.user;

        // check password
        bcrypt.compare(body.u_password, user.u_password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message : "Auth Failed !"
                })   
            }
            else {
                if(result){
                    res.status(200).json(user)
                }
            }
        })
            
        
        
    } catch(err){
        res.send("err");
    }
}

module.exports = {signIn, signUp}