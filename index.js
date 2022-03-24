const { Client, Intents, Collection, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { newsChannel, supportChannel } = require("./autoMessages.js")
const timeout = 30 * 1000;
const TOKEN = process.env['TOKEN']
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,  
    Intents.FLAGS.DIRECT_MESSAGES,] , 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
let ventingMessageJob;

client.once('ready', async () => {
    console.log('Bot Ready');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.id == "955174581453344839") /*News Channel*/ { 
        const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username
		
        console.log(`Post by ${nick} in ${message.channel.name}`)
        if(message.content.toLowerCase().includes("[share]")){
            // do nothing, actually
            ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [newsChannel]})
            });
        }, timeout); 
        }
        else if(message.content.toLowerCase().includes("[news]")){
            message.channel.threads.create({
                name : `${nick}'s News Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
               ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [newsChannel]})
            });
        }, timeout); 
        }
        else if(message.content.toLowerCase().includes("[politics]")){
            message.channel.threads.create({
                name : `${nick}'s Political Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
                ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [newsChannel]})
            });
        }, timeout); 
        }
        else {
            message.member.createDM().then( dmChannel => {
                try{
                    dmChannel.send(`Your message in <#955174581453344839> was deleted because it was not properly tagged. Replies to !news or !politics should be in the designated thread. If you would like to repost your message, please be sure to tag with !news or !politics or !vent.`);
                    dmChannel.send("> " + message.content);
                } catch (ex)
                {
                    console.log("Couldn't DM " + nick)
                }
            }).finally(() => {
                message.delete();
            })
            return;
        }
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.id == "955502472712028220") /*Ask an admin Channel*/ { 
        const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username
		
        console.log(`Post by ${nick} in ${message.channel.name}`)
        if(message.content.toLowerCase().includes("!vent")){
            // do nothing, actually
        }
        else if(message.content.toLowerCase().includes("!suggestion")){
            message.channel.threads.create({
                name : `${nick}'s Suggestion Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
        }
        else if(message.content.toLowerCase().includes("!help")){
            message.channel.threads.create({
                name : `${nick}'s Help Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
        }
        else {
            message.member.createDM().then( dmChannel => {
                try{
                    dmChannel.send(`Your message in <#955502472712028220> was deleted because it was not properly tagged. Replies to !help or !suggestion should be in the designated thread. If you would like to repost your message, please be sure to tag with !help or !suggestion or !vent`);
                    dmChannel.send("> " + message.content);
                } catch (ex)
                {
                    console.log("Couldn't DM " + nick)
                }
            }).finally(() => {
                message.delete();
            })
            return;
        }
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.id == "952955922001571843") /*Find Events Channel*/ { 
        const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username
		
        console.log(`Post by ${nick} in ${message.channel.name}`)
        if(message.content.toLowerCase().includes("http")){
            // do nothing, actually
        }
        else {
            message.member.createDM().then( dmChannel => {
                try{
                    dmChannel.send(`Your message in <#952955922001571843> was deleted because it did not contain any links to a website. If you would like to repost your message, please be sure to include at least 1 website link.`);
                    dmChannel.send("> " + message.content);
                  
                } catch (ex)
                {
                    console.log("Couldn't DM " + nick)
                }
            }).finally(() => {
                message.delete();
            })
            return;
        }
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.id == "956182387115573248") /*Support-vent Channel*/ { 
        const nick = message.guild.members.resolve(message.author.id).nickname ?? message.author.username
		
        console.log(`Post by ${nick} in ${message.channel.name}`)
        if(message.content.toLowerCase().includes("[vent]")){
            // do nothing, actually
                    ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [supportChannel]})
            });
        }, timeout); 
        }
        else if(message.content.toLowerCase().includes("[feedback]")){
            message.channel.threads.create({
                name : `${nick}'s Feedback Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
          ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [supportChannel]})
            });
        }, timeout); 
        }
        else if(message.content.toLowerCase().includes("[happy]")){
            message.channel.threads.create({
                name : `${nick}'s Celebration Thread`,
                startMessage: message,
                autoArchiveDuration: 1440
            }).catch(() => {})
                    ventingMessageJob = setTimeout(() => {
            message.channel.messages.fetch({limit: 4}).then(messages => {
                messages.filter(m => m.author.bot)?.first()?.delete()
                message.channel.send({embeds: [supportChannel]})
            });
        }, timeout); 
        }
        else {
            message.member.createDM().then( dmChannel => {
                try{
                    dmChannel.send(`Your message in <#956182387115573248> was deleted because it was not properly tagged. Replies to !happy or !feedback should be in the designated thread. If you would like to repost your message, please be sure to tag with !happy or !feedback or !vent`);
                    dmChannel.send("> " + message.content);
                } catch (ex)
                {
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