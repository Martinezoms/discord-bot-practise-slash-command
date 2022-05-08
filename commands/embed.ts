import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Testing",
  description: 'Sends an embed',

  permissions: ['ADMINISTRATOR'],

  callback: async({message}) => {

    const embed = new MessageEmbed()
    .setDescription('Hello world')
    .setTitle('Title')
    .setColor('RED')
    .setAuthor({name: 'Zoms'})
    .setFooter({text: 'Made with ❤️'})
    .addFields([{
      name: 'name',
      value: 'value',
      inline: true
    },
    {
      name: 'name2',
      value: 'value2',
      inline: true
    }
  ])
  .addField('name3', 'value3')


    const newMessage = await message.reply({
      embeds: [embed]
    })

    await new Promise(resolve=>setTimeout(resolve, 5000))

    const newEmbed = newMessage.embeds[0]

    newEmbed.setTitle('New title')

    newMessage.edit({
      embeds: [newEmbed]
    })
  }
} as ICommand