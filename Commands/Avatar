if(message.content.startsWith("!av")) {
   
const user = message.mentions.users.first() || message.author;

let AvEmbed = new Discord.MessageEmbed()
   .setTitle(`${user.username}'s Avatar:`)
   .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
   .setColor("GREEN")
   .setTimestamp()

   message.channel.send({embeds: [AvEmbed]})
