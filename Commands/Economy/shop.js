const fs = require('fs');
const itemsData = fs.readFileSync("items.json");
const items = JSON.parse(itemsData);

if(message.content === "!shop") {
          const itemList = Object.values(items);
          
          const itemStrings = itemList.map((item) => {
          return `**${item.name}** -  ${item.description} **Value:** ${item.value} coins`
          });
          
          const itemListEmbed = new Discord.MessageEmbed()
          .setTitle("Shop")
          .setDescription(itemStrings.join('\n'))
          .setColor("GREEN")
          
          await message.channel.send({embeds: [itemListEmbed]})
  }
