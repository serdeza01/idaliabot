const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ip',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ip',
  examples: ['ip'],
  description: "Envoie l'ip du serveur !",

  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Ip serveur !')
      .setColor('005dec')
      .setDescription("__L'ip du serveur :__\n**play.idaliamc.fr** (1.8.9 - 1.18)")
    const ip = await interaction.reply({ embeds: [embed] });
  },
};