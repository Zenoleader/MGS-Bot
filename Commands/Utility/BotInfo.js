//I know this command is seless, but I still like it & use it :)

if(message.content === "!botinfo") {
 
    let botInfo = new Discord.MessageEmbed()
    .setTitle("Bot Info")
   .setDescription(`ALL YOUR BOT's INFO HERE`)
   .setColor("NAVY")
   .setTimestamp()
     message.channel.send({embeds: [botInfo]})
  
}
