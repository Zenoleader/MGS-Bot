const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['av'],
  description: 'See the avatar of you / other users!',
  async execute(message) {
     const user = message.mentions.users.first() || message.author;
  
      let AvEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s Avatar:`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor("RANDOM")
        .setTimestamp()
  
      message.channel.send({ embeds: [AvEmbed] })
  }
}
