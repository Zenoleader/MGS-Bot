if(message.content === "!help") {
 
  let helpembed = new Discord.MessageEmbed()
  .setTitle('Help')
  .setDescription("List your commands here!")
  .setFooter("Making more commands soon!!")
  
  message.channel.send({embeds: [helpembed]})
}
