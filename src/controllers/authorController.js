const authorModel=require('../models/authorModel')

const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createNewAuthor= createNewAuthor