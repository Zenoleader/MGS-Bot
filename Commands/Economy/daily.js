//We'll make a monthly and weekly soon. As soon as we figure it out 😭

if(message.content === '!daily') {
  
       const user = message.author
      const lastClaimedDate = db.get(`lastClaimed_${user.id}`);
  
      // Check if the user has already claimed their daily reward for the day
      if (lastClaimedDate === new Date().toLocaleDateString()) {
        return message.channel.send("You already claimed today.");
      }
  
      // Give the user their reward and update the last claimed date in the database
      // You can put any number, but here we'll choose a number using the possible variable
      var possible = [
        "10",
        "100",
        "20",
        "9999"
        ]
      
      const rewardAmount = possible;
      db.set(`lastClaimed_${user.id}`, new Date().toLocaleDateString());
      db.add(`balance_${user.id}`, rewardAmount);
      
      return message.channel.send(`Nice! You claimed 100 coins from your daily!`);
    }