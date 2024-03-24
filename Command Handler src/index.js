 //This project was made by Zeno#2951, oof.png#2521, and Purplecake613#4099 (discord users). Founders of Mountain Gaming Studios.
  //Make sure to play FLOOR IS NEON RED on Roblox and give it a like and favorite!
  //All rights reserved.
  
  const express = require("express");
  const app = express();
  
  app.listen(3000, () => {
    console.log("Project is running! Play floor is neon red on Roblox! ( ͡° ͜ʖ ͡°)  ");
  })
  
  app.get("/", (req, res) => {
    res.send("Hello there ( ͡° ͜ʖ ͡°).  This project was made by Zeno#2951, oof.png#2521, and Purplecake613#4099 (discord users). Founders of Mountain Gaming.");
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
  const pro = "https://cdn.discordapp.com/avatars/962834876665577542/c82491d1cbec349c6b9f6178b9e7e869.webp?size=512"

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(message, args, pro);
  } catch (error) {
    console.error(error);
    message.reply({content: 'An error occurred while executing the command.', ephemeral: true});
  }
});

client.login(process.env.token);
