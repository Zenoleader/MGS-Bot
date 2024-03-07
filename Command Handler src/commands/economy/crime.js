const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const cooldow = {};

module.exports = {
  name: 'crime',
  description: 'Flip a coin and gamble Moolah',
  async execute(message, args, pro) {
      
      const crimes = [
  { name: 'Cyberbullying', reward: 5000},
  { name: 'Vandalism', reward: 10000},
  { name: 'Shoplifting', reward: 25000},
  { name: 'Harrassment', reward: 3000},
  { name: 'Robbery', reward: 50000 },
  { name: 'Hacking', reward: 100000 },
  { name: 'Smuggling', reward: 15000 },
  { name: 'Forgery', reward: 2000 },
  { name: 'Tax Fraud', reward: 2500},
  { name: 'Bribery', reward: 3000}
  
  // Add more crimes as needed
];
    const randomCrime = crimes[Math.floor(Math.random() * crimes.length)];
    let success = Math.random() < 0.59;

    if (success) {
      let reward = randomCrime.reward;
await db.add(`balance_${message.author.id}`, reward)
      let embed = new Discord.MessageEmbed()
      .setTitle(`Crime committed!`)
       .setAuthor("MGS", pro)
      .setDescription(`You successfully committed **${randomCrime.name}** and earned **${reward.toLocaleString()}** Moolah!`)
      .setTimestamp()
      

        let log2 = new Discord.MessageEmbed()
      .setTitle("A crime was committed!")
       .setAuthor("MGS", pro)
      .setDescription(`**${message.author.tag}** successfully committed **${randomCrime.name}**. Reward: **${reward.toLocaleString()}**`)
      .setColor("DARK_RED")
      .setTimestamp()
      
      // Send a log message to the designated channel
      const logChannel = message.client.channels.cache.get("log channel id");
      if (logChannel) {
        logChannel.send({embeds: [log2]});
      }
           return message.reply({embeds: [embed]});

    } else {

       let embed2 = new Discord.MessageEmbed()
      .setTitle(`Crime committed!`)
       .setAuthor("MGS", pro)
      .setDescription(`You attempted to commit ${randomCrime.name}, but you got caught! Better luck next time.`)
      .setTimestamp()
      

      let log = new Discord.MessageEmbed()
      .setTitle("A crime was committed!")
       .setAuthor("MGS", pro)
      .setDescription(`**${message.author.tag}** got caught while attempting **${randomCrime.name}**.`)
      .setColor("DARK_RED")
      .setTimestamp()

      const logChannel = message.client.channels.cache.get("log channel id");
      if (logChannel) {
        logChannel.send({embeds: [log]});
      }
      return message.reply({embeds: [embed2]});
    }
    
  }
}
