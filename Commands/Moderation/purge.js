  if(message.content.startsWith("!purge")) {
    
         const args = message.content.slice('!purge'.length).trim().split(/ + /g);

        const query = args[0];
if(query > 100) return message.channel.send("Say a number under 100 👀")

    if (isNaN(query)) return message.channel.send("Send a number, not letters.")

if (!message.guild.me.permissions.has("MANAGE_MESSGAES")) return message.channel.send("I don't have perms buddy.");


      try {
const amount = parseInt(query);
const fetched = await message.channel.messages.fetch({
        limit: amount + 1,
      });
        
await message.channel.bulkDelete(fetched, true)
  .then(
message.channel.send(`Cleaned up ${amount} messages!`)
      );
        
    } catch (error) {
      console.log(error);
    }
}
