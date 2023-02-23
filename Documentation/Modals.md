[![MGS GitHub Banner](https://user-images.githubusercontent.com/119907481/219827160-c69c91be-0c53-4fa0-9b97-7f649683fab4.png)](https://mountaingamingstudio.wixsite.com/mountaingaming)


# [Modals](https://discord.com/api/oauth2/authorize?client_id=962834876665577542&permissions=534723819584&scope=bot%20applications.commands)

With modals you can create pop-up panels that allow users to provide you with formatted inputs through submissions. We'll show how to create, show, and receive modal forms using discord.js!

**Tip:** This modal is used by message and slash commands. We will start out with slash commands and move on to message commands. 
------------------------------------------------------------------------------------------------------------------------------------------------------
#Making the modal (with buttons)

What you do need to know is that modals aren't exactly components. They're just a callback used to respond to an interaction (In this case, a button). 

**Tip:** Modals have a maximum of 5 ```MessageActionRow```s (per modal), and there is only 1 ```TextInputComponent``` per row.

To make the first interaction we need to make the button:

```js

if(message.content === "!modal") {
 const modal = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageButton()
      .setCustomId('modal-button')
      .setStyle('PRIMARY')
      .setLabel('Modal :)') 
      );
  
  message.channel.send({components: [modal]})
}

```
* This button is to prompt the modal when clicked.

Now, we are going to check for the function using ```interactionCreate```:


```js

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === 'modal-button') {
    const modal = new Discord.Modal()
        .setCustomId('test-modal')
        .setTitle('Modal test!')
        .addComponents([
          new Discord.MessageActionRow()
          .addComponents(
          new Discord.TextInputComponent()
              .setCustomId('modal-input')
              .setLabel('Still testing')
              .setStyle('SHORT')
              .setMinLength(1)
              .setMaxLength(10)
              .setPlaceholder('Say something')
              .setRequired(true),
          )
        ]);
      
            await interaction.showModal(modal);
    }
    })
```
   * Note that the CustomId can only hold up to 100 characters. 

Here we will check for the response and make it reply to the person who submitted it. Replies are required when making a modal so it won't crash: (THIS IS PART OF THE INTERACTION ABOVE)

```js

 if (!interaction.isModalSubmit()) return;
  
if (interaction.customId === 'test-modal') {
  
const response = interaction.fields.getTextInputValue('modal-input');
  
interaction.reply(`Got it: ${response}`);
  
    }
 ```
 * Note: You can always send it to an external channel using ```client.channels.cache.get("CHANNEL ID").send(response)```
 
 Now we have the modal! If you want to learn how to add more text inputs, refer to the slash command version bellow.
 
 ------------------------------------------------------------------------------------------------------------------------------------------------------
 #Making a modal (using text)
 
 All the info above applies to here. We will just show the codes and add some notes on the way!
 
 ```js
 
 client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'modal thing') {
		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('My Modal');
		await interaction.showModal(modal);
	}
});
```
* Note: Using slash commands assumes that you already have a slash command handler. In this case, the modal triggers when you send the command.

```js

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'modal thing') {
		// Create the modal
		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('My Modal');
		// Add components to modal
		// Create the text input components
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle('SHORT');
		const hobbiesInput = new TextInputComponent()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle('PARAGRAPH');
		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
		const secondActionRow = new MessageActionRow().addComponents(hobbiesInput);
		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);
		// Show the modal to the user
		await interaction.showModal(modal);
	}
});
```
* Here, we are creating the modal that needs to show up when you send the message.

```js

client.on('interactionCreate', interaction => {
	if (!interaction.isModalSubmit()) return;
	console.log(interaction);
});
```

* This logs the submission of that modal. (Everything that user typed)

You need to know that a modal has to have something respond to it after or it will crash. Here are the types:

- ```reply()```
- ```editReply()```
- ```deferReply()```
- ```fetchReply()```
- ```deleteReply()```
- ```followUp()```

Here is how you would respond:

```js

client.on('interactionCreate', interaction => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'myModal') {
		await interaction.reply({ content: 'Your submission was recieved successfully!' });
	}
});
```

We are going to want their response, right? Here we can recieve it using the ```getTextInputValue```:

```js

client.on('interactionCreate', interaction => {
	if (!interaction.isModalSubmit()) return;
	// Get the data entered by the user
	const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
	const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
	console.log({ favoriteColor, hobbies });
});

```

And there we are! Hope this doc helped. If it didn't, let us know using issues!
