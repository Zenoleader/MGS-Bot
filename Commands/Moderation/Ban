if(message.content.startsWith('!ban')) {
    
     const args = message.content.slice('!ban'.length).trim().split(/ + /g);
    const reason = args.join(''); 
    if (!args[0]) return message.reply("You need to mention someone.")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You don't have perms to use thins!");
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I don't have permission to ban people!");
    if (message.member.id === member.id) return message.channel.send("You can't ban yourself :\");

    member.ban({ reason: reason })
    
    
client.channels.cache.get('LOGS CHANNEL_ID HERE').send(`Banned user: ${member} Reason: ${reason} Mod: ${message.author}`)
message.channel.send(`User banned!`)
