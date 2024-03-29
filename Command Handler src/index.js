//This project was made by zenoytleader, ploof.png, and hayleepurplecake (discord users). Founders of MGS.
//All rights reserved.
  
  const express = require("express");
  const app = express();
  
  app.listen(3000, () => {
    console.log("Project is running! ( ͡° ͜ʖ ͡°)  ");
  })
  
  app.get("/", (req, res) => {
    res.send("Hello there ( ͡° ͜ʖ ͡°).  This project was made by zenoytleader, ploof.png, and hayleepurplecake (discord users). Founders of MGS.");
  })
  
  
  
  //MESSAGES (;)
  const Discord = require("discord.js");
  const client = new Discord.Client({
    partials: ["CHANNEL"], intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
  });

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on('messageCreate', message => {
    const prefix = "!" //set as desired
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
  }
});

client.login("TOKEN");
