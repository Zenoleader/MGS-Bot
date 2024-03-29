const Discord = require('discord.js')

module.exports = {
  name: 'report',
  description: 'Report a user or bug!',
  async execute(message, args) {

  if(args < 1)  {
  return message.channel.send("Please supply a report!")
  }
    
  const response = args.join('');

  let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} has submitted a report!`)
  .addFields(
    { name: 'REPORT', value: `**${response}**`}, {  name: 'USERNAME & ID', value: `${message.author.username} [] ${message.author.id}` }, { name: "GUILD NAME & ID", value: `${message.guild.name} [] ${message.guild.id}`}
  )
    
  await message.client.channels.cache.get('CHANNEL_ID HERE').send({embeds: [embed]})
  await message.channel.send('Your report has been submitted!')
    
  }
}
