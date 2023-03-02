const { Client, Intents, Collection, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

//failed to send
exports.failedMessage = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`Your message was deleted because it was not properly tagged. Replies to any post should be in the designated thread *(if applicable)*. If you would like to repost your message, please be sure to use one of the designated tags in that channel.`);

//support channel message
exports.supportChannel = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`You **MUST** start your post with one of the following tags, or it will get deleted automatically.

            !HAPPY - *Share some great news with the server!*
            !FEEDBACK - *Ask the community for feedback or advice.*
            !VENT - *Just venting! You don't want feedback, advice, or replies - but reaction emoji's are welcomed.*

*Please refrain from venting about server members, directly or indirectly.*

*For server complaints, or conflicts with another Discord member, please contact a Mod.*`);

//buy-sell channel message
exports.salesChannel = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`You **MUST** start your post with one of the following tags, or it will get deleted automatically.

            !BUY - *Shopping for an item! Don't forget to mention your budget!*
            !SELL - *Selling an item! Don't forget to mention your price!*`);

//ask-an-admin channel message
exports.adminChannel = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`You **MUST** start your post with one of the following tags, or it will get deleted automatically.

            !ASSIST - *Get assistance with a problem or concern.*
            !IDEA - *Make suggestions for the server.*
            
            *Please allow our moderation team a few hours to respond.*`);