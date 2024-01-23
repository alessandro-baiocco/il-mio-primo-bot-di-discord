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

client.on("messageCreate", (message) => {
  const command = message.content.split(" ")[0];
  const content = message.content.split(" ");
  switch (command) {
    case "!presentation": {
      message.channel.send("ciao sono un robot steward CL4P-TP ma tu puoi chiamarmi claptrap");
      break;
    }
    case "!modList": {
      message.channel.send("ecco tutte le mod:");
      let stringModList = "";
      modList.forEach((mod, i) => (stringModList += `${i + 1}| ${modList[i]} \n`));
      message.channel.send(stringModList);
      break;
    }
    case "!addMod": {
      message.channel.send("e va bene aggiorno la lavagna");
      modList.push(content.slice(1).toString().replace(",", " "));
      break;
    }
    case "!remMod": {
      message.channel.send("va bene ma quanto mi fate lavorare però");
      const index = content.slice(1) - 1;
      modList.splice(index, 1);
      break;
    }
  }
});
