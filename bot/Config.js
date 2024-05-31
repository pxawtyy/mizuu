const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "5511984039569"
global.ownername = "🦇𞋯 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼   🧙🏽‍♀️𞋯"//owner name
global.ytname = "youtube: /@pxawtyy"
global.socialm = "soundcloud: /samiichy"
global.location = "brasil"

global.botname = '✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼' //name of the bot

//sticker details
global.stickername = '🦇𞋯 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼   🧙🏽‍♀️𞋯'
global.packname = 'criado por:'
global.author = '✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼'
//console view/theme
global.themeemoji = '🧩'
global.wm = "✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼"

//theme link
global.link = 'https://chat.whatsapp.com/CUBLv1nDTiS2vwfDPct12h'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*pronto!* \n\n*✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼*',
    prem: '*esse recurso só pode ser usado por usuários premium.*',
    admin: '*esse recurso só pode ser usado por administradores.*',
    botAdmin: '*esse recurso só pode ser usado quando o bot é um administrador.* ',
    owner: '*esse recurso só pode ser usado pelo dono.*',
    group: '*esse recurso é só para grupos.*',
    private: '*esse recurso é só para chats privados.*',
    wait: '*em processo...* ',    
    error: '*erro!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})