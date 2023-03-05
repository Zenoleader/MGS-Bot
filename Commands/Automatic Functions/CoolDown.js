const cooldowns = new Map();

if(message.content === "!cooldown") {
if (cooldowns.has(message.author.id)) {
      const remainingTime = cooldowns.get(message.author.id) - Date.now();
      
      if (remainingTime > 0) {
        return message.channel.send(`Wait ${remainingTime/ 1000} more seconds.`);
      }
    }
  
  message.channel.send("Hi")
  
    const cooldownTime = 5; // Time in seconds
    cooldowns.set(message.author.id, Date.now() + cooldownTime * 1000);
}
