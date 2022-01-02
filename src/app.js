// @API Imports 
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const DBConnect = require('./database/connection');


// @Requirements For Client
//require('./error/error');
require('dotenv').config();

// @Client.on
client.on('ready', async () => { require('./events/ready')(client) });
//client.on('message', async (message) => {require('./events/message')(message, client)});


// @Client Startup
DBConnect();
client.login(process.env.TOKEN);
