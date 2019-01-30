const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config/config.json');

client.once('ready', () => {
	console.log('Ready!');
	
	if (message.content.startsWith(`${prefix}help`)) {
	message.channel.send('Pong.');
} else if (message.content.includes(`@DR. Nope!#0908`)) {
	message.channel.send('Dont ping me!');
}

});
