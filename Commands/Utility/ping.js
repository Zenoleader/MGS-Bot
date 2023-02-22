if(message.content === "!ping") {
 
  message.channel.send(`Pong! ${client.ws.ping}ws`)
  
}
