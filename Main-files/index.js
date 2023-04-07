//The making of a Discord Bot! Make sure to read the README.md file to understand it!

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

client.on("messageCreate", async message => {
 if(message.content === "!textcommand") {
  await message.channel.send("Your text goes here!")
  } 
 })      

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token); //make sure to have a secret in replit 
