const Discord = require("discord.js")

module.exports = {
  name: '8ball',
  description: 'Get an answer from the 8ball!',
  async execute(message, args) {
    
  const response = args.join('');
  var choices = [ ' **It is certain**',   ' **It is decidedly so**',   ' **Without a doubt**',  ' **Yes definitely**',   ' **You may rely on it**',   ' **You can count on it**',  ' **As I see it, yes**',  ' **Most likely**', ' **Outlook good**', ' **Yes**',  ' **Signs point to yes**',  ' **Absolutely**',  ' **Ask again later**',  ' **Better not tell you now**',    ' **Cannot predict now**',  ' **Concentrate and ask again**',  " **Don't count on it**",   ' **My reply is no**',   ' **My sources say no**',   ' **Outlook not so good**',   ' **Very doubtful**', " **Chances aren't good**"
    ]
  //you can always add more choices!
    
    let embed = new Discord.MessageEmbed()
    .setTitle("8ball")
    .setDescription(`"${choices[Math.floor(Math.random() * choices.length)]}"`)
    .setColor("BURPLE")

    message.channel.send({embeds: [embed]})
  }
}
