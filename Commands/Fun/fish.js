 if(message.content === ";fish") {
    
    var fish = [
      '🐟 | Common Fish',
      '🐟 | Common Fish',
      '🐟 | Uncommon Fish',
      '🐟 | Uncommon Fish',
      '🐟 | Rare Fish',
      '🐟 | Rare Fish',
      '🐟 | Epic Fish',
      '🐟 | Epic Fish',
    ]

    let fishembed = new Discord.MessageEmbed()
    .setTitle("🐟 Fish")
    .setAuthor("MGS", "https://cdn.discordapp.com/avatars/962834876665577542/da9b5215bb4a9f40d3b0cfe94a564eb2.png?size=4096")
    .addFields(
      {
        name: `${message.author.tag} fished...`,
        value: `${fish[Math.floor(Math.random() * fish.length)]}`
      }
    )
    .setColor("BLUE")
    .setTimestamp()


    message.channel.send({embeds: [fishembed]}) 
  } 
