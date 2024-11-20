// BASE CREATE BY Ruztan
// Recode FallZx

// Osaragi V1.0
// YT: QyuuNee

require("../setting/settings")
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const newowner = JSON.parse(fs.readFileSync('./all/database/owner.json'))
module.exports = async (osaragi, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { Client } = require('ssh2');
const fsx = require("fs-extra")
const jam = moment.tz('Asia/Makassar').format('HH:mm:ss')
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await osaragi.decodeJid(osaragi.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const sender = m.key.fromMe ? (osaragi.user.id.split(':')[0]+'@s.whatsapp.net' || osaragi.user.id) : (m.key.participant || m.key.remoteJid)
const groupMetadata = m.isGroup ? await osaragi.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('../all/function.js')
const { ssweb, igstalk, tts, mediafire, ytmp3 } = require("../scrape/screaper.js")
const { remini } = require('../scrape/remini.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("../all/converter.js")
const b = fs.readFileSync("./media/menu.mp3")
//const isPremium = premium.includes(m.sender)*/
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('../all/security/adiwajs')
const config = require('../all/security/adiwConfig')
async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, osaragi.authState.creds.pairingCode);
            await reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}
//database
//const AntiSpam = db.data.antispam
/////////////////////////////////////////////////////////////////////////

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}
async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
          
main();
if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(osaragi.authState.creds.pairingCode);
}
if (!fs.existsSync('./all/approval')) {
osaragi.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'Connect lost!\nHarap Mendapatkan persetujuan dari QyuuNee*' })
fs.writeFileSync('./all/approval', '', 'utf8');
}
//=========== MESSAGE ===========//
/*if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), color(`\nFROM`, `blue`), color(`${senderNumber}`, `cyan`), color(`Text :`, `blue`), color(`🗣️ ${cmd}`, `white`))
}*/
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 FROM`, `blue`), color(`${senderNumber}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 TEXT :`), color(`🗣️ ${cmd}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 WAKTU :`), color(`${jam}`, `cyan`), color(`\n---------------------------`, `green`))
}

osaragi.autoshalat = osaragi.autoshalat ? osaragi.autoshalat : {}
    let id = m.chat
    if (id in osaragi.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        osaragi.autoshalat[id] = [
            osaragi.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./media/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete osaragi.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
//========= FAKE QUOTED =========//
const reply = (teks) => {
osaragi.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363201331652484@newsletter',
               newsletterName: "🕊️ Giveaway (^^)/~~~",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `✿ おさらぎ 1.0 - KOI ✿`,
        body: `Sewa? Chat Owner :3`,
        thumbnailUrl: `https://files.catbox.moe/sri4cd.jpg`,
        sourceUrl: "https://wa.me/6289508082845",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: qkontak })}
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "Osaragi" }}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Terimakasih telah order"}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `Osaragi`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6289508082845:+62 895-0808-2845\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Osaragi"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//========== FUNCTION ===========//
var ppuser
try {
ppuser = await osaragi.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
/*for (let ruztanX of imagenya){
if (budy === ruztanX) {
let imagebuffy = fs.readFileSync(`./testi/${ruztanX}.jpg`)
osaragi.sendImage(m.chat, result, '', m)
osaragi.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}*/

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

    async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
    }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

switch (command) {
case "menu":{
const owned = owner + "@s.whatsapp.net"
let awal = `▧ 「 *I N F O  B O T* 」
    
   ☍ Creator : *@${owned.split("@")[0]}*
   ☍ Runtime : *${runtime(process.uptime())}*
   ☍ Mode Bot : *${osaragi.public ? `Public Mode` : `Self Mode`}*

▧ 「 *I N F O  U S E R* 」

   ☍ Name : *${pushname}*
   ☍ Number : *${m.sender.split('@')[0]}*
   ☍ Status : *${isCreator ? "Owner 🥶" : "User ⭐"}*
   
▧ 「 *S U B - M E N U* 」
│ ∘  aimenu ( *Chat/Image AI* )
│ ∘  ownermenu ( *Menu Owner* )
│ ∘  groupmenu ( *Menu Grup* )
│ ∘  downloadmenu ( *Menu Download* )
│ ∘  searchmenu ( *Menu Pencarian* )
│ ∘  toolsmenu ( *Menu Alat* )
╰──────────────━`
osaragi.sendMessage(m.chat, {
       image: { url: 'https://files.catbox.moe/toymu7.jpg'},
       caption: awal,
    contextInfo: {
      mentionedJid: [m.sender, owned],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true, 
        title: `👋🏻 Hai ${pushname}`,
        body: "✿ おさらぎ 1.0 - KOI ✿",
        thumbnailUrl: thumb,
        sourceUrl: "https://whatsapp.com/channel/0029VaA4Tmw72WTpKVP8f33G",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
await sleep(1500)
osaragi.sendMessage(m.chat, { audio: b, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qkontak })
}
break
case "searchmenu":{
let menu = `
┏ ⪻ 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮 ≫
┃- spotify
┃- pin
┃- ttstalk
┃- vtuber
┃- webtoon
┃- film
┃- filmsearch
┃- anilist
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "downloadmenu":{
let menu = `
┏ ⪻ 𝐃𝐨𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
┃- igdl
┃- gdrive
┃- igmp4
┃- tiktok
┃- tt2
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case "aimenu":{
let menu = `
┏ ⪻ 𝐀𝐢 𝐌𝐞𝐧𝐮 ≫
┃- turbo
┃- txt2img
┃- morphic
┃- aio2
┃- gpt4
┃- autoai ( Character-AI )
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "ownermenu":{
let menu = `
┏ ⪻ 𝐎𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
┃- block
┃- unblock
┃- addfile2
┃- autoread
┃- setppbot
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "toolsmenu":{
let menu = `
┏ ⪻ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮 ≫
┃- remini/hd
┃- faketweet
┃- nglspam
┃- tr
┃- trackip
┃- spam-pairing
┃- get
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "groupmenu":{
let menu = `
┏ ⪻ 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 ≫
┃- welcome
┃- statusgc
┃- hidetag
┃- kick
┃- delete
┃- demote
┃- promote
┃- open
┃- close 
┃- kickall
┗──≫
`
osaragi.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

    case 'readchange': case 'autoread':{
if (!isCreator) return 
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
    }
        break
case 'block':
if (!isCreator) return reply(mess.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await osaragi.updateBlockStatus(users, "block")
reply(`Sukses block user`)
} else {
reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await osaragi.updateBlockStatus(woke, "block")
} else if(!q){
reply("Masukan nomer yang ingin di block")
}
reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isCreator) return reply(mess.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await osaragi.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await osaragi.updateBlockStatus(woke, "unblock")
reply(`Sukses unblock ${woke}`)
} else if(!q){
reply("Masukan nomer yang ingin di unblock")
}

}
break
case 'setppbot':{
if (!isCreator) return m.reply(mess.owner);
if(m.quoted){
const media = await osaragi.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await osaragi.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await m.reply(`Done`)
} else m.reply("Reply fotonya")
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await osaragi.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(msg.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break

case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
m.reply(pei)
}
break
case 'film': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Silakan masukkan judul film yang ingin dicari.");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
// wm avz
 results.push({
 title,
 url,
 director,
 cast
 });
 });
// wm avz
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
// wm avz
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("Tidak ditemukan hasil untuk pencarian: " + query);
 }
// wm avz
 let message = "Hasil pencarian untuk: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Sutradara: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
// wm avz
 m.reply(message);
}
break
case 'webtoon':{
async function webtoons(query) {
//wm senn
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
//wm senn
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
//wm senn
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: $(b).find('> a').attr('href')
                }
//wm senn
                hasil.push(result)
                })
//wm senn
                resolve(hasil)
            })
            .catch(reject)
    })
}
//wm senn
if (!text) return  m.reply('Masukan judul yang ingin dicari!!\nContoh: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break

case 'addfile2': {
    if (!isOwner) return reply(msg.owner)
    if (!text.includes("./")) return m.reply(`Contoh: ${prefix + command} ./path/to/file.txt`);
    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return m.reply('Direktori tidak ditemukan!');
    }
    
    // Pastikan pesan yang dikutip berisi dokumen
    if (!m.quoted) {
        return m.reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); // Gunakan let agar buffer bisa diubah
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            m.reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;

case 'get': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return osaragi.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/image/i.test(contentType)) { return osaragi.sendMessage(m.chat, {image: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/video/i.test(contentType)) { return osaragi.sendMessage(m.chat, {video: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return osaragi.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return osaragi.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return osaragi.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break;
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  osaragi.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break

case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
osaragi.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await osaragi.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
case 'hd':
case 'remini': {
if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Yang Ingin Di Enchance !!`)
const meks = await quoted.download()
const proses = await remini(meks, "enhance");
osaragi.sendMessage(m.chat, {image: proses, mimetype: 'image/png'}, {quoted:m})
}
break
case 'tr': {
  if (!text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break

case 'anilist': {
  if (!text) return m.reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
osaragi.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: m})
}
break

case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
         let $ = cheerio.load(res.data), obj = {}
             obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
                 obj.name = $('h1.user').text().trim()
//wm senn
                 obj.username = $('div.content > h5').text().trim()
               obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
           obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
     obj.description = $('div.content > p').text().trim()
  return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

osaragi.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: m })

}
break

case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: osaragi.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await osaragi.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
        break
case "removebg": case "nobg": {
try {
    const media = await osaragi.downloadAndSaveMediaMessage(qmsg);
    let urlnj = await uploadUguu(media);
    let buuhv = await fetchJson(`https://widipe.com/removebg?url=${urlnj}`);
    const vbbjjhbbuub = buuhv.result.urls;
    await osaragi.sendMessage(m.chat, {
        image: { url: vbbjjhbbuub },
        caption: "Done",
    }, { quoted: m });

} catch (err) {
    console.error("Error during background removal:", err);
}
}
break
case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await osaragi.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await osaragi.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
let res = await tiktok2(`${args[0]}`)
				osaragi.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				osaragi.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break

case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await osaragi.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case 'igvid': case 'igmp4': case 'igdl':{
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
   // reply (msg.wait)
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await osaragi.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

osaragi.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break



case 'turbo': {
if (!q) return m.reply(`where the question`)
const fetch = require('node-fetch');
// wm avz
async function avvmx(av) {
    try {
        const avis = await fetch("https://www.turboseek.io/api/getAnswer", {
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; Infinix HOT 40 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
                Referer: "https://www.turboseek.io/",
                "av-Type": "application/json"
            },
            body: JSON.stringify({
                question: av,
                sources: []
            })
        });
// wm avz
        const data = await avis.text();
        const avv = data.split("\n").map(line => {
            try {
                return JSON.parse(line.slice(6)).text;
            } catch (e) {
                return "";
            }
        });
// wm avz
        const avosky = avv.join("").trim();
        const avoskyy = `${avosky}`;
// wm avz
        return avoskyy.trim();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
// wm avz
async function avoskyyy(m, question) {
    const answer = await avvmx(question);
    if (answer) {
        m.reply(answer);
    } else {
        m.reply("Terjadi kesalahan.");
    }
}
// wm avz
const avosks = `${q}`  
avoskyyy(m, avosks);
}
break

case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  osaragi.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m })     
}
break
case 'nglspam': {
if (!isOwner) return reply(msg.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam Osaragi|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break
case "welcome": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await osaragi.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (welcome.includes(m.chat)) return reply("Welcome Di Grup Ini Sudah Aktif")
await welcome.push(m.chat)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await osaragi.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!welcome.includes(m.chat)) return reply("Grup Ini Tidak Terdaftar Di Database Welcome")
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await osaragi.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case "setgc": case "statusgc": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await osaragi.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "kik": case "kick": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await osaragi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => osaragi.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
osaragi.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "open": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await osaragi.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await osaragi.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {

if (isGroup) {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
osaragi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
osaragi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
osaragi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await osaragi.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {

if (!isGroup) return reply(msg.group)
if (!isOwner) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await osaragi.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "owner": {
osaragi.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/Menu.jpg"), 
title: `© Copyright ${global.namaowner}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur Khusus Group!')
 if (!isCreator) return m.reply('Fitur Khusus Owner & Admin!')
 if (!isBotAdmin) return m.reply('Saya Bukan Admin grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await osaragi.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(`Success`);
}
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
reply(jsonData)
}

case 'autoai':{
osaragi.CAI = osaragi.CAI ? osaragi.CAI : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        osaragi.CAI[sender] = {
            messages: []
        };
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ ʙᴏᴛ *\`ᴏsᴀʀᴀɢɪ\`* : ᴀᴋᴛɪғ [ √ ]`);
    } else if (text === "off") {
        delete osaragi.CAI[sender];
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ *\`ᴏsᴀʀᴀɢɪ\`* : ɴᴏɴᴀᴋᴛɪғ [ √ ]`);
    }
};
break

case 'spam-pairing': {
if (!isOwner) return reply(mesg.owner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply(msg.wait)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break

default:
/**
*
*`[ Respon Sticker ]`
*
**/
if ((budy.match) && ["kak", "woy", "mek", "jawir", "y", "dah", "yaudah", "bang", "bg", "Bang", "Bg", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
var stik = await fetchJson('https://raw.githubusercontent.com/tanakasenn/Database-Json/refs/heads/main/StickerRespon.json')
var pick = pickRandom(stik)
osaragi.sendImageAsSticker(m.chat, pick.url, m, { packname: global.namabot, author: global.namaowner })
}

osaragi.CAI = osaragi.CAI ? osaragi.CAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!osaragi.CAI[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (osaragi.CAI[sender] && m.text) {
        let name = osaragi.getName(sender);
        //await osaragi.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cih-cai-jir.koi.pics/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }

osaragi.menfess = osaragi.menfess ? osaragi.menfess : {}
         let mf = Object.values(osaragi.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await osaragi.sendMessage(mf.from, { text: text }).then(async () => {
               reply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete osaragi.menfess[mf.id]
               return !0
            })
         }     

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return osaragi.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return osaragi.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
osaragi.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
osaragi.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return osaragi.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return osaragi.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})