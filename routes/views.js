const express=require('express');
const router=express.Router();

// send login page when user make get request on '/'
router.get('/',(req,res)=>{
    res.status(200).render('Login')
})


module.exports = router;