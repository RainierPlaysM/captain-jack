const Discord = require('discord.js');
const client = new Discord.Client()

const command = require('./commands.js');
// const config = require('./config.json');

client.on('ready', () => {
    console.log('Ayye aye, Captain! I am ready')

    client.user.setPresence({
        activity: {
            name: 'the island',
            type: 'WATCHING'
        }
    })
})

client.login(process.env.DJS_TOKEN)