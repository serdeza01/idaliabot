const Logger = require('../../utils/Logger');
const chalk = require('chalk');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    Logger.client('- bot prêt');

    const devGuild = await client.guilds.cache.get('1013135600506908723');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
  execute(client) {
    const oniChan = client.channels.cache.get(process.env.TICKET_CHANNEL)

    function sendTicketMSG() {
      const embed = new MessageEmbed()
        .setTitle('**🔗 Support IdaliaMc**\n')
        .setColor('6d6ee8')
        .setDescription("\n\n:pushpin: **Réagissez avec la réaction ci dessous ( :question: ) afin d'obtenir notre aide.**\n\n➜ Sans réponse de votre part, le ticket sera **fermé au bout de 24 heures.**\n➜ Expliquez de manière détaillée votre problème afin que nous puissions vous aider dans les meilleures conditions.\n➜ Merci d'indiquer **votre pseudo en jeu** afin de nous permettre de vous aider rapidement.\n\n:alarm_clock: **Évitez de créer des tickets durant les périodes de faible activité comme la nuit ou tôt le matin.**")
        .setThumbnail("https://cdn.discordapp.com/attachments/922138253170204683/1021110103790866502/logo_black.png")
        .setFooter('Support IdaliaMc')
      const row = new MessageActionRow()
        .addComponents(new MessageButton()
          .setCustomId('open-ticket')
          .setLabel('Ouvrir un ticket.')
          .setEmoji('❓')
          .setStyle('PRIMARY'),
        );

      oniChan.send({
        embeds: [embed],
        components: [row]
      })
    }

    oniChan.bulkDelete(100).then(() => {
      sendTicketMSG()
      console.log(chalk.green('Ticket') + chalk.cyan(' Envoie du widget pour le système de ticket...'))
    })
  },
};
