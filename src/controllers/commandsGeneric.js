import { Message, MessageAttachment, MessageEmbed } from 'discord.js';

export const commandsGeneric = async discord => {
    
    const { content, channel, author } = discord;
    
    const msg = content.toLowerCase();

    // if(discord.content.includes('!link'))

    const commandsCase = {

        '!hola' : () => channel.send(`Que tal ${author}`),
        '!shompys-bot' : () => channel.send(`Ese soy yo`),
        '!documentacion' : () => channel.send(`https://github.com/shompys/shompys-bot-discord`),
        '!ping' : () => {
            
            const embed = new MessageEmbed();
            embed.setTitle(`Pong`)
            embed.setColor(`0xff0000`)
            embed.setDescription(`pong`)
            channel.send(embed);
        },
        '!avatar' : () => channel.send(author.displayAvatarURL()),
        '!rip' : () => {
            const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
            return channel.send(attachment);
        }
    }

    commandsCase[msg] && commandsCase[msg]();
    
}