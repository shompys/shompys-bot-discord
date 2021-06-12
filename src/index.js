
import client from './app';

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} is connected`);
})