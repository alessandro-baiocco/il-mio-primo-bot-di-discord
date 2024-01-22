const { Client, GatewayIntentBits, Partials } = require("discord.js");
require("dotenv").config();

const token = process.env.TOKEN_BOT;
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

const modList = ["mod 1", "mod 2", "mod 3"];

client.login(token);

client.on("ready", () => {
  console.log("Bot online");
});
client.on("messageCreate", (message) => {
  const command = message.content.split(" ")[0];
  console.log(command, message.content);
  switch (command) {
    case "!modList": {
      console.log("ecco tutte le mod:");
      modList.forEach((mod, i) => console.log(`${i + 1}| ${modList[i]}`));
      break;
    }
    case "!addMod": {
      console.log("e va bene aggiorno la lavagna");
      break;
    }
    case "!remMod": {
      console.log("va bene ma quanto mi fate lavorare però");
      break;
    }
  }
});
