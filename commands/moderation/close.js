const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'close',
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'close [raison]',
  examples: ['close [réglé]'],
  description: "Ferme un ticket automatiquement avec une raison !",

  async runInteraction(client, interaction) {
		if(message.channel.name.includes('idaliamc')) {
			client.message.channel.delete();
		}
		else {
			return message.reply('Cette commande ne marche que dans des tickets ');
		}
  }
};