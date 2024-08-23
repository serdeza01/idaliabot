const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "blacklist",
  category: "moderation",
  permissions: ["ADMINISTRATOR"],
  ownerOnly: false,
  usage: "blacklist [@member] [reason] [pseudo mc]",
  examples: ["blacklist @serdeza scam 50€ serdeza"],
  description: "Blacklist un utilisateur avec une raison et son pseudo mc",
  options: [
    {
      name: "member",
      description: "L'utilisateur a blacklist",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "La raison du blacklist",
      type: "STRING",
      required: true,
    },
    {
      name: "pseudomc",
      description: "Son pseudo mc exact",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction, guildSettings) {
    const member = interaction.options.getMember("member", true);
    const reason = interaction.options.getString("reason") || "Aucune raison indiquée.";
    const pseudomc = interaction.options.getString("pseudomc") || "Aucun pseudo mc indiquée.";
    const logChannel = client.channels.cache.get('1014814584516902913');

    if (!member)
      return interaction.reply({
        content: "Le membre n'a pas été trouvé!",
        ephemeral: true,
      });
    if (!member.bannable)
      return interaction.reply({
        content: "Ce membre ne peut pas être blacklist par le bot!",
        ephemeral: true,
      });

    const embed = new MessageEmbed()
      .setAuthor({
        name: `${interaction.member.displayName} (${interaction.member.id})`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setColor("#FF5C5C")
      .setDescription(
        `**Membre**: \`${member.user.tag}\` (${member.id})
      **Action**: Blacklist
      **Raison**: ${reason}
      **Pseudo mc**: ${pseudomc}`
      )
      .setTimestamp();

    await interaction.reply({
      content: `Le membre ${member} a été blacklist!`,
      ephemeral: true,
    });
    await logChannel.send({ embeds: [embed] });
    await member.ban({ reason: reason, days: 2500 });
  },
};