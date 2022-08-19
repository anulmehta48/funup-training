const bookrefpopModel=require('../models/bookrefpopModel')

const createbooks=async function(req,res){
    let book_data=req.body
    let authorID=book_data.author_id
    if(!authorID){
        res.send({status:false,msg:"please provide author_id first"})
    }
    let saved_Data=await bookrefpopModel.create(book_data)
    res.send({msg:saved_Data})
}

const getBookandAuthorDetails=async function(req,res){
    specificBook=await bookrefpopModel.find().populate('author_id')
    res.send({msg:specificBook})
}




module.exports.createbooks=createbooks;
module.exports.getBookandAuthorDetails=getBookandAuthorDetails;