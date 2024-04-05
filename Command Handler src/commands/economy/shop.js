const Discord = require('discord.js');
const fs = require('fs');
const itemsData = fs.readFileSync("items.json");
const items = JSON.parse(itemsData);

module.exports = {
  name: 'shop',
  aliases: ['store', 'shops'],
  description: 'See the shop!',
  async execute(message) {
    const itemList = Object.values(items);
          
          const itemStrings = itemList.map((item) => {
          return `**${item.name}** -  ${item.description} **Cost:** ${item.value.toLocaleString()} Moolah`
          });
          
          const itemListEmbed = new Discord.MessageEmbed()
          .setTitle("Shop")
          .setDescription(itemStrings.join('\n'))
          .setColor("RANDOM")
          .setTimestamp()
          
          await message.channel.send({embeds: [itemListEmbed]})
  }
}
