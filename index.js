const express=require('express');
const dotenv=require("dotenv");
dotenv.config({path:"./config/config.env"});

var cors = require("cors");
app.use(cors());


const connectDatabase=require('./config/Database');
connectDatabase();

const User=require('./model/userSchema');
const path=require('path');
const app=express();
const viewRouters=require('./routes/views');
const adminRoutes=require('./routes/admin')
const {connection}=require('./telegram/telegramConnection')



// app.use(express.static(path.join(__dirname, '/static')));




app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname,'static/')))
console.log(path.join(__dirname,'static/'));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'pages/'));

// hello

const Admin = require('./model/adminSchema');

// replace the value below with the Telegram token you receive from @BotFather
const getToken=async()=>{
    try{
    const token=await Admin.find();
    connection(token[0].token);
    }catch(err){
        console.log("telegram Connection error");
        console.log(err)
    }
}

getToken();

// Create a bot that uses 'polling' to fetch new updates


// Apis
app.use('/',viewRouters);
app.use('/admin',adminRoutes);



const port=process.env.PORT ||3000;


const server=app.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
})