import { Message, MessageEmbed } from 'discord.js';

export const commandsGeneric = async discord => {
    
    const { content, channel, author } = discord;
    
    const msg = content.toLowerCase();

    const commandsCase = {

        '!hola' : () => channel.send(`Que tal ${author}`),
        '!doc' : () => channel.send(`https://github.com/shompys/shompys-bot-discord`),
        '!ping' : () => {
            
            const embed = new MessageEmbed();
            embed.setTitle(`Pong`)
            embed.setColor(`0xff0000`)
            embed.setDescription(`pong`)
            channel.send(embed);
        },
        '!avatar' : () => channel.send(author.displayAvatarURL())
    }

    commandsCase[msg] && commandsCase[msg]();
    
}