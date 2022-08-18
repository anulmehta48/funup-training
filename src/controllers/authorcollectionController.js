const authorcollectionModel=require('../models/authorcollectionModel')

const create_author=async function(req,res){
    let author_data=req.body
    let authorID=author_data.author_id
    if(!authorID){
        res.send({status:false,msg:"please provide author_id first"})
    }
    let saved_Data=await authorcollectionModel.create(author_data)
    res.send({msg:saved_Data})
}





module.exports.create_author=create_author