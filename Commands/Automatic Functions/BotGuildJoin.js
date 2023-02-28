client.on("guildCreate", (guild, message) => {

client.channels.cache.get('YOUR CHANNEL ID').send(`We joined a server: Server Name: ${guild.name}, Server Owner ID: ${guild.ownerId}, Member Count: ${guild.memberCount}`)

})
