if(message.content === "!modal") {
 const modal = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageButton()
      .setCustomId('modal-button')
      .setStyle('PRIMARY')
      .setLabel('Modal :)') 
      );
  
  message.channel.send({components: [modal]})
}

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === 'modal-button') {
    const modal = new Discord.Modal()
        .setCustomId('test-modal')
        .setTitle('Modal test!')
        .addComponents([
          new Discord.MessageActionRow()
          .addComponents(
          new Discord.TextInputComponent()
              .setCustomId('modal-input')
              .setLabel('STill testing')
              .setStyle('SHORT')
              .setMinLength(1)
              .setMaxLength(10)
              .setPlaceholder('Say something')
              .setRequired(true),
          )
        ]);
      
            await interaction.showModal(modal);
    }
    
    if (!interaction.isModalSubmit()) return;
  
if (interaction.customId === 'test-modal') {
  
const response = interaction.fields.getTextInputValue('modal-input');
  
interaction.reply(`Got it: ${response}`);
  
    }
    }) 
