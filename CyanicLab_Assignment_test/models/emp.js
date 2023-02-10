const mongoose=require('mongoose')


const empSchema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
    date:Date,
    DOB:String,
    isdeleted:{type:Boolean,default:false}
})






module.exports=mongoose.model('emp',empSchema)