import { MessageAttachment } from 'discord.js';

export const commandsGeneric = async discord => {
    
    const { content, channel, author } = discord;
    
    const msg = content.toLowerCase();

    // if(discord.content.includes('!link'))

    const commandsCase = {

        '!hola' : () => channel.send(`Que tal ${author}`),
        '!shompys-bot' : () => channel.send(`Ese soy yo`),
        '!documentacion' : () => channel.send(`https://github.com/shompys/shompys-bot-discord`),
        '!ping' : () => channel.send(`pong`),
        '!avatar' : () => channel.send(author.displayAvatarURL()),
        '!rip' : () => {
            const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
            return channel.send(attachment);
        }
    }

    commandsCase[msg] && commandsCase[msg]();
    
} 

export const commandsBotInit = client => async () => {
    
    console.log(`Bot ${client.user.tag} is connected`);
    // console.log(client.channels)
    
}