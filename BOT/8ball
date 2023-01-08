if(message.content.startsWith('!8ball')) {
   const args = message.content.slice(';report'.length).trim().split(/ + /g);
  const response = args.join('');
  var choices = [
    
        ' **It is certain**',
        ' **It is decidedly so**',
        ' **Without a doubt**',
        ' **Yes definitely**',
        ' **You may rely on it**',
        ' **You can count on it**',
        ' **As I see it, yes**',
        ' **Most likely**',
        ' **Outlook good**',
        ' **Yes**',
        ' **Signs point to yes**',
        ' **Absolutely**',
        ' **Ask again later**',
        ' **Better not tell you now**',
        ' **Cannot predict now**',
        ' **Concentrate and ask again**',
        " **Don't count on it**",
        ' **My reply is no**',
        ' **My sources say no**',
        ' **Outlook not so good**',
        ' **Very doubtful**',
        " **Chances aren't good**"
        //you can always add more choices!
    ]
    
    let embed = new Discord.MessageEmbed()
    .setTitle("8ball")
    .setAuthor("8ball")
    .addFields(
      {
        name: 'Question:',
        value: response
      },
      {
        name: 'Answer:',
        value: `${choices[Math.floor(Math.random() * choices.length)]}`
      }
    )
    .setColor("BURPLE")
    .setTimestamp()
    message.content.send({embeds: [embed]})
}
