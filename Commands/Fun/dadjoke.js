client.on("messageCreate", message => {

if(message.content === "!dadjoke") {
  const args = message.content.slice('!dadjoke'.length).trim().split(/ + /g);
  const response = args.join(''); 

var choices3 = [ 

"I'm afraid for the calendar. Its days are numbered.",
  "My wife said I should do lunges to stay in shape. That would be a big step forward.",
      "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
  "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
  "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "How do you follow Will Smith in the snow? You follow the fresh prints.",
  "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
  "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
  "What do you call a factory that makes okay products? A satisfactory.",
  "Dear Math, grow up and solve your own problems.",
]
   let embed = new Discord.MessageEmbed()

  .setTitle("Dad Joke")
    .setAuthor("Dad Joke")
  .addFields(
    {
      name: 'Your joke:',
      value: `${choices[Math.floor(Math.random() * choices.length)]}`
    }
  )
  .setTimestamp()
  .setColor("BLACK")

  message.channel.send({embeds: [embed]})
}
})
