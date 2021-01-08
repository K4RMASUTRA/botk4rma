const Discord = require("discord.js");
const logo = 'https://cdn.discordapp.com/attachments/796903059896795156/796905788202549329/k4rma.png'
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  const word = args.join(" ")
  message.delete(500)
  const embed = new Discord.RichEmbed()
  .setAuthor(`K4RMA Configuração`, logo)
  .setThumbnail(logo)
  .setTitle("💻 **Estado da Encomenda**")
  .setDescription('Estimado cliente, a sua encomenda será processada após pagamento.Pagamentos são efetuados através de: <:1716_PAYPAL:797087194581434369> k4rma2020@gmail.com')
  .setFooter("Atenciosamente, K4RMA Configuração", logo)
  .setColor(0x00A28E);
  message.channel.send({embed});
}