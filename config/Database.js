const mongoose=require('mongoose');
const Admin=require('../model/adminSchema');
const {connection}=require('./../telegram/telegramConnection')
mongoose.set( "strictQuery", false );
const connectDatabase=()=>{
        mongoose.connect(`${process.env.DB_LOCAL_URI}`).then(async(con)=>{
            console.log('MongoDB Connected');
          
                try{
                const token=await Admin.find();
                console.log(token)
                // connection(token[0].token);
                }catch(err){
                    console.log("telegram Connection error");
                    console.log(err)
                }
            
        })
}

module.exports=connectDatabase