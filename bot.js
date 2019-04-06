const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    if (message.content === 'yeet') {

       message.reply('Yeet the meat bitch');

       }
client.on('message', message => {
    if (message.content === 'shrek') {

message.reply(https://static.thisisinsider.com/image/5c59e77ceb3ce80d46564023.jpg)
       }
});



client.login(process.env.BOT_TOKEN);
