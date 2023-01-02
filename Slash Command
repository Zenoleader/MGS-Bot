const dotenv = require("dotenv")
dotenv.config()

const guildID = "SERVER ID HERE"
const guild = client.guilds.cache.get(guildID)

let commands
if(guild) {
  commands = guild.commands
}
else {
  commands = client.application?.commands
  commands?.create(
    {
    name: 'ping',
    description: 'Replies with pong!'
    }
    
  )
}
client.on("interactionCreate", async interaction => {
  if(!interaction.isCommand()) return;
  
  if(interaction.commandName === "ping") {
 await interaction.reply('pong') 
  } 
});

//if you want to make slash commands public, delete lines 8-10.
