const userModel2 = require("../models/userModel2")


const createBookUser=async function(req,res){
    let newBook=req.body
    let savedBookData=await userModel2.create(newBook)
    res.send({ msg:savedBookData})
}


const getListofBookData=async function(req,res){
    let ListofallBook=await userModel2.find()
    res.send({msg:ListofallBook})
}

module.exports.createBookUser=createBookUser
module.exports.getListofBookData=getListofBookData



