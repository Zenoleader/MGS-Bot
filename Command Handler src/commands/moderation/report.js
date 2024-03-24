module.exports = {
  name: 'report',
  description: 'Report a user or bug!',
  async execute(message, args) {
    
  const response = args.join('');
  message.client.channels.cache.get('CHANNEL_ID HERE').send(response+" :USER ID-"+message.author.id+" :SERVER ID-"+message.guild.id)
  message.channel.send('Sent!')
    
  }
}
