const os = require('node-os-utils');
const mem = os.mem
const cpu = os.cpu
const moment = require('moment');
const { stripIndent } = require('common-tags');
const Discord = require('discord.js')

module.exports = {
  name: 'botinfo',
  description: 'See the bot info!',
  async execute(message, args) {

let totalMemberCount = 0;
    message.client.guilds.cache.forEach(guild => {
      totalMemberCount += guild.memberCount;
    });
  
      const d = moment.duration(message.client.uptime);
      const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
      const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
      const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
      const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
      const clientStats = stripIndent`
            Servers   :: ${message.client.guilds.cache.size}
            Users     :: ${message.client.members.cache.size}
            Channels  :: ${message.client.channels.cache.size}
            WS Ping   :: ${Math.round(message.client.ws.ping)}ws
            Uptime    :: ${days}, ${hours}, ${minutes}, ${seconds}
         `;
      const { totalMemMb, usedMemMb } = await mem.info();
      const serverStats = stripIndent`
            Cores     :: ${cpu.count()}
            CPU Usage :: ${await cpu.usage()}%
            RAM       :: ${totalMemMb} MB
            RAM Usage :: ${usedMemMb} MB
  `;
  
        let botinfo = new Discord.MessageEmbed()
          .setTitle("Botinfo")
          .addFields(
            {
              name: 'Client:',
              value: `\`\`\`asciidoc\n${clientStats}\`\`\``,
              inline: true
            },
            {
              name: "Server:",
              value: `\`\`\`asciidoc\n${serverStats}\`\`\``,
              inline: true
            }
          )
          .setFooter(`Requested by ${message.author.tag}`)
          .setTimestamp()
          .setColor("RANDOM")

    message.channel.send({embeds: [botinfo]})
    
  }
}
