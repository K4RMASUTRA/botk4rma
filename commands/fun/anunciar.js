const Discord = require("discord.js");
const logo = 'https://cdn.discordapp.com/attachments/796903059896795156/796905788202549329/k4rma.png'
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  const word = args.join(" ")
  if (word < 1) return message.channel.send("Didn't provide any text to embed")
  message.delete(500)
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`,`${message.author.avatarURL}`)
  .setThumbnail(logo)
  .setTitle("📡 **Announcement**")
  .setDescription(word)
  .setFooter("Atenciosamente, K4RMA Configuração", logo)
  .setColor(0x00A28E);
  message.channel.send({embed});
}