//We will make this an Economy command at some point. 

if(message.content === "!fish") {
    
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
