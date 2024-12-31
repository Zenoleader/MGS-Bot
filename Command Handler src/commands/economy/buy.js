//a little broken

const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const itemsData = fs.readFileSync("items.json");
const items = JSON.parse(itemsData);

const abbreviations = {
  k: 1e3,
  m: 1e6,
  b: 1e9,
  t: 1e12,
};

function parseAmount(input) {
  const match = input.toLowerCase().match(/^([0-9.]+)([kmbt]?)$/);

  if (match) {
    const value = parseFloat(match[1]);
    const abbreviation = match[2];

    if (!isNaN(value) && value > 0 && abbreviations.hasOwnProperty(abbreviation)) {
      return value * abbreviations[abbreviation];
    } else if (!abbreviation || abbreviation === 'all') {
      return match[1].toLowerCase() === 'all' ? Infinity : parseFloat(match[1]);
    }
  }

  return null;
}

module.exports = {
  name: 'buy',
  aliases: ['purchase'],
  description: 'Purchase an item',
  async execute(message, args, pro) {
    const user = message.mentions.users.first() || message.author;
    const userId = message.author.id;
    const itemId = args[0];
    let quantity = args[1] ? parseAmount(args[1]) || 1 : 1;

    try {
      if (!itemId || !items[itemId]) {
        return message.channel.send("Please specify a valid item ID. (NO CAPITAL LETTERS)");
      }

      if (isNaN(quantity) || quantity <= 0) {
        quantity = 1;
      }

      const item = items[itemId];
      let itemVal = item.value;
      itemVal = Math.floor(item.value * 0);
      const itemPrice = itemVal * quantity;
      const balance = await db.get(`balance_${user.id}`);

      if (balance < itemPrice) {
        return message.channel.send(`You do not have enough cash to buy ${quantity.toLocaleString()}x ${item.name}!`);
      }

      await db.sub(`balance_${user.id}`, itemPrice);
      const inventory = await db.get(`inventory_${user.id}`) || {};
      inventory[itemId] = (inventory[itemId] || 0) + quantity;
      await db.set(`inventory_${user.id}`, inventory);

      const boughtEmbed = new Discord.EmbedBuilder()
        .setTitle("🪙 | Item purchased!")
        .setDescription(`You bought **${quantity.toLocaleString()}x ${item.name}** for **${itemPrice.toLocaleString()}** cash!`)
        .setTimestamp();

      const receiptEmbed = new Discord.EmbedBuilder()
        .setTitle("🪙 | Item purchased!")
        .setDescription(`**${message.author.username}** bought **${quantity.toLocaleString()}x ${item.name}** for **${itemPrice.toLocaleString()}** cash!`)
        .setFooter({text: `ID: ${message.author.id}`})
        .setTimestamp();

      message.client.channels.cache.get("CHANNEL_ID").send({ content: `User ID: ${message.author.id}`, embeds: [receiptEmbed] });
      await message.channel.send({ embeds: [boughtEmbed] });
    } catch (error) {
      console.log(error)
    }
  }
};
