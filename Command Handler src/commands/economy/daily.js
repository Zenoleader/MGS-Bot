const Discord = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB()
module.exports = {
  name: 'daily',
  description: 'Get your daily!',
  async execute(message) {

      const user = message.author
      const lastClaimedDate = await db.get(`lastClaimed_${user.id}`);
  
      // Check if the user has already claimed their daily reward for the day
      if (lastClaimedDate === new Date().toLocaleDateString()) {
        return message.channel.send("You already claimed today.");
      }
  
      // Give the user their reward and update the last claimed date in the database
      // You can put any number, but here we'll choose a number using the possible variable
      var possible = [
        "10",
        "100",
        "20",
        "9,999",
        //You could also make a streak
        ]
      
      const rewardAmount = possible[Math.floor(Math.random() * possible.length)];
      await db.set(`lastClaimed_${user.id}`, new Date().toLocaleDateString());
      await db.add(`balance_${user.id}`, rewardAmount);
      
      return message.channel.send(`Nice! You claimed ${rewardAmount} coins from your daily! Come back tomorrow!`);

  }
}
