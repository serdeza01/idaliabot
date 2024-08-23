const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'site',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'site',
  examples: ['site'],
  description: 'Envoie le lien du site internet !',

  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Site internet !')
      .setColor('005dec')
      .setDescription('__Le lien du site est :__\nhttps://www.idaliamc.fr')
    const site = await interaction.reply({ embeds: [embed] });
  },
};