const fetch = require('node-fetch');

if (message.content === '!meme') {
     
    const response = await fetch('https://www.reddit.com/r/memes/random/.json');
    const json = await response.json();
    const meme = json[0].data.children[0].data;

    const embed = new Discord.MessageEmbed()
      .setTitle(meme.title)
      .setImage(meme.url)
      .setFooter(`👍 ${meme.ups} | 💬 ${meme.num_comments}`)

    message.channel.send({ embeds: [embed] });
  }
