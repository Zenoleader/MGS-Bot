[![MGS GitHub Banner](https://user-images.githubusercontent.com/119907481/219827160-c69c91be-0c53-4fa0-9b97-7f649683fab4.png)](https://mountaingamingstudio.wixsite.com/mountaingaming)


# [MGS Discord Bot](https://discord.com/application-directory/962834876665577542)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#MGS-Discord-Bot">Main Page</a>
    </li>
    <li>
      <a href="#INFO">Info</a>
    </li>
    <li>
    <a href="#DEVELPMENT-TEAM">Meet the team!</a>
    </li>
    <li><a href="#UPDATES">Updates</a></li>
     <li><a href="#FEATURED-COMMANDS">Featured Commands</a></li>
      <li><a href="#LINKS">Links</a></li>
       <li><a href="#MGS-GitHub-ToS">Our ToS & Privacy Policy</a></li>
  </ol>
</details>

------------------------------------------------------------------------------------------------------------------------------------------------------
**THIS BOT IS MADE BY zenoytleader, hayleepurplecake, and ploof.png!**

In places where it says token, you need to make a secret in [replit](https://replit.com) or [visual code](https://code.visualstudio.com/) (for visual studio, you need to paste your actual token in the login. Ex: client.login("YOUR BOT TOKEN") ). Name the secret token and paste you discord bots token there. discord.js is needed to make all of this work. You can always add more commands or edit the ones already there. If any errors are found, just tell us, we don't want you guys to not understand why it didn't work.

replit: 
```js 
client.login(process.env.token);
```

visual studio: 
```js 
client.login("TOKEN");
```

* Note: We think the reason for this is for your bots safety. Visual studio is a one person platform, so your token can't really be seen by anyone else unless you show them. Replit projects are all public, so anyone can see it (unless you pay to get it private). That's why replit created the [secret](https://docs.replit.com/programming-ide/workspace-features/storing-sensitive-information-environment-variables) tool so all your tokens or private things stay private.

**⚠️[MOUNTAIN GAMING STUDIOS](https://mgsbot.vercel.app) IS NOT RESPONSIBLE FOR ANY DATA LOSS OR BOT FRAUD. IF YOU COMMIT FRAUD, BREAK DISCORD TOS, OR FIND ANY WAY TO GET YOUR BOT BANNED OR ACCOUNT BANNED, WE ARE NOT RESPONSIBLE. TO SUM IT UP: WE ARE NOT RESPONSIBLE FOR ANYTHING YOU DO.⚠️**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **INFO:**

Made with [node.js](https://nodejs.org/en/), programmed by [Mountain Gaming Studios](https://mgsbot.vercel.app/), 100% safe, interaction bot. Please don't edit the code for the wrong reasons. Use this nicely. All file names are what you need to name them when creating your file. For example, if you're trying to do the [index.js](https://github.com/Zenoleader/MGS-Bot/blob/main/Main-files/index.js), you need to go to where ever you are programming and make a file called [index.js](https://github.com/Zenoleader/MGS-Bot/blob/main/Main-files/index.js). Same for everything else. You will need to download **[discord.js v13](https://v13.discordjs.guide/)**. No other version will work with the code provided. The MGS bot team uses [replit](https://replit.com) to program our bot (We recommend this if you are working with a team)! (Codes are all modified so they don't look exactly like the actual MGS commands. This is due to copying and people being lazy)

**YOU ADD ALL THE COMMANDS IN THE INDEX.JS FILE INSIDE THE SAME CLIENT:** 

```js
const Discord = require('discord.js')
//remember it's v13

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 
//you can always add more intents

client.on("messageCreate", message => {
  if(message.content === 'hello') {
    message.channel.send("Hi.")
  }
  if(message.content === "this is the second thing") {
  message.channel.send("Ok 👌")
  }
}) 
``` 

*refer to [Example Code.js](https://github.com/Zenoleader/MGS-Bot/blob/main/Example%20Code.js) if you still don't understand.

**DOWNLOAD [DISCORD.JS](https://discord.js.org/#/): ```npm i discord.js@13.15.1```** 

**⚠️ WE WILL NOT SPOON FEED YOU WITH PROGRAMMING. IF YOU DON'T UNDERSTAND SOMETHING PLEASE TRY TO FIGURE IT OUT FIRST THEN ASK US.⚠️**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **DEVELOPMENT TEAM:**

**zenoytleader**- CEO & founder of MGS, Programs in node.js, LUA, HTML, & CSS. Lead developer of MGS Discord bot & FLOOR IS NEON RED.

**ploof.png**- Co-founder of MGS, Programs in LUA, Devloper for FLOOR IS NEON RED. BreadMaster🍞

**hayleepurplecake**- Co-founder of MGS, Devloper for FLOOR IS NEON RED and MGS Discord bot. urg burg cheese meese🧀

**ninjaxp30**- Developer for FLOOR IS NEON RED.

**DannyCool65#3214**- Developer for FLOOR IS NEON RED on Roblox.

Want to join Mountain Gaming Studios? Refer to here: [MGS Applications](https://github.com/Zenoleader/MGS-Bot/blob/main/.github/Issues%20Template/Applications.md). We thank you for checking our studio out!! 👍

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **UPDATES**

MGS has been hard at work since it's last github update! MGS has released new and improved features of commands! We are working to release them to you!

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **FEATURED COMMANDS**

Here are the featured commands of the year! We update this every year (Or month if we fell like it) so people can know which commands are best to add to their bot! If you think we need to add a different command here, just let us know!

- [Rob Command](https://github.com/Zenoleader/MGS-Bot/blob/main/Commands/Economy/rob.js)
- [Balance Command](https://github.com/Zenoleader/MGS-Bot/blob/main/Commands/Economy/balance.js)
- [Kick Command](https://github.com/Zenoleader/MGS-Bot/blob/main/Commands/Moderation/Kick.js)
- [Slowmode Command](https://github.com/Zenoleader/MGS-Bot/blob/main/Commands/Moderation/slowmode.js)
- [Meme Command](https://github.com/Zenoleader/MGS-Bot/blob/main/Commands/Fun/meme.js)

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **LINKS:**

- [Support Server](https://discord.gg/zenoyt-official-server-845476765702946846)
- [Add the bot](https://discord.com/application-directory/962834876665577542)
- [FLOOR IS NEON RED](https://www.roblox.com/games/7231457999/FLOOR-IS-NEON-RED)
- [top.gg](https://top.gg/bot/962834876665577542)
- [Mountain Gaming Studios](https://www.roblox.com/groups/11791011/Mountain-Gaming-Studios)
- [Website](https://mgsbot.vercel.app/)
- [Discord.js Github](https://github.com/discordjs/discord.js)

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **MGS GitHub ToS**

**1. Use of our service:** By using our codes, you agree **to not use any codes for, but not limited to: hacking, scamming, auth netting, hitting the nae nae etc.** If we feel you are violating those terms, we will remove your access from this respitory. 
⚠THESE TERMS HAVE BEEN IN EFFECT SINCE 3/1/2023⚠

**2. Your privacy:** By using our codes, you accept that we take data on what you click and what is seems of intrest to you. **Your Username is shared with us, but your passwords & emails are safe to just you.** If you are here to try and hack people, not only will we remove your access, we will report you to GitHub Support.

**3. Social Media:** By using our codes, you agree that we will have to consent you on making videos, posts, pictures etc. about our sites/codes. If we feel you are violating those terms, we will remove your access from this respitory & will report you to GitHub Support. **We take social media very lightly, so you can post any time as long as you have read this.**

**4. Contact us:** Have any questions or concerns about our terms? Don't fret, just email us: [zenoytmoderator@gmail.com](https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=zenoytmoderator@gmail.com). **Our responses could take 3-5 business days.**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **MGS Bot ToS**

**1. Terms of Service:** By using MGS#6816, you agree to let the developers have access to specific data. The type of data we have includes, but is not limited to, your user ID, username/tag, profile, guild IDs, and DMs with the bot. **Use of the bot is considered agreement.**

**2. Access of Data:** By using the MGS bot, you agree to let the developers have access to your data. Only the bot developers of MGS have access to your data. **We use your data to improve our bot in any way possible.**

**3. Storage of Data:** By using the MGS bot, you agree to let the developers store your data. We use your data to do analytics on how the bot is doing. **If any breach of your data was made, we will notify all servers using the client.**

**4. Request Data:** By using the MGS bot, you have the right to request your data stored by MGS. **You can always request your data in the support server.** Your data will never be declined when requested. You have the right to have your data removed.

**5. Underage Users:** By using the MGS bot, you accept that you have to be 13+ or of legal age in your country to use Discord. If any reports have been made of an underage user, we will do everything we can to delete that user’s data & report the user to **Discord’s Trust & Safety Team.**

**6. Use of MGS Products and Images:** You may use MGS images as long as you make sure it's known it's ours. If it is not, we will remove your access to all of MGS and remove our bot from your server if it is added.

**7. Scam MGS Bots:** By using MGS, you agree to not make any scam bots that would be deceptive to other users. **If done so, you will be reported to Discord Trust & Safety**. For info about this, visit our [support server](https://discord.gg/zenoyt-official-server-845476765702946846).

**8. Questions:** Have any questions or concerns about our terms? Don't fret, just email us: [mgsmoderation@gmail.com](https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mgsmoderation@gmail.com). **Our responses could take 3-5 business days.**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **MGS Bot Privacy Policy**

**1. Privacy Policy:** MGS takes your private data very seriously. To protect you, we will tell you all the information we gather from you and how we use it!

**2. Security:** The MGS development team does all they can to keep your information safe. We can't 100% guarantee that your information will be safe since the internet isn't 100% fool proof. **We secure your privacy in our support server.**

**3. Storage of Data:** Only the data such as your server name, a few roles, server/member ID’s, & user tags are **stored permanently** with quick.db until a developer deletes it or you request your data to be deleted. Message content is stored on Discord. Your data will be deleted if you are inactive for too long.

**4. Changes of the Policy:** Any changes of the privacy policy will be updated and told to everyone using the bot as soon as possible. We will notify you using DMs or the "alert" command. **The policy has been in effect since 2/1/23.**

**5. Questions:** Have any questions or concerns about our terms? Don't fret, just email us: [mgsmoderation@gmail.com](https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mgsmoderation@gmail.com). **Our responses could take 3-5 business days.**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
# **MGS Economy ToS**

**1. Terms of Service:** MGS has an economy feature that’s fun to use when people don't use it for the wrong reasons. With these terms, we will specify what we do when you use the economy & what is not allowed. **Note: All the normal ToS for MGS apply here, so we won't specify the normal terms.**

**2. Logging:** MGS does log all the actions with the economy except for fishing & hunting. **We store things such as your User ID, Guild ID's, User Tags, and profile pictures.** We store all that with quick.db & it's in private channels only developers have access to.

**3. Scamming:** MGS has a gift command that can obviously be abused. We do not tolerate scamming, and if the action is done, **we will ban your access to all of MGS.**

**4. Grinding Bots:** MGS has commands that are specifically meant for normal grinding. We are aware of people who make grinding bots that spam MGS's API. **Doing so will get your access to MGS revoked. Your data will also be deleted. This does include PREMIUM.**

**5. Inorganic Grinding/Growth:** MGS Is meant to be a fair and fun bot. Using methods to inorganically grow your Moolah is against our ToS. **Doing so will get your access to MGS revoked. Your data will also be deleted. This does include PREMIUM.**

**6. Alternative Account:** MGS will limit you to **one** alt account on the economy.  The use of banned methods will get your access to MGS revoked. **Your data will also be deleted. This does include PREMIUM.**

**7. Loss of Moolah:** By using the economy feature of MGS, you agree to allow MGS to take Moolah from your account if we deem it necessary. **Reasons it would be necessary: Grown at an inorganic rate, inflation of Moolah, MGS inactivity, and misuse of the gift command.**

**8.Intentional Bot Crashing:** Crashing the bot will not be tolerated. Not only is this annoying, it's bad for our servers. Doing so will result in a blacklist.

**9. Questions:** Have any questions or concerns about our terms? Don't fret, just email us: [mgsmoderation@gmail.com](https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mgsmoderation@gmail.com). **Our responses could take 3-5 business days.**

[Main Page](#MGS-Discord-Bot)

------------------------------------------------------------------------------------------------------------------------------------------------------
If any problems are found, **please join the support server, open a ticket (or use the report commands in an external server. Doesn't really matter), describe the problem, and a staff member will be with you shortly.**

![Mountain Gaming](https://user-images.githubusercontent.com/119907481/219535225-afbc528f-a45b-457c-ba10-9ca6ffd742e1.png) ![Mountain Gaming (2)](https://user-images.githubusercontent.com/119907481/219905725-3b291a15-2dce-40dc-9d82-3288d7ff374d.png)


