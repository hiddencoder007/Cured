const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
const testRouter=require('./routers/test')
const session=require('express-session')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/cyanicdata',()=>{
    console.log('Connected to DB cyanicdata')
})



app.use(session({
    secret:'avi',
    resave:false,
    saveUninitialized:false
}))


app.use(testRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log("Server is running on Port 5000")
})