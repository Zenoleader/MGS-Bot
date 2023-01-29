if(message.content.startsWith('!coinflip')) {
  const args = message.content.slice('!coinflip'.length).trim().split(/ + /g);
  const response = args.join('');  

  var coinres = [
    'Heads',
    'Tails'
  ]

  message.channel.send(`You chose ${response}. You got ${coinres[Math.floor(Math.random() * coinres.length)]}`)
