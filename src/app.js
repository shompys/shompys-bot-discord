import dotenv from 'dotenv';
dotenv.config();
import {Client, Intents} from 'discord.js';

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE]
});

client.on('message', (message) => {
    console.log(message)
})

const {DISCORD_ACCESS_TOKEN} = process.env

client.login(DISCORD_ACCESS_TOKEN);

export default client;