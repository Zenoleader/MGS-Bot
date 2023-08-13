
module.exports = {
  name: 'coinflip',
  description: 'Toggle the rob command!',
  async execute(message, args) {
    const response = args.join('');  

  var coinres = [
    'Heads',
    'Tails'
  ]

  message.channel.send(`You chose ${response}. You got ${coinres[Math.floor(Math.random() * coinres.length)]}`)
  }
}
