//This would be a command for bot devs only :)

if(message.content.startsWith('!refund')) {
if(message.author.id === 'Your ID here') {

   const [recipientMention, amountString] = message.content.trim().split(/\s+/).slice(1);
      const amount = parseInt(amountString);
      
      if (!recipientMention || !amount) {
        return message.channel.send("Please specift a recipient and an amount to refund!");
      }
      
      if (amount < 1) {
        return message.channel.send("You cannot refund less than 1.");
      }
      
      const recipientId = recipientMention.replace(/\D/g, '');
      const recipient = await message.client.users.fetch(recipientId);
  
  if(recipientId === message.author.id) {
    return message.channel.send("You can't refund yourself!");
  }
      
      
      db.add(`balance_${recipient.id}`, amount);
   
      client.channels.cache.get("Your log ID").send({content: `Refunder: ${message.author.tag} | ${message.author.id} **${message.author.tag}** has refunded ${recipient.tag} **${amount}** Moolah!`})
  
await message.channel.send(`**${message.author.tag}** has refunded ${recipient.tag} **${amount}** Moolah!`);
        
      } else {
  await message.channel.send("Only the devs can use this!")
      }
    }
