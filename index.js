const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {


    const phrases = ["All will be well!", 
                     "You did great today!",
                     "It's okay!", 
                     "Hugs, it will be okay!", 
                     "You poor soul!", 
                     "I'm here for you"]

    const wins = ["That's amazing! 💯", 
                  "You did great today! 💛", 
                  "Congrats on your win 😄"]

    const cats = [

        "https://tenor.com/view/cat-cats-cats-of-the-internet-funny-cat-hilarious-gif-17560869",
        "https://tenor.com/view/luv-you-cute-kitten-cat-cats-kittens-gif-13071893",
        "https://tenor.com/view/cute-kitty-best-kitty-alex-cute-pp-kitty-omg-yay-cute-kitty-munchkin-kitten-gif-15917800"

    ]

    const gratitude = [
        "You're welcome 💛",
        "Nawww, don't mention it!",
        "Ayyeee 💯",
        "No problem!"
    ]

    console.log(`message content: ${message.content}`)

    // if message comes from a bot, ignore
    if (message.author.bot) return;

    


    // const commandBody = message.content.slice(prefix.length);

    // force to lowercase to appear being case insensitive
    const commandBody = message.content.toLocaleLowerCase();
    console.log(`commandbody: ${commandBody}`)
    
    const args = commandBody.split(' ');


    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    for (var i = 0; i < args.length; i++) {

        // woop is inside the message sentence
        if (args[i] === "woop") {
            var randomIndex = Math.floor((Math.random() * phrases.length) + 0);

            message.reply(`${phrases[randomIndex]}`);
            message.channel.send(`https://tenor.com/view/bay-max-therethere-hiro-hamada-big-hero6-comfort-gif-9771555`)
        }

        // words appear consecutively
        if (args[i] === "tough") {
            if (args[i + 1] === "day") {
                var randomIndex = Math.floor((Math.random() * phrases.length) + 0);
                message.reply(`${phrases[randomIndex]} :heart:`);
            }
        }

        if (args[i] === "sad") {
            var randomIndex = Math.floor((Math.random() * phrases.length) + 0);
            message.reply(`${phrases[randomIndex]} :heart:`);
            message.react('❤️')
        }


        if (args[i] === "boop") {
            var randomIndex = Math.floor((Math.random() * phrases.length) + 0);
            message.reply(`${phrases[randomIndex]} https://tenor.com/view/furry-boop-cute-scribble-scratch-gif-15225693`);
        }

        if (args[i] === "hug") {
            var randomIndex = Math.floor((Math.random() * phrases.length) + 0);
            message.reply(`${phrases[randomIndex]} https://tenor.com/view/bay-max-therethere-hiro-hamada-big-hero6-comfort-gif-9771555`);
        }

        if (args[i] === "woohoo") {
            var randomIndex = Math.floor((Math.random() * wins.length) + 0);
            message.reply(`${wins[randomIndex]} :trophy:`);
        }

        if (args[i] === "🏆") {
            var randomIndex = Math.floor((Math.random() * wins.length) + 0);
            message.reply(`${wins[randomIndex]}`);
        }

        if (args[i] === "thanks") {
            var randomIndex = Math.floor((Math.random() * gratitude.length) + 0);
            message.reply(`${gratitude[randomIndex]}`);
        }

        if (args[i] === "thank") {
            if (args[i + 1] === "you") {
                var randomIndex = Math.floor((Math.random() * gratitude.length) + 0);
                message.reply(`${gratitude[randomIndex]}`); 
            }
        }

        if (args[i] === "cats") {
            var randomIndex = Math.floor((Math.random() * cats.length) + 0);
            message.reply(`${cats[randomIndex]}`);
        }
    }

  });


client.login(config.BOT_TOKEN);