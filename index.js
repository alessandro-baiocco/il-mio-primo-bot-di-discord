const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const token = process.env.TOKEN_BOT;
const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages],
});

client.login(token);
