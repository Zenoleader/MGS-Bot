const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req,res) => {
  res.send("Hello world");
})


//MESSAGES (!)
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
 if(message.content === "!textcommand") {
  message.channel.send("text here")
  } 
 }
})      

//HELP
client.on("messageCreate", message =>{
if(message.content === "!embedcommand") {
  let embed  = new Discord.MessageEmbed()
  .setTitle("text")
    .setAuthor("text")
  .setDescription("text")
      .addFields(
        {
        name: ';command',
        value: 'text'
        },
        {
          name: ';command',
          value: 'text'
        },
)
  .setColor("GREEN")
  .setTimestamp()
  message.channel.send({embeds: [embed]})
}
 })

//STATUS
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} 
  users, in ${client.channels.cache.size} channels of     
  ${client.guilds.cache.size} guilds.`);

client.on("ready", () => {
client.user.setPresence({activities: [{name: 'text here', TYPE: 'PLAYING'}], status: 'dnd'});
})

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token);
