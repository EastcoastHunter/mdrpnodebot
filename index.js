const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})
const axios = require('axios')
//...
client.on('message', msg => {
  axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    params: {
      key: process.env.YANDEX_API_KEY,
      text: msg.content,
      lang: 'es'
    }
  }).then(res => {
    if (res.data.text[0] !== msg.content) {
      msg.reply(res.data.text[0])
    }
  })
})

client.login(process.env.BOT_TOKEN)
