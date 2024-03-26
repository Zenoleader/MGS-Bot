const { QuickDB } = require("quick.db");
const db = new QuickDB()
const Discord = require('discord.js')

module.exports = {
  name: 'fish',
  description: 'Go fishing!',
  async execute(message, pro) {
  
      var fish = ['🐟 | pirahna','🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | pirahna', '🐟 | salmon',  '🐟 | salmon', '🐟 | salmon',  '🐟 | salmon', '🐟 | salmon', '🐟 | salmon',  '🦀 | Crab', '🦀 | Crab',  '🦀 | Crab',   '🐟 | Epic Fish', '🐟 | Epic Fish', '🥾 | Right Shoe', '🥾 | Left Shoe', '💀 | Nothing. (Fish again!)',  '💀 | Nothing. (Fish again!)',  '💀 | Nothing. (Fish again!)', '💀 | Nothing. (Fish again!)', '💀 | Nothing. (Fish again!)',  '🧀 | Cheese (Purplecake is proud)',  '🍞 | Bread (oof.png is proud)', '🌿 | Seaweed', '💵 | Worthless Wet Cash', '🐠 | LEGENDARY FISH OMG OMG OMG', "🦈 | Shark"
      ]
  
      let amount = 0;
      let thing = fish[Math.floor(Math.random() * fish.length)]
      if (thing === '🐟 | pirahna') {
        amount = 10000
      }
      if (thing === '🐟 | salmon') {
        amount = 10001
      }
      if (thing === '🦀 | Crab') {
        amount = 20000
      }
      if (thing === '🐟 | Epic Fish') {
        amount = 100000
      }
      if (thing === '💀 | Nothing. (Fish again!)') {
        amount = 0
      }
      if (thing === '🥾 | Right Shoe') {
        amount = 1
      }
      if (thing === '🥾 | Left Shoe') {
        amount = 1
      }
      if (thing === '🧀 | Cheese (Purplecake is proud)') {
        amount = 900
      }
      if (thing === '🍞 | Bread (oof.png is proud)') {
        amount = 900
      }
      if (thing === '💵 | Worthless Wet Cash') {
        amount = 0;
      }
      if (thing === '🌿 | Seaweed') {
        amount = 2
      }
      if (thing === '🐠 | LEGENDARY FISH OMG OMG OMG') {
        amount = 200000
      }
      if (thing === '🦈 | Shark') {
        amount = 2000000
      }
  
      let beforeBalance = await db.get(`balance_${user.id}`)
      if (beforeBalance === null) {
        beforeBalance = 0;
        await db.set(`balance_${user.id}`, 0)
      }
      console.log(`${message.author.username} Before fish: ${beforeBalance.toLocaleString()}`)
      await db.add(`balance_${user.id}`, amount);
      const afterBalance = await
      await db.get(`balance_${user.id}`)
      console.log(`${message.author.username} After fish: ${afterBalance.toLocaleString()}`)
      
      let fishembed = new Discord.MessageEmbed()
        .setTitle("🐟 Fish")
        .addFields(
          {
            name: `${message.author.username} fished...`,
            value: `${thing}`
          }
        )
        .setFooter(`You just earned ${amount.toLocaleString()} cash!`)
        .setTimestamp()
  try {
      message.channel.send({ embeds: [fishembed] })
  } catch (error) {
    console.log(error)
    }
  }
}
