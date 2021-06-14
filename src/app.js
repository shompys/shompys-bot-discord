import dotenv from 'dotenv';
dotenv.config();
import {Client, Intents} from 'discord.js';
import { commandsGeneric } from './controllers/commandsGeneric';
import { commandsBotInit } from './controllers/commandsBotInit';

const client = new Client();
// {
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE]
// }

//client bot init
client.on('ready', commandsBotInit(client));

// client discord commands
client.on('message', commandsGeneric);


client.login(process.env.DISCORD_ACCESS_TOKEN);

export default client;