const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: 'beg',
  description: 'Beg for cash!',
  async execute(message, args) {
    
    const user = message.author;
  
    const amount1 = [  "Stop begging. You really think someone is giving you something?", `Sure, why not. Here's **5** Moolah!`,  `Go away. I've got somewhere I've gotta be.`,  `Why?`,  "Nah. I am saving for something else.", `Of course! Here's **1000** Moolah!`,  "Never in a trillion years.", "You have L rizz tbh.",  "Can you not?", `God gives... **5000** Moolah!`, "Sit down, be humble.", "Is the sky purple?",  "You are?...",  "Who are you again?",  `I found **100** Moolah earlier, I guess you can have it.`,  `*throws **567** Moolah at you*`,  'Purplecake613 wants to give you **613** Moolah for your troubles.']
    const result = amount1[Math.floor(Math.random() * amount1.length)];
    let amount = 0;
    if (result.includes("**")) {
      if (result.includes("5")) {
        amount = 5;
      } else if (result.includes("1000")) {
        amount = 1000;
      } else if (result.includes("5000")) {
        amount = 5000;
      } else if (result.includes("100")) {
        amount = 100;
      } else if (result.includes("567")) {
        amount = 567;
      } else if (result.includes("613")) {
        amount = 613;
      }
    }
  
    let beforeBalance = await db.get(`balance_${user.id}`);
    if (beforeBalance === null) {
      beforeBalance = 0;
      await db.set(`balance_${user.id}`, 0);
    }
    await db.add(`balance_${user.id}`, amount);
    const afterBalance = await db.get(`balance_${user.id}`);
  
    await message.channel.send(`${result}`)
  }
}
