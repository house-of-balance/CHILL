// bot rewrite

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config/config.json');

client.once('ready', () => {
	console.log('Ready!');
});
