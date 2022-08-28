const createProductModel= require('../models/createProductModel')

const createproduct= async function (req, res) {
    let data = req.body
    let savedData= await createProductModel.create(data)
    res.send({data: savedData})
}

module.exports.createproduct= createproduct;

