
// importing packages
const TelegramBot = require('node-telegram-bot-api');
//const config = require('./config');
const checkBus = require('./bus');

// Init Bot, polling true to fetch new updates
console.log(process.env.TELE_BOT_TOKEN);
const bot = new TelegramBot(process.env.TELE_BOT_TOKEN, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Process incoming message here
    if (messageText == '/start')
    {
        bot.sendMessage(chatId, 'Welcome to Moo bot! Function are still currently under development');
    }

    else if (messageText == '/checkBus'){
        checkBus.checkBusArrival();
        bot.sendMessage(chatId, "Checking Bus Arrival Time");
    }
});