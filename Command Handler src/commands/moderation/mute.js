const Discord = require('discord.js')

module.exports = {
  name: 'mute',
  description: 'Mute a user!',
  execute(message, args) {
    if (!message.member.permissions.has("MODERATE_MEMBERS")) return message.reply("I'm missing permissions!")

    let role = message.guild.roles.cache.find(role => role.name === "Muted")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")

    if (!reason) reason = "No reason specified!"
    if (!role) return message.reply("You don't have a role named Muted")
    if (!member) return message.reply("That member does not exist")
    if (member.roles.cache.has(role.id)) return message.reply("This person is already muted!")

    member.roles.add(role)
      .then(() => {
        message.client.channels.cache.get('YOU CHANNEL ID').send(`${member} was muted`)
        })
        message.reply(`${member} was muted!`)
  })
      })
  }
}
