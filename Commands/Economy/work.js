if (message.content === "!work") {

    const user = message.author;
    const amount = 100

    let beforeBalance = await db.get(`balance_${user.id}`)
    if (beforeBalance === null) {
      beforeBalance = 0;
      await db.set(`balance_${user.id}`, 0)
    }
    console.log(`Before: ${beforeBalance}`)
    await db.add(`balance_${user.id}`, amount);
    const afterBalance = await
      db.get(`balance_${user.id}`)
    console.log(`After ${afterBalance}`)

      let embed = new Discord.MessageEmbed()
        .setTitle("The day ends!")
        .setDescription(`Nice job at work! Here's your payment: ${amount}. Now you have **${afterBalance}** dollars in your account!`)
        .setColor("RANDOM")
        .setTimestamp()
      
      await message.channel.send({ embeds: [embed] })
  }
