const express=require('express');
const dotenv=require("dotenv");
dotenv.config({path:"./config/config.env"});
const app=express();
var cors = require("cors");
app.use(cors());


const connectDatabase=require('./config/Database');
connectDatabase();

const User=require('./model/userSchema');
const path=require('path');

const viewRouters=require('./routes/views');
const adminRoutes=require('./routes/admin')




// app.use(express.static(path.join(__dirname, '/static')));




app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname,'static/')))
console.log(path.join(__dirname,'static/'));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'pages/'));

// hello

const Admin = require('./model/adminSchema');

// replace the value below with the Telegram token you receive from @BotFather




// Create a bot that uses 'polling' to fetch new updates


// Apis
app.use('/',viewRouters);
app.use('/admin',adminRoutes);



const port=process.env.PORT ||3000;


const server=app.listen(port,async()=>{
  
   
    console.log(`server is listing on port ${port}`);
})