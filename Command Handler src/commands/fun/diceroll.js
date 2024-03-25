const Discord = require('discord.js')

module.exports = {
  name: 'diceroll',
  aliases: 'dr',
  description: 'Roll a die!',
  execute(message, args, pro) {
      var choices2 = [  '**1**', '**2**', '**3**',  '**4**',  '**5**',  '**6**']
      message.channel.send(`${message.author.tag} rolled a ${choices2[Math.floor(Math.random() * choices2.length)]}!`)    
  }
}
