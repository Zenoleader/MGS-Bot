const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
  name: 'rob',
  description: 'See the balance of you / other users!',
  async execute(message, args) {

        const amount = parseInt(args[0]);
        const target = message.mentions.users.first();
         
        const status = await db.get(`robCommandStatus_${message.guild.id}`);
        if(!status) {
          return message.channel.send("Sorry, rob is disabled here!")
        }
  
      if (isNaN(amount) || !target) {
        return message.channel.send("Please provide a valid amount and mention a user to rob.");
      }
  
      const targetId = target.id; 

  if(targetId === message.author.id) {
    return message.channel.send('Stop trying to rob yourself 💀')
  }
  
      const targetBalance = await db.get(`balance_${targetId}`);
  
      if (amount > targetBalance) {
        return message.channel.send("That user does not have enough Cash to rob.");
      }
  
      const success = Math.random() < 0.5;
  
      if (success)  {
  
      const user = message.mentions.users.first();
        
      let beforeBalance = await db.get(`balance_${message.author.id}`)
      if (beforeBalance === null) {
        beforeBalance = 0;
        await db.set(`balance_${message.author.id}`, 0)
      }
      console.log(`Before: ${beforeBalance}`)
      await db.add(`balance_${message.author.id}`, amount);
      const afterBalance = await
      await db.get(`balance_${message.author.id}`)
      console.log(`After ${afterBalance}`)
      await db.sub(`balance_${targetId}`, amount);
      const format = amount.toLocaleString()
  
      await message.channel.send(`You successfully robbed **${target.username}** and gained **${format} ** Cash!`);
        
      } else {   
        await db.sub(`balance_${message.author.id}`, 100)
        await message.channel.send(`You were caught trying to rob **${target.username}** and got nothing.`);
      }
    
  }
}
