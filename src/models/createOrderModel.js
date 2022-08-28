const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const createOrderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:"CreateUser"
    },
    productId:{
        type:ObjectId,
        ref:"CreateProduct"
    },
    amount:Number
}, { timestamps: true });

module.exports = mongoose.model('CreateOrder', createOrderSchema)