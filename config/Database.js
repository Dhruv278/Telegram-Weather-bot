const mongoose=require('mongoose');
const Admin=require('../model/adminSchema');
const {connection}=require('./../telegram/telegramConnection')
mongoose.set( "strictQuery", false );
const connectDatabase=async()=>{
        mongoose.connect(`${process.env.DB_LOCAL_URI}`).then((con)=>{
            console.log('MongoDB Connected');
            
        })
}

module.exports=connectDatabase