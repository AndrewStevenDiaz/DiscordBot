const { Client, Intents, Collection, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

//news channel message
exports.newsChannel = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`You **MUST** tag your post with one of the following tags, or it will get deleted automatically.

            [NEWS] - A thread is created to discuss this article.
            [POLITICS] - A thread is created to discuss politics.
            [SHARE] - You're not interested in making a thread to chat in.
            
            Political conversations can get hot. We're all friends here. Don't be a dick.`);

//support channel message
exports.supportChannel = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`You **MUST** tag your post with one of the following tags, or it will get deleted automatically.

            [FEEDBACK] - A thread is created for feedback, advice, or discussing the topic at hand.
            [VENT] - Just for venting! No feedback is being asked for, so please don’t provide any.
            [HAPPY] - A thread is created so we can celebrate with you!
            
            No venting about people on the server. No passive-aggressive vents.`);