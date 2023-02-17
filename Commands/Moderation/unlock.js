if(message.content.startsWith('!unlock')) {

    const args = message.content.slice('!unlock'.length).trim().split(/ + /g);
    
let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;

const reason = args.join(" ")

    if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Can't manage channels.")
    if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send("Can't manage roles.")
    
     if (message.author.bot) return;
        if (message.member.permissions.has("KICK_MEMBERS")){      
                    if(message.guild.roles.cache.find(x => x.name === 'Member')) {
          message.channel.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === 'Member'), {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
});

message.channel.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === '@everyone'), {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
});        
  } else {
 message.channel.send("You need the Member role!")
}
message.channel.send("Channel unlocked!")             
  client.channels.cache.get('CHANNEL ID HERE').send(`Channel: ${message.channel}, Mod: ${message.author.tag}`)

} else {
message.channel.send("You can't use this")
    }
