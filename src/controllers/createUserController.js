const createUserModel= require("../models/createUserModel")

const createusernew= async function (req, res) {
    let data = req.body
    let savedData= await createUserModel.create(data)
    res.send({data: savedData})
}

module.exports.createusernew= createusernew;
