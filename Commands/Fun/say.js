if(message.content.startsWith("!say")) {
 
   const args = message.content.slice('!say'.length).trim().split(/ + /g);
  const response = args.join('');
  
  message.channel.send(`${response}`)
  
}
