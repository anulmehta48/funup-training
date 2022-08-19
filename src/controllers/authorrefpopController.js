const authorrefpopModel=require('../models/authorrefpopModel')

const createauthor=async function(req,res){
    let authordata=req.body
    let authorID=authordata.author_id
    if(!authorID){
        res.send({status:false,msg:"please provide author_id first"})
    }
    let saved_Data=await authorrefpopModel.create(authordata)
    res.send({msg:saved_Data})
}

module.exports.createauthor=createauthor;
