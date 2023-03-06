const os = require('node-os-utils');
const mem = os.mem
const cpu = os.cpu
const moment = require('moment');
const { stripIndent } = require('common-tags');

if(message.content === "!botinfo") {
 
     const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const clientStats = stripIndent`
          Servers   :: ${message.client.guilds.cache.size}
          Users     :: ${message.client.users.cache.size}
          Channels  :: ${message.client.channels.cache.size}
          WS Ping   :: ${Math.round(message.client.ws.ping)}ms
          Uptime    :: ${days}, ${hours}
          Prefix    :: ;
       `;
    const { totalMemMb, usedMemMb } = await mem.info();
    const serverStats = stripIndent`
          Cores     :: ${cpu.count()}
          CPU Usage :: ${await cpu.usage()}%
          RAM       :: ${totalMemMb} MB
          RAM Usage :: ${usedMemMb} MB
`;
 
 let botinfo = new Discord.MessageEmbed()
.setTitle("Bot stats")
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
 .setColor("GREEN")
 
 message.channel.send({embeds: [botinfo]})
 
}
