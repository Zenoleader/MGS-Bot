//NOTE: If you just copy and paste this into a file without reeading anything, it will not work. Read the [REAME.md] file to understand more about this.
//This is the replit version of the code. Not making one for visual seeing we don't use visual. 

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req,res) => {
  res.send("Hello world");
})


//MESSAGES (prefix is "!")
const Discord = require("discord.js"); //v13 :)
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); //you can always add more 

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
  //add more here
 })  

client.on("ready", () => {
  //You can set your bots username and avatar here too
client.user.setPresence({activities: [{name: 'FLOOR IS NEON RED', TYPE: 'PLAYING'}], status: 'dnd'});
  
})

//This just shows what the client/bot latency is
client
  .on("debug", console.log)
  .on("warn", console.log)

//This here restarts the bot on a 429 (API ratelimit) or anything else.
client.on('debug', (a) => {
  if (a.startsWith(`Hit a 429`)) {
    process.kill(1)
  }
})

client.on("rateLimit", data => {
  process.kill(1)
})

client.on('rateLimited', () => {
  process.kill(1)
})

//This of course is the bot login.
client.login(process.env.token); //Refer to the readme to find out what this looks like for visual
