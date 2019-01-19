const Disocrd = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function(){
bot.user.setGame("Command: :help);
console.log("connected");
});

bot.login("NTM2MjIzNzA5NzI0MTQ3NzM4.DyTl3Q.WQs7LK4KXW-3TiNn2VGnQmCGJq4");

bot.on('message', message => {
if (message.content === prefix + "help"){
message.channel.sendMessage("liste des commandes : \n !tt \n !créateur");
}

if (message.content === prefix + "tt"){
message.channe("Création du bot le 19 janvier 2019 à 19h05");
console.log("Commande effectué");
}

if (message.content === prefix + "créateur"){
message.reply(" Ce bot a été crée par Noel Archibald AKA Milian");
console.log("Commande effectué");
}
});
