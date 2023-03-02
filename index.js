const { Client, Intents, Collection, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { newsChannel, supportChannel, adminChannel, salesChannel, failedMessage } = require("./autoMessages.js")
const timeout = 1 * 1000;
const TOKEN = process.env['TOKEN']
const client = new Client({
  intents: [Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGES,],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
let ventingMessageJob;

client.once('ready', async () => {
  console.log('Bot Ready');
});
//support
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.channel.id == "725160898431287324") /*Support Channel*/ {
    const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username

    console.log(`Post by ${nick} in ${message.channel.name}`)
    if (message.content.toLowerCase().includes("!vent")) {
      // do nothing, actually
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [supportChannel] })
        });
      }, timeout);
    }
    else if (message.content.toLowerCase().includes("!happy")) {
      message.channel.threads.create({
        name: `${nick} is feeling good!`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [supportChannel] })
        });
      }, timeout);
    }
    else if (message.content.toLowerCase().includes("!feedback")) {
      message.channel.threads.create({
        name: `${nick} is looking for feedback`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [supportChannel] })
        });
      }, timeout);
    }
    else {
      message.member.createDM().then(dmChannel => {
        try {
          dmChannel.send({ embeds: [failedMessage] });
          dmChannel.send("> " + message.content);
        } catch (ex) {
          console.log("Couldn't DM " + nick)
        }
      }).finally(() => {
        message.delete();
      })
      return;
    }
  }
});
//buy-sell
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.channel.id == "915384513452994590") /*buy-sell Channel*/ {
    const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username

    console.log(`Post by ${nick} in ${message.channel.name}`)
    if (message.content.toLowerCase().includes("!sell")) {
      message.channel.threads.create({
        name: `${nick} is selling something!`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [salesChannel] })
        });
      }, timeout);
    }
    else if (message.content.toLowerCase().includes("!buy")) {
      message.channel.threads.create({
        name: `${nick} is looking to buy something!`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [salesChannel] })
        });
      }, timeout);
    }
    else {
      message.member.createDM().then(dmChannel => {
        try {
          dmChannel.send({ embeds: [failedMessage] });
          dmChannel.send("> " + message.content);
        } catch (ex) {
          console.log("Couldn't DM " + nick)
        }
      }).finally(() => {
        message.delete();
      })
      return;
    }
  }
});
//ask-an-admin
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.channel.id == "839596740289626175") /*Ask-an-admin Channel*/ {
    const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username

    console.log(`Post by ${nick} in ${message.channel.name}`)
    if (message.content.toLowerCase().includes("!idea")) {
      message.channel.threads.create({
        name: `${nick} has a suggestion!`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [adminChannel] })
        });
      }, timeout);
    }
    else if (message.content.toLowerCase().includes("!assist")) {
      message.channel.threads.create({
        name: `${nick} is requesting assistance!`,
        startMessage: message,
        autoArchiveDuration: 1440
      }).catch(() => { })
      ventingMessageJob = setTimeout(() => {
        message.channel.messages.fetch({ limit: 4 }).then(messages => {
          messages.filter(m => m.author.bot)?.first()?.delete()
          message.channel.send({ embeds: [adminChannel] })
        });
      }, timeout);
    }
    else {
      message.member.createDM().then(dmChannel => {
        try {
          dmChannel.send({ embeds: [failedMessage] });
          dmChannel.send("> " + message.content);
        } catch (ex) {
          console.log("Couldn't DM " + nick)
        }
      }).finally(() => {
        message.delete();
      })
      return;
    }
  }
});

client.login(process.env.TOKEN);