if(message.content === "!botinfo") {
 
    let botInfo = new Discord.MessageEmbed()
    .setTitle("Bot Info")
   .setDescription(`ALL YOUR BOT's INFO HERE`)
   .setColor("NAVY")
   .setTimestamp()
     message.channel.send({embeds: [botInfo]})
  
}
