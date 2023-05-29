const express=require('express');
const router=express.Router();
const Admin=require('../model/adminSchema');
const User=require('../model/userSchema');


// for admin login 
router.post('/login',async(req,res)=>{
    // await createAdmin();
    const username=req.body.username;
    const password=req.body.password;

    
    
    const admin=await Admin.find();
    if(admin[0].userName===username && admin[0].password ===password){
        res.status(200).json({
            status:'success'
        })
    }else{
        res.status(200).json({
            status:'fail',
            message:"Invalid data"
        })
    }
   
})


// .change token value
router.post('/changeToken',async(req,res)=>{
    const newToken=req.body.token;
    const oldToken=req.body.oldToken;
    const admin=await Admin.findOne({token:oldToken});
    admin.token=newToken;
    await admin.save();
    res.status(200).json({
        status:'success',
        token:newToken
    })
})


// send admin page
router.get('/adminpage',async(req,res)=>{
    const users=await User.find();
    const totalActiveUsers=users.filter(user=>user.status==='Active')
    const totalBlockedUsers=users.filter(user=>user.status==='Block')
    const admin=await Admin.find();

    // console.log(totalActiveUsers)
    res.status(200).render('admin',{token:admin[0].token,totalActiveUsers:totalActiveUsers,totalBlockedUsers})
})


router.post('/changeStatus',async(req,res)=>{
    const userId=req.body.userId;
    const user=await User.findOne({userId});
   if(user.status==='Block')user.status='Active'
   else user.status='Block'
    await user.save()
    res.status(200).json({
        status:"success",
        user
    })
})

router.post('/deleteUser',async(req,res)=>{
    const userId=req.body.userId;
    const user=await User.deleteOne({userId});
    if(user){
        res.status(200).json({
            status:'success',
            message:'user has been deleted'
        })
    }else{
        res.status(404).json({
            status:"fail",
            messgae:"user not found"
        })
    }
})
module.exports=router