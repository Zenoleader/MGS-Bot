const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
  name: 'togglerob',
  description: 'Toggle the rob command!',
  async execute(message) {

     if (!message.member.permissions.has("MODERATE_MEMBERS")) return message.channel.send("You don't have perms to use thins!");
  
      const status = await db.get(`robCommandStatus_${message.guild.id}`);
      await db.set(`robCommandStatus_${message.guild.id}`, !status)

      await message.channel.send(`The rob command has been **${!status ? 'enabled' : 'disabled'}**.`)
    
  }
}
