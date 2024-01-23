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

const oldMods = [];
let newMods = [];

client.login(token);

client.on("messageCreate", (message) => {
  const command = message.content.split(" ")[0];
  const content = message.content.split(" ");
  try {
    switch (command) {
      case "!presentation": {
        message.channel.send("ciao sono un robot steward CL4P-TP ma tu puoi chiamarmi claptrap");
        break;
      }
      case "!modList": {
        if (oldMods.length > 0) {
          message.channel.send("ecco tutte le mod:");
          let stringModList = "";
          oldMods.forEach((mod, i) => (stringModList += `${i + 1}| ${oldMods[i]} \n`));
          if (newMods.length > 0) {
            stringModList += "----------mod nuove------------------\n";
            newMods.forEach((mod, i) => (stringModList += `${i + 1}| ${newMods[i]} \n`));
          } else {
            stringModList += "----------nessuna mod nuova------------------\n";
          }
          message.channel.send(stringModList);
        } else {
          message.channel.send("non c'e nessuna mod");
        }
        break;
      }
      case "!addMod": {
        message.channel.send("e va bene aggiorno la lavagna");
        const mod = content.slice(1).toString().replaceAll(",", " ");
        if (mod !== "") {
          oldMods.push(mod);
          newMods.push(mod);
        } else {
          message.channel.send("aspetta, ma non posso mettere " + mod + " è una stringa vuota");
        }
        break;
      }
      case "!remMod": {
        message.channel.send("va bene ma quanto mi fate lavorare però");
        const index = content.slice(1) - 1;
        if (oldMods.length > index && index !== NaN) {
          newMods.splice(newMods.indexOf(oldMods[index]), 1);
          oldMods.splice(index, 1);
        } else if (isNaN(index)) {
          message.channel.send("mi hai dato del testo? MA A ME SERVE UN NUMERO DA 1 A " + oldMods.length);
        } else {
          message.channel.send("ok lo rimuovo ASPETTA ma lista non è cosi lunga arriva massimo a " + oldMods.length);
        }
        break;
      }
      case "!clearMod": {
        if (newMods.length > 0) {
          message.channel.send("ok rimuovo le mod nuove, peccato");
          newMods = [];
        } else {
          message.channel.send("e cosa dovrei rimuovere? non c'e nessuna mod nuova. MI STAI PRENDENDO IN GIRO?");
        }
        break;
      }
    }
  } catch {
    message.channel.send("qualcosa è andato storto non credo di sentirmi bene");
  }
});
