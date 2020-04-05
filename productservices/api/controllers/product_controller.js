const {
    asiaTime
} = require('./../config/config');

const mongoose = require('mongoose');
const Product = require('./../models/Product');

exports.productFindAll = (req,res) =>{
    try{
        Product.find()
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.productFindByID = (req,res) =>{
    try{
        Product.findById(req.params.id)
            .exec()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.productSave = async (req,res) =>{
    try{
        const body = req.body;
        const product = new Product({
            _id : mongoose.Types.ObjectId(),
            p_name : body.p_name,
            p_img : body.p_img,
            p_price : body.p_price,
            p_stok : body.p_stok,
            user : mongoose.Types.ObjectId(body.user),
        })

        await product.save();

        res.status(200).json({
            product
        })

    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.productPatch = async (req,res) =>{
    try{
        const id = req.params.id;
        const body = req.body;
        const string = JSON.stringify(body).split("}")[0]+`,\"updated_at\":\"${asiaTime()}\"\}`;
        await Product.findOneAndUpdate({_id:id}, JSON.parse(string));
        res.status(200).json({
            message : "Updated success !"
        })
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}

exports.productDelete = async (req,res) =>{
    try{
        const id = req.params.id;
        await Product.findOneAndRemove({_id:id});
        res.status(200).json({
            message : "Delete success !"
        })
    } catch (err) {
        res.status(500).json({
            error : err
        })
    }
}