[![MGS GitHub Banner](https://user-images.githubusercontent.com/119907481/219827160-c69c91be-0c53-4fa0-9b97-7f649683fab4.png)](https://mountaingamingstudio.wixsite.com/mountaingaming)


# [Buttons](https://discord.com/api/oauth2/authorize?client_id=962834876665577542&permissions=534723819584&scope=bot%20applications.commands)

With the components API, you can create interactive message components. On this page, we'll cover how to send, receive, and respond to buttons using discord.js!

**Tip:** These buttons are going to be in message and slash commands. It will start with messages then slash commands.

------------------------------------------------------------------------------------------------------------------------------------------------------
# Madking the button

Buttons are part of the ```MessageComponent``` class, which can be sent via messages or interaction responses. A button, as any other message component, must be in an ```ActionRow.```

**Warning:** You can have a maximum of 5 ```ActionRows``` per message, and 5 buttons within an ```ActionRow.```

To create our button, we will using ```MessageActionRow()``` and ```MessageButton()```: 

```js

if(message.content === '!buttons') {
 
  const row = new Discord.MessageActionRow()
    .addComponents(
          new Discord.MessageButton()
    .setCustomId("primary")
      .setLabel("Button 1")
      .setStyle('PRIMARY')
      
      ,new Discord.MessageButton()
        .setCustomId("secondary")
      .setLabel("Button 2")
      .setStyle('PRIMARY')
    )
  
  message.channel.send({content: 'Buttons!', components: [row]})
  
}
```

* The strings can only have 100 characters at max
* You can also make the buttons disabled by ```.setDisabled(true)```

Recieving button interactions with our bot is a bit different from the djs docs because they use slash commands in all of their docs, but we mainly focus on message commands. It just seems more simple to us.

Here's how we recieve & reply the buttons:

There are different types of ways to reply to the buttons. Here are some:

- reply()
- editReply()
- deferReply()
- fetchReply()
- deleteReply()
- followUp()
- update()

```js

const collector = message.channel.createMessageComponentCollector({
      componentType: "BUTTON"
    })

 collector.on('collect', message => {
      if (message.isButton()) {
        if (message.customId === 'primary') {
          message.reply("This button works!")
        }
        if(message.customId === 'secondary') {
        message.reply("This button also works!")
        }
      }
    })
    
```
* Note: The fact that the componentType is a button is very important. It can also be a SELECT_MENU, but this isn't for that.

Last thing you need to know are the button types. With the button types you can change how the button looks. There are only **5** different styles. Here are some examples:

- ```PRIMARY```, a blurple button;
- ```SECONDARY```, a grey button;
- ```SUCCESS```, a green button;
- ```DANGER```, a red button;
- ```LINK```, a button that navigates to a URL.

**WARNING**
Only ```LINK``` buttons can have a url. ```LINK``` buttons cannot have a customId and do not send an interaction event when clicked.
