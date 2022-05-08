import { ButtonInteraction, Interaction, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: 'Testing',
  description: 'Testing',

  slash: true,
  testOnly:true,

  callback: async({interaction:  msgInt, channel}) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('ban_yes')
          .setEmoji('🔨')
          .setLabel('Confirm')
          .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
          .setCustomId('ban_no')
          .setLabel('Cancel')
          .setStyle('DANGER')
      )

      const linkRow = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setURL('https://youtube.com')
            .setLabel('Go to Youtube')
            .setStyle('LINK')
        )


      await msgInt.reply({
        content: 'Are you  sure?',
        components: [row, linkRow],
        ephemeral: true,
      })

      const filter = (btnInt: Interaction) => {
        return msgInt.user.id === btnInt.user.id
      }

      const collector = channel.createMessageComponentCollector({
        filter,
        max: 1,
        time: 1000 * 15,

      })

      // collector.on('collect', (int: ButtonInteraction) => {
      //   int.reply({
      //     content: 'You clicked a button',
      //     ephemeral:true,
      //   })
      // })

      collector.on('end', async(collection) => {
        collection.forEach((click) => console.log(click.user.id, click.customId))


        if(collection.first()?.customId === 'ban_yes') {
          // Do something
        }

        await msgInt.editReply({
          content: 'An action has already been taken',
          components: [],
        })
      })


  }
} as ICommand