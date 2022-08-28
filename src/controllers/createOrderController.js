const createOrderModel = require("../models/createOrderModel");
const createProductModel = require("../models/createProductModel");
const createUserModel = require("../models/createUserModel");

const createorder=async function(req,res){
    let data=req.body;
    let isfreeappuser=req.headers["isfreeappuser"];
    
    let productId=req.body["productId"];
    let productPrice=await createProductModel.findById(productId);
    let userBal=await createUserModel.findById(req.body["userId"])
    let userBalance = userBal["balance"]
    let c=userBalance-productPrice.price;
    let userId=req.body.userId;


    if(isfreeappuser=="false" && productPrice.price>userBalance){
        res.send("Insufficient Balance.Please add funds")
    }else if(isfreeappuser=="false" && productPrice.price<=userBalance){
        await createUserModel.findOneAndUpdate(
            {_id:userId},
            {$set:{balance:c}}  )
            data['amount']=productPrice.price;
            data['isFreeAppUser']=req.headers.isfreeappuser;
       
        let savedData1=await createOrderModel.create(data)
        res.send({savedData1})
    }else if(isfreeappuser=="true"){
        // let savedData=await (await orderModel.create(data)).updateOne({"amount":0})
        // res.send(savedData)
        data['amount']=0;
        data['isFreeAppUser']=true;
        let savedData=await createOrderModel.create(data);
        res.send({OrderPlaced : savedData});

    }

}

const findBookedId =async function(req,res){
    let IDS=await createOrderModel.find().populate('userId productId')
    res.send({msg:IDS})
}
module.exports.createorder=createorder;
module.exports.findBookedId=findBookedId;