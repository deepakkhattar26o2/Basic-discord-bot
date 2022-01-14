const discord = require('discord.js')
require('dotenv').config()
const messageController = require('./commands/message')
const client = new discord.Client({
    intents: [
      discord.Intents.FLAGS.DIRECT_MESSAGES,
      discord.Intents.FLAGS.GUILDS,
      discord.Intents.FLAGS.GUILD_MESSAGES  
    ]
})

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!!`)
})

client.on("messageCreate", messageController.onMessageCreate)

client.login(process.env.TOKEN) 
