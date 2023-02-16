if(message.content.startsWith("!slowmode")) {
   
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if(!message.member.permissions.has('MANAGE_MESSAGES')) 
      return message.channnel.send("You don't have permission!");
if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) 
   return message.channel.send("I don't have permission!");
   
     message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(`Slowmode was set to ${args[0]} seconds!`)
   
 } 
