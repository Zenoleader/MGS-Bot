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
  
  if(message.content === "!hello") {
  message.channel.send("Hi!!")
  }
  
  if(message.content === "!ping") {
   message.channel.send(`${client.ws.ping}ws (pong!)`) 
  }
 })  

client.on("ready", () => {
  
client.user.setPresence({activities: [{name: 'FLOOR IS NEON RED', TYPE: 'PLAYING'}], status: 'dnd'});
  
})

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token);
