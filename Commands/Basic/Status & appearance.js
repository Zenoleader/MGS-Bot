//STATUS

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} 
  users, in ${client.channels.cache.size} channels of     
  ${client.guilds.cache.size} guilds.`);

client.user.setPresence({activities: [{name: 'text here', TYPE: 'PLAYING'}], status: 'dnd'});
})
