const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var port = process.env.PORT || 3000

const TelegramBot = require('node-telegram-bot-api')
const token = process.env.TOKEN
const bot = new TelegramBot(token, {polling: false})
const chatId = process.env.CHATID


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
  res.send('Got a POST request')
  bot.sendMessage(chatId, req.body.message, {parse_mode : "Markdown"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
