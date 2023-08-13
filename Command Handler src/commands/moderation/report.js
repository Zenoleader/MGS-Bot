module.exports = {
  name: 'togglerob',
  description: 'Toggle the rob command!',
  async execute(message, args) {
 const response = args.join('');
  //this channel ID would be the logging channel, or the channel you want to see reports
message.client.channels.cache.get('CHANNEL_ID HERE').send(response+" :USER ID-"+message.author.id+" :SERVER ID-"+message.guild.id)
  message.channel.send('Sent!')
  }
}
