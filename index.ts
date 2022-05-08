import DiscordJs, {Intents} from "discord.js"
import mongoose from "mongoose"
import WOKCommands from "wokcommands"
import path from 'path'
import dotenv from "dotenv"

import testSchema from './test-schema'

// Initializing dotenv
dotenv.config()


const client = new DiscordJs.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', async() => {
  // await mongoose.connect(process.env.MONGO_URI || '', {
  //   keepAlive: true,

  // })

  new WOKCommands(client, {
    commandDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['970064163428769843'],
    botOwners: ['626830641949835264'],
    mongoUri: process.env.MONGO_URI,
  })

  setTimeout(async() => {
    await new testSchema({
      message: 'Hello world'
    }).save()
  }, 1000)



})



// Starting/Logging in bot
client.login(process.env.TOKEN)