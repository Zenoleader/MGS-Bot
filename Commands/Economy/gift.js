if(message.content.startsWith(';gift')) {

const [recipientMention, amountString] = message.content.trim().split(/\s+/).slice(1);
    const amount = parseInt(amountString);
    
    if (!recipientMention || !amount) {
      return message.channel.send("Please specify a recipient and an amount to gift!");
    }
    
    if (amount < 1) {
      
      return message.channel.send("You cannot gift less than 1!");
    }
    
    const recipientId = recipientMention.replace(/\D/g, '');
    const recipient = await message.client.users.fetch(recipientId);
    const senderBalance = await db.get(`balance_${message.author.id}`);
    
    if (senderBalance < amount) {

      return message.channel.send("You do not have enough money to gift that much cash!");
    }
    
    db.add(`balance_${recipient.id}`, amount);
    db.subtract(`balance_${message.author.id}`, amount);
    
    const embed = new Discord.MessageEmbed()
  .setTitle("Gift Successful!")
.setDescription(`**${message.author.tag}** has gifted ${recipient.tag} **${amount}** cash!`)
      .setColor("GREEN")
      .setTimestamp()

    await message.reply({ embeds: [embed] });
}
