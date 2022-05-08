import DiscordJs, {Intents} from "discord.js"
import WOKCommands from "wokcommands"
import path from 'path'
import dotenv from "dotenv"


// Initializing dotenv
dotenv.config()


const client = new DiscordJs.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {

  console.log('Bot is ready')

  new WOKCommands(client, {
    commandDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['970064163428769843'],
    botOwners: ['626830641949835264'],
  })


})



// Starting/Logging in bot
client.login(process.env.TOKEN)