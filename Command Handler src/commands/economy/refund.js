const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
  name: 'refund',
  description: 'Refund a user!',
  async execute(message, args) {

    if(message.author.id === 'Your ID here') {

      const [recipientMention, amountString] = message.content.trim().split(/\s+/).slice(1);
      const amount = parseInt(amountString);
      
      if (!recipientMention || !amount) {
        return message.channel.send("Please specify a recipient and an amount to refund!");
      }
      
      if (amount < 1) {
        return message.channel.send("You cannot refund less than 1.");
      }
      
      const recipientId = recipientMention.replace(/\D/g, '');
      const recipient = await message.client.users.fetch(recipientId);
      
      await db.add(`balance_${recipient.id}`, amount);
      message.client.channels.cache.get("Your log ID").send({content: `Refunder: ${message.author.tag} | ${message.author.id} **${message.author.tag}** has refunded ${recipient.tag} **${amount.toLocaleString()}** Moolah!`}) 
      await message.channel.send(`**${message.author.username}** has refunded ${recipient.username} **${amount.toLocalestring()}** Moolah!`);
        
      } else {
      await message.channel.send("Only the developers can use this!")
    }
  }
}
