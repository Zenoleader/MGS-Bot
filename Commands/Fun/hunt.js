if(message.content === "!hunt") {
   
       var animals = [
      '🐿 | Squirrel',
      '🦇 | Bat ',
      '🦝 | Raccoon',
      '🦊 | Fox',
      '🦫 | Beaver',
      '🥫 | Can',
      '💀 | Nothing.',
      '🐻 | BEAR',
    ]

    message.channel.send(`${message.author.tag} got a ${animals[Math.floor(Math.random() * animals.length)]}`)
}
