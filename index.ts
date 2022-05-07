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
    testServers: '970064163428769843'
  })

//   const guildId = '970064163428769843'
//   const guild = client.guilds.cache.get(guildId)
//   let commands

//   if(guild) {
//     commands = guild.commands
//   }else {
//     commands = client.application?.commands
//   }

//   //Creating a slash command
//   commands?.create({
//     name: 'ping',
//     description: 'Replies with pong'
//   })

//   // Adding two numbers command
//   commands?.create({
//     name: 'add',
//     description: 'Adds two numbers',
//     options: [
//       {
//         name: 'num1',
//         description: 'The first number',
//         required: true,
//         type: DiscordJs.Constants.ApplicationCommandOptionTypes.NUMBER
//       },
//       {
//         name: 'num2',
//         description: 'The second number',
//         required: true,
//         type: DiscordJs.Constants.ApplicationCommandOptionTypes.NUMBER
//       }
//     ]
//   })
// })

// client.on('interactionCreate', async(interaction) => {
//   if(!interaction.isCommand()) {
//     return;
//   }

//   const {commandName, options} = interaction

//   if(commandName === 'ping') {
//     interaction.reply({
//       content: 'pong',
//       ephemeral: true
//     })
//   }else if(commandName === 'add') {
//     const num1 = options.getNumber('num1')!
//     const num2 = options.getNumber('num2')!

//     await interaction.deferReply({
//       ephemeral: true
//     })

//     await new Promise(resolve => setTimeout(resolve, 5000))

//     await interaction.editReply({
//       content: `Great!...The sum is ${num1 + num2}`,
//     })
//   }


})



// Starting/Logging in bot
client.login(process.env.TOKEN)