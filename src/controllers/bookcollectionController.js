const authorcollectionModel = require('../models/authorcollectionModel')
const bookcollectionModel=require('../models/bookcollectionModel')

const create_book=async function(req,res){
    let book_data=req.body
    let authorID=book_data.author_id
    if(!authorID){
        res.send({status:false,msg:"please provide author_id first"})
    }
    let saved_Data=await bookcollectionModel.create(book_data)
    res.send({msg:saved_Data})
}


const listofBook=async function(req,res){
   let  authorID=await authorcollectionModel.find({author_name:"Chetan Bhagat"})
   let  findBook=await bookcollectionModel.find({author_id:{$eq:authorID[0].author_id}}).select({book_name:1,_id:0})
   res.send({msg:findBook})
}


const updateInfo=async function(req,res){
    let bookPrice=await bookcollectionModel.findOneAndUpdate({book_name:"Two states"},{$set:{pirce:100}},{new:true})
    let updatedPrice=bookPrice.pirce
    let autherUpdated=await authorcollectionModel.find({author_id:{$eq:bookPrice.author_id}}).select({author_name:1,_id:0})
    res.send({msg:autherUpdated,updatedPrice})
}





const bookRange=async function(req ,res){
    let bookRange=await bookcollectionModel.find({pirce:{$gte:50,$lte:100}})
    let fetch=bookRange.map(ele=>ele.author_id)
    let thisRangeBook=await authorcollectionModel.find({author_id:fetch}).select({author_name:1,_id:0})
    res.send({msg:thisRangeBook})
}


module.exports.create_book=create_book
module.exports.listofBook=listofBook
module.exports.updateInfo=updateInfo
module.exports.bookRange=bookRange
