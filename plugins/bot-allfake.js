import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador
global.creador = 'Wa.me/573012482597'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//sms espera
global.wait = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waittt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';

//Mensajes Fakes

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var canal = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' 
var canal2 = 'https://whatsapp.com/channel/0029VaXaCa66xCSHugaf773M' 
var grupofb = 'https://www.facebook.com/groups/872989990425789/?ref=share&mibextid=NSMWBT' 
var git = 'https://github.com/OfcDiego' 
var youtube = 'https://www.youtube.com/@Yoshiko_team' 
var github = 'https://github.com/OfcDiego/YoshikoBot-MD' 
var facebook = 'https://www.facebook.com/diegosaroficial?mibextid=ZbWKwL' 

global.redesYoshi = [canal, canal2, grupofb, git, youtube, github, facebook].getRandom()

global.canalesYoshi = [canal, canal2].getRandom()

var img = fs.readFileSync('./src/menus/Bomini.jpg')
var img2 = fs.readFileSync('./src/menus/Yosh.jpg')
var img3 = fs.readFileSync('./src/menus/MiniYoshiko.jpg')
var img4 = fs.readFileSync('./src/menus/MiniBotsito.jpg')
var img5 = fs.readFileSync('./src/menus/MiniBot.jpg')
var img6 = fs.readFileSync('./src/menus/BotYoshi.jpg')
var img7 = fs.readFileSync('./src/menus/BotYoshiko.jpg')
var img8 = fs.readFileSync('./src/menus/YoshikoBot.jpg')
var img9 = fs.readFileSync('./src/menus/YoshiBot-MD.jpg')
var img10 = fs.readFileSync('./src/menus/Ternurita.jpg')
var img11 = fs.readFileSync('./src/menus/Sombra.jpg')
var img12 = fs.readFileSync('./src/menus/Bot.jpg')
var img13 = fs.readFileSync('./src/menus/YoshiMd.jpg')
var img14 = fs.readFileSync('./src/menus/Botsito.jpg')
var img15 = fs.readFileSync('./src/menus/Aesthetic.jpg')
var img16 = fs.readFileSync('./src/menus/Ternura.jpg')
var img17 = fs.readFileSync('./src/menus/Amor.jpg')
var img18 = fs.readFileSync('./src/menus/YoshiBot.jpg')
var img19 = fs.readFileSync('./src/menus/Yoshiko.jpg')
var img20 = fs.readFileSync('./src/menus/Yoshi.jpg')

global.yoshiImg = img14

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: yoshiImg, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363263466636910@newsletter', serverMessageId: '', newsletterName: '👑 𝗬𝗼𝘀𝗵𝗶𝗸𝗼 𝗕𝗼𝘁 - 𝗠𝗗 ⛈️' }, externalAdReply: { title: packname, body: `ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🥷ꫂꥈ Hola! ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: yoshiImg, thumbnail: yoshiImg, sourceUrl: redesYoshi }}}, { quoted: m } //fake con reenviado de canal
}

export default handler