//EMBED

client.on("messageCreate", message => {
if(message.content === "!commandhere") {

let embed = new Discord.MessageEmbed()
.setTitle("text here")
.setDescription("text here")
.setFooter("text here")

message.channel.send({embeds: [embed]})

   }
   })
