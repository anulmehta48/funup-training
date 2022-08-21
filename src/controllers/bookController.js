const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createNewBook = async function (req, res) {
    let book = req.body
    let authorID = book.author
    let publisherID = book.publisher
    if (!authorID) {
        return res.send({msg:"please provied the  author vaild ID " })
    }
    if (!publisherID) {
        return res.send({msg: "please provied the publisher ID " })
    }
    let checkValidAuth = await authorModel.findById({ _id:authorID })
    if (!checkValidAuth) {
        return res.send({msg:"this is not valid author"})
    }
    let checkValidPub = await publisherModel.findById({ _id:publisherID })
    if (!checkValidPub) {
        return res.send({msg:"this is not valid publisher"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

const getBookandAuthorandPubLisherDetails=async function(req,res){
    let  specificBook=await bookModel.find().populate('author publisher')
    res.send({msg:specificBook})
}


const updateBooks = async function(req, res){
    let publisherId = await publisherModel.find({$or: [{name : "Penguin"},{ name: "HarperCollins"}]}).select({_id:1})
    let updateBook = await bookModel.updateMany({publisher: publisherId},{$set: {isHardCover: true}})
    let authorId = await authorModel.find({rating: {$gt: 3.5}}).select({_id:1})
    let updatePrice = await bookModel.updateMany({author: authorId},{$inc: {price: 10}})
    return res.send({msg: updateBook, updatePrice})
}


module.exports.createNewBook = createNewBook;
module.exports.getBookandAuthorandPubLisherDetails=getBookandAuthorandPubLisherDetails;
module.exports.updateBooks=updateBooks;
