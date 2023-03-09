if(message.content === '!buttons') {
 
  const row = new Discord.MessageActionRow()
    .addComponents(
          new Discord.MessageButton()
    .setCustomId("primary")
      .setLabel("Button 1")
      .setStyle('SECONDARY')
      
      ,new Discord.MessageButton()
      .setCustomId("secondary")
      .setLabel("Button 2")
      .setStyle('SECONDARY')
     
     ,new Discord.MessageButton()
     .setLabel("Hi")
     .setURL("google.com")
     .setStyle("LINK")
    )
  
  message.channel.send({content: 'Buttons!', components: [row]})
  
  //Code button interactions down here 👍
}
