const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req,res) => {
  res.send("Hello friend");
})


//MESSAGES (;)
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === ";links") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Click this to get our Discord!")
      .setURL("https://discord.gg/zenoyt-official-server-845476765702946846")
    .setAuthor("Links", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setTimestamp()

    let embed2 = new Discord.MessageEmbed()
    .setTitle("Click this link for our game!")
.setURL("https://www.roblox.com/games/7231457999/FLOOR-IS-NEON-RED")
    .setAuthor("Links", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setTimestamp()

    let embed3 = new Discord.MessageEmbed()
    .setTitle("Click this link for our Roblox group!")
.setURL("https://www.roblox.com/groups/11791011/Mountain-Gaming-Studios")
    .setAuthor("Links", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setTimestamp()

    let embed4 = new Discord.MessageEmbed()
    .setTitle("CLick this link for our website!")
.setURL("https://mountainfinr.wixsite.com/mountaingaming")
    .setAuthor("Links", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setTimestamp()
    
    message.channel.send({embeds: [embed, embed2, embed3, embed4]})
  }
})

client.on("messageCreate", message => {
  if(message.content === ";status") {
 message.channel.send("Up and running")
  }
})

client.on("messageCreate", message => {
  if(message.content === ";update") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Updates:")
    .setAuthor("Update", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setDescription("We are on the Christmas update right now!")
    .setColor("PURPLE")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
  }
})

client.on("messageCreate", message => {
  if(message.content === ";roblox web play") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Click this link to play!")
    .setAuthor("Roblox web play", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setURL("https://carl.gg/game/roblox")
    .setColor("AUQA")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
  }
})

client.on("messageCreate", message => {
if(message.content === ";joke") {
  message.channel.send("no lol")
  }
})

client.on("messageCreate", message => {
if(message.content === ";robux") {
  message.channel.send("no codes yet!")
  }
})

client.on("messageCreate", message => {
if(message.content === ";add") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Click this to get the link!")
  .setAuthor("Add", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
  .setURL("https://discord.com/api/oauth2/authorize?client_id=962834876665577542&permissions=139586816064&scope=bot%20applications.commands")
  .setColor("BLURPLE")
  .setTimestamp()
 message.channel.send({embeds: [embed]})

  } else if(message.content === ";logs") {
  //LOGS
      let embed = new Discord.MessageEmbed()
      .setTitle("Bot update logs:")
        .setAuthor("Logs", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
        .addFields(
          {
            name: 'Log #1',
            value: 'Zeno#2951 committed a new version: Time stamps & logs. Committed on 12/23/22'
          },
          {
            name: 'Log #2',
            value: 'Zeno#2951 committed a new version: 24/7 watch code. Committed on 12/23/22'
          }
        )
      .setTimestamp()
 message.channel.send({embeds: [embed]})

  }
})                            

//WEBSITE & TEAM
client.on("messageCreate", message => {
 if(message.content === ";team") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Team members")
  .setAuthor("Team", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .setDescription("Hey there! Here are the team members of Mountain Gaming Studios:")
  .addFields(
        {
        name: 'Zeno#2951',
        value: 'CEO & founder of Mountain Gaming, Codes JS & LUA, lead developer of Mountain Gaming discord bot & FLOOR IS NEON RED on Roblox. Epic coder🧑‍💻 '
        },
        {
        name: 'oof.png#2521',
        value: 'Co-founder of Mountain Gaming, Codes in LUA, Devloper(scripter) for FLOOR IS NEON RED on Roblox. BreadMaster🍞'
        },
    {
      name: 'Purplecake613#4099',
      value: 'Co-founder of Mountain Gaming, Devloper(builder) for FLOOR IS NEON RED on Roblox. urg burg cheese meese🧀'
    },
    {
name: 'ninjaxp30#4203',
      value: 'Developer(builder) for FLOOR IS NEON RED on Roblox'
    },
    {
      name: 'DannyCool65#3214',
      value: 'Developer(Builder) for FLOOR IS NEON RED on Roblox'
    },
    )
      .setColor("GREEN")
  .setTimestamp()
    message.channel.send({embeds: [embed]})

  } else if(message.content === ";alert") {
      let embed  = new Discord.MessageEmbed()
    .setTitle("Alert from the Developers!")
    .setAuthor("Alert", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
  .setDescription("Our latest update consists of new commands and hopefully slash commands! We added a new command called ;Team which gives you our team members with a breif description. Then we have slash commands. They will hopefully be here by the end of this year, but no guarantees. Have an amazing Christmas and enjoy the update!")
  .setColor("ORANGE")
  .setTimestamp()
  message.channel.send({embeds: [embed]})
    } else if(message.content === ";botinfo") {
         let embed  = new Discord.MessageEmbed()
    .setTitle("Bot Info")
    .setAuthor("BotInfo", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
   .setDescription("Username: Mountain Gaming Studios#6861, Created on Apr 10, 2022, Made by Mountain Gaming Studios, Watching 16 servers, Family Friendly Bot, Not full developed. ")
   .setColor("NAVY")
   .setTimestamp()
     message.channel.send({embeds: [embed]})
 } 
})                            
//HELP
client.on("messageCreate", message =>{
if(message.content === ";help") {
  let embed  = new Discord.MessageEmbed()
  .setTitle("Commands")
    .setAuthor("Help", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
  .setDescription("Hey there! Here are the commands you're going to need(Note: all commands are case sensitive):")
      .addFields(
        {
        name: ';update',
        value: 'Gives update on the game'
        },
        {
          name: ';joke',
          value: 'gives a good joke'
        },
        {
          name: ';add',
          value: 'gives link to add the bot'
        },
        {
          name: ';robux',
          value: 'Drops robux codes occasionally'
        },
        {
          name: ';roblox web play',
          value: 'gives link to play roblox on a website'
        },
        {
          name: ';status',
          value: 'gives status on the game FLOOR IS NEON RED on Roblox'
        },
        {
          name: ';links',
          value: 'Gives important links related to the bot'
        },
        {
          name: ';team',
          value: 'Gives the name of all the developers'
        },
        {
          name: ';alert',
          value: 'Gives alerts from the development team!'
        },
        {
          name: ';botinfo',
          value: 'Gives info about our bot!'
        },
        {
          name: ';logs',
          value: 'Gives the logs on what your developers have been updating!'
        }
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
client.user.setActivity(`🎄Watching ${client.guilds.cache.size} servers`);
});

client.on("ready", () => {
client.user.setPresence({activities: [{name: '🎄Merry Christmas!'}], status: 'dnd'});
})

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token);
