const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'yeet') {

       message.reply('Yeet the meat');

       }

});



client.login(process.env.BOT_TOKEN);
