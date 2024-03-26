module.exports = {
  name: 'ping',
  description: 'Get the ping for the bot!',
  execute(message) {
message.channel.send(`🏓 Pong! API: ${client.ws.ping}ms`)    
  }
}
