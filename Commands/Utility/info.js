if(message.content.startsWith("!userinfo")) {
  
   const args = message.content.slice('!userinfo'.length).trim().split(/ + /g);
 let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;
   
    let embed = new Discord.MessageEmbed()
      
    .setTitle(`${user.user.tag} User Info`)
    .setColor("RANDOM")
    .setThumbnail(user.user.displayAvatarURL(({ dynamic: true, size: 512 })))
    .setDescription(`User ID: ${user.id}, Joined: <t:${user.joinedTimestamp}:f>, Created: <t:${user.user.createdTimestamp}:f>, Username: ${user.nickname || user.user.username}, Role count: ${user.roles.cache.size}  `)
                  
.setTimestamp()
    
   message.channel.send({embeds: [embed]})
