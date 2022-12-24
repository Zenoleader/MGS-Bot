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
  if(message.content === "1links") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Click this to get our Discord!")
      .setURL("")
    .setAuthor("Links")
    .setTimestamp()

    let embed2 = new Discord.MessageEmbed()
    .setTitle("Click this link for our game!")
.setURL("")
    .setAuthor("Links")
    .setTimestamp()

    let embed3 = new Discord.MessageEmbed()
    .setTitle("Click this link for our Roblox group!")
.setURL()
    .setAuthor("Links")
    .setTimestamp()

    let embed4 = new Discord.MessageEmbed()
    .setTitle("CLick this link for our website!")
.setURL("")
    .setAuthor("Links")
    .setTimestamp()
    
    message.channel.send({embeds: [embed, embed2, embed3, embed4]})
  }
})

client.on("messageCreate", message => {
  if(message.content === "!status") {
 message.channel.send("Up and running")
  }
})

client.on("messageCreate", message => {
  if(message.content === "!update") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Updates:")
    .setAuthor("Update")
    .setDescription("")
    .setColor("PURPLE")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
  }
})

client.on("messageCreate", message => {
  if(message.content === "!roblox web play") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Click this link to play!")
    .setAuthor("Roblox web play")
    .setURL("")
    .setColor("AUQA")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
  }
})

client.on("messageCreate", message => {
if(message.content === "!joke") {
  message.channel.send("")
  }
})

client.on("messageCreate", message => {
if(message.content === "!robux") {
  message.channel.send("")
  }
})

client.on("messageCreate", message => {
if(message.content === "!add") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Click this to get the link!")
  .setAuthor("Add")
  .setURL("")
  .setColor("BLURPLE")
  .setTimestamp()
 message.channel.send({embeds: [embed]})

  } else if(message.content === "!logs") {
  //LOGS
      let embed = new Discord.MessageEmbed()
      .setTitle("Bot update logs:")
        .setAuthor("Logs")
        .addFields(
          {
            name: 'Log #1',
            value: ''
          },
          {
            name: 'Log #2',
            value: ''
          }
        )
      .setTimestamp()
 message.channel.send({embeds: [embed]})

  }
})                            

//WEBSITE & TEAM
client.on("messageCreate", message => {
 if(message.content === "!team") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Team members")
  .setAuthor("Team")
    .setDescription("Hey there! Here are the team members of NAME:")
  .addFields(
        {
        name: '',
        value: ''
        },
        {
        name: '',
        value: ''
        },
    {
      name: '',
      value: ''
    },
    {
name: '',
      value: ''
    },
    {
      name: '',
      value: ''
    },
    )
      .setColor("GREEN")
  .setTimestamp()
    message.channel.send({embeds: [embed]})

  } else if(message.content === "!alert") {
      let embed  = new Discord.MessageEmbed()
    .setTitle("Alert from the Developers!")
    .setAuthor("Alert")
  .setDescription("")
  .setColor("ORANGE")
  .setTimestamp()
  message.channel.send({embeds: [embed]})
    } else if(message.content === "!botinfo") {
         let embed  = new Discord.MessageEmbed()
    .setTitle("Bot Info")
    .setAuthor("BotInfo")
   .setDescription("")
   .setColor("NAVY")
   .setTimestamp()
     message.channel.send({embeds: [embed]})
 } 
})                            
//HELP
client.on("messageCreate", message =>{
if(message.content === "!help") {
  let embed  = new Discord.MessageEmbed()
  .setTitle("Commands")
    .setAuthor("Help")
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
client.user.setPresence({activities: [{name: 'text here'}], status: 'dnd'});
})

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token);
