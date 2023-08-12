module.exports = {
  name: 'ping',
  description: 'Get the ping for the bot!',
  execute(message) {

message.reply(`Pong! API: ${client.ws.ping}ms`)
    
  }
}
