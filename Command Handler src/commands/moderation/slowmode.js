const Discord = require('discord.js')

module.exports = {
  name: 'slowmode',
  description: 'Add a slowmode to a channel!',
  async execute(message) {
  
      const messageArray = message.content.split(' ');
      const args = messageArray.slice(1);
      if (!message.member.permissions.has('MANAGE_MESSAGES'))
        return message.channel.send("You need to have the permission manage messages to use this command!")
      if (!message.guild.me.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("I don't have permission to run this command!")
  
      let Sucess = new Discord.MessageEmbed()
        .setTitle("Slowmode set!")
        .setDescription(`Success! Slowmode was set to ${args[0]} Seconds!`)
        .setColor("RANDOM")
        .setTimestamp()
  
      message.channel.setRateLimitPerUser(args[0]);
      message.channel.send({ embeds: [Sucess] })
  }
}
