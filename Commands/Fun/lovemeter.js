if(message.content.startsWith('!lovemeter')) {

    let error = new Discord.MessageEmbed()
      .setTitle("Love meter")
    .setDescription("You can't find the love meter for yourself!")
    .setTimestamp()
    .setColor("RED")
    
      const args = message.content.slice('!lovemeter'.length).trim().split(/ + /g);
    
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    let user2 = message.author
    
      if (user.id === user2.id)
      return message.reply("Can't love yourself... sorry");

     const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = '❤️'.repeat(loveIndex) + '♡'.repeat(10 - loveIndex);

    message.channel.send(`Users: ${user.displayName} & ${message.author.tag}. Love: ${Math.floor(love)}%: \`${loveLevel}\``)
    
  }
