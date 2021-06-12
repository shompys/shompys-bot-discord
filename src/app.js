import dotenv from 'dotenv';
dotenv.config();
import {Client, Intents} from 'discord.js';
import { commandsBotInit, commandsGeneric } from './controllers/command.controllers';

const client = new Client();
// {
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE]
// }

//client bot
client.on('ready', commandsBotInit(client));

// client discord
client.on('message', commandsGeneric);


client.login(process.env.DISCORD_ACCESS_TOKEN);

export default client;