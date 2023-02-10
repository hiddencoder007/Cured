const router=require('express').Router()
const Emp=require('../models/emp')


function handlecheck(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/')
    }
}





router.get('/',(req,res)=>{
    res.render('insert.ejs')
})

router.post('/emprecord',async(req,res)=>{
    const{name,email,add,employment,dob}=req.body
    const record=new Emp({name:name,email:email,address:add,date:employment,DOB:dob})
    await record.save()
    res.redirect('/fetches')
})

router.get('/fetches',async(req,res)=>{
    const record=await Emp.find()
    res.render('fetches.ejs',{record})
})

router.get('/deleteditems',async(req,res)=>{
    const record=await Emp.find({isdeleted:true})
    res.render('fetches.ejs',{record})
})

router.get('/delete/:id',async(req,res)=>{
    const id=req.params.id
    await Emp.findByIdAndUpdate(id,{isdeleted:true})

    res.redirect('/fetches')
})

router.get('/update/:id',async(req,res)=>{
    const id=req.params.id
   const record=await Emp.findById(id)
   res.render('updateform.ejs',{record})   
})

router.post('/updateformrecord/:id',async(req,res)=>{
    const id=req.params.id
    const{name,email,add,employment,dob}=req.body
    await Emp.findByIdAndUpdate(id,{name:name,email:email,address:add,date:employment,DOB:dob})
    res.redirect('/fetches')
 })

 router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
 })














module.exports=router;