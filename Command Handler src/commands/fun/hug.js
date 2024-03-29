module.exports = {
  name: 'hug',
  description: 'Hug a user!',
  async execute(message, args) {
  
      let hugged = message.mentions.users.first()
      if (!hugged) return message.channel.send("You need to mention someone!")
    
      await message.channel.send(`${message.author.username} hugged ${hugged}!`)
      
  }
}
  
