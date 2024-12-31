const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
  name: 'work',
  description: 'Earn some money!',
  async execute(message) {

    const user = message.author;
    const amount = 1000 // you can always edit this

    let beforeBalance = await db.get(`balance_${user.id}`)
    if (beforeBalance === null) {
      beforeBalance = 0;
      await db.set(`balance_${user.id}`, 0)
    }
    console.log(`Before: ${beforeBalance}`)
    await db.add(`balance_${user.id}`, amount);
    const afterBalance = await db.get(`balance_${user.id}`)
    console.log(`After ${afterBalance}`)

      let embed = new Discord.EmbedBuilder()
        .setTitle("The day ends!")
        .setDescription(`Nice job at work! Here's your payment: ${amount}. Now you have **${afterBalance}** dollars in your account!`)
        .setTimestamp()
      
      await message.channel.send({ embeds: [embed] })
    
  }
}
