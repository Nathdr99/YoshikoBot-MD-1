import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'INFO ⚙️',
  'search': 'BUSQUEDAS 🔍',
  'jadibot': 'SER JADIBOTS 🤖',
  'rpg': 'ECONOMIA 🪙',
  'rg': 'REGISTRO 📇',
  'sticker': 'STICKER ✨️',
  'xp': 'EXP 🏷',
  'calculator': 'CALCULATOR 💻',
  'fix': 'FIX 🔮',
  'group': 'GRUPOS 🌩',
  'grupo': 'GRUPOS 🌩',
  'buscadores': 'BUSCADORES 🔍',
  'database': 'DATABASE 📚',
  'internet': 'INTERNET 📮', 
  'stalk': 'STALK 📒',
  'premium': 'PREMIUM 👑',
  'frases': 'FRASES ✏️',
  'downloader': 'DESCARGAS 📥',
  'descargas': 'DESCARGAS 📥',
  'tools': 'HERRAMIENTAS 🧰',
  'herramientas': 'HERRAMIENTAS 🧰',
  'fun': 'DIVERSIONES ☁️',
  'nsfw': 'NSFW 🔞', 
  'image': 'IMAGE 🚩',
  'random': 'RANDOM ☄️',
  'anime': 'ANIMES 🌸',
  'owner': 'CREADOR 👑', 
  'audio': 'EFECTO AUDIOS 🍂', 
  'info': 'INFORAMACIÓN 🍭',
  'ai': 'AI 🌹',
  'adm': 'ADMINISTRADOR 🎌',
  'General': 'GENERAL 🔮',
  'maker': 'MAKER 🌳',
  'transformador': 'CONVERTIDORES 🚩',
}

const defaultMenu = {
  before: `> %greeting %taguser

┌–––––––––––––––––ɪ✥
│『 *INFO USER 🍒* 』
└┬❖
┌┤
┊│ 🌸 𝐂𝐥𝐢𝐞𝐧𝐭𝐞: %name
┊│ 🧃 𝐄𝐱𝐩: %totalexp
┊│ 💎 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬: %limit
┊│ 🍓 𝐍𝐢𝐯𝐞𝐥: %level
│└────────────┈ɪ ⳹
┗–––––––––––––––––ɪ✥

┌–––––––––––––––––ɪ✥
│『 *INFO BOT 🌸* 』
└┬❖
┌┤
┊│ 🍬 𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨: %author
┊│ 🍒 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: %muptime
┊│ 🍍 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: %totalreg
┊│ 🫐 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.7
│└────────────┈ɪ ⳹
┗–––––––––––––––––ɪ✥
%readmore
         *乂 ⺀ ʟɪꜱᴛᴀ - ᴄᴏᴍᴀɴᴅᴏꜱ ⺀ 乂*
`.trimStart(),
  header: '┌–––––––––––––––––ɪ✥\n│『 *%category* 』\n└┬❖\n┌┤',
  body: '┊│ 🌸 %cmd\n',
  footer: '│└────────────┈ɪ ⳹\n┗–––––––––––––––––ɪ✥',
  after: '',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    conn.sendMessage(m.chat, {text: text.trim(), mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": packname, body: 'ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🍫̸̷᮫ᨘ۬ׄ߭ᤢꫂꥈ Hola! ' + name, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen7, "mediaUrl": global.channel, "sourceUrl": global.channel}}}, {quoted: estilo});

  } catch (e) {
    conn.reply(m.chat, '⚠️ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['allmenu', 'menucompleto'] 
handler.register = true

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}