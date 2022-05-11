var TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

var token = process.env.TG_TOKEN
// var token = process.env.TG_TOKEN;
var bot = new TelegramBot(token, {polling: true});
 
//收到Start訊息時會觸發這段程式
bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id; //用戶的ID
    var resp = '屌你老母' + msg.from.first_name; //括號裡面的為回應內容，可以隨意更改
    bot.sendMessage(chatId, resp); //發送訊息的function
});
 
//收到/cal開頭的訊息時會觸發這段程式
bot.onText(/\/cal (.+)/, function (msg, match) {
    var fromId = msg.from.id; //用戶的ID
    var resp = match[1].replace(/[^-()\d/*+.]/g, '');
    // match[1]的意思是 /cal 後面的所有內容
    resp = '計算結果為: ' + eval(resp);
    // eval是用作執行計算的function
    bot.sendMessage(fromId, resp); //發送訊息的function
});