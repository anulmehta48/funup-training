const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const BookSchema=new  mongoose.Schema({
    book_name:String,
    author_id:{
        type:ObjectId,
        ref:"Author",
    },
    pirce:Number,
    ratings:Number,

},{ timestamps: true })


module.exports=mongoose.model('LibraryBook',BookSchema)
