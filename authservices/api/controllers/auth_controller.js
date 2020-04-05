const{
    getURI
} = require('../config/keys');

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

}

module.exports = {signIn, signUp}