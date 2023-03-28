//REPORT 

client.on('messageCreate', message => {
if(message.content.startsWith('!report')) {

  const args = message.content.slice('!report'.length).trim().split(/ + /g);
  const response = args.join('');
  //this channel ID would be the logging channel, or the channel you want to see reports
client.channels.cache.get('CHANNEL_ID HERE').send(response+" :USER ID-"+message.author.id+" :SERVER ID-"+message.guild.id)
  message.channel.send('Sent!')
  
}
