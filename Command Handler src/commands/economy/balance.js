const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
  name: 'balance',
  aliases: ['bal', 'bank'],
  description: 'See the balance of you / other users!',
  async execute(message) {

const user = message.author;
    const balance = await db.get(`balance_${user.id}`)
    if (balance === null) {
      await message.channel.send(`${user} doesn't have a balance.`)
    } else {
       const format = balance.toLocaleString()
      await message.channel.send(`${user}'s balance is currently ${format} Cash!`)
    }

  }
}
