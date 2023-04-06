if(message.content.startsWith('!rob')) {
         const args = message.content.slice('!rob'.length).trim().split(/ + /g);
        const amount = parseInt(args[0]);
      const target = message.mentions.users.first();
  
      if (isNaN(amount) || !target) {
        return message.channel.send("Please provide a valid amount and mention a user to rob.");
      }
  
      const targetId = target.id; 

  if(targetId === message.author.id) {
    return message.channel.send('Stop trying to rob yourself 💀')
  }
  
      const targetBalance = db.get(`balance_${targetId}`);
  
      if (amount > targetBalance) {
        return message.channel.send("That user does not have enough Moolah to rob.");
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
        db.get(`balance_${message.author.id}`)
      console.log(`After ${afterBalance}`)
       db.subtract(`balance_${targetId}`, amount);
  
        await message.channel.send(`You successfully robbed **${target.username}** and gained **${amount} ** Moolah!`);
        
      } else {
      const user2 = message.mentions.users.first();
   
        db.subtract(`balance_${message.author.id}`, 100)
        
        await message.channel.send(`You were caught trying to rob **${target.username}** and got nothing.`);
      }
}
