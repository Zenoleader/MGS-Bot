const Discord = require("discord.js");
const math = require('mathjs');

client.on("messageCreate", message => {

if(message.content.startsWith('!calculate')) {
  const args = message.content.slice(';calculate'.length).trim().split(/ + /g);
  const response = args.join(''); 

  
    let embed = new Discord.MessageEmbed()
    
    try {
      embed
        .setTitle("Caluculate")
       .setDescription(`Equation: ${response}, Solution: ${String(math.evaluate(response))})
    } catch (err) {
     message.channel.send("There was an error!")
    }
     message.channel.send({embeds: [embed]})
  } 
  })
