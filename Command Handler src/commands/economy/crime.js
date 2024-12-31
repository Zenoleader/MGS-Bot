const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: 'crime',
  description: 'Commit a crime!',
  async execute(message, args) {
    
    // Add more crimes as needed  
    const crimes = [ { name: 'Cyberbullying', reward: 5000},  { name: 'Vandalism', reward: 10000}, { name: 'Shoplifting', reward: 25000},  { name: 'Harrassment', reward: 3000},  { name: 'Robbery', reward: 50000 },  { name: 'Hacking', reward: 100000 },  { name: 'Smuggling', reward: 15000 },  { name: 'Forgery', reward: 2000 },  { name: 'Tax Fraud', reward: 2500},  { name: 'Bribery', reward: 3000}];
    const randomCrime = crimes[Math.floor(Math.random() * crimes.length)];
    let success = Math.random() < 0.59;

    if (success) {
      let reward = randomCrime.reward;
      await db.add(`balance_${message.author.id}`, reward)
      
      let embed = new Discord.EmbedBuilder()
      .setTitle(`Crime committed!`)
      .setDescription(`You successfully committed **${randomCrime.name}** and earned **${reward.toLocaleString()}** Moolah!`)
      .setTimestamp()
      

      let log = new Discord.EmbedBuilder()
      .setTitle("A crime was committed!")
      .setDescription(`**${message.author.tag}** successfully committed **${randomCrime.name}**. Reward: **${reward.toLocaleString()}**`)
      .setTimestamp()
      
      // Send a log message to the designated channel
      const logChannel = message.client.channels.cache.get("LOG_CHANNEL_ID");
      if (logChannel) {
        logChannel.send({embeds: [log]});
      }
      return message.channel.send({embeds: [embed]});

    } else {

       let embed2 = new Discord.EmbedBuilder()
      .setTitle(`Crime committed!`)
      .setDescription(`You attempted to commit ${randomCrime.name}, but you got caught! Better luck next time.`)
      .setTimestamp()
      

      let log2 = new Discord.EmbedBuilder()
      .setTitle("A crime was committed!")
      .setDescription(`**${message.author.tag}** got caught while attempting **${randomCrime.name}**.`)
      .setTimestamp()

      const logChannel = message.client.channels.cache.get("LOG_CHANNEL_ID");
      if (logChannel) {
        logChannel.send({embeds: [log2]});
      }
      return message.channel.send({embeds: [embed2]});
    }  
  }
}
