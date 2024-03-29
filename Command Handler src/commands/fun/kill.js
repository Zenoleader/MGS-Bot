module.exports = {
  name: 'kill',
  description: 'Kill someone!',
  async execute(message, args) {
  
      let victim = message.mentions.users.first()
      if (!victim) return message.channel.send("You need to mention someone!")
  
      await message.channel.send(`${victim} Died`)
  }
}
