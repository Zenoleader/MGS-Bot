const Discord = require('discord.js');
const fetch = require('node-fetch');

//It's more than likely that this API no longer works.

module.exports = {
  name: 'meme',
  description: 'Get a meme!',
  async execute(message) {
    const userId = message.author.id;

    message.reply('fetching you a meme...').then(async (msg) => {
      try {
        const response = await fetch('https://www.reddit.com/r/dankmemes/random/.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch meme: ${response.statusText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid response from Reddit API');
        }

        const meme = data[0].data.children[0].data;

        const embed = new Discord.MessageEmbed()
          .setTitle(meme.title)
          .setURL(meme.url)
          .setImage(meme.url)
          .setAuthor('MGS')
          .setFooter(`👍 ${meme.ups} - 👎 ${meme.downs} | 💬 ${meme.num_comments}`)
          .setColor('RANDOM')
          .setTimestamp();

        msg.edit({ content: 'Meme found!', embeds: [embed] });
      } catch (error) {
        console.error('Failed to fetch meme:', error);
        msg.edit(`Failed to fetch a meme. Please try again later. (${error.message})`);
      }
    });
  }
};
