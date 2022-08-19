const mongoose=require('mongoose')

const BookSchema=new  mongoose.Schema({
    book_name:String,
    author_id:{
        type:Object,
        ref:'Author',
    },
    pirce:Number,
    ratings:Number,

},{ timestamps: true })


module.exports=mongoose.model('LibraryBook',BookSchema)
