const mongoose=require('mongoose')

const bookcollectionSchema=new  mongoose.Schema({
    book_name:String,
    author_id:Number,
    pirce:Number,
    ratings:Number,

},{ timestamps: true })


module.exports=mongoose.model('book_Collection',bookcollectionSchema)
