const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Gallery/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Gallery/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./Gallery/lib/myfunc')
let afk = require("./Gallery/lib/afk");

const { fetchBuffer, buffergif } = require("./Gallery/lib/myfunc2")

/////log
global.ownernumber = '5511984039569' 
//Gallery/database
let ntilinkall =JSON.parse(fs.readFileSync('./Gallery/database/antilink.json'));
const isnsfw = JSON.parse(fs.readFileSync('./Gallery/database/nsfw.json'));
let _owner = JSON.parse(fs.readFileSync('./Gallery/database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./Gallery/database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./Gallery/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))

//time
const replay = (teks) => {
            Maria.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const xtime = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
        const xdate = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
        const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')  
        if (time2 < "00:00:00" > "17:59:59") {
            var saudação = "boa noite! 🌌";
          }
          if (time2 < "18:00:00" > "11:59:59") {
            var saudação = "boa tarde! 🌃";
          }
          if (time2 < "12:00:00" > "05:59:59") {
            var saudação = "bom dia! 🌄";
          }
          if (time2 < "06:00:00" > "23:59:59") {
            var saudação = "boa madruga!";
 } 
module.exports = Maria = async (Maria, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = global.prefa
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "sem nome"
        const botNumber = await Maria.decodeJid(Maria.user.id)
        const itsMe = m.sender == botNumber ? true : false
        
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Maria.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
      const isNsfw = m.isGroup ? isnsfw.includes(from) : false;
      const AntiNsfw = m.isGroup ? isnsfw.includes(from) : false
 /////
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

	//rand
	    // Function to filter JPG and PNG files from a directory
const getRandomImage = (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
    });

  if (files.length === 0) return null;

  const randomFile = files[Math.floor(Math.random() * files.length)];
  const randomFilePath = path.join(directory, randomFile);

  if (fs.existsSync(randomFilePath)) {
    return randomFilePath;
  } else {
    console.log(`o arquivo ${randomFile} não existe.`);
    return null;
  }
};

const imageDirectory = './Gallery/Theme-logo';
  const randomImage = getRandomImage(imageDirectory);

//group chat msg by Ayush
const reply = (teks) => {
Maria.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Gallery/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function loading () {
var Ayushlod = [
"《 ▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"pronto! ✅️"
]
let { key } = await Maria.sendMessage(from, {text: 'carregando...'})

for (let i = 0; i < Ayushlod.length; i++) {
await Maria.sendMessage(from, {text: Ayushlod[i], edit: key });
}
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('insira o link da sua figurinha do Telegram.')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mariayresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: '✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mariayresult.push(result)
        }
    resolve(mariayresult)
    })
}

        if (!Maria.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            Maria.readMessages([m.key])
        }
        if (global.autoTyping) {

        Maria.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        Maria.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        Maria.sendPresenceUpdate('unavailable', from)
        
        if (global.autorecordtype) {
        let Ayushrecordin = ['recording','composing']

        let Ayushrecordinfinal = Ayushrecordin[Math.floor(Math.random() * Ayushrecordin.length)]

        Maria.sendPresenceUpdate(Ayushrecordinfinal, from)

        }
        
        if (autobio) {
            Maria.updateProfileStatus(`🌟 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼ está on-line. 🚀 ${runtime(process.uptime())} `).catch(_ => _)
        }
        if (m.sender.startsWith('212') && global.anti212 === true) {
            return Maria.updateBlockStatus(m.sender, 'block')
        }

        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await Maria.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Maria.getName(i)}\nFN:${await Maria.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
   
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.redBright(`\n\nchat em grupo:`))
            console.log(chalk.black(chalk.bgWhite('[mensagem]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> de'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> em'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.redBright(`\n\nchat privado:`))
            console.log(chalk.black(chalk.bgWhite('[mensagem]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> de'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./Gallery/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))[0].hit_cmd
        }
        const photooxy = require('./Gallery/lib/photooxy')
        
        

        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`não marque ele, ele está ausente.\n\n*motivo:* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./Gallery/database/afk-user.json', JSON.stringify(_afk))
                Maria.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} não está mais ausente.`, m)
            }
        }
        
/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

  const messSenderMain = m.sender;
  const messForm = m.chat;
  if ( !m.isGroup ){
    if (messForm.startsWith("212") || messForm.startsWith("210") ){
      return;
    }
  }
        

 ///antilink 
 if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「link detectado」\`\`\`\n\nporém você é administrador.`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
        await Maria.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Maria.sendMessage(from, {text:`\`\`\`「link detectado」\`\`\`\n\n@${m.sender.split("@")[0]} foi removido por causa do anti-link.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  
            switch (command) {
            case 'antilink': {
                            if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiLinkAll) return reply('está ativado.')
ntilinkall.push(from)
fs.writeFileSync('./Gallery/database/antilink.json', JSON.stringify(ntilinkall))
reply('o anti-link foi ativado com sucesso.')
var groupe = await Maria.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Maria.sendMessage(from, {text: `\`\`\`「 ⚠️ aviso ⚠️ 」\`\`\`\n\nse você não é um administrador, não envie links nesse grupo, ou será removido imediatamente.`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('está desativado.')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./Gallery/database/antilinkall.json', JSON.stringify(ntilinkall))
reply('o anti-link foi desativado com sucesso.')
} else {
  await reply(`por favor, informe a opção.\n\nexemplo: ${prefix + command} on\n\non para ativar\noff para desativar`)
  }
  }
  break
  
  case 'setppbot': case 'setbotpp': {
if (!isCreator) return reply(mess.botowner)
if (!quoted) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
if (!/image/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
if (/webp/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Maria.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`sucesso!`)
} else {
var memeg = await Maria.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`sucesso! obrigado pela nova foto de perfil, 😚.`)
}
}
break

            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./Gallery/session", async function(err, files) {
                    if (err) {
                        console.log('não foi possível escanear o diretório: ' + err);
                        return reply('não foi possível escanear o diretório: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `detectados ${filteredArray.length} arquivos de lixo.\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("deletando arquivos de lixo...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./Gallery/session/${file}`)
                    });
                    await sleep(2000)
                    reply("os arquivos residuais foram deletados com sucesso!")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('insira o link do grupo!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('link inválido.')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Maria.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('erro ao entrar no grupo.')
                }
                break      
            case 'session':
                if (!isCreator) return reply(mess.owner)
                reply('aguarde um momento, estou recuperando seu arquivo de sessão...')
                let sesi = await fs.readFileSync('./session/creds.json')
                Maria.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return reply(mess.owner)
                reply(`♠️ adeus...`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                reply('reiniciando...')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`exemplo: ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`auto-visualizar modificado com sucesso para ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`auto-visualizar modificado com sucesso para ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`auto-typing modificado com sucesso para ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`auto-typing modificado com sucesso para ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`auto-recording modificado com sucesso para ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`auto-recording modificado com sucesso para ${q}`)
                }
                break
                case 'autorecordtype':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`auto-recording e typing modificado com sucesso para ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`auto-recording e typing modificado com sucesso para ${q}`)
                }
                break
                case 'autoswview':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply(`auto-visualizarstatus modificado com sucesso para ${q}`)
                } else if (q === 'off') {
                    autoread_status = false
                    reply(`auto-visualizarstatus modificado com sucesso para ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`auto-bio modificado com sucesso para ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`auto-bio modificado com sucesso para ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`📑 exemplo: ${prefix + command} in public/self`)
                if (q == 'public') {
                    Maria.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    Maria.public = false
                    reply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`exemplo: ${prefix + command} nomedopacote|autor`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`exif alterado com sucesso para:\n\n• nome do pacote: ${global.packname}\n• autor: ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Maria.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Maria.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'sair':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('🟨 adeus... 🥺')
                await Maria.groupLeave(m.chat)
                break
            case 'transmitir':
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`qual a mensagem?\n\nexemplo: ${prefix + command} ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼ domina`)
                let getGroups = await Maria.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`enviar transmissão para ${anu.length} grupos. tempo: ${anu.length * 1.5} segundos.`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n📒${text}\n\n` + '```' + '\n\n\n𝙩𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤'
                    Maria.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '*🎐 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼ broadcast 🎐*',
                                body: `enviado para ${i.length} grupos`,
                                thumbnailUrl: 'https://telegra.ph/file/82fd16b586f0df884799c.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`transmissão enviada com sucesso para ${anu.length} grupos.`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("heart.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('a mensagem não foi enviada pelo bot!')
                Maria.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*escolha:*\nsecond\nminute\nhour\nday\n\n*exemplo:*\n10 second')
                }
                reply(`tempo de fechamento: ${q} começando agora.`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*fechado.*\ngrupo fechado pelo admin.`
                    Maria.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*escolha:*\nsecond\nminute\nhour\nday\n\n*exemplo:*\n10 second')
                }
                reply(`tempo de abertura: ${q} começando agora.`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*aberto.*\n grupo aberto pelo admin.`
                    Maria.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Maria.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'qual o texto?'
                await Maria.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'qual o texto?'
                await Maria.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`envie/responda a imagem com legenda. ${prefix + command}`)
                var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Maria.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await Maria.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
case 'tag': case 'tagall': case 'all':{
      

 if (!m.isGroup) return reply(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 let teks = `🧩 𝙢𝙖𝙧𝙘𝙖𝙘̧𝙖̃𝙤 🧩
  
 *mensagem: ${args.join(" ") ? args.join(" ") : ''}*\n\n`
 for (let mem of participants) {
 teks += `🔮 @${mem.id.split('@')[0]}\n`
 }
 Maria.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break
 
 
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`marque mensagens com o ${prefix + command}`)
                Maria.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grupo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'fechar') {
                    await Maria.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*_grupo fechado com sucesso._\n\n 😽*`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'abrir') {
                    await Maria.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`_*grupo aberto com sucesso._\n\n 😽*`)).catch((err) => reply(json(err)))
                } else {
                    reply(`modo ${command}\n\n\ndigite: ${prefix + command}abrir/fechar`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'abrir') {
                    await Maria.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`todos os membros agora podem alterar as informações do grupo. 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'fechar') {
                    await Maria.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`apenas administradores agora podem alterar as informações do grupo. 🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`modo ${command}\n\n\ndigite: ${prefix + command} abrir/fechar`)
                }
                break
            case "gclink":
        case "linkgrupo":
      case "grouplink":
        {
                              if (!m.isGroup) return reply(mess.group)
                  if (!isBotAdmins) return reply(mess.botAdmin)            

          let response = await Maria.groupInviteCode(m.chat);
          Maria.sendText(
            m.sender,
            `🤖 bot: ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼\n\n🔖nome do grupo:- ${groupMetadata.subject}\n\n🔰 link:- https://chat.whatsapp.com/${response}`,
            m,
            { detectLink: true }
          );
        }
        await Maria.sendMessage(m.chat, { video: { url: `https://media.tenor.com/hzWYhzhMTeEAAAPo/maria-useless.mp4` }, caption: 'te enviei o link do grupo no privado.\n por favor, cheque.', gifPlayback: true }, { quoted: m });
        break
        
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await Maria.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`link revogado com sucesso. ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
                
            
            case "sc": case "script": case"repo": {
const axios = require("axios");
let repoInfo = await axios.get("https://api.github.com/repos/AYUSH-PANDEY023/Maria-MD");
        let repo = repoInfo.data;
        console.log(repo);

   const scritxt = `*🚀 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼ 🚀*\n
  *🌟 criador:* 🦇𞋯 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼   🧙🏽‍♀️𞋯 (créditos para Ayush Pandey)\n
  *🌟 repo:* ${repo.html_url}\n
  *🌟 forks:* ${repo.forks_count}\n
  *⭐ stars:* ${repo.stargazers_count}\n
  *📁 tamanho:* ${(repo.size/1024).toFixed(2)} mb\n
  *📅 atualizado pela última vez:* ${repo.updated_at}\n
 
©️ ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼
*❝ não se esqueça de dar estrela ⭐ para o repositório.*`

        Maria.sendMessage(from, { video: { url: 'https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4' }, gifPlayback: true, caption: scritxt }, { quoted: m })
}
        break;
        
        
        
case 'dono':
case 'owner': {
const repf = await Maria.sendMessage(from, { 
contacts: { 
displayName: `${list.length} contato`, 
contacts: list }, mentions: [sender] }, { quoted: m })
}
break

     
                                case 'sticker':
            case 'stiker':
            case 'f':
            case 'figurinha':
            case 's': {
                if (!quoted) return reply(`responda um vídeo ou imagem com o comando ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Maria.sendImageAsSticker(m.chat, media, m, {
                        
                        author: global.stickername
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('máximo de 10 segundos!')
                    let media = await quoted.download()
                    let encmedia = await Maria.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.stickername,
                       
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`envie/marque imagens/vídeos com o comando ${prefix + command}\nduração máxima do vídeo de 10 segundos.`)
                }
            }
            break
            case 'smeme': {
                let respond = `envie/responda imagem ou sticker com o comando ${prefix + command} texto1|texto2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await Maria.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await Maria.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.stickername,
                    
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take': case 'roubar':{
if (!args.join(" ")) return reply(`cadê o texto?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Maria.downloadAndSaveMediaMessage(quoted, "gifee")
Maria.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Maria.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('máximo de 10 segundos!')
let media = await quoted.download()
let encmedia = await Maria.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`cadê a foto/vídeo??`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`responda um sticker com o comando *${prefix + command}*`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Maria.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`responda um sticker com o comando *${prefix + command}*`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Maria.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'converta .webp para .mp4'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'checarmorte':
            case 'checkdeath':
             if (!text) return reply(`insira o nome de alguém, exemplo: ${prefix + command} mizuu`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`nome: ${predea.data.name}\n*morto(a) aos:* ${predea.data.age} anos.\n\n_que mundo é esse, tão cruel que a gente vive..._`)
              break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`envie/responda um áudio/vídeo com o comando ${prefix + command}`)
                reply(mess.wait)
                let media = await Maria.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Maria.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `mizuubot.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`envie/responda um áudio/vídeo com o comando ${prefix + command}`)
                reply(mess.wait)
                let media = await Maria.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./Gallery/lib/converter')
                let audio = await toPTT(media, 'mp4')
                Maria.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`responda um sticker com o comando *${prefix + command}*`)
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Maria.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'converta .webp para .mp4'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                reply(mess.wait)
                let media = await Maria.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`exemplo: ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`exemplo: ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Maria.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.stickername,
                       
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`responda imagem/vídeo.`)
                if (/image/.test(mime)) {
                    anuan = await Maria.downloadAndSaveMediaMessage(quoted)
                    Maria.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `pronto!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Maria.downloadAndSaveMediaMessage(quoted)
                    Maria.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `pronto!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return reply('por favor, inclua link ou texto.')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Maria.sendMessage(from, {
                    image: medi,
                    caption: "pronto!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`exemplo:\n${prefix}fliptext mizuu`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「fliptext」\`\`\`\n*•> normal:*\n${quere}\n*•> flip:*\n${flipe}`)
            }
            break
            
            case 'adddono':
            case 'addowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`use ${prefix+command} [número]\exemplo: ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Maria.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`insira um número válido e registrado no WhatsApp.`)
owner.push(bnnd)
fs.writeFileSync('./Gallery/database/owner.json', JSON.stringify(owner))
reply(`o número ${bnnd} virou um dono.`)
break
case 'deldono':
case 'delowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`use ${prefix+command} [número]\nexemplo: ${prefix+command} ${ownernumber}`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./Gallery/database/owner.json', JSON.stringify(owner))
reply(`o número ${ya} não é mais um dono.`)
break
            
            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("já está AFK.")
                let reason = text ? text : 'sem motivo.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} está AFK.\nmotivo: ${reason}`)
                break
      case 'qc': {
                const {
                    quote
                } = require('./Gallery/lib/quote.js')
                if (!q) return reply('insira o texto:')
                let ppnyauser = await await Maria.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(mess.wait)
                Maria.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.stickername}`

                })
            }
            break

case 'play':  case 'song': {
Maria.sendMessage(from, { react: { text: "📥", key: m.key }}) 
if (!text) return reply(`exemplo: ${prefix + command} bez tebya`)
const Ayushplaymp3 = require('./Gallery/lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await Ayushplaymp3.mp3(anup3k.url);
reply('```✅ vídeo encontrado! enviando...```');
await Maria.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break;

case 'ytmp4': case 'ytvideo': {
const Ayushvidoh = require('./Gallery/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Ayushvidoh.isYTUrl(text)) reply(`cadê o link?\n\nexemplo: ${prefix + command} https://www.youtube.com/watch?v=xeBPXCZjEkg 128kbps`)
const vid=await Ayushvidoh.mp4(text)
const ytc=`
*${themeemoji} título:* ${vid.title}
*${themeemoji} data:* ${vid.date}
*${themeemoji} duração:* ${vid.duration}
*${themeemoji} qualidade:* ${vid.quality}`
await Maria.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
///////////////////////////////////////////////////

case 'chatgpt': case 'gpt':{
Maria.sendMessage(from, { react: { text: "🤖", key: m.key }}) 
              if (!q) return reply(`por favor, insira um prompt de texto. exemplo: ${prefix + command} como faço pra crush me notar?`);
            
              const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(q)}`;
              const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(q)}&model=llama`;
            
              try {
                
                const response1 = await fetch(apiUrl1);
                const responseData1 = await response1.json();
            
                if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
                  
                  const message = responseData1.data;
                  const me = m.sender;
                  await Maria.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                } else {
                  
                  const response2 = await fetch(apiUrl2);
                  const responseData2 = await response2.json();
            
                  if (response2.status === 200 && responseData2 && responseData2.data) {
                    
                    const message = responseData2.data;
                    const me = m.sender;
                    await Maria.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                  } else {
                    reply("erro na API.");
                  }
                }
              } catch (error) {
                console.error(error);
                reply("erro na API.");
              }
            }
              break;
             case 'dalle': {
       

        if (!q) return reply(`por favor, insira um prompt de texto para gerar uma imagem (em inglês). exemplo: ${prefix + command} neymar stealing gold from a bank`);

        const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(q)}`;

        try {
          await Maria.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("erro ao gerar imagem.");
        }
      }
        break;


            case "regras":
            case "rules":
      
        const helptxt = `_*📍[regras]📍*_\n\n\n*>>>* use ${prefix}support para obter o link oficial do bot no privado.\n\n*--->* se você quer adicionar o ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼ no seu grupo, entre em contato com o dono. *-owner/-mods* \n\n*--->* não utilize comandos inexistentes, use os comandos listados na lista *.help* \n\n*se o bot não está respondendo, aguarde e não envie mais comandos. isso pode significar problemas na internet ou a ausência do dono.`

        Maria.sendMessage(from, { video: { url: 'https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4' }, gifPlayback: true, caption: helptxt }, { quoted: m })

        break
//      case 'hii': case 'hi': case 'Hi': case 'oi': case 'olá': case 'oii': case 'oie':
       
        
//        let txxt = `👋🏻 oiii *${pushname}*, eu sou o *✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼*\num bot criado pelo michael. \n\nnão tenho tempo para conversar, use os comandos do *${prefix}help* se você desejar algo.`

//        Maria.sendMessage(m.chat, { image: { url: "./Gallery/ch1.jpg" }, caption: txxt, gifPlayback: true }, { quoted: m });
//        break
      case "support":
     
        let tex = `📍 aqui está o grupo!📍

https://chat.whatsapp.com/CUBLv1nDTiS2vwfDPct12h`

        await Maria.sendMessage(m.sender,{ image: {url: "./Gallery/sup.jpg"}, caption: `${tex}` },);

        await Maria.sendMessage(m.chat, { image: { url: "./Gallery/ch2.jpg" }, caption: 'te enviei o link do grupo no privado.\npor favor, cheque.', gifPlayback: true }, { quoted: m });
        break

      case "info":
            Maria.sendMessage(from, { react: { text: "ℹ️", key: m.key }}) 
        let ifx = `🌟『✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼』🌟
*🌟 descrição:* um bot criado para facilitar interações.
*🚦 tempo online:* ${runtime(process.uptime())}
*🕸 versão:* 1.0
*👤 criador:* 🦇𞋯 ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼   🧙🏽‍♀️𞋯`
Maria.sendMessage(m.chat, { image: { url: "./Gallery/ch3.jpg" }, caption: ifx, gifPlayback: true }, { quoted: m });
        break

 
      case 'owner': case 'creator': case 'mod': case 'mods': case 'dono': {
        Maria.sendContact(m.chat, global.Owner, m)
      }

        break
    
            
///////////////////////////////////////////////////
case 'google': {
Maria.sendMessage(from, { react: { text: "🔎", key: m.key }}) 
if (!q) return reply(`exemplo: ${prefix + command} como aumentar o pênis`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「🏮 *google* 🏮」 \n\n
`
for (let g of res) {
teks += `🧧 *título:* ${g.title}\n`
teks += `🔮 *descrição:* ${g.snippet}\n`
teks += `📎 *link:* ${g.link}\n\n────────────────────\n\n`
} 
reply(teks)
})
}
break

case 'wanumber': case 'nowa': case 'searchnumber':{
           	if (!text) return reply(`📵🔢 insira um número, com os últimos números substituídos por 'x'.\n\nexemplo: ${prefix + command} 55119826279xx`)
var inputnumber = text.split(" ")[0]
        
        reply(`📱🔍 procurando por números...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🔖 *diretório de números:*\n\n`
        var nobio = `\n*bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*sem whatsapp.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Maria.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Maria.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞 *número:* wa.me/${anu[0].jid.split("@")[0]}\n 🌐 ️*bio:* ${anu1.status}\n⏳️ *última atualização:* ${moment(anu1.setAt).tz('America/Sao_Paulo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break

case "nuke":
    if (!isOwner) {
      return reply(mess.owner);
    }
    if (!info.isGroup) {
      return reply(mess.group);
    }
    try {
      venomimg = await Maria.profilePictureUrl(sender, "image");
    } catch (error) {
      venomimg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    venomfoto = await getBuffer(venomimg);
    Maria.updateProfilePicture(from, venomfoto);
    Maria.groupUpdateDescription(from, "\n 🔥 arquived by " + Maria.user.name + "\n");
    await Maria.groupUpdateSubject(from, "🔥 arquived by " + Maria.user.name + " \n\n\n\n\n\n");
    const arquivado = {
      quoted: info
    };
    Maria.sendMessage(from, {
      'text': "\n ~ 🔥 arquived by " + Maria.user.name + " ~ \n ~> passa no canal da lenda https://youtube.com/@pxawtyy"
    }, arquivado);
    membr = groupMetadata.participants;
    membroos = [];
    for (k of membr) {
      if (k.admin === null) {
        membroos.push(k.id);
      }
    }
    for (l of membroos) {
      Maria.groupParticipantsUpdate(from, [l], "remove");
    }
    Maria.groupSettingUpdate(from, "announcement");
    break;

case 'dare':
       
	                if (!m.isGroup) return reply(mess.group)
                   const dare =[
         "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner Maria through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
         "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
         "say i love depak kalal through voice note",
         "write i am feeling horny and put it on status, u can delete it only after 5hrs",
         "write i am lesbian and put it on status, u can delete only after 5hrs",
         "kiss your mommy or papa and say i love you 😌",
         "put your father name on status for 5hrs",
         "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const Mariadareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                   Maria.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ Mariadareww }, {quoted:m})
                   break
                       

case 'truth':
                      if (!m.isGroup) return reply(mess.group)
    
	
                           const truth =[
                                  "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator Ayush?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const Mariatruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                           Maria.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ Mariatruthww }, {quoted:m})
                           break
                           
  case 'menu': case 'help': case 'h': 
  const txt = `╭─「✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼」
│⋊ 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤: *${pushname}* 
│⋊ 𝙗𝙤𝙩: ✠ 𝚖ͫ✞᪸ͥ𝚣ᷦ𝚞𐨿ͧ𝚞ͧ𑀇᷼
│⋊ 𝙥𝙧𝙚𝙛𝙞𝙭𝙤: [${prefix}]
│⋊ 𝙙𝙤𝙣𝙤: ${prefix}dono
│⋊ 𝙜𝙧𝙪𝙥𝙤: https://chat.whatsapp.com/CUBLv1nDTiS2vwfDPct12h
╰────────────┈平和
aqui a lista de comandos. 🔖
${readmore}
┌──⊰ _*🧧 𝖌𝖊𝖗𝖆𝖑 🧧*_
│⊳ 🌿 ${prefix}oi
│⊳ 🌿 ${prefix}info
│⊳ 🌿 ${prefix}support
│⊳ 🌿 ${prefix}rules/regras
│⊳ 🌿 ${prefix}help/h/menu
│⊳ 🌿 ${prefix}runtime
│⊳ 🌿 ${prefix}script/sc/repo
└──────────⊰

┌──⊰ _*🧩 𝖉𝖔𝖓𝖔 🧩*_
│⊳ ♠️ ${prefix}session
│⊳ ♠️ ${prefix}join
│⊳ ♠️ ${prefix}mode *[self/public]*
│⊳ ♠️ ${prefix}shutdown
│⊳ ♠️ ${prefix}restart
│⊳ ♠️ ${prefix}autoread *[on/off]*
│⊳ ♠️ ${prefix}autotyping *[on/off]*
│⊳ ♠️ ${prefix}autorecording *[on/off]*
│⊳ ♠️ ${prefix}autorecordtyp *[on/off]*
│⊳ ♠️ ${prefix}autobio *[on/off]*
│⊳ ♠️ ${prefix}autoswview *[on/off]*
│⊳ ♠️ ${prefix}setppbot
│⊳ ♠️ ${prefix}block
│⊳ ♠️ ${prefix}unblock
│⊳ ♠️ ${prefix}backup
│⊳ ♠️ ${prefix}getcase
│⊳ ♠️ ${prefix}addowner/adddono
│⊳ ♠️ ${prefix}delowner/deldono
└──────────⊰

┌──⊰ _*👮🏻‍♂️ 𝖌𝖗𝖚𝖕𝖔 👮🏻‍♂️*_
│⊳ 🍁 ${prefix}antilink
│⊳ 🍁 ${prefix}closetime
│⊳ 🍁 ${prefix}opentime
│⊳ 🍁 ${prefix}kick
│⊳ 🍁 ${prefix}promote
│⊳ 🍁 ${prefix}demote
│⊳ 🍁 ${prefix}setdesc
│⊳ 🍁 ${prefix}setppgc
│⊳ 🍁 ${prefix}tagall
│⊳ 🍁 ${prefix}hidetag
│⊳ 🍁 ${prefix}totag
│⊳ 🍁 ${prefix}group *[option]*
│⊳ 🍁 ${prefix}editinfo
│⊳ 🍁 ${prefix}linkgc
│⊳ 🍁 ${prefix}revoke
│⊳ 🍁 ${prefix}listonline
└──────────⊰

┌──⊰ _*🎉 𝖉𝖎𝖛𝖊𝖗𝖘𝖆̃𝖔  🎉*_
│⊳🎟️ ${prefix}couple/casal
│⊳🎟️ ${prefix}checkdeath/checarmorte
│⊳🎟️ ${prefix}apaixonada(o)check
│⊳🎟️ ${prefix}feiuracheck
│⊳🎟️ ${prefix}belezacheck
│⊳🎟️ ${prefix}tesaocheck
│⊳🎟️ ${prefix}lesbicheck
│⊳🎟️ ${prefix}lesbicacheck
│⊳🎟️ ${prefix}fofuracheck
│⊳🎟️ ${prefix}gaycheck
└──────────⊰
┌──⊰ _*📂 𝖉𝖔𝖜𝖓𝖑𝖔𝖆𝖉  📂*_
│⊳ 📥 ${prefix}play [nome]
│⊳ 📥 ${prefix}ytmp3 [link]
│⊳ 📥 ${prefix}ytmp4 [link]
│⊳ 📥 ${prefix}igimage [link]
│⊳ 📥 ${prefix}igvideo [link]
│⊳ 📥 ${prefix}gitclone [link]
│⊳ 📥 ${prefix}pinterest [termo de busca]
│⊳ 📥 ${prefix}apk [nome]
└──────────⊰
┌──⊰ _*🎐 𝖘𝖓𝖆𝖕𝖇𝖑𝖊𝖓𝖉 🎐*_
│⊳🎀 ${prefix}shadow
│⊳🎀 ${prefix}write
│⊳🎀 ${prefix}smoke
│⊳🎀 ${prefix}burnpaper
│⊳🎀 ${prefix}romantic
│⊳🎀 ${prefix}writeart
│⊳🎀 ${prefix}rainboweffect
│⊳🎀 ${prefix}smokyneon
│⊳🎀 ${prefix}underwaterocean
│⊳🎀 ${prefix}coffecup
│⊳🎀 ${prefix}doublelove
│⊳🎀 ${prefix}undergrass
│⊳🎀 ${prefix}love
│⊳🎀 ${prefix}narutobanner
│⊳🎀 ${prefix}shinetext
└──────────⊰
┌──⊰ _*⛩️ 𝖔𝖚𝖙𝖗𝖔𝖘 ⛩️*_
│⊳ 🏮 ${prefix}sticker/s/figurinha/f
│⊳ 🏮 ${prefix}qc (manutenção)
│⊳ 🏮 ${prefix}smeme
│⊳ 🏮 ${prefix}take
│⊳ 🏮 ${prefix}toimage
│⊳ 🏮 ${prefix}tovideo
│⊳ 🏮 ${prefix}toaudio
│⊳ 🏮 ${prefix}tomp3
│⊳ 🏮 ${prefix}tovn
│⊳ 🏮 ${prefix}togif (manutenção)
│⊳ 🏮 ${prefix}tourl
│⊳ 🏮 ${prefix}toqr
│⊳ 🏮 ${prefix}toviewonce
│⊳ 🏮 ${prefix}fliptext
│⊳ 🏮 ${prefix}emojimix
│⊳ 🏮 ${prefix}circlevideo
│⊳ 🏮 ${prefix}google
│⊳ 🏮 ${prefix}pinterest
│⊳ 🏮 ${prefix}dalle
│⊳ 🏮 ${prefix}gpt
└──────────⊰
🍂 para ativar o modo nsfw (apenas admins), digite: *${prefix}nsfw* 

🍂 obtenha a lista completa de comandos nsfw digitando: *${prefix}nsfwmenu*`

  if (randomImage) {
    Maria.sendMessage(from, { image: { url: randomImage }, caption: txt }, { quoted: m });
  }

  break; 
     
       case 'circlevideo': {
try {
const Mariabaileys = await require("@whiskeysockets/baileys").generateWAMessageContent({ video: await m.quoted.download() }, { upload: Maria.waUploadToServer })
await Maria.relayMessage(from, { ptvMessage: { ...Mariabaileys.videoMessage } }, {})
} catch (err) {
reply(`responda um vídeo com o comando ${prefix + command}`)
}
}
break


case "casal":
case "couple":
        {
          if (!m.isGroup) return reply(mess.group);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          Maria.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
awww, que fof ❤️💖`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./Gallery/thumb.jpg`
                  ),
                  sourceUrl: `${link}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
        //mode 
        

case 'public': {
                if (!isCreator) return reply(mess.owner)
                Maria.public = true
                reply('*mudou com sucesso para uso público.*')
            }
            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                Maria.public = false
                reply('*mudou com sucesso para uso próprio.*')
            }
            break


        ///nsfw commands
      case 'nsfwmenu':
        if (!isNsfw) return reply(mess.nsfw);
        if (!m.isGroup) return reply(mess.group);
        
        const nsfwmenu=`┌──⊰ _*🔞 𝖓𝖘𝖋𝖜 🔞*_
│⊳ 💦  ${prefix}blowjob
│⊳ 💦  ${prefix}cum
│⊳ 💦  ${prefix}foot
│⊳ 💦  ${prefix}gangbang
│⊳ 💦  ${prefix}hentai
│⊳ 💦  ${prefix}pussy
│⊳ 💦  ${prefix}ass
│⊳ 💦  ${prefix}trap
│⊳ 💦  ${prefix}maal
│⊳ 💦  ${prefix}ribbons
│⊳ 💦  ${prefix}hatsunemiku
│⊳ 💦  ${prefix}headband
│⊳ 💦  ${prefix}foxgirl
│⊳ 💦  ${prefix}animalears
│⊳ 💦  ${prefix}bra
│⊳ 💦  ${prefix}skirt
│⊳ 💦  ${prefix}breasts
│⊳ 💦  ${prefix}tattooo
│⊳ 💦  ${prefix}chain
└──────────⊰ 
`
        Maria.sendMessage(m.chat, { image: { url: "./Gallery/nsfw.jpg" }, caption: nsfwmenu }, { quoted: m });
        break
              case 'nsfw': {
   Maria.sendMessage(from, { react: { text: "🔞", key: m.key }}) 
 if (!m.isGroup) return reply(mess.group);
                 if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiNsfw) return reply('está ativado.')
isnsfw.push(from)
fs.writeFileSync('./Gallery/database/nsfw.json', JSON.stringify(isnsfw))
reply('modo nsfw ativado com sucesso.')
var groupe = await Maria.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Maria.sendMessage(from, {text: `\`\`\``, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('está desativado.')
let off = isnsfw.indexOf(from)
isnsfw.splice(off, 1)
fs.writeFileSync('./Gallery/database/nsfw.json', JSON.stringify(isnsfw))
reply('modo nsfw desativado com sucesso.')
} else {
  await reply(`*use do seguinte modo:*
*exemplo: ${prefix + command} on*
*exemplo: ${prefix + command} off*
🟢 *use 'on' para ativar e 'off' desativar.* 🔴`)
  }
  }
  break  
  
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
    if (!m.isGroup) return reply(mess.group);
    if (!isNsfw) return reply(mess.nsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    Maria.sendMessage(m.chat, { caption: 'meu Deus... 🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;
    
        case 'blowjob':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/blowjob.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'cum':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/cum.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'foot':
 if (!m.isGroup) return reply(mess.group); 
  if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/foot.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'gangbang':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/gangbang.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'hentai':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/hentai.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'pussy':
 if (!m.isGroup) return reply(mess.group);   
if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/pussy.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'ass':
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Gallery/nsfw/ass.json'))
var Mariayresult = pickRandom(ahegaonsfw)
Maria.sendMessage(m.chat, { caption: mess.done, image: { url: Mariayresult.url } }, { quoted: m })
break

case 'trap' :
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Maria.sendMessage(m.chat, { caption: mess.done, image: { url:waifudd.data.url } }, { quoted: m })
break

case 'maal': {
  if (!isNsfw) return reply(mess.nsfw);
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await Maria.sendMessage(m.chat, {
    image: await getBuffer('https://ayushhh.onrender.com'),
    caption: 'meu Deus... 🥵',
  }, { quoted: m });
}
break;


			    ////
			    case 'hd': {
			if (!quoted) return reply(`cadê a foto?`)
			if (!/image/.test(mime)) return reply(`envie/responda a imagem com ${prefix + command}`)
			reply(mess.wait)
			const { remini } = require('./Gallery/lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Maria.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
			}
			break
                    case 'gaycheck':
       case 'apaixonadacheck':
       case 'apaixonadocheck':
        case 'lesbicheck':
          case 'lesbicacheck':
             case 'tesaocheck':
                 case 'belezacheck':
                    case 'fofuracheck':
                      case 'feiuracheck':
if (!m.isGroup) return reply(mess.group);
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Maria.sendMessage(from, { text: 'pergunta: *' + cex + '*\nverificando: ' + `@${mentionByReply.split('@')[0]}` + '\nresposta: ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Maria.sendMessage(from, { text: 'pergunta: *' + cex + '*\nverificando: ' + `@${mentionByTag[0].split('@')[0]}` + '\nresposta: ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Maria.sendMessage(from, { text: 'pergunta: *' + cex + '*\nverificando: ' + `@${sender.split('@')[0]}` + '\nresposta: ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
////////
case 'hidetag': {  
           if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 Maria.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
 case'admin': case 'tagadmin':{		
 if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 if (!text) return reply(`🧩 *escreva/marque uma mensagem para marcar os admins.*`)
 let teks = `*🧩 𝙖𝙙𝙢𝙞𝙣𝙨 🧩*
  
 *mensagem: ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `🤴 @${mem.split('@')[0]}\n`
 }
 Maria.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break
 

			    
         case 'pinterest':
      case 'pin': {
      if (!args.join(" ")) return reply(`🧩 ${pushname}, insira um termo de busca!`);
        reply(mess.waiting)
        let { pinterest } = require('./Gallery/lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
          Maria.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;  
			    
case 'runtime': {
            	let lowq = `*o bot está online por:*\n🎉 *${runtime(process.uptime())}*`
                reply(lowq)
            	}
            break
			///////////////////////////////////////////////////////
case 'igimage':
case 'igimg':{
if (!text) return reply("🧩 cadê o link?")
let resMaria = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let jsonMaria = await resMaria.json()
Maria.sendMessage(m.chat, { image: { url: jsonMaria.data.data[0].url }, caption: mess.done}, {quoted:m})
.catch(console.error)
}
break
case 'igvideo':
case 'igvid':{
if (!q) return  reply("🧩 cadê o link?")
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
Maria.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: mess.done}, {quoted: m})
.catch(console.error)
}
break

case 'apk':
case 'apkdl':{
if (!text) return reply("🧩 qual apk você deseja baixar??")
let resMaria = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonMaria = await resMaria.json()
Maria.sendMessage(from, { document: { url: jsonMaria.data.dllink}, fileName : jsonMaria.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break

case 'mediafire': {
	if (args.length == 0) return reply(`🧩 cadê o link?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`🧩 link inválido.`)
	const { mediafireDl } = require('./Gallery/lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('mb')[0] >= 100) return replygcxeon('o arquivo é muito grande...')
	const result4 = `𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚
*❖ nome* : ${baby1[0].nama}
*❖ tamanho* : ${baby1[0].size}
*❖ mime* : ${baby1[0].mime}
*❖ link* : ${baby1[0].link}`
reply(`${result4}`)
Maria.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

case 'welcome': {
if (/on/.test(text)) {
 if (global.welcome) {
   m.reply("está ativado.");
 } else {
 global.welcome = true;
m.reply("mensagem de boas-vindas ativada com sucesso.");
}
} else if (/off/.test(text)) {
if (!global.welcome) {
   m.reply("está desativado.");
 } else {
 global.welcome = false;
m.reply("mensagem de boas-vindas desativada com sucesso.");
}
} else m.reply(`digite ${prefix+command} [on/off]`);
}
break;


case 'git': case 'gitclone':
if (!args[0]) return reply(`🧩 cadê o link?\n🔮 exemplo:\n${prefix}${command} https://github.com/AYUSH-PANDEY023/Maria-Md`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcMaria(`link inválido!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Maria.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break

case '':
    if (isCmd) {
        const needhelpmenu = `*digite ${prefix}help para ver a lista de comandos.*`;

        let buttonMessage = {
            text: needhelpmenu,
        };

        Maria.sendMessage(m.chat, buttonMessage, { quoted: m });
    }
    break;

case 'telestick':{
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let mariaresources = await Telesticker(args[0])
		await reply(`enviando ${mariaresources.length} stickers...`)
		if (m.isGroup && mariaresources.length > 5) {
			await reply('número de stickers maior que 5, enviando no privado...')
			for (let i = 0; i < mariaresources.length; i++) {
				Maria.sendMessage(m.sender, { sticker: { url: mariaresources[i].url }})
			}
		} else {
			for (let i = 0; i < mariaresources.length; i++) {
				Maria.sendMessage(m.chat, { sticker: { url: mariaresources[i].url }})
			}
		}
	} else reply(`🧩 cadê o link?\n🔮 exemplo: ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break

case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return reply(`🔮 exemplo: ${prefix+command} mizuu`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Maria.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.done}` }, { quoted: m })
}
break

case 'poll': case 'enquete': {
	if (!isCreator) return reply(mess.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `insira a questão e ao menos duas opções.\nexemplo: ${prefix + command} mizuu domina?|sim,claro,lógico[...]`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Maria.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break

/////////////////////////////////////////////////////

if(isCmd){
          reply (`cadê o comando?`)
  
      }	 			

		
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        Maria.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
