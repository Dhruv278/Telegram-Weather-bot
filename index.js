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

const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios')


// app.use(express.static(path.join(__dirname, '/static')));




app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname,'static/')))
console.log(path.join(__dirname,'static/'));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'pages/'));

// hello

const Admin = require('./model/adminSchema');
const { connection } = require('./telegram/telegramConnection');

// replace the value below with the Telegram token you receive from @BotFather

setInterval(()=>{connection("6263146146:AAF4PGtWfdsoHBSfX8zSg1FJSRVjlV9ak1o")},1000)



// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot("6263146146:AAF4PGtWfdsoHBSfX8zSg1FJSRVjlV9ak1o", { polling: true });

// console.log("hello from telegram pages")
// bot.onText(/\/start/, (msg) => {
//    const chatId = msg.chat.id;
//    // Send the pre-generated message to the user
//    bot.sendMessage(chatId, `🌤️ Hello! Welcome to the bot. 🌤️

// Please use the command /subscribe to subscribe your account on this bot and receive regular weather updates. Stay informed and prepared for any weather conditions!`);
// });



// bot.onText(/\/subscribe/, async (msg) => {
//    const chatId = msg.chat.id;
//    console.log(msg.from);
//    await createNewUser(bot, chatId, msg);
//    // Send the pre-generated message to the user
//    // bot.sendMessage(chatId, ``);
//    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//    // 986e477c6abf4638c251491c18e01913
// });

// bot.onText(/\/weather (.+)/, async (msg, match) => {
//    const chatId = msg.chat.id;
//    const userInput = match[1];
   
//    if (! await validUser(msg.from.id)) {
//        bot.sendMessage(chatId, 'I apologize for the confusion. It seems that you are not currently subscribed. To receive updates and access to features, please use the /subscribe command to subscribe yourself. Stay connected and enjoy the benefits of our services!')
//    } else {

//        try {
//            const response = await axios.get(
//                `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=ea05f0b6617d998492f421c4335d3bba`
//            );
//            const data = response.data;
//            const weather = data.weather[0].description;
//            const temperature = data.main.temp - 273.15;
//            const city = data.name;
//            const humidity = data.main.humidity;
//            const pressure = data.main.pressure;
//            const windSpeed = data.wind.speed;
//            const message = `The current weather in ${city} is ${weather} with a temperature of ${temperature.toFixed(2)}°C. The humidity stands at ${humidity}%, the pressure is ${pressure}hPa, and the wind speed is ${windSpeed}m/s. Stay informed and prepared for the conditions outside!.`;

//            bot.sendMessage(chatId, message);
//        } catch (error) {
//            console.log(error)
//            bot.sendMessage(chatId, "City doesn't exist.");
//        }
//    }
// });


// const createNewUser = async (bot, chatId, msg) => {
//    const user = await User.findOne({ userId: msg.from.id });
//    if (!user) {
//        msg.from.userId = msg.from.id;
//        const newUser = await User.create(msg.from);
//        bot.sendMessage(chatId, `Great news! You are now subscribed. Get ready to unleash the power of weather information by using the /weather [city name] command.`)
//    } else {
//        if (user.status === 'Block') {
//            bot.sendMessage(chatId, `Hello ${msg.from.first_name}, we regret to inform you that you are currently unable to send messages to us as you have been blocked. If you believe this is a mistake or would like to seek further assistance, kindly reach out to our administrator for resolution.`)
//        } else {
//            console.log(user)
//            bot.sendMessage(chatId, `Hello ${user.first_name}, we have fantastic news for you! You are already subscribed, which means you can start exploring the wonders of weather information right away. Just use the /weather [city name] command and unlock a world of meteorological insights.`);
//        }
//    }
// }

// const validUser = async (userId) => {
//    const user = await User.findOne({ userId });
//    if (user) {
//        if (user.status === 'Block') {
//            return false;
//        } 
//        return true;
//    }
//    else {
//        console.log(user)
//        return false;
//    }
// }


// Apis
app.use('/',viewRouters);
app.use('/admin',adminRoutes);



const port=process.env.PORT ||3000;


const server=app.listen(port,async()=>{
  
   
    console.log(`server is listing on port ${port}`);
})