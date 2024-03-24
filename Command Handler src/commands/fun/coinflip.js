module.exports = {
  name: 'coinflip',
  description: 'Flip a coin!',
  async execute(message, args) {
 
  const response = args.join('');  
  var coinres = [
    'Heads',
    'Tails'
  ]

    if(!coinres.includes(response)) {
    return message.channel.send("Please choose a valid side: Heads or Tails.")
    }

  message.channel.send(`You chose ${response}. You got ${coinres[Math.floor(Math.random() * coinres.length)]}`)
  }
}
