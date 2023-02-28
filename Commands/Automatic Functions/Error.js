//If the console has an error, it automatically restarts the bot.

client.on('debug', (a) => {
  if(a.startsWith(`Hit a 429`)) {
    process.kill(1)
  }
})

client.on("rateLimit", data => {
  process.kill(1)
})

client.on('rateLimited', () => {
  process.kill(1)
}) 
