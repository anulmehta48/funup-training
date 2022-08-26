const createUserModel= require("../models/createUserModel")

const createUser= async function (req, res) {
    let data = req.body
    let headerValue=req.header[isfreeAppUser]
    if(!headerValue) return res.send({msg: 'isfreeAppUser is mandatory in the request'})
    let savedData= await authorModel.create(data)
    res.send({data: savedData})
}

module.exports.createUser= createUser
