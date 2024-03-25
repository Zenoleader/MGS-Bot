const Discord = require('discord.js')

module.exports = {
  name: 'serverinfo',
  description: "Check the information for a guild!",
  async execute(message, args) {

     const guild = await message.guild.fetch();
    const { name, memberCount,createdAt  } = guild;

     const owner = await guild.fetchOwner();
    const ownerTag = owner.user.username;
 const rolesCount = guild.roles.cache.size;
    const voiceChannelsCount = guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size;
    const textChannelsCount = guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size;
        const categoriesCount = guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size;
    const creationDate = createdAt.toLocaleString('en-US', {
      timeZone: 'CST',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    
  const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Server Info: ${name}`)
.setThumbnail(guild.iconURL({ dynamic: true }))
.setFooter({text:`ID: ${message.guild.id} | Server Created: ${creationDate}`})
    .addFields(
       { name: 'Owner', value: `${ownerTag}`, inline: true },
       { name: 'Category Channels', value: `${categoriesCount}`, inline: true },
      { name: 'Text Channels', value: `${textChannelsCount}`, inline: true },
       { name: 'Voice Channels', value: `${voiceChannelsCount}`, inline: true },
      { name: 'Member Count', value: `${memberCount.toString()}`, inline: true },
      { name: 'Roles', value: `${rolesCount}`, inline: true }
    )

    message.channel.send({embeds: [embed]})
  }
}
