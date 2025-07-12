const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("manul-ofc-baileys-new");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "CHANUKA-MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*𝐂𝐇𝐀𝐍𝐔𝐊𝐀-𝐌𝐃  𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋𝐋👇*\n\n* *𝙷𝙸  👋.....*\n\n*⭕ Github Repo :*\n\n> https://github.com/Chanuka345/CHANUKA-MD-NEW\n\n*⭕ WHATSAPP CHANNEL :*\n\n> https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l\n\n*⭕Contact Owner :*\n\n> wa.me/94741469245\n\n\n🚫 *𝗗𝗢𝗡𝗧 𝗦𝗛𝗔𝗥𝗘 𝗬𝗢𝗨𝗥 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗* 🚫`;
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐂𝐇𝐀𝐍𝐔𝐊𝐀-𝐌𝐃",
thumbnailUrl: "https://files.catbox.moe/umz8ez.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*𝐂𝐇𝐀𝐍𝐔𝐊𝐀-𝐌𝐃  𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋𝐋👇*\n\n* *𝙷𝙸  👋.....*\n\n*⭕ Github Repo :*\n\n> https://github.com/Chanuka345/CHANUKA-MD-NEW\n\n*⭕ WHATSAPP CHANNEL :*\n\n> https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l\n\n*⭕Contact Owner :*\n\n> wa.me/94741469245\n\n\n🚫 *𝗗𝗢𝗡𝗧 𝗦𝗛𝗔𝗥𝗘 𝗬𝗢𝗨𝗥 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗* 🚫`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐂𝐇𝐀𝐍𝐔𝐊𝐀-𝐌𝐃",
thumbnailUrl: "https://files.catbox.moe/umz8ez.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
