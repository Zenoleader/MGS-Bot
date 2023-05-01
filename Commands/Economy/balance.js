const db = require('quick.db')

clinet.on("messageCreate", async message => {
if (message.content.startsWith("!balance")) {
    const user = message.author;
    const balance = await db.get(`balance_${user.id}`)
    if (balance === null) {
      await message.channel.send(`${user} doesn't have a balance.`)
    } else {
       const format = balance.toLocaleString()
      await message.channel.send(`${user}'s balance is currently ${format} Cash!`)
    }
  }
})
