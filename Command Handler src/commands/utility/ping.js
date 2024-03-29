module.exports = {
  name: 'ping',
  description: 'Get the ping for the bot!',
  execute(message) {
    
 await message.channel.send("Calculating...").then((msg) => {
      const pingpong = msg.createdTimestamp - message.createdTimestamp
      msg.edit({ content: `Calculated: **Bot Latency:** ${pingpong}ms **API Latency:** ${message.client.ws.ping}ms`})
    })
    
  }
}
