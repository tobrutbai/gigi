// BASE CREATE BY Ruztan
// Recode FallZx

// Osaragi V1.0
// YT: QyuuNee

require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const chalk = require('chalk')
const CFonts = require('cfonts')
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const { getBuffer } = require('./all/myfunc')
const NodeCache = require("node-cache")
const msgRetryCounterCache = new NodeCache()
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
CFonts.say(` `)
CFonts.say(`OSARAGI`, {
   font: 'block',
  align: 'left',
  colors: ['cyan'],

});
console.log(chalk.cyan(`Wait...`))
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ['Mac OS', 'Safari', '10.15.7'],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'おさらぎです'
}}
}

const osaragi = func.makeWASocket(connectionOptions)
if (usePairingCode && !osaragi.authState.creds.registered) {
var phoneNumber = await question(chalk.black(chalk.bgCyan(`\nSILAHKAN MASUKAN NOMOR AWALI DENGAN 62 :\n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await osaragi.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgCyan(`Code : `)), chalk.black(chalk.bgWhite(code)))
}

osaragi.ev.on('creds.update', await saveCreds)
store?.bind(osaragi.ev)

osaragi.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await osaragi.decodeJid(osaragi.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await osaragi.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.imgreply, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
osaragi.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await osaragi.updateBlockStatus(ff.from, "block")
}}
}})

osaragi.public = true

osaragi.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) osaragi.readMessages([m.key])
}
if (!osaragi.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) osaragi.readMessages([m.key])
m = func.smsg(osaragi, m, store)
require("./setting/osaragi.js")(osaragi, m, store)
} catch (err) {
console.log(err)
}
})

osaragi.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await osaragi.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}


osaragi.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await osaragi.decodeJid(osaragi.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await osaragi.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await osaragi.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://files.catbox.moe/sri4cd.jpg'
}
if (anu.action == 'add') {
let a = `✨ Welcome To ${metadata.subject} | @${num.split("@")[0]}`
                    osaragi.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `おさらぎ V1.0 - KOI`,
         body: ``,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/GIdysPCksprBmGXtTHNS3i",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
} 
if (anu.action == 'remove') { 
let a = `✨ Sayonara @${num.split("@")[0]}`
                    osaragi.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `おさらぎ V1.0 - KOI`,
         body: ``,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/GIdysPCksprBmGXtTHNS3i",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
if (anu.action == "promote") {
let a = `✨ Promoted @${num.split("@")[0]} by Admin`
                    osaragi.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `おさらぎ V1.0 - KOI`,
         body: ``,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/GIdysPCksprBmGXtTHNS3i",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
if (anu.action == "demote") {
let a = `✨ Demote @${num.split("@")[0]} by Admin`
                    osaragi.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `おさらぎ V1.0 - KOI`,
         body: ``,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/GIdysPCksprBmGXtTHNS3i",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
} 
} catch (err) {
console.log(err)
}})

osaragi.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
osaragi.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
osaragi.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `Connected To ${osaragi.user.id.split(":")[0]}`
osaragi.sendMessage(global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

return osaragi
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})