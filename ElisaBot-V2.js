const _0x1ce957 = _0x2f14;
(function(_0x18d427, _0x6f444e) {
    const _0x573519 = _0x2f14,
        _0x4c40d3 = _0x18d427();
    while (!![]) {
        try {
            const _0xeaab07 = parseInt(_0x573519(0x373)) / 0x1 * (-parseInt(_0x573519(0x517)) / 0x2) + parseInt(_0x573519(0x5d7)) / 0x3 + parseInt(_0x573519(0x37a)) / 0x4 + parseInt(_0x573519(0x47f)) / 0x5 + -parseInt(_0x573519(0x5ca)) / 0x6 * (parseInt(_0x573519(0x5bc)) / 0x7) + -parseInt(_0x573519(0x348)) / 0x8 + -parseInt(_0x573519(0xb2a)) / 0x9;
            if (_0xeaab07 === _0x6f444e) break;
            else _0x4c40d3['push'](_0x4c40d3['shift']());
        } catch (_0x27a68c) {
            _0x4c40d3['push'](_0x4c40d3['shift']());
        }
    }
}(_0x4c80, 0xee502));
const _0x1ccd1e = (function() {
        let _0x192e1b = !![];
        return function(_0x84f6ac, _0x510e4e) {
            const _0x35091d = _0x192e1b ? function() {
                const _0x49515d = _0x2f14;
                if (_0x510e4e) {
                    const _0x4edaff = _0x510e4e[_0x49515d(0xa0f)](_0x84f6ac, arguments);
                    return _0x510e4e = null, _0x4edaff;
                }
            } : function() {};
            return _0x192e1b = ![], _0x35091d;
        };
    }()),
    _0x357c44 = _0x1ccd1e(this, function() {
        const _0x518328 = _0x2f14;
        return _0x357c44[_0x518328(0x7b6)]()[_0x518328(0x5a3)](_0x518328(0xa0a))[_0x518328(0x7b6)]()['constructor'](_0x357c44)[_0x518328(0x5a3)]('(((.+)+)+)+$');
    });
_0x357c44(), require(_0x1ce957(0x312));
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require(_0x1ce957(0xa17)), fs = require('fs'), util = require(_0x1ce957(0x482)), chalk = require(_0x1ce957(0x475)), {
    exec,
    spawn,
    execSync
} = require(_0x1ce957(0xbcd)), axios = require(_0x1ce957(0xc63)), path = require('path'), os = require('os'), maker = require(_0x1ce957(0xac7)), moment = require(_0x1ce957(0x61e)), {
    JSDOM
} = require(_0x1ce957(0x7f4)), speed = require(_0x1ce957(0x281)), {
    performance
} = require(_0x1ce957(0xa06)), {
    Primbon
} = require(_0x1ce957(0x46d)), primbon = new Primbon(), {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom
} = require('./lib/myfunc'), nimadl = require(_0x1ce957(0x353)), Language = require(_0x1ce957(0x88d)), Lang = Language[_0x1ce957(0x7ce)](_0x1ce957(0x395)), TIME_ZONE = global[_0x1ce957(0x1e8)], MENU_IMOJI = global[_0x1ce957(0x2ce)], M_E = MENU_IMOJI[_0x1ce957(0x341)]('|')[0x0], D_E = MENU_IMOJI[_0x1ce957(0x341)]('|')[0x1], HELPERS = '94716338723,94711421243,94719574492';
global[_0x1ce957(0x1e4)] = global[_0x1ce957(0x1e4)];
const SEX_DL = global[_0x1ce957(0x883)];

function _0x2f14(_0x7f952d, _0x3b7717) {
    const _0xcc2952 = _0x4c80();
    return _0x2f14 = function(_0x357c44, _0x1ccd1e) {
        _0x357c44 = _0x357c44 - 0x1e0;
        let _0x4c8053 = _0xcc2952[_0x357c44];
        return _0x4c8053;
    }, _0x2f14(_0x7f952d, _0x3b7717);
}
var LOGO_MAKING = '';
if (global[_0x1ce957(0x79a)] == 'EN') LOGO_MAKING = _0x1ce957(0x969);
if (global[_0x1ce957(0x79a)] == 'SI') LOGO_MAKING = _0x1ce957(0x3d8);
var NOT_FOUND = '';
if (global[_0x1ce957(0x79a)] == 'EN') NOT_FOUND = _0x1ce957(0xad4);
if (global[_0x1ce957(0x79a)] == 'SI') NOT_FOUND = _0x1ce957(0x24f);
var FILE_DOWNLOAD = '',
    FILE_UPLOAD = '';
if (global[_0x1ce957(0x79a)] == 'EN') FILE_DOWNLOAD = _0x1ce957(0x88e);
if (global[_0x1ce957(0x79a)] == 'EN') FILE_UPLOAD = _0x1ce957(0xb49);
if (global[_0x1ce957(0x79a)] == 'SI') FILE_DOWNLOAD = _0x1ce957(0x519);
if (global['LANG'] == 'SI') FILE_UPLOAD = _0x1ce957(0xb44);
const BOT_VERSION = '3.5.0',
    {
        cekHUNTInventoryAdaAtauGak,
        addHhunting,
        addHBesi,
        addHEmas,
        addHEmerald,
        addHUmpan,
        addHPotion,
        kurangHBesi,
        kurangHEmas,
        kurangHEmerald,
        kurangHUmpan,
        kurangHPotion,
        getHBesi,
        getHEmas,
        getHEmerald,
        getHUmpan,
        getHPotion
    } = require('./database/user/hun_ing.js'),
    {
        addInventoriDarah,
        cekDuluJoinAdaApaKagaDiJson,
        addDarah,
        kurangDarah,
        getDarah
    } = require(_0x1ce957(0xb26)),
    {
        cekInventoryAdaAtauGak,
        addInventori,
        addBesi,
        addEmas,
        addEmerald,
        addUmpan,
        addPotion,
        kurangBesi,
        kurangEmas,
        kurangEmerald,
        kurangUmpan,
        kurangPotion,
        getBesi,
        getEmas,
        getEmerald,
        getUmpan,
        getPotion
    } = require(_0x1ce957(0x2e3)),
    {
        addInventoriMonay,
        cekDuluJoinAdaApaKagaMonaynyaDiJson,
        addMonay,
        kurangMonay,
        getMonay
    } = require(_0x1ce957(0xbb5)),
    {
        addInventoriLimit,
        cekDuluJoinAdaApaKagaLimitnyaDiJson,
        addLimit,
        kurangLimit,
        getLimit
    } = require(_0x1ce957(0xab1)),
    {
        cekDuluHasilBuruanNya,
        addInventoriBuruan,
        addIkan,
        addAyam,
        addKelinci,
        addDomba,
        addSapi,
        addGajah,
        kurangIkan,
        kurangAyam,
        kurangKelinci,
        kurangDomba,
        kurangSapi,
        kurangGajah,
        getIkan,
        getAyam,
        getKelinci,
        getDomba,
        getSapi,
        getGajah
    } = require(_0x1ce957(0x5be));

function _0x4c80() {
    const _0x1b7d52 = ['entries', '*ඔබ\x20ලබා\x20දුන්\x20සබැඳිය\x20වලංගු\x20නැත*', 'https://api.waifu.pics/sfw/waifu', 'shota', 'download', '\x0a🔮\x20*𝗔𝗥𝗢𝗠𝗔\x20:*\x20', 'https://api.akuari.my.id/ephoto/team-logo-macan?text=', '*𝗛𝗜\x20𝗕𝗥𝗢\x20', '\x20*ＧＲＯＵＰ\x20\x20ＮＯＴＩＦＹ*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*𝐌𝐄𝐒𝐒𝐀𝐆𝐄\x20:\x20', 'getnews', '*👸💬\x20කරූනාකර\x20වචනයක්\x20සමග\x20භාශාව\x20තෝරන්න*\x0aඋදාහරණ\x20-\x20.trt\x20good\x20morning;si\x0a\x0a*✨\x20පරිවර්තනය\x20අවශ්‍ය\x20බාශා\x20කෙටිනාම\x20✨*\x0a\x0a', 'No\x20Name', 'afkReason', 'addmessage', 'img2', 'toimage*\x20\x20\x20\x0a\x20\x20\x20', 'Gytt', 'Name\x20:\x20', 'mute', 'libra', '\x0a*𝗚𝗥𝗢𝗨𝗣\x20𝗢𝗪𝗡𝗘𝗥:*\x20@', '┌\x20\x20\x20\x20\x20\x20\x20*༺\x20📥\x20\x20𝚇𝙽𝚇𝚇\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20\x20📥\x20༻*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a│\x20*📡\x20ᴛɪᴛʟᴇ*\x20:\x20', 'Send/Reply\x20Image\x20With\x20Caption\x20', 'https://telegra.ph/file/c020c561957a1824371af.jpg', 'speedtest\x0a│\x20', 'https://textpro.me/create-harry-potter-text-effect-online-1025.html', 'bite\x0a', '*◻️️Your\x20Iron*\x20:\x20', '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'hapusvote*\x20-\x20to\x20delete\x20votes', 'downxvid', 'listpc', 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', 'mountain\x20', 'SKELETON\x20STYLE\x20', 'Ext*\x20:\x20Mp4\x0a*', 'https://api.botcahx.biz.id/api/dowloader/tikok?url=', '&lang=en-US&apikey=nimavip', 'spooky', '\x0a🔮\x20*𝗡𝗢𝗧𝗘𝗦\x20:*\x20', 'https://textpro.me/online-thunder-text-effect-generator-1031.html', 'timestamp', 'ping', '*👸💬\x20Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with\x20caption\x20_${prefix\x20+\x20command}_*', 'Up-Vote', 'cecan', 'SELECT', './database/Anime/shinka.json', 'https://telegra.ph/file/ddae7eba259b9686bb761.jpg', 'tlc', 'leave', 'https://api.violetics.pw/api/ephoto360/Neon-Brightblue?apikey=', 'https://api.tiodevhost.my.id/api/textpro/neon?text=', 'Giltch\x20Style\x20Logo\x20Pack\x20-\x204', 'node-cron', '```Please\x20wait,\x20looking\x20for\x20a\x20partner```', 'fb2\x0a│\x20', 'cuddle', '480', '\x0a\x20\x20\x20\x0a│\x20*👁\x20ᴠɪᴇᴡs\x20:*\x20', 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html', '_Suit\x20time\x20out_', 'Admins\x20❗_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*MASSAGE\x20:*\x20', '```👸💬\x20Please\x20give\x20me\x20a\x20song\x20name.```\x0a\x20*Example\x20-\x20.song\x20rosa\x20male\x20natuwe\x20katu*', '\x0a🔮\x20𝗠𝗘𝗗𝗜𝗔\x20𝗨𝗥𝗟\x20:\x20', '```pinterest\x20හී\x20ජාඅයාරූප\x20සොයයි```', 'image', 'latest', 'MR\x20NIMA\x20OFC', '@bochilteam/scraper', 'ytmp4\x20', '```බොට්\x20අයිතිකරුගේ\x20නම්බර්\x20එක\x20එවයි```', './database/Anime/loli.json', '22ytvideo', '6:08:20', './database/Anime/nezuko.json', 'candy\x20', 'https://textpro.me/metal-dark-gold-text-effect-online-939.html', 'getQuotedObj', 'video/mp4', 'rock\x20', 'https://telegra.ph/file/fe4955fa5a37e91f0ce85.jpg', 'graffitibike', 'sand\x20', 'GET\x20FANCY\x20TEXT', 'Demote\x20Message', 'delmsg', '```Partner\x20Has\x20Left\x20Anonymous\x20Session```', 'balas\x20stiker\x20dengan\x20caption\x20*', 'fishing\x0a🔵\x20', '*Hello\x20', 'coffee\x0a│\x20', '𝗤𝘂𝗲𝗲𝗻\x20𝗘𝗹𝗶𝘀𝗮\x20𝗣𝘂𝗯𝗹𝗶𝗰\x20𝗚𝗿𝗼𝘂𝗽', 'report\x0a╰─────────────⦁\x0a\x0a╭──❰\x20*𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', '➓\x20Title\x20-\x20', '```ඔබ\x20විමසූ\x20පනිවුඩය\x20රිප්ලයි\x20කර\x20ඇති\x20මැස්ස්සේජ්\x20එක\x20එවයි```', 'directmp3', '&link=https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html', '*This\x20command\x20has\x20been\x20blocked\x20from\x20Bot\x20at\x20the\x20request\x20of\x20many\x20people\x20!!!*\x0a*If\x20you\x20want\x20to\x20download\x20join\x20grant\x20group\x20[\x20you\x20must\x20be\x2018+\x20to\x20join\x20]\x20minors\x20don\x27t\x20join*\x0a*ඔබට\x20Download\x20කිරීමට\x20අවශනම්\x20ප්‍රදාන\x20group\x20එක\x20වෙතට\x20සම්බන්ධ\x20වන්න\x20[\x20එයට\x20සම්බන්ධ\x20වීමට\x20ඔබට\x20වයස\x2018+\x20වියයුතුය\x20]\x20පොඩි\x20උන්\x20join\x20වෙන්න\x20එපා\x20!!!*\x0a​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x0a*Don\x27t\x20get\x20caught\x20by\x20joining\x20the\x20little\x20ones.*\x0a*පොඩි\x20උන්\x20ජොයින්\x20වෙන්න\x20එපා\x20!!!*\x0ahttps://tinyurl.com/SEX-GROUP-NO-CHILDS', 'ALL\x20MENU', 'eberry\x20', 'Subscribe\x20Search\x0a\x0a\x20Result\x20From\x20', 'bonk\x0a', 'ytv*\x20\x20\x0a\x20\x20\x20', 'tgl_lahir', 'neext', 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', '❤️‍🔥', 'group*\x20\x0a\x20\x20\x20', 'https://betabotz-api.herokuapp.com/api/cecan/rose?apikey=BetaBotz', 'tomp3', 'cake-text2\x20', 'CAKE\x20STYLE\x20-\x201', '*Sorry,\x20Can\x27t\x20Download\x20Your\x20Short\x20Video\x20!*', 'speedtest*\x20\x20\x20\x0a\x20\x20\x20\x20', 'axios', '```👸💬\x20කරුනාකර\x20මට\x20ගීතයක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.song2\x20lelena*', 'START\x20CHAT', 'DARKGOLD\x20STYLE\x20', 'https://api.violetics.pw/api/ephoto360/', '\x20😅+🤔', '\x20first\x20day\x20of\x20menstruation,\x20cycle', 'sticker', 'directaudiodown', '*👸💬\x20ඔබට\x20වෙනස්\x20කිරීමට\x20අවශ්‍ය\x20වෙයිස්\x20එක\x20රිප්ලයි\x20ලබාදෙන්න\x20!*', 'couple', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/bs.mp3', 'GREEN\x20NEON\x20STYLE\x20', '\x0a*🧩\x20quality\x20:\x20', './database/autoreply.json', 'TATOO\x20ON\x20HAND\x20STYLE\x20', 'gitclone', 'fengshui\x0a🔵\x20', 'directapk', 'welcome', '\x20mia\x20kalifa', 'bcall\x0a│\x20', 'trim', 'https://telegra.ph/file/be3ca9a3bdac2fbe47f10.jpg', './database/sticker.json', 'toFixed', '\x0a╰⛒\x20\x20*ᴛɪᴍᴇ*\x20', 'Send\x20Broadcast\x20To\x20', '_\x0a*▣\x20ʟᴏɢᴏ\x20ᴛᴇxᴛ\x20-*\x20_', 'birthday-cake4', 'setbotpp', 'CONVERT_CMD', '*💥\x20SUCCESS\x20DOWNLOAD\x20XNXX\x20VIDEO\x20💥*', 'BLOOD\x20STYLE\x20-\x203', 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', 'vietnam\x20\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝚅𝙾𝙸𝙲𝙴\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'Complete\x20your\x20previous\x20suit', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌─[\x20ᴅᴇᴠᴏᴛᴇ\x20]─◉\x0a\x0a├\x20Total:\x20', 'ALL_LINK_KICK', '```🧑‍💻\x20Download\x20Qr\x20Code\x20And\x20Scan\x20Qr\x20||\x20Code\x20\x0a\x20More\x20>\x20Linked\x20device\x20>\x20scan\x20qr\x20code\x20||```\x0a\x0a\x20*▷\x20Deploy\x20https://github.com/DarkMakerofc/Queen-Elisa-Md-V2*\x20', 'CLOUD\x20STYLE\x20', 'nightcore*\x0a', 'TIME_ZONE', 'blush', 'kaori', 'qwood', 'cake-text3', 'mime', 'groupInviteCode', 'horr\x20', 'https://a.api.akuari.my.id/downloader/youtube3?link=', '*◯───────[\x20TEXT\x20TO\x20LOGO\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'You\x20Have\x20No\x20Permission\x20To\x20Delete\x20This\x20Sticker\x20Command', 'Close', 'listcmd', '*YOUR\x20XNXX\x20SEARCH*', '94716338723@s.whatsapp.net', './lib/uploader', '\x20*ʟᴏᴀᴅɪɴɢ\x20', 'eneon*\x0a', 'triggered', 'This\x20Features\x20Cannot\x20Be\x20Use\x20in\x20Group!', '```ලෝගෝ\x20සෑදීම\x20ආකාරය\x20-\x203```', 'smile', '\x0a*Gold*\x20:\x20', 'The\x20link\x20you\x20provided\x20is\x20invalid', '```ඉන්බොක්ස්\x20ඇති\x20චැට්\x20පෙන්වයි```', 'female', 'google*\x20\x20\x20\x0a\x20\x20\x20', 'broadcast', 'Online\x20List:\x0a\x0a', 'https://api.akuari.my.id/ephoto/scraper-2?text=', 'technology', 'estrowberry', 'deepsea\x20', '3dstone', 'glitch2', 'Need\x20word', 'https://api.tiodevhost.my.id/api/textpro/berry?text=', 'copyNForward', 'CAKE\x20STYLE\x20-\x203', '16505434800@s.whatsapp.net', 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html', '\x0a\x20\x20', '1917\x20STYLE\x20', 'groupParticipantsUpdate', './lib/mediafire.js', 'Send/Reply\x20Video/Audio\x20You\x20Want\x20Audio\x20With\x20Caption\x20', 'doccmd', '*📤\x20UPLOADING\x20YOUR\x20TIKTOK\x20VIDEO\x20...*', 'sendspm', 'sᴜʙsᴄʀɪʙᴇ', 'scoreText', '_[\x20👩🏻‍💼INFO\x20USER👨🏻‍💼\x20]_\x0a\x0a', '```මොඩ්\x20Apk\x20බාගත\x20කිරීම```', 'ecake\x20', 'elisanocategorymenu', 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x201', 'youtube', 'botstatus', 'Couple\x20Female', 'https://Mr-Nima-Test.gahakola.repl.co', '\x0a\x0a-\x20', '\x0a*🗃️\x20Public\x20Group\x20:*\x20https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc\x0a*📲\x20Install\x20Bot\x20:*\x20https://www.thivanka.lk\x20\x0a\x0a🫀©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴡᴀ\x20ʙᴏᴛ\x20ᴛᴇᴀᴍ', 'success', 'shota\x20\x20\x0a', 'delvote', 'neonhart2', 'audcmd', 'CHATTING', 'https://api.akuari.my.id/search/searchmod?query=', 'XX_XX', '🇱🇰', 'mentionedJid', 'application/vnd.android.package-archive', '```unblock\x20user```', '\x20text|text', 'happy', 'desc', '```✨\x20පරිවර්තනය\x20කරමින්\x20...```', 'sendmsg', 'MAGMA\x20STYLE\x20', '*👸💬\x20Please\x20Give\x20Me\x20a\x20Correct\x20Link*\x0a_Example\x20-\x20.short\x20https://youtube.com/c/NIMAOFC', 'team\x20logo\x20style\x20-\x201\x20', '©\x20DARK\x20MAKER', 'Successfully\x20Deleted\x20Vote\x20Session\x20In\x20This\x20Group', '𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰', 'userReceipt', 'receiptTimestamp', 'unblock', '*🎨\x20LOGO\x20PACK\x203*', 'mikasa\x20\x20\x0a', '&text2=', 'berry\x20', 'getstik', '```send\x20copple\x20profile\x20photo\x20randomly```', 'miku\x20\x20\x0a', 'about\x0a│\x20', './database/BAD_WORD.json', '*❗\x20Please\x20Give\x20me\x20message*\x0a_kick\x20,\x20add\x20,\x20promote\x20,\x20demote\x20,\x20block\x20,\x20unblock\x20,\x20leave_\x0a*ℹ️\x20Example\x20:\x20_.setmessage\x20kick_*', 'goodday\x0a🔵\x20', 'https://api.waifu.pics/sfw/', '*What\x20is\x20the\x20result\x20of:\x20', 'china', '```Make\x20logos\x20on\x20logo\x20pack\x20-1```', '```🚫💬\x20මට\x20කිසිවක්\x20සොයාගත\x20නොහැකිවිය\x20!```', 'Send/Reply\x20Video/Audio\x20You\x20Want\x20to\x20Use\x20as\x20Audio\x20With\x20Caption\x20', 'https://textpro.me/wicker-text-effect-online-932.html', 'devote*\x20-\x20for\x20no\x0a*', 'public', '22ytmp4', 'glitch', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/alive.mp3', '*📥\x20DOWNLOADING\x20YOUR\x20TIKTOK\x20AUDIO\x20...*', 'setgoodbye*\x20\x20\x20\x0a\x20\x20\x20\x20', 'msg', 'blockjid\x20off', 'skeleton\x20', 'ehi', '*The\x20link\x20you\x20provided\x20is\x20not\x20valid*\x20', 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html', 'https://api.botcahx.biz.id/api/emoji/skype?emoji=', '\x0a240\x20', 'https://textpro.me/ice-cold-text-effect-862.html', 'Blood-Text2', '```SORRY\x20CAN\x27T\x20DOWNLOAD\x20❗```', '\x0a\x20\x20\x20\x0a└───────────❍', '```🔄\x20Please\x20Wait\x20Connecting\x20Elisa\x20Bot\x20Sever\x20....```', 'video_HD', 'welcome\x20off', '```Send\x20personal\x20massage\x20list```', 'donate', 'liston', 'alive', 'BLOOD\x20STYLE\x20', '\x0a\x0a\x0a\x20\x20\x20\x20\x0a*──────────◯*\x0a', '\x0a\x20\x20\x20\x20\x20cow\x20', 'Enter\x20Query\x20Link!', 'SNOW\x20STYLE\x20', 'yts*\x20\x20\x20\x0a\x20\x20\x20', 'wave', 'Kick\x20Message', 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html', 'messages.upsert', 'getFullYear', 'round', 'dance\x0a│\x20', '*YOUTUBE\x20VIDEO*\x0a\x0a*', 'long', 'glomp\x0a│\x20', '```බොට්\x20මෙනුව\x20එවයි```', 'carbon', '\x20```Download\x20your\x20facebook\x20video\x20link```', 'bear\x20', '\x0a🔮\x20𝗨𝗥𝗟\x20:\x20', 'performance-now', 'reverse\x0a│\x20', 'secytmp4', 'remove.bg', 'rize\x20\x20\x0a│\x20', 'setexif', '*◯───────[\x20CONVERT\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'setbotpp\x0a│\x20', 'dltone', '*𝗚𝗥𝗢𝗨𝗣\x20𝗜𝗡𝗙𝗢*\x0a\x0a*𝗡𝗔𝗠𝗘\x20:*\x20', 'ima', 'shorts/', '2️⃣️', 'unblock\x0a│\x20', 'gremory\x20\x20\x0a', 'tafsirsurah', '```Remove\x20photo\x20background.```', 'antispm', 'goodbye', 'append', '𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿\x20𝙱𝙾𝚃', 'elisaanonymouschatmenu', '*🔄\x20Please\x20wait\x20Downloading\x20_XVIDEO_\x20Video\x20', 'https://telegra.ph/file/422f47351a4ba19070837.jpg', 'Successful\x20Sending\x20Broadcast\x20To\x20', 'miku', 'HTTP\x20Injector\x20Qᵁᴱᴱᴺ\x20Eᴸᴵˢᴬ\x20(SSHProxyV2Ray)\x20VPN.apk', 'SELECT\x20YOUR\x20MOD\x20APP', 'toimg', '\x20*.logo*\x20\x20\x20\x0a\x20\x20\x20\x20', '3davengers', 'user', 'unvoice', 'sakura\x20\x20\x0a', 'slap', 'CIRCUITE\x20STYLE\x20', 'tags', 'https://api.botcahx.biz.id/api/textpro/thunder?text=', 'delm', 'editinfo*\x20\x0a\x20\x20\x20', 'https://api.botcahx.biz.id/api/textpro/glitch?text=', 'https://api.botcahx.biz.id/api/textpro/3dchristmas?text=', 'neon5', 'LAVA\x20STYLE\x20', '```Change\x20Group\x20Name```', 'audio', 'https://telegra.ph/file/a41e3b88d1676fa98dd00.jpg', '-filter:a\x20\x22atempo=0.5,asetrate=65100\x22', 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html', 'https://api.violetics.pw/api/ephoto360/Typography-Leaves?apikey=', 'not_announcement', '```Telegram\x20Sticker\x20Download```', 'එසැන\x20පුවත්', 'lende\x20', '*Please\x20Give\x20me\x20a\x20link*', 'CHRISTMAS\x20STYLE\x20', '1️⃣', '\x0a*𝗠𝗔𝗗𝗘\x20:*\x20', '360p', '```අවහිර\x20කර\x20අයෙකුගේ\x20අවහිරතාවය\x20ඉවත්\x20කිරීම```', 'sendMedia', 'Random\x20Coffee', 'addmsg', '3dspace', 'birthday-cake7', '\x0a720\x20', 'blood-frosted\x20', 'slow*\x0a', 'filesize', '*SORRY\x20CAN\x27T\x20DOWNLOAD\x20❗*', 'song3\x0a│\x20', 'tt2', 'spotify', '\x0a\x20🤤\x20URL\x20-\x20', 'cyberspace\x0a│\x20', 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', 'logo2', 'MENU_IMOJI', 'https://violetics.pw/api/downloader/facebook?apikey=', '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'EHI_IMOJI2', 'ytshort', '*👸💬\x20Need\x20video\x20name\x20or\x20url*', '3dneon\x20', '*👸💬\x20Please\x20give\x20me\x20a\x20recipient\x27s\x20number\x20and\x20your\x20massage*\x20\x0a\x20_example\x20.sendmsg', 'namemeaning\x0a🔵\x20', 'neon1', 'tebaklagu', '\x0a🔮\x20*𝗭𝗢𝗗𝗜𝗔𝗖\x20𝗖𝗢𝗨𝗣𝗟𝗘\x20:*\x20', 'key', 'taurus', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'G_INFOON', '❷\x20Title\x20-\x20', 'leaves\x20', '\x0a*Hash\x20List*\x0aInfo:\x20*bold*\x20hash\x20is\x20Locked\x0a', 'bcgroup*\x20\x20\x20\x0a\x20\x20\x20\x20', 'unluckyday\x0a🔵\x20', './database/user/alat_tukar.js', '*කරුනාකර\x20මට\x20ඉමෝජියක්\x20ලබාදෙන්න*\x0aඋදා\x20:\x20*.pemoji\x20🤠*', 'textpro', 'https://telegra.ph/file/a7954b940ac9acddf285a.jpg', 'bug\x0a│\x20', 'quoteanimexllzlzkl', '```Send\x20Bot\x20Owner\x20Contact```', '\x20\x20\x20\x20', '\x0a*👤\x20Author\x20:*\x20', '3dbox', '\x0a🎬\x20𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡\x20:\x20', 'close', '&type=', 'SUBSCRIBE', 'test', '\x20is\x20Blocked\x20!*', 'LEAVE', 'limit', 'setcmd', '❾\x20Title\x20-\x20', '*📥\x20DOWNLOADING\x20YOUR\x20FACEBOOK\x20VIDEO\x20...*', 'birthday-cake\x20', '120363043146209271@g.us', 'cake-text2', '\x0a\x20☛\x20𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁\x20:\x20', 'delete', 'https://api.botcahx.biz.id/api/soundoftext?text=', 'dragonday\x0a🔵\x20', '*ℹ️\x20Please\x20reply\x20message*', '\x20ᴀʙᴏᴜᴛ\x20', '\x0a\x0a\x20➥\x20ᴜᴘʟᴏᴀᴅ\x20ᴏɴ\x20-\x20', 'getName', 'darahawal', 'firework', '\x0a⦁\x20*𝙼𝙴𝙳𝙸𝙰\x20𝚄𝚁𝙻*\x20:\x20', './database/user/darah.json', 'https://telegra.ph/file/1f4efdefa2c959dbf5a7e.jpg', 'virgo', 'Cristmas\x20StyleLogo\x20Pack\x20-\x204', 'qhalowin\x20', '┌────[💃\x20*𝙴𝚕𝚒𝚜𝚊\x20𝙱𝚘𝚝*\x20💃]───●\x0a│\x0a│\x20\x20🧚‍♀️\x20𝙵𝙱\x20𝚅𝚒𝚍𝚎𝚘\x20𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛\x20🧚‍♀️\x0a│⦁\x20𝚃𝚒𝚝𝚕𝚎\x20:\x20', 'watercolor\x20', 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html', 'ARENA\x20OF\x20VALOR\x20STYLE\x20', '```', 'wikimedia', 'lick\x0a│\x20', './settings', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '```search\x20your\x20text\x20on\x20youtube```', '```ඇනිමේශන්\x20ස්ටිකර්\x20GIF\x20බවට\x20පත්කිරීම```', 'hdfbvid', '\x20to\x20play\x20suit\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20@', 'tourl', 'yeet\x0a', './database/Anime/ana.json', '*👸💬\x20Can`t\x20Remove\x20Nima*', '```👸💬\x20Please\x20give\x20me\x20a\x20some\x20words\x20...```\x0a_example\x20.logo3\x20MR\x20|\x20NIMA_', 'deletemessage\x20promote', '```ඔන්ලයින්\x20සිටින\x20අය\x20පෙන්වයි```', 'yeet', '🔮\x20*𝗭𝗢𝗗𝗜𝗔𝗖\x20:*\x20', 'male', 'https://test-apiyaa.herokuapp.com/api/dowloader/yt?url=', '\x20step\x20sister', '\x0a\x0a➮\x20𝙱𝙾𝚃\x20𝙽𝙰𝙼𝙴\x20-\x20', 'UNDERWATER\x20STYLE\x20', 'ABOUT_CMD', '\x0a*ʜɪᴊᴀʙᴇʀ\x20ɪᴍᴀɢᴇs*', 'https://api.botcahx.biz.id/api/textpro/strawberry?text=', '*The\x20link\x20you\x20provided\x20is\x20not\x20valid*\x0a\x20Example\x20:\x20.tiktok\x20https://www.tiktok.com/@mr_nima_._._x/video/7185424580108897563', 'LEND\x20STYLE\x20', 'toLocaleDateString', 'apk_name', 'eorange*\x0a', 'filter', 'ytchannel', 'sgif2', 'bcimg', 'jawaban', 'Infinity', 'handhold\x0a', '*👸\x20Thivanka\x20Nirmal\x20News\x20👸*\x0a\x20\x20\x20\x20\x20\x20\x20\x0a*🏷️\x20මාතෘකාව\x20:*\x20', 'https://nimaxxx.herokuapp.com/api/srhx?q=', 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x205', 'https://textpro.me/blood-text-on-the-frosted-glass-941.html', 'inspect', 'Steel\x20style', '\x20\x20\x20\x20\x20⫷\x20👸\x20*𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙽𝙴𝚆𝚂*\x20👸\x20⫸\x0a\x0a', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/APK/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk', '\x0a*𝗜𝗗\x20𝗚𝗥𝗢𝗨𝗣:*\x20', 'exports', 'concat', 'lofg2', 'split', '\x0a*➮\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20:*\x20', 'Antilink\x20Mode', '&apikey=sanuwa', '720getvideo', 'deletemessage', 'quoted*\x20\x20\x20\x0a\x20\x20\x20\x20', '9018384Thnhfv', 'https://api.akuari.my.id/downloader/fbdl3?link=', 'magma\x20', '```👸💬\x20කරුනාකර\x20මට\x20වීඩියෝවක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.yt\x20how\x20to\x20make\x20Thivanka\x20Nirmal\x20bot*', '\x20ᴛɪᴋᴛᴏᴋ\x20ᴠɪᴅᴇᴏ...\x20🔄', 'menu\x0a│\x20', 'https://api.botcahx.biz.id/api/photooxy/under-grass?text=', 'eshadow', 'fiction', 'selectedButtonId', 'elisa', 'xfarr-api', './database/Anime/sakura.json', 'grpmenu', 'birthday-cake5\x20', 'readTimestamp', '\x0a│\x0a└────────●', '```Download\x20videos\x20[\x20144p\x20/\x20240p\x20/\x20360p\x20/\x20480p\x20/\x20720p\x20/\x201080p\x20]\x20Qualitys```\x20Can\x20not\x20Download\x20up\x20to\x20100mb\x20videos\x20❗', 'dance\x0a', 'ago', 'PUBLIC_GROUP_RULES', 'eloveu*\x0a', 'tiktokwm', '```Delete\x20massage\x20for\x20everyone```', 'aroma_keberuntungan', '```👸💬\x20Please\x20give\x20me\x20a\x20video\x20name.```\x0a\x20*Example\x20-\x20.video\x20how\x20to\x20make\x20Thivanka\x20Nirmal\x20bot*', 'tiktokjson2', 'valentine\x20', 'heapUsed', '*✅\x20JOINED\x20*', 'VOICE_CMD', 'https://api.tiodevhost.my.id/api/tools/styletext?text=', '\x0a*⏰\x20අලුත්\x20කරන\x20වේලාව\x20:*\x20_', 'linkgroup', 'unlinkSync', 'M_REPLY', 'asong', 'kiss', 'admin', 'Need\x20tiktok\x20url', 'Alive\x20Message', 'videoMessage', 'fileSha256', '2101QvLnXq', '🔮\x20Media\x20Url\x20:\x20', 'icon', 'eberry\x20MR\x20NIMA\x0a\x20\x0a*──────────◯*\x0a', 'https://api.akuari.my.id/ephoto/mountain?text=', 'cogan\x0a│\x20', 'sendPresenceUpdate', '6705572tyMsMy', '.json', '-af\x20equalizer=f=54:width_type=o:width=2:g=20', 'malaysia\x0a│\x20', 'ecrismas', 'onx-api', './src/remobg-', 'religionmenukdksoejdjj', 'stelegram*\x20\x20\x0a\x20\x20\x20', '&link=https://en.ephoto360.com/create-metallic-cover-online-297.html', 'horoscopemenuxxxxxxx', 'savevid', 'directvideodown', '&lang=', '*⚙️\x20Ping\x20:*\x20```', '@g.us', 'WebMessageInfo', 'img3', 'https://textpro.me/create-space-text-effects-online-free-1042.html', 'blueBright', 'zodiak', 'ʙᴏᴛ\x20ʙʏ\x20ᴅᴀʀᴋ\x20ᴍᴀᴋᴇʀ\x20ᴛʜᴀɴᴋs\x20ғʀᴏ\x20sᴀɴᴜᴡᴀ', 'helakuru', '▷\x20OWNER\x20◁', 'deletemessage\x20kick', 'warna_keberuntungan', 'filesizeF', 'elisabot', '𝙼𝙴𝙽𝚄', 'bite', 'WATERCOLOR\x20STYLE\x20', 'horror\x20style\x20', '\x20|\x20', 'dl_link', '\x20Whatsapp\x20', 'song\x0a│\x20', 'nomor_keberuntungan', 'renamesticker', '\x20Youtube\x20', 'messages', 'shina', 'buttonsResponseMessage', 'blood', 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', 'welcome_image', 'remove-bg', 'Mode\x20Edit\x20Info', 'getTime', 'antilink\x20off', 'picryujin', './Elisa.jpg', '```සමූහයේ\x20තොරතුරු\x20ලබාගැනීමට```', 'grupinfo\x0a│\x20', 'xvideo\x0a│\x20', '*Sorry,\x20Can\x27t\x20Find\x20your\x20reqest\x20🥴*', '\x0a\x20\x20\x20\x20duck\x20\x20', '*File\x20Over\x20Limit*\x20', 'No\x20Hashes', 'tiktokmp3', 'https://api.violetics.pw/api/ephoto360/Lend-Effect?apikey=', 'https://api.violetics.pw/api/ephoto360/Light-Effect?apikey=', 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', '*👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x0a\x0a\x20Search\x20from\x20', '```Donate\x20fro\x20bot```', 'youtubedl', 'pubg\x20style\x20', 'https://api.ibeng.tech/api/maker/emoji2png?text=', 'TRANSFORMER\x20STYLE\x20', '```අයෙකු\x20අවහිර\x20කිරීමට```', '✨\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20✨', 'deep\x0a│\x20', 'potentialdisease\x0a🔵\x20', 'https://api.violetics.pw/api/ephoto360/Status-Mood3?apikey=', '3dchristmas', 'togif*\x20\x20\x20\x0a\x20\x20\x20', 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', 'ttk', 'logo3\x0a│\x20', 'short', 'team\x20logo\x20style\x20-\x204\x20', '.\x20@', 'lanjut', 'https://textpro.me/break-wall-text-effect-871.html', '\x20Remove\x20From\x20Group*', 'black', '```👸💬\x20කරුනාකර\x20වචනයක්\x20ලබාදෙන්න\x20...```\x0a_උදාහරණ\x20.logo\x20MR\x20NIMA_', 'discovery\x20', 'checkvote*\x20-\x20to\x20check\x20the\x20votes\x0a*', 'open', 'lovemsg', '🔮\x20*𝗡𝗔𝗠𝗘\x20:*\x20', 'includes', '```👸💬\x20කරුනාකර\x20මට\x20වීඩියෝවක\x20හෝ\x20ගීතයක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.yt\x20how\x20to\x20make\x20Thivanka\x20Nirmal\x20bot*', 'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=', '*🌈\x20මදක්\x20රැදීසිටින්න\x20ඔබගේ\x20textlogo\x20සෑදමින්\x20පවතී...*', '🎬\x20VIDEO\x20🎬', '```Time\x20Out\x20!```', '```ලෝගෝ\x20සෑදීම\x20ආකාරය\x20-\x202```', 'spamshild', '\x27\x20Not\x20Listed\x20In\x20The\x20Message\x20List', '\x0a\x20get\x20on\x20helakuru.com', 'video\x0a│\x20', 'application/zip', 'link', '😵‍💫', 'status4', '\x20*.logo2*\x20\x20\x20\x0a\x20\x20\x20\x20', 'settings', 'keys', 'https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=', 'ayuzawa', 'nowmtiktok', '\x20Group\x20Chat,\x20Finish\x20Time\x20', 'waktu', 'randommenu', 'check', 'listpc*\x20\x20\x20\x0a\x20\x20\x20\x20', 'ytsearch', '&link=https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html', '\x0a*🗳️\x20Title\x20:*\x20', 'owner', 'fb*\x20\x20\x0a\x20\x20\x20', '*Sorry,\x20Can\x27t\x20Find\x20your\x20reqest\x20❗*', '360P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢', '\x0a🔮\x20*𝗘𝗟𝗘𝗠𝗘𝗡𝗧\x20:*\x20', 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x202', 'eilluminati', 'japan', '*👸💬\x20Please\x20reply\x20sticker.*', '\x0aYou\x20Came\x20Back\x20Online\x20From\x20AFK', 'thumb', 'Antilink\x20Inactive\x20!', '𝚂𝚃𝙰𝚃𝚄𝚂', 'yuki-', 'tlb', './database/Anime/madara.json', 'cry\x0a│\x20', 'ethunder', 'getvideo', 'thewall', 'Maybe\x20The\x20Message\x20You\x20Replied\x20Does\x20Not\x20Contain\x20Ytsearch\x20Results', 'neon\x20style\x20', 'glitch\x20style\x20-\x202\x20', 'downloads', 'attp2\x0a│\x20', 'removebg2', 'Off', '94775315987', '```Send\x20Bot\x20Menu```', 'lofg3', 'https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json', '\x0aaudio\x20', 'ss\x0a│\x20', 'eshadow*\x0a', '```\x20\x0a*📶\x20Ram\x20Usage\x20:*```\x20', 'massage', '*BOT\x20SETTINGS*', '\x0a*Size*\x20:\x20', 'NEON\x20DEVIL\x20STYLE\x20', 'holographic', 'mikasa\x20\x20\x0a│\x20', '```ඔබගේ\x20සින්දුව\x20හෝ\x20වීඩියෝව\x20යූටියුබ්\x20හී\x20සර්ච්\x20කර\x20බාගත\x20කරයි```', 'lyrics', './database/Anime/boruto.json', 'gaw\x20', '```ස්ටිකර්\x201ක්\x20ෆොටෝ\x201ක්\x20බවට\x20හැරවීම.```', 'highfive\x0a', '\x0a*ᴘɪᴄ\x20ʀᴏsᴇ*', 'listonline*\x20\x20\x20\x0a\x20\x20\x20\x20', 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html', 'Illuminati\x20Style\x20Logo\x20Pack\x20-\x204', 'eilluminati*\x0a\x0a\x20\x20\x20', '◯═══════════◯\x0a', 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html', 'CONVER_TING', 'gitclone\x20repo\x20link\x0a', 'https://api.violetics.pw/api/ephoto360/Ninja-Mascot?apikey=', '*📤\x20Uploading...*', 'script', 'wait', 'start\x0a👤\x20', 'estrowberry*\x0a', 'yts', 'logo4', 'https://textpro.me/horror-blood-text-effect-online-883.html', 'ROCK\x20STYLE\x20', 'https://api.violetics.pw/api/ephoto360/Typography-Maker3?apikey=', 'iqra\x0a🔵\x20', '▷\x20GROUP\x20MENU\x20◁', 'searchsticker', 'free', '❼\x20Title\x20-\x20', 'twiter', '```Remove\x20member\x20from\x20group```', '```Successfully\x20Found\x20Partner,\x20now\x20you\x20can\x20send\x20message```', 'awoo\x0a│\x20', '```Change\x20your\x20bot\x20messages\x20[\x20add\x20,\x20kick\x20,\x20promote\x20,\x20demote\x20,\x20block\x20,\x20unblock\x20,\x20leave\x20]```', 'https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html', 'OFF', 'templateButtonReplyMessage', 'sustenance\x0a🔵\x20', 'demote', 'KICK', 'elisasearchmenu', 'play\x0a│\x20', 'https://api.violetics.pw/api/ephoto360/Neon-Devilwing?apikey=', 'sender', 'replace', 'archive', 'bcall*\x20\x20\x20\x0a\x20\x20\x20\x20', 'ecoffee', '28777', '\x20:\x20', 'video2', '*ENJOY*', 'caption', 'AUTO_BIO', '😍💗', 'math*\x20\x20\x20\x0a\x20\x20\x20', 'erza\x20\x20\x0a', 'ICE\x20STYLE\x20', 'deletemessage\x20demote', '\x0aIt\x27s\x20been\x20', 'Mr\x20', 'status5\x20', 'https://api.tiodevhost.my.id/api/photooxy/shadow-sky?text=', '&link=https://textpro.me/create-ninja-logo-online-935.html', '\x20Fancy\x20Text\x20List\x0a🗳️\x20Your\x20text\x20:\x20', '```Get\x20your\x20song```', '```Choose\x20two\x20members\x20from\x20the\x20group.```', 'Resoultion*\x20:\x20', 'limitawal', 'kurumi', 'eongrass*\x0a', '94715166712@s.whatsapp.net', 'OWNER', '```වීඩියෝ\x20බාගතකිරීම\x20[\x20144p\x20/\x20240p\x20/\x20360p\x20/\x20480p\x20/\x20720p\x20/\x201080p\x20]```\x20100mb\x20වඩා\x20වීඩීයෝ\x20බාගතකළ\x20නොහැක\x20❗', 'neon4\x20', 'qhalowin', 'sticker\x0a│\x20', '🔮\x20*𝗝𝗔𝗦𝗜𝗟\x20:*\x20', 'https://api.akuari.my.id/textpro/scraper-2?text=', 'Time\x20Out\x0aAnswer:\x20', 'scrape-primbon', '\x0a\x20☛\x20𝚁𝙰𝚃𝙴\x20:\x20', '*This\x20is\x20not\x20Sticker\x20please\x20reply\x20correct\x20sticker', '_\x0a*▣\x20ᴀᴠᴀʟᴀʙʟᴇ\x20ʟᴏɢᴏᴇs\x20-*\x20_44_\x0a\x0a☐═════════════════════╝', 'blown\x0a│\x20', '\x20ᴇʜɪ\x20ғɪʟᴇ\x20', '*⤵\x20Downloading\x20mediafire\x20file...*', 'cringe\x0a\x0a*──────────◯*\x0a', 'chalk', 'THUNDER\x20\x20STYLE\x20', 'fancy\x0a╰─────────────⦁\x0a\x20\x20\x0a╭──❰\x20*𝚁𝙰𝙽𝙳𝙾𝙼\x20𝙰𝙽𝙸𝙼𝙴*\x20❱\x0a│\x20', 'groupAcceptInvite', 'ytmp3*\x20\x20\x0a\x20\x20\x20', '\x0a🔵\x20𝗩𝗜𝗘𝗪𝗦\x20:\x20', '```සමූහයට\x20අයෙකු\x20එකතු\x20කිරීමට```', '\x20උදාහරණ\x20\x20:\x20', 'setgoodbye\x0a│\x20', 'url', '7590590zYeAKW', '\x0a\x20\x20\x20\x20', 'dropwater\x20', 'util', '✨\x20select\x20✨', 'waterdrop', 'description', 'audiosong2', 'uakdmin_sr_2064', 'mikasa', 'emilia\x20\x0a', '\x0aDon\x27t\x20tag\x20him!\x0aHe\x27s\x20in\x20AFK/Offline\x20', '&text_2=', '```Animation\x20sticker\x20convert\x20to\x20video```', 'MAKE\x20LOGO', 'https://api.tiodevhost.my.id/api/info/translate?text=', 'wame', 'ana\x0a', 'fate\x0a🔵\x20', '\x0a\x20\x20\x20\x20\x20\x20rabit\x20', 'estrowberry\x20', 'NEON-DEVIL\x20WING\x20STYLE\x20', '😶‍🌫️', '\x0a🔮\x20*𝗡𝗨𝗠𝗕𝗘𝗥\x20:*\x20', 'application/octet-stream', '\x0a🔮\x20𝗦𝗢𝗨𝗥𝗖𝗘\x20:\x20', 'LEAVES\x20STYLE\x20-\x203', 'https://textpro.me/create-space-3d-text-effect-online-985.html', 'video2\x20', '*◯───────[\x20SYSTEM\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'couplematch\x0a🔵\x20', 'mp24', 'bctext', '*◯───────[\x20MISC\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'https://textpro.me/create-lion-logo-mascot-online-938.html', 'vote*\x20-\x20to\x20start\x20voting', 'qvideogame', '```Download\x20Plastore\x20apk```', '```Mod\x20Apk\x20Download```', 'eshadow\x20', 'https://nimaxxx.herokuapp.com/api/dlx?url=', 'SG_FILE3', 'emojimix\x0a│\x20', 'https://telegra.ph/file/b6077fd339af273d1ec4e.jpg', 'bot', 'quality', '4️⃣', 'suitpvp', '\x0a\x0a\x20', 'couplepp', 'cloud', './database/Anime/naruto.json', 'nom', 'mountain\x20style\x20', '```ඇනිමේශන්\x20ස්ටිකර්\x20වීඩියෝ\x20බවට\x20හැරවීම```', 'FICTION\x20STYLE\x20', 'kalimat', '3d\x20reto\x20style\x20', 'ytplay', '```You\x20Are\x20Not\x20In\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20To\x20Find\x20A\x20Partner```', 'botAdmin', 'antiwame\x20on', 'YOUTUBE\x20MP3', 'groupUpdateSubject', '*Successful\x20Sending\x20Broadcast\x20To\x20', '\x0a*◯───────[\x20GROUP\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'scorpio', 'UNBLOCK\x20JID', '\x0a*🐅\x20Tigers*\x20:\x20', 'https://api.ibeng.tech/api/maker/attp?text=', '*👸💬\x20Please\x20give\x20me\x20a\x20text\x20and\x20select\x20language*\x0a\x20_example\x20-\x20.trt\x20ආයුබෝවන්;en_\x0a\x0a*✨\x20Translete\x20language\x20codes\x20✨*\x0a\x0a', '*✍️\x20Artist\x20:*\x20', 'honey', 'rize\x20\x20\x0a', 'elisasistemmenu', './lib/tes.xlsx', '\x20\x20\x20\x0a', 'sewa', 'ig2\x0a│\x20', 'yeet\x0a│\x20', 'elisadownloadmenu', 'join\x0a│\x20', 'jidblock\x0a╰────────────⦁\x0a\x0a╭───❮\x20*𝙾𝚃𝙷𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝚂*\x20❯\x0a│\x20', 'https://api.violetics.pw/api/ephoto360/Galaxy-Angelwings?apikey=', '*📥\x20Downloding\x20mod\x20apk...*', 'TEXT\x20TO\x20STETUS\x20\x20STYLE\x20(lovely)-\x204', 'nom\x0a', '131', 'programming\x0a│\x20', 'slow', 'brokenglass\x20', 'naturo', 'OWNER_CMD', 'tagall', '```ඔබගේ\x20වචනය\x20යූටියුබ්\x20හී\x20සොයයි```', '\x0a\x0a────────────────────────\x0a\x0a', 'emilia\x20\x0a│\x20', '\x0a\x20\x20\x20\x20\x20\x20\x0a*──────────◯*\x0a', '```ඔබගේ\x20ආත්මීය\x20මිතුරා\x20තෝරයි```.', 'birthday-cake3\x20', 'selecttypebutton', 'delete*\x20\x20\x20\x0a\x20\x20\x20\x20', 'Exif\x20Has\x20Been\x20Successfully\x20Changed\x20to\x0a\x0a🔮\x20Packname\x20:\x20', 'lontong_desk', './lib/converter', '\x20File\x20Name', 'deletemsg', '```✨\x20Transleteing\x20...```', 'fbook\x0a│\x20', '```Sticker\x20convert\x20to\x20photo.```', 'next\x0a👤\x20', 'hug\x0a', 'shinka', '&apikey=BRkP6EOB', 'tiktok\x20audio\x20', '\x0a💫\x20*Type\x20:*\x20', 'https://youtube.com/shorts', 'play', 'state', 'onlinelist', 'pichijaber', 'slow\x0a│\x20', 'reduce', 'facebook.com', 'ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴘᴜʙʟɪᴄ', 'base64', 'QUEEN\x20ELISA\x20V2', 'welcome\x0a', 'The\x20message\x20you\x20replied\x20to\x20does\x20not\x20contain\x20a\x20reply', './database/Anime/yuki.json', 'emostick', 'catatan', '(async\x20()\x20=>\x20{\x20return\x20', 'groupMetadata', 'fishing1111', 'logo4\x0a╰──────────────⦁\x0a\x0a╭───❰\x20*𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'newsjson2', '_\x0a\x0a*📄️\x20විස්තරය\x20:*\x0a', 'ban', './database/Anime/asuna.json', 'title', '\x0a\x20\x20cheken\x20\x20\x20', '144getvideo', 'add\x0a│\x20', 'seleytmp3', 'ttp\x0a│\x20', 'ayuzawa\x20\x0a', 'https://t.me/addstickers', '3dneon', '*💃\x20DATA\x20BASE\x20MASSAGE\x20LIST\x20💃*\x0a\x0a', 'modapk\x0a│\x20', 'unlocked', '890OmeijE', '*MEDIAFIRE\x20DOWNLOADER*\x0a\x09\x09\x09\x09\x0a*Name*\x20:\x20', '*📥\x20ඔබගේ\x20ගොනුව\x20බාගතකරමින්\x20පවති...*', 'හිරු\x20පුවත්', 'neonhart', '🔵\x20*𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟\x20𝗖𝗛𝗔𝗧\x20𝗟𝗜𝗦𝗧*\x0a\x0a𝗧𝗢𝗧𝗔𝗟\x20𝗖𝗛𝗔𝗧\x20:\x20', 'tiktok\x20nowm\x20', '『©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20』', '144P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢', 'waterpipe\x20', 'editinfo\x0a│\x20', 'team\x20logo\x20style\x20-\x202\x20', 'setppgrup', '📽️', 'planet_yang_mengitari', 'kick\x20all\x20members', '\x0a*Mime*\x20:\x20', 'setalive*\x20\x20\x20\x0a\x20\x20\x20\x20', 'sustenance2\x0a🔵\x20', 'esana-node-api', '.start', 'true', 'leaves1\x20', '*💬\x20Ehi\x20file\x20යනු*\x20,\x0aඔබට\x20whatsapp\x20package\x20බාවිතාකර\x20free\x20internet\x20ලබාගත\x20හැකි\x20ක්‍රමයකි.\x0a\x0aඋදාහරණයක්\x20ලෙස\x20,\x20ඔබට\x20whatsapp\x20package\x20එක\x20බාවිතාකරමින්\x20tiktok\x20,\x20fb\x20,\x20youtube\x20,\x20google\x20යාම\x20වැනිදේ\x20සිදුකර\x20හැකිවීම.\x0aමෙම\x20ehi\x20file\x20උපරිම\x20අන්තර්ජාල\x20වේගයක්\x20ලබා\x20නොදෙයි.\x20නමුත්\x20ඔබට\x20යම්\x20වේගයකින්\x20අන්තර්ජාල\x20පහසුකම්\x20ලබාගත\x20හැක.\x0aඔබට\x20මෙම\x20ehi\x20file\x20සාමාන්‍යයෙන්\x20අප\x20බාවිතාකරන\x20\x0awhatsapp\x20,\x20facebook\x20,\x20youtube\x20,\x20zoom\x20යන\x20ආදී\x20package\x20වලට\x20ගැලපෙන\x20ආකාරයේ\x20file\x20බාවිතාකර\x20හැක\x20\x0a\x0a\x0aබාවිතාකරන්නේ\x20කෙසේද\x20?\x0a1.\x20http\x20injector\x20app\x20එක\x20ඔබගේ\x20phone\x20එකට\x20install\x20කරගන්න\x20\x0a2.\x20ඔබගේ\x20package\x20එකට\x20අදාල\x20ehi\x20file\x20එක\x20තෝරාගන්න\x20\x0a3.\x20එම\x20file\x20එක\x20httpinjector\x20app\x20එකට\x20ඇතුලත්\x20කර\x20start\x20බටන්\x20එක\x20ඔබන්න\x20\x0a(\x20ඔබට\x20මෙම\x20file\x20බාවිතාකිරීමටනම්\x20ඉහත\x20කිසියම්\x20හෝ\x20package\x201ක්\x20දමාගෙන\x20තිබිය\x20යුතුය\x20)\x0a\x0a*©\x20ᴍʀ\x20ɴɪᴍᴀ*', '\x0a🔳\x20𝗩𝗜𝗗𝗘𝗢\x20𝗜𝗗\x20:\x20', 'https://api.violetics.pw/api/ephoto360/Status-Life?apikey=', 'selecttypebutton\x20', '&apikey=ibeng', 'gclink', 'eongrass\x20', 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', 'owner\x0a│\x20', '1610993486', 'මොකද\x20කරන්නේ', 'Can\x20only\x20reply\x20to\x20messages\x20from\x20bots', 'hasil', 'leaves', 'poke\x0a│\x20', '▷\x20FUN\x20MENU\x20◁', 'ecrismas\x20', 'blush\x0a', '\x0a\x20\x20\x20\x0a│\x20*💥\x20ǫᴜᴀʟɪᴛʏ\x20:*\x20', '360', 'https://sanuw-api.herokuapp.com/docs/download/mediafire?url=', 'BOKEH\x20STYLE\x20', 'picjiso', 'date', 'textlogo', 'logomenu', '...*', 'bcgroup', 'mfire2', '```Choose\x20your\x20soulmate```.', '*🐣\x20Your\x20are\x20welcome...\x20', '\x20720p', '𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝚅2\x20𝙻𝙾𝙶𝙾\x20𝙻𝙸𝚂𝚃\x20-\x202\x20𝚂𝙴𝙻𝙴𝙲𝚃\x20𝚈𝙾𝚄𝚁\x20𝙻𝙾𝙶𝙾\x20', '📁\x20\x20Download\x20Song\x20Document\x20Type\x20\x20', 'https://api.tiodevhost.my.id/api/textpro/ninja-logo?text=', 'horr', 'list', 'Use\x20', 'song_size', '_Who\x20do\x20you\x20want\x20to\x20challenge?_\x0aTag\x20the\x20person..\x0a\x0aExample\x20:\x20', '🔵\x20*𝗡𝗔𝗠𝗘\x20:*\x20', 'teks', 'grafiti\x20', 'eflaming\x20', 'xnxxsh2', 'https://play.google.com/', '```ඔබගේ\x20වචනය\x20ගූහල්\x20හී\x20සොයයි```', 'audioselecttypebutton\x20\x20', 'VOICE_REPLY', 'getMonth', 'lofg1', 'audioMessage', 'https://textpro.me/create-avatar-gold-online-956.html', 'mediafire2', 'add', 'directimg', 'BEAR\x20STYLE\x20', 'shota\x20\x20\x0a│\x20', 'kaga\x20\x20\x0a│\x20', 'shift', 'bcgroup\x0a│\x20', 'circuit', '```පනිවිඩයක්\x20සියලු\x20දෙනාගෙන්\x20මකාදැමීමට\x20[\x20delete\x20for\x20everyone\x20]```', 'map', 'https://telegra.ph/file/e0aa108673b5059695677.jpg', 'sendImageAsSticker', 'https://api.violetics.pw/api/ephoto360/Neonlight-Galaxy?apikey=', '*Please\x20Give\x20me\x20a\x20imoji*\x20\x0aExample\x20*.pemoji\x20🤠*', 'sᴛᴀᴛᴜs', 'meta', 'Link\x20Invalid!', './src/hremo-', 'cap', '\x0a\x20*𝗛𝗢𝗥𝗢𝗦𝗖𝗢𝗣𝗘\x20𝗠𝗘𝗡𝗨*\x0a\x0a🔵\x20', 'GROUP_NAME', '🎙️', 'kill', 'picrose', 'sddlid', 'SONG_UP', '-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22', 'alquran\x0a🔵\x20', 'cake-text\x20', 'find', 'EXAMPLE', 'rainbow\x20', '_There\x20are\x20still\x20votes\x20in\x20this\x20chat!_\x0a\x0a*', 'audio/mp4', 'stop\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'buypremium', 'nima', '```බොට්\x20අයිතිකරුට\x20වාර්තාකරන්න```', './database/Anime/rize.json', 'startsWith', '\x0a*☞\x20url\x20:*\x20', 'status8', './Media/sticker/', 'eglitch*\x0a', '\x20story\x20wa\x20anime', '\x0a\x0a╭───[\x20\x20*ᴇʟɪsᴀ\x20ʙᴏᴛ*\x20\x20]───◉\x0a│\x0a│\x20\x20🎬\x20ʏᴛ\x20\x20ᴠɪᴅᴇᴏ\x20ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20🎬\x0a│\x20\x0a│\x20➧\x20sᴇʟᴇᴄᴛ\x20ʏᴏᴜʀ\x20ᴠɪᴅᴇᴏ\x20ʀᴇsᴏʟᴜᴛɪᴏɴ\x20\x0a│\x0a╰──────◉\x0a', 'qhorr\x20', '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​', '\x0aUser\x20:\x20@', 'light', 'asuna\x20\x0a', '94715166712', 'insta', './media/image/tambang.jpg', 'delete\x20alive', 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'BLOCK_CMD_MSG', '\x20\x0a\x20\x20\x20\x0a*──────────◯*\x0a', 'rainbow2\x20', 'editinfo', 'groupFetchAllParticipating', '```Xnxx\x20වීඩියෝ\x20බාගත\x20කිරීම\x20(\x20ප්‍රදාන\x20ශාපයේ\x20පමණක්\x20වලංගු\x20විදානයකි\x20)```', 'Asia/Kolkata', 'search', '*ℹ️\x20Welcome\x20is\x20Not\x20Activated.*', 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html', '\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a', 'START', 'song', '&link=https://textpro.me/create-wolf-logo-galaxy-online-936.html', '.mpeg?filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg', 'dropwater2', 'Keluar', './src/math', '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​', '```Get\x20url\x20your\x20image\x20/\x20video```', '120363043491784571@g.us', 'tiktok*\x20\x0a\x20\x20\x20', 'cry', '*⤴\x20Uploading\x20your\x20mediafire\x20file...*', 'graffitibike\x20', 'whatsapp.com', 'neko', 'bear\x20style', 'tubemp3_biz', 'helpers', 'Already\x20Activated', '\x20\x0a\x20', '7kBTwdr', 'sendTextWithMentions', './database/user/buruan.js', 'CHRISTMAS\x20STYLE\x20-\x202', 'views', 'wood', 'UNBLOCK', 'LIGHT\x20STYLE\x20', 'lontong', '@s.whatsapp.net', '\x20720', 'leaves3\x20', '_අහබු\x20ලෙස\x20copple\x20profile\x20photo\x20එවයි```', 'profilePictureUrl', '3866334kDrHAq', '📅\x20', '```send\x20broadcast\x20All\x20groups```', '\x20*ᗰᗴᑎᑌ*\x20', '*📤\x20UPLOADING\x20YOUR\x20TIKTOK\x20AUDIO\x20...*', 'Can\x27t\x20play\x20with\x20myself\x20!', '&type=360', '*👸💬\x20Please\x20Give\x20me\x20a\x20imoji*\x0aExample\x20-\x20.', 'leaves4\x20', 'https://api.violetics.pw/api/ephoto360/Status-Love?apikey=', '\x20Thivanka\x20Nirmal\x20bot', 'group\x20close', 'mountain', '3165003iQorFa', 'badday\x0a🔵\x20', 'https://textpro.me/neon-text-effect-online-879.html', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴅᴇᴠᴏᴛᴇ\x20]──◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a├\x20Total:\x20', 'getmsg', 'song2\x0a│\x20', '```බොට්\x20යැවූ\x20මැස්ස්සේජ්\x20මකාදමයි```', 'status6', 'blank', 'text', '𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙿𝚞𝚋𝚕𝚒𝚌\x20𝙴𝚍𝚒𝚝𝚒𝚘𝚗\x20', '\x0a*🗳️\x20Info\x20:*\x20', '3️⃣', './database/BLOCK_CHAT.json', '&link=https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html', '```ඔබගේ\x20යූටියුබ්\x20ලින්කුවේ\x20සින්දුව\x20බාගත\x20කරයි```', 'song2', 'kurumi\x20\x20\x0a│\x20', '\x20text', 'sakura\x20\x20\x0a│\x20', '❻\x20Title\x20-\x20', 'mp3', '\x0a\x20\x20\x20\x0a*──────────◯*\x0a', 'ǫ\x0aᴜ\x0aᴇ\x0aᴇ\x0aɴ\x0a\x0aᴇ\x0aʟ\x0aɪ\x0as\x0aᴀ\x0a\x0a\x0a', '*If\x20you\x20want\x20Download\x20Hight\x20Qulity\x20Video\x20use\x20this\x20link*', 'owner*\x20\x20\x20\x0a\x20\x20\x20\x20', 'chat', 'glitch\x20', 'wink\x0a', '\x0a┊\x20▢\x20\x20𝚃𝙸𝙼𝙴\x20:\x20', 'sendme', 'sex', 'editinfo\x20close', 'Voting\x20starts!\x0a\x0a*', '◉◍──[\x20*ᴇʟɪsᴀ\x20ʙᴏᴛ*\x20]──◍◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*𝗥𝗘𝗔𝗦𝗢𝗡:*\x20', './lib/y2mate', 'deletevote*\x20-\x20to\x20delete\x20vote', '\x20Ms\x0a➮\x20𝚁𝙰𝙼\x20𝚄𝚂𝙰𝙶𝙴\x20-\x20', 'Done!', '\x0a*𝗗𝗘𝗦𝗖\x20:*\x20\x0a', 'blockjid\x20on', 'lava\x20', '```Change\x20send\x20massage\x20type\x20(only\x20admin/allparticipate)```', 'tlm', 'https://textpro.me/3d-box-text-effect-online-880.html', '```Download\x20your\x20instagram\x20link\x20Video\x20type\x20(\x20ii\x20)```', 'OWNER_REACT', 'SG_FILE1', '```බොට්ගේ\x20ෆ්‍රොෆයිල්\x20ජායාරූපය\x20වෙනස්\x20කිරීම```', 'shinka\x20\x20\x0a│\x20', 'video\x20game\x20style', 'statuslogo\x20', '❸\x20Title\x20-\x20', 'nezuko\x20\x20\x0a│\x20', '\x0a\x0a🌀\x20ᴜʀʟ\x20:\x20', 'string', 'setbotpp*\x20\x20\x20\x0a\x20\x20\x20\x20', 'wolflogo', 'eorange', 'puisi', 'tle\x20', 'OPEN', 'FB_THUB', 'next', '\x20ඔබගේ\x20ශෝර්ට්\x20වීඩියෝව\x20බාගතකරමින්\x20පවතී...\x20🔄*', 'For\x20What\x20Command?', 'https://api.tiodevhost.my.id/api/dowloader/yt?url=', '```The\x20song\x20you\x20name\x20will\x20download```', '0@s.whatsapp.net', '*『\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ʙʀᴏᴀᴅᴄᴀsᴛ\x20』*\x0a', 'funmenu', 'moment-timezone', 'https://api.sdbots.tk/tiktok?url=', 'findsticker', 'https://api.akuari.my.id/ephoto/team-logo-cobra?text=', 'duration', 'ornamental\x20style\x20', '```බොට්ගේ\x20Alive\x20පනිවිඩය\x20වෙනස්\x20කිරීමට\x20[\x20ඔබගේ\x20Alive\x20පනිවිඩයට\x20රිප්ලයි\x20කරන්න\x20]```', '\x0a📌\x20𝗨𝗥𝗟\x20:\x20', '*🏷️\x20title\x20:*\x20', 'earrape*\x0a', 'glitch2\x20', 'pat\x0a│\x20', 'gamin', 'uptime', 'mysoulmate\x0a│\x20', '\x0a\x0a*📁\x20LYRICS\x20:*\x0a', 'ecrismas*\x0a', '👸💬\x20Please\x20give\x20me\x20a\x20telegram\x20sticker\x20pack\x20link', 'mediafire.com', 'eilluminati\x20', 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html', '320kbps', '/api/downloader/pinterestdl', './database/Anime/sasuke.json', '⚧️️', 'blockjid', '\x0a➠\x20duration\x20', '\x0a📡\x20𝗨𝗣𝗟𝗢𝗔𝗗\x20𝗔𝗧\x20:\x20', 'setdesc', 'unvoice\x0a│\x20', '\x0a┊\x20▢\x20\x20𝙽𝚄𝙼𝙱𝙴𝚁\x20:\x20', 'luck2\x0a🔵\x20', '\x20https://youtube.com/watch?v=on3sJ8OlH8M', '\x20*📤\x20UPLOADING\x20YOUR\x20FACEBOOK\x20VIDEO\x20...*', '\x20Short\x20Video\x20...\x20🔄*', 'https://api.botcahx.biz.id/api/photooxy/coffee-cup?text=', 'birthday-cake6\x20', 'downloadAndSaveMediaMessage', 'listonline', 'https://betabotz-api.herokuapp.com/api/cecan/jiso?apikey=BetaBotz', 'data', 'tlc\x20', 'qreto\x20', 'naruto\x20\x20\x0a│\x20', '```\x0a*⏳\x20Run\x20Time\x20:*\x20```', '\x0a🗒️\x20', 'leaves3', 'RANDOM_ANIME', '❶\x20Title\x20-\x20', '```යූටියුබ්\x20හි\x20සර්ච්\x20කර\x20Download\x20කරයි```', 'blood\x20', 'Africa/Harare', 'https://api.violetics.pw/api/ephoto360/Status-Life3?apikey=', 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', '\x0a*Link*\x20:\x20', 'yts\x0a│\x20', '```Can\x27t\x20Download\x20your\x20Video...\x20☹️```', 'shortvid', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'userJid', 'audioretry\x20', 'gemini', 'neon2', 'hallowen\x20', 'https://api.botcahx.biz.id/api/textpro/neon?text=', '\x0a│⦁\x20𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗\x20:\x20', 'chatinfo\x0a│\x20', '&apikey=nimavip', '\x0a*🐓\x20Chickens*\x20:\x20', '```👸💬\x20Click\x20And\x20Get\x20Your\x20news```', 'harrypotter', 'primbon_memancing_ikan', 'wolf', 'PENCIL\x20STYLE\x20', 'join*\x20\x20\x20\x0a\x20\x20\x20\x20', 'play*\x20\x20\x20\x0a\x20\x20\x20', 'BLACKPINK\x20STYLE\x20', '\x0a*📭\x20Description\x20:*\x20', 'thunder', 'image/jpeg', 'apikey', 'leaves1', 'youtubedlv3', 'lofg2\x20', '\x0a┊\x20▢\x20\x20𝙳𝙰𝚃𝙴\x20:\x20', 'botnma', '*🎭\x20XNXX\x20RESULTS\x20🎭*\x20', 'mysoulmate', '```Change\x20Bot\x20welcome\x20message\x20[\x20reply\x20your\x20image\x20welcome\x20message\x20]```', 'FIREWORK\x20STYLE\x20', '*❤️Your\x20Blood*\x20:\x20', '\x20*Here\x20is\x20the\x20list\x20of\x20videos,\x20click\x20the\x20button\x20below\x20to\x20choose*\x0a\x0a', 'elemen_keberuntungan', 'https://textpro.me/create-berry-text-effect-online-free-1033.html', 'cake-text3\x20', '```Your\x20song\x20or\x20video\x20will\x20be\x20searched\x20on\x20YouTube\x20and\x20downloaded```', '𝗯𝗼𝘁\x20𝗻𝗼𝘄\x20𝘄𝗼𝗿𝗸𝗶𝗻𝗴\x20𝗮𝘀\x20𝗽𝗿𝗶𝘃𝗮𝘁𝗲', '240p', '&url=', 'https://textpro.me/create-logo-joker-online-934.html', '```සමූහයේ\x20අයෙකු\x20ඉවත්\x20කිරීමට```', '\x20how\x20to\x20make\x20Thivanka\x20Nirmal', '\x0a:\x20', 'parse', 'GLITCH\x20STYLE\x20', 'setmessage', '\x0a\x0a​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x0a╭──❰\x20*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'https://api.botcahx.biz.id/api/maker/ttp?text=', 'setwelcome', 'pindl', '\x20On\x20Grass\x20Style\x20Logo\x20Pack\x20-\x204', 'OWNER_REPORT', 'Enter\x20Query\x20Title', 'blown*\x0a', 'https://api.akuari.my.id/search/playstoresearch?query=', 'LEAVES\x20STYLE\x20-\x204', 'TIKTOK_THUB', '\x0a🔮\x20𝗙𝗜𝗟𝗘\x20𝗦𝗜𝗭𝗘\x20:\x20', 'Block\x20Message', '\x0a\x0a\x20➥\x20ᴅᴜʀᴀᴛɪᴏɴ\x20-\x20', '*The\x20link\x20you\x20provided\x20is\x20not\x20valid*', 'about\x20', 'welcome_message', 'wikimedia\x20', 'chat.whatsapp.com', 'mediafire', 'pemoji2', '.webp', 'all', 'sendMessage', '✨\x20Please\x20give\x20me\x20a\x20one\x20start\x20Bro', 'source', 'Add\x20Message', 'ecake*\x0a', 'japan\x0a│\x20', '-filter:a\x20\x22atempo=1.6,asetrate=22100\x22', 'song3', 'gaw', 'boruto\x0a', 'madara', 'fakeObj', '*Download\x20is\x20only\x20Alowd\x20this\x20group*\x0a\x0a_https://chat.whatsapp.com/FtaEqyeEOmLBeoefGVIulP_\x0a\x0a❍\x20~if\x20you\x20want\x20download\x20xnxx\x20video\x20join\x20this~', 'slap\x0a', 'INBOX_BLOCK', 'sendbug', 'Text\x20?', 'lofg3\x20', '\x20Started\x20Hunting\x20🧜‍♂*', 'https://betabotz-api.herokuapp.com/api/cecan/hijaber?apikey=BetaBotz', 'users', 'https://textpro.me/toxic-text-effect-online-901.html', 'updateBlockStatus', 'grupinfo', '\x0a*𝗔𝗗𝗠𝗜𝗡𝗦\x20:*\x20', 'block\x0a│\x20', 'eberry', 'https://api.violetics.pw/api/ephoto360/Typography-Maker2?apikey=', 'logo', 'nightcore', 'donate\x0a│\x20', '\x20packname|author', 'https://telegra.ph/file/a475d92d9ce5aba8f34f3.jpg', 'deletemessage\x20block', 'https://api.botcahx.biz.id/api/photooxy/shadow-sky?text=', 'ice\x20', 'fast*\x0a', 'group', '\x0a\x20\x20\x20\x20\x0a*──────────◯*\x0a', 'need\x20text', 'ecake', 'https://textpro.me/create-a-transformer-text-effect-online-1035.html', '```බොට්\x20සදහා\x20ආදාරයක්\x20කිරීමට```', 'listmsg', '3D\x20NEON\x20STYLE\x20', 'SONG_DOWN', 'removeBackgroundFromImageFile', 'GLITCH\x20STYLE\x20-\x202', '```සමූහයේ\x20නම\x20වෙනස්\x20කරයි```', '\x2012,\x201,\x202022,\x2028\x0a\x0aNote\x20:\x20', '6:08:11', './database/Anime/elaina.json', 'asuna\x20\x0a│\x20', 'Enter\x20the\x20group\x20link!', 'https://api.sdbots.tk/hirunews', 'stringify', 'sendContact', 'Broadcast\x20Success', '```Change\x20Group\x20Edit\x20info```', 'christmas', '*💬\x20වොයිස්\x20විධාන\x20පිලිබද*\x20\x0a\x20```ඔබගේ\x20වොයිස්\x20මැස්ස්සේජ්\x20එකක්\x20සදහා\x20රිප්ලයි\x20කර\x20පහත\x20කමාන්ඩ්\x20බාවිතකරවිට\x20ඒවාට\x20අදාල\x20voice\x20වෙනස්\x20වී\x20ලැබෙයි```', 'circuit\x20', 'earrape\x0a│\x20', '&link=https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html', 'birthday-cake3', 'Maybe\x20the\x20message\x20you\x20replied\x20does\x20not\x20contain\x20the\x20ytsearch\x20result', '*👸💬\x20Please\x20reply\x20video\x20or\x20photo\x20!*', '*📤\x20Uploading\x20mod\x20apk...*', 'then', 'tebakkata', '\x20360p', 'setname', 'G_UNMUTE', '[\x20MESSAGE\x20]', 'smug\x0a', 'https://telegra.ph/file/834e7617f46166f8d439a.jpg', 'https://api.akuari.my.id/downloader/youtube3?link=', 'summary', 'masa_subur', '💃\x20𝙸\x20𝙶𝙾𝚃\x20𝙸𝚃\x20💃', '```සමූහ\x20වලට\x20පමනක්\x20බ්‍රෝඩ්කාස්ට්\x20යැවීමට```', '\x20\x0a*🖇️\x20Url\x20:*\x20', '▷\x20CREDITS\x20BOT\x20◁', 'picjeni', 'shinka\x20\x20\x0a', 'ʙᴏᴛ\x20ʟɪsᴛ\x20ᴍᴇɴᴜ\x20ᴄʟɪᴄᴋ\x20ᴀɴᴅ\x20sᴇʟᴇᴄᴛ\x20ʏᴏᴜʀ\x20ᴏᴡɴ', 'haloween\x20style', 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', 'gremory\x20\x20\x0a│\x20', 'Enter\x20the\x20enable/disable\x20value,\x20For\x20Example\x20${prefix}ephemeral\x20enable', 'setname*\x20\x0a\x20\x20\x20', 'DELETE', 'hunting', '```search\x20your\x20word\x20on\x20google```', '*\x0a\x0a*👸\x20ᴜᴘ\x20ᴛɪᴍᴇ\x20:*\x20', '&text2=ELISA\x20BOT', 'shio', '*Send\x20Broadcast\x20To\x20', 'CHOCOLATE\x20STYLE\x20', 'no_watermark', '\x20second', 'paka', 'antilink', 'https://api.akuari.my.id/search/stickertelegram?query=', 'unblockmessage', 'bucinquote', 'wikimedia*\x20\x20\x20\x0a\x20\x20\x20', '*DON\x27T\x20GO\x20UP\x20!!!*', '*FILE\x20SIZE\x20IS\x20BIG\x20!!!*', '```Example\x20.readmore\x20Mr\x20nima```', 'tgl_memancing', 'darkmetal', 'sendcontact', 'extendedTextMessage', 'insta*\x20\x20\x0a\x20\x20\x20', 'setcmd\x0a│\x20', '*👸💬\x20Please\x20Give\x20Some\x20Text*\x0a', '*👸💬\x20Please\x20give\x20me\x20a\x20correct\x20link*\x0a', 'aries', '\x20*_ᴍs_*', 'scifi', '*CAN\x27T\x20UPLODE\x20YOUR\x20FILE*\x20\x0a_YOUR\x20VIDEO\x20BIGGER\x20THAN\x20100mb_\x0a\x0afile\x20size', '\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a', 'smile\x0a', 'happy\x0a│\x20', 'serializeM', '\x0a├⛒\x20\x20*ʀᴇsᴘᴏɴ\x20sᴘᴇᴇᴅ*\x20', '480getvideo', 'grafiti', 'qhsteel\x20', '\x20\x0a*🕜\x20Duration\x20:*\x20', 'ping2\x0a│\x20', 'img*\x20\x20\x20\x0a\x20\x20\x20', 'linkdl', '*👸💬\x20Sorry\x20This\x20is\x20Admin\x20only\x20command*', '*◯───────[\x20DOWNLOAD\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', '*◯───────[\x20LOGO\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'status8\x20', '\x0a│⦁\x20𝚁𝚎𝚜𝚊𝚕𝚞𝚝𝚒𝚘𝚗\x20:\x20', 'Limit\x20Reseted', 'thanku', '```ඔබ\x20නම්\x20යෙදූ\x20වීඩියෝව\x20බාගත\x20කරයි\x20[\x20බටන්\x20මැස්ස්සේජ්\x20නොමැතිව\x20]```', 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html', 'https://telegra.ph/file/2c90d67ecebe754eaefc0.jpg', 'https://violetics.pw/api/downloader/youtube?apikey=', '🎧\x20AUDIO\x20🎧', '*☡\x20ᴛʜɪs\x20ɪs\x20ᴍʏ\x20ᴏᴡɴᴇʀ\x20ɴᴜᴍʙᴇʀ*', 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html', 'grouplink*\x20\x0a\x20\x20\x20', 'ephemeral\x0a│\x20', 'setname\x0a│\x20', '*👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙿𝚄𝙱𝙻𝙸𝙲\x20𝙶𝚁𝙾𝚄𝙿\x20👸*\x0a\x0a', 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', 'stop', '```👸💬\x20ඔබට\x20අවශ්‍ය\x20පුවත\x20පහත\x20බටන\x20බාවිතයෙන්\x20ලබාගන්න```', 'https://textpro.me/holographic-3d-text-effect-975.html', 'helakurunews', 'qfire', 'https://api.lolhuman.xyz/api/apkdownloader?apikey=SGWN&package=', '.ehi', 'retrysecytvideo', 'SCIFI\x20STYLE\x20', 'downxnxx', 'ytmp4*\x20\x20\x0a\x20\x20\x20', 'hapusvote', '_You\x20Are\x20Not\x20In\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20To\x20Find\x20A\x20Partner_', '⫷⦁[\x20*👸\x20𝙴𝙻𝙸𝚂𝙰\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x20]⦁⫸\x0a\x0a*ᴀʙᴏᴜᴛ\x20ʏᴏᴜʀ\x20ʀᴇsᴜʟᴛ...*\x0a\x0a\x20➥\x20ᴛɪᴛʟᴇ\x20-\x20', 'endsWith', 'fromObject', 'push', '*👸💬\x20කනගාටුයි\x20පරිවර්තනය\x20සිදුකළ\x20නොහැක\x20!*', 'leaves4', 'timetest', 'Couple\x20Male', './database/Anime/mikasa.json', '```Download\x20Your\x20Tiktok\x20Link\x20video```', 'https://api.tiodevhost.my.id/api/maker/resize?url=', 'fancy*\x20\x20\x20\x0a\x20\x20\x20', 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x207', 'You\x27re\x20Tired!,\x20Try\x20To\x20Heal\x20Using\x20Potions', 'ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ', 'ninja\x20', '👩‍🦰', '\x0a\x0a*🏷️\x20Title\x20:*\x20', 'https://telegra.ph/file/4c48b566ce23dd180d1be.jpg', 'announcement', 'vid2', 'US_FILE3', 'pornhub2', '```👸💬\x20Please\x20give\x20me\x20a\x20some\x20words\x20...```\x0a_example\x20.logo\x20MR\x20NIMA_', 'asuna', '\x20*Downloading\x20Your\x20\x20', '```ඔබ\x20සිටින\x20සමූහයේ\x20ලින්කුව\x20ගැනීමට```', '94702695534@s.whatsapp.net', 'family100', 'fiction\x20', 'shina\x20\x20\x0a', '\x0a┊\x20▢\x20𝙽𝙰𝙼𝙴\x20:\x20\x20', 'C_E_DATES', 'xnxxsh', 'http://tiktok.com/@mr_nima_._._x', 'File\x20Over\x20Limit\x20', 'DOWNLOAD\x20ON\x20WEB', 'thumbnail', 'remoteJid', 'wife&husband\x0a🔵\x20', 'news\x0a│\x20', 'status', 'devote', 'soal', '\x0a*𝗠𝗘𝗠𝗕𝗘𝗥𝗦\x20:*\x20', '*\x20_Ehi\x20Files..._', 'lion', 'areadmore', 'DEMON\x20STYLE\x20', '🧘‍♀️', '-af\x20volume=12', 'SPOOKEY\x20STYLE\x20', './database/database.json', 'https://textpro.me/chocolate-cake-text-effect-890.html', 'ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴡᴀ\x20ʙᴏᴛ\x20ᴍᴅ', '🗳️\x20ᴅᴏᴡɴʟᴏᴀᴅ\x20ᴀᴘᴋ\x20🗳️', 'https://wa.me/94715166712?text=hello+bro+i+found+a+bug+in+your+bot', '👫Your\x20match\x20is\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@', '```This\x20can\x20use\x20only\x20groups```', 'bonk\x0a│\x20', '\x0a🔮\x20*𝗥𝗢𝗖𝗞\x20:*\x20', 'mimetype', 'neon1\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└─────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*', 'GLUE\x20STYLE\x20', 'Url*\x20:\x20', '\x20*Loading\x20Your\x20\x20', 'log', 'demote\x0a│\x20', 'https://textpro.me/carbon-text-effect-833.html', 'kickmessage', 'creator', 'YASHO\x20STYLE\x20', '╭╌┄┄『\x20*USER\x20DETAILS*\x20』\x0a┊\x20▢\x20𝙽𝚄𝙼𝙱𝙴𝚁\x20:\x20\x20', './database/Anime/shina.json', 'https://api.akuari.my.id/ephoto/team-logo-elang?text=', 'setdesk', 'DOWNLOAD\x20360P\x20QULITY', 'DOWNLOAD\x20MOD\x20APK', 'length', 'removebg\x0a│\x20', 'status6\x20', 'Random\x20Wallpaper\x20', 'emilia', 'ᴍͥ\x20ʀ\x20​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x20ɴ\x20ɪͣ\x20ᴍͫ\x20ᴀ\x20⁴⁹²', 'LANG', 'bass', 'git', 'https://api.violetics.pw/api/ephoto360/yasuo?apikey=7518-b675-9944&text=', '\x20your\x20video...*', 'deletemessage\x20add', 'demote*\x20\x0a\x20\x20\x20', 'EHI_IMOJI', 'pushName', '720p', 'sendListMsg', 'USD', '.stop', 'start', 'darkgold\x20', 'ytdl5', 'waifu', 'glitch3', '```Make\x20logos\x20on\x20logo\x20pack\x20-3```', 'firework\x20', 'directvideo4', 'secytvideo', '\x0a🔮\x20𝗗𝗘𝗧𝗔𝗜𝗟\x20:\x20', 'elisadatabasemenu', 'biscuit', '◉◍──[\x20*ᴇʟɪsᴀ\x20ʙᴏᴛ*\x20]──◍◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ʀᴇsᴏɴ:*\x20', '\x0a\x0a\x20➥\x20ᴜʀʟ\x20-\x20', 'ytlist', 'toString', 'NEXT', 'poke\x0a', 'sendVideoAsSticker', 'RAINBOW\x20STYLE\x20-\x203', '\x0a\x0a≡\x20*Lista\x20de\x20idiomas\x20admitidos:*\x20\x0a\x0ahttps://cloud.google.com/translate/docs/languages\x0a', '-filter:a\x20\x22atempo=0.7,asetrate=44100\x22', 'yuki\x20\x20\x0a', 'honey\x20', 'GET\x20NEWS', 'developer', 'bear', '\x0a╰\x20┄┬┄┄┄◯\x0a╭┄\x20┴┄『\x20*BOT\x20DETAILS*\x20』\x0a┊\x20▢\x20\x20𝙽𝙰𝙼𝙴\x20:\x20', '\x20\x0a\x20\x20\x20\x20\x20\x20*『\x20\x20ʟ\x20ɪ\x20ɴ\x20ᴋ\x20\x20\x20ᴅ\x20ᴇ\x20ᴛ\x20ᴇ\x20ᴄ\x20ᴛ\x20ᴇ\x20ᴅ\x20\x20』*\x0a', '```Demote\x20From\x20group\x20admin```', 'ADD', '*Please\x20Select\x20What\x20Do\x20you*\x0a*Delete\x20Message*\x09\x0a\x20\x20\x20\x20\x20\x09', 'DOWNLOAD\x20720P\x20QULITY', 'ayuzawa\x20\x0a│\x20', 'video', 'mp4', 'mtype', '94719574492-1634878051@g.us', 'getmsg\x20', 'getString', 'trt%%', '▷\x20SEARCH\x20MENU\x20◁', 'LEAVES\x20STYLE\x20-\x205', '\x0a⦁\x20*𝚁𝙴𝚀𝚄𝙴𝚂𝚃𝙴𝚁*\x20:', 'deletemessage\x0a│\x20', 'https://i.ibb.co/MhqzZj8/Darkmekcersilverownerfrofilepgoto.jpg', '```ගෲප්\x20ලින්ක්\x20බාවිතාකරමින්\x20ඒයට\x20join\x20වීමට```', 'tiktok\x0a│\x20', 'antispam', 'news_from_id', 'totalmem', 'BROKENGLASS\x20STYLE\x20', '*📤\x20UPLOADING\x20YOUR\x20VIDEO...*', '\x20file\x20name\x0a\x0aView\x20Message\x20List\x20With\x20', 'setStatus', 'version', 'mining', 'math\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝙰𝚂𝚄𝙿𝙰𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', '𝙱𝙾𝚃', 'newsjson', '\x0a┊\x20▢\x20\x20𝙷𝙾𝚂𝚃\x20𝙾𝙽\x20:\x20heroku\x20\x0a┊\x20▢\x20\x20𝚆𝙴𝙱\x20:\x20opera\x0a╰┄┬┄╌╌╌┄◯\x0a╭┄┴┄┄『\x20*ABOUT\x20SYSTEM*\x20』\x0a┊\x20▢\x20\x20𝙿𝚁𝙴𝙵𝙸𝚇\x20:\x20', '*💬\x20About\x20Voice\x20changer\x20cmd*\x0a\x20```When\x20you\x20reply\x20to\x20one\x20of\x20your\x20voice\x20messages\x20and\x20use\x20the\x20following\x20command,\x20the\x20corresponding\x20voice\x20has\x20been\x20changed.```', 'wood\x20style\x20', '▷\x20DOWNLOAD\x20MENU\x20◁', 'https://textpro.me/skeleton-text-effect-online-929.html', '```Leave\x20from\x20group```', 'thank', '```බොට්ගේ\x20GoodBye\x20පනිවිඩය\x20වෙනස්\x20කිරීමට\x20[\x20ඔබගේ\x20GoodBye\x20පනිවිඩයට\x20රිප්ලයි\x20කරන්න\x20]```', './database/Anime/miku.json', 'https://api.akuari.my.id/search/alphacoders?query=', '*📡\x20\x20ʀᴜɴɪɴɢ\x20ʀᴇsᴘᴏɴᴅ...*', 'https://api.violetics.pw/api/ephoto360/Tattoo-Hand?apikey=', '```Send\x20Quoted\x20Massage```', 'readmore\x0a│\x20', 'delrash', 'gem', '\x0a*🦆\x20Ducks*\x20:\x20', 'jsdom', 'ＱＵＥＥＮ\x20\x20ＥＬＩＳＡ\x20Ｖ2', 'packname', 'LOGO_CMD', '```ℹ️\x20Example\x20.ytmp4\x20https://youtube.com/watch?v=WoWlWb6vbzA```', 'groupinfo', 'wpaper', 'style', '```👸💬\x20කරුනාකර\x20වචනයක්\x20ලබාදෙන්න\x20...```\x0a_උදාහරණ\x20.logo4\x20MR\x20NIMA_', '&alias=', 'apk\x0a│\x20', 'natural', 'rainbow2', 'size', 'status@broadcast', '94711421243@s.whatsapp.net', '🗳️', '3-D\x20STONE\x20STYLE\x20', './database/Anime/emilia.json', './database/Anime/inori.json', '\x0a│⦁\x20𝚂𝚞𝚋𝙽𝚊𝚖𝚎\x20:\x20', './media/image/Elisa.jpg', 'handhold\x0a│\x20', 'status7', 'inori\x20\x20\x0a', '*◯───────[\x20OWNER\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'joker\x20', 'getmusic', '*✅\x20SUCCESS\x20SEND\x20SPAM\x20!!!*', 'dropwater', '*WELCOME\x20', 'ytmp3\x0a│\x20', 'logo\x0a│\x20', 'BLOCK', 'https://api.botcahx.biz.id/api/photooxy/picture-of-love?text=', 'pencil\x20', '```Send\x20Group\x20details```', 'https://telegra.ph/file/21440bd3801d3f280316e.jpg', 'qpolugon', 'kaga', '```Join\x20yousing\x20invite\x20link```', 'https://telegra.ph/file/6e6e5387b5ff163765bb1.jpg', 'https://api.botcahx.biz.id/api/textpro/ninja-logo?text=', '➠\x20*Description*\x20:\x20', 'fortunetelling2\x0a🔵\x20', 'elisaehi', '128kbps', '\x0a\x0a✍️\x20ᴅᴇsᴄʀɪᴘᴛɪᴏɴ\x20:\x20', 'WATERPIPE\x20STYLE\x20', 'unarchive', 'https://youtube.com/MRNIMAOFC', 'memancing1111', 'Already\x20deactivated', 'Previously\x20Active', 'qavenger\x20', '\x0aIn\x20', '\x0a┊\x20▢\x20\x20𝚁𝙰𝙼\x20𝚄𝚂𝙰𝙶𝙴\x20:\x20', 'ddsong', 'fileSize', '𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈\x20𝙴𝙻𝙸𝚂𝙰\x20𝙱𝙾𝚃\x20', 'https://api.akuari.my.id/downloader/dlmod?link=', 'imagenobg', 'ytmp3\x20', 'glue', 'type', 'Unblock\x20Message', 'quotesanimekdksksksksk', '*📥\x20ඔබගේ\x20වීඩියෝව\x20බාගත\x20කරමින්\x20පවති...*', 'Delete\x20Successfully\x20\x27', 'conversation', 'gamin\x20', 'setwelcome\x0a│\x20', 'leavemessage', 'blackpink2', 'neon2\x20', 'miku\x20\x20\x0a│\x20', 'ytsearch*\x20\x20\x20\x0a\x20\x20\x20', 'https://youtube.com/c/MRNIMAOFC', '\x0a🔮\x20*𝗖𝗢𝗟𝗢𝗥\x20:*\x20', 'schedule', '\x0a\x20☛\x20𝙿𝙰𝙲𝙺𝙰𝙶𝙴\x20𝙽𝙰𝙼𝙴\x20:\x20', '*🎨\x20LOGO\x20PACK\x204*', 'bite\x0a│\x20', '*📥\x20DOWNLOADING\x20YOUR\x20VIDEO...*', 'summertime', 'thailand', '🔵\x20No\x20:\x20', 'tebakan', 'getmsg\x0a│\x20', '\x0a*🐇\x20Rabits*\x20:\x20', '*🧑‍💻💬\x20', '360pvideo', '\x20ʏᴏᴜʀ\x20ᴠɪᴅᴇᴏ...\x20🔄*', 'You\x20have\x20Voted', '&link=https://textpro.me/video-game-classic-8-bit-text-effect-1037.html', '👱‍♀️', 'quotes', 'potty', '*Chat\x20Bot\x20error*', '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x0aAfrikaans\x20-\x20af\x0aAlbanian\x20-\x20sq\x0aAmharic\x20-\x20am\x0aArabic\x20-\x20ar\x0aArmenian\x20-\x20hy\x0aAzerbaijani\x20-\x20az\x0aBasque\x20-\x20eu\x0aBelarusian\x20-\x20be\x0aBengali\x20-\x20bn\x0aBosnian\x20-\x20bs\x0aBulgarian\x20-\x20bg\x0aCatalan\x20-\x20ca\x0aCebuano\x20-\x20ceb\x20\x0aChinese\x20(Simplified)\x20-\x20zh-CN\x20or\x20zh\x0aChinese\x20(Traditional)\x20-\x20zh-TW\x20\x0aCorsican\x20-\x20co\x0aCroatian\x20-\x20hr\x0aCzech\x20-\x20cs\x0aDanish\x20-\x20da\x0aDutch\x20-\x20nl\x0aEnglish\x20-\x20en\x0aEsperanto\x20-\x20eo\x0aEstonian\x20-\x20et\x0aFinnish\x20-\x20fi\x0aFrench\x20-\x20fr\x0aFrisian\x20-\x20fy\x0aGalician\x20-\x20gl\x0aGeorgian\x20-\x20ka\x0aGerman\x20-\x20de\x0aGreek\x20-\x20el\x0aGujarati\x20-\x20gu\x0aHaitian\x20Creole\x20-\x20ht\x0aHausa\x20-\x20ha\x0aHawaiian\x20-\x20haw\x20\x0aHebrew\x20-\x20he\x20or\x20iw\x0aHindi\x20-\x20hi\x0aHmong\x20-\x20hmn\x0aHungarian\x20-\x20hu\x0aIcelandic\x20-\x20is\x0aIgbo\x20-\x20ig\x0aIndonesian\x20-\x20id\x0aIrish\x20-\x20ga\x0aItalian\x20-\x20it\x0aJapanese\x20-\x20ja\x0aJavanese\x20-\x20jv\x0aKannada\x20-\x20kn\x0aKazakh\x20-\x20kk\x0aKhmer\x20-\x20km\x0aKinyarwanda\x20-\x20rw\x0aKorean\x20-\x20ko\x0aKurdish\x20-\x20ku\x0aKyrgyz\x20-\x20ky\x0aLao\x20-\x20lo\x0aLatin\x20-\x20la\x0aLatvian\x20-\x20lv\x0aLithuanian\x20-\x20lt\x0aLuxembourgish\x20-\x20lb\x0aMacedonian\x20-\x20mk\x0aMalagasy\x20-\x20mg\x0aMalay\x20-\x20ms\x0aMalayalam\x20-\x20ml\x0aMaltese\x20-\x20mt\x0aMaori\x20-\x20mi\x0aMarathi\x20-\x20mr\x0aMongolian\x20-\x20mn\x0aMyanmar\x20(Burmese)\x20-\x20my\x0aNepali\x20-\x20ne\x0aNorwegian\x20-\x20no\x0aNyanja\x20(Chichewa)\x20-\x20ny\x0aOdia\x20(Oriya)\x20-\x20or\x0aPashto\x20-\x20ps\x0aPersian\x20-\x20fa\x0aPolish\x20-\x20pl\x0aPortuguese\x20(Portugal,\x20Brazil)\x20-\x20pt\x0aPunjabi\x20-\x20pa\x0aRomanian\x20-\x20ro\x0aRussian\x20-\x20ru\x0aSamoan\x20-\x20sm\x0aScots\x20Gaelic\x20-\x20gd\x0aSerbian\x20-\x20sr\x0aSesotho\x20-\x20st\x0aShona\x20-\x20sn\x0aSindhi\x20-\x20sd\x0aSinhala\x20(Sinhalese)\x20-\x20si\x0aSlovak\x20-\x20sk\x0aSlovenian\x20-\x20sl\x0aSomali\x20-\x20so\x0aSpanish\x20-\x20es\x0aSundanese\x20-\x20su\x0aSwahili\x20-\x20sw\x0aSwedish\x20-\x20sv\x0aTagalog\x20(Filipino)\x20-\x20tl\x0aTajik\x20-\x20tg\x0aTamil\x20-\x20ta\x0aTatar\x20-\x20tt\x0aTelugu\x20-\x20te\x0aThai\x20-\x20th\x0aTurkish\x20-\x20tr\x0aTurkmen\x20-\x20tk\x0aUkrainian\x20-\x20uk\x0aUrdu\x20-\x20ur\x0aUyghur\x20-\x20ug\x0aUzbek\x20-\x20uz\x0aVietnamese\x20-\x20vi\x0aWelsh\x20-\x20cy\x0aXhosa\x20-\x20xh\x0aYiddish\x20-\x20yi\x0aYoruba\x20-\x20yo\x0aZulu\x20-\x20zu\x0a\x0a©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴡʜᴀᴛsᴀᴘᴘ\x20ʙᴏᴛ', 'https://youtu', '```Add\x20new\x20member```', '\x20https://www.tiktok.com/@omagadsus/video/7025456384175017243', 'kick', 'hello\x20sudoo\x20', 'appId', 'toaud', 'video_watermark', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20*➮\x20ᴛɪᴛʟᴇ\x20:*\x20', '916909137213-1613049930@g.us', 'nimaxnxx', '*🔄\x20Please\x20wait\x20Downloading\x20Xnxx\x20Video\x20', 'elisavoicemenu', 'anonymous', 'neondevil\x20', '\x0a*▣\x20ʟᴏɢᴏ\x20ᴛᴇxᴛ\x20-*\x20', '=>\x20From', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json', 'setgrouppp\x0a│\x20', '*Bug\x20Report\x20From:*\x20wa.me/', 'promotemessage', 'downloader', 'slice', 'ana\x0a│\x20', 'fat*\x0a', '\x0a\x0a└─────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴅᴇᴠᴏᴛᴇ\x20]──◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a├\x20Total:\x20', '_\x0a\x0aBy\x20\x27', 'http://kocakz.herokuapp.com/api/media/xvideo/search?query=', 'Stop', '.ehi\x20', 'LEAVES\x20STYLE\x20-\x202', 'squirrel', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'hello', 'reportowner', 'neon3\x20', 'transformers', 'poke', '\x0a\x0a\x20\x20\x20\x20\x20', 'papercut', 'grupinfo*\x20\x0a\x20\x20\x20', 'megumin', 'https://chat.whatsapp.com/', 'SEX_VIDEO_DOWNLOAD', 'ana', 'genfancy', 'https://api.botcahx.biz.id/api/emoji/facebook?emoji=', '🔮\x20𝗧𝗜𝗧𝗟𝗘\x20:\x20', 'fbapi', 'aquarius', 'Previously\x20Inactive', 'fetchStatus', 'dilanquote', './language', '*📥\x20DOWNLOADING\x20YOUR\x20FILE...*', './lib/binary', 'fat', 'ɴᴇᴡs\x20ᴜʀʟ', 'US_FILE4', 'https://api.tiodevhost.my.id/api/dowloader/telesticker?url=', 'matchname\x0a🔵\x20', 'bully\x0a', 'video*\x20\x20\x0a\x20\x20\x20', 'groupUpdateDescription', '*FILE\x20SIZE\x20IS\x20SO\x20BIG\x20!!!*', 'leaave', 'nowm', 'glomp', 'robot*\x0a', 'qwood\x20', 'eflaming', 'qwolf\x20', '```වෝල්පේපර්ස්\x20සොයයි```', 'https://telegra.ph/file/43fb12ef3bb693973d756.jpg', 'fortunetelling\x0a🔵\x20', '94701629707@s.whatsapp.net', 'lofg1\x20', 'https://api.tiodevhost.my.id/api/textpro/thunder?text=', 'quoted\x0a│\x20', '➠\x20*Link*\x20:\x20', '_\x20images.*', 'https://api.akuari.my.id/photooxy/scraper2?text1=', 'brokenglass', 'togif\x0a│\x20', 'deepsea', 'TEXT\x20TO\x20STETUS\x20STYLE\x20(life)-\x202', 'TOXIC\x20STYLE\x20', '▷\x20TEXT\x20TO\x20LOGO\x20◁', '.leave', '\x20\x20\x20\x20\x0a', 'bcall', '\x20480p', '\x0a:\x20*', 'listResponseMessage', 'Unread', 'eongrass', 'lion\x20', 'HD\x20VIDEO', 'REPORT\x20BUG', 'GRAFFITIBIKE\x20STYLE\x20', 'sasuke\x20\x20\x0a', 'wood\x20', 'https://telegra.ph/file/7390dd698fa45dacbdba8.jpg', '*✅\x20Done\x20Using\x20Default\x20Alive\x20Massage*', 'smug\x0a│\x20', 'Successfully\x20Added\x20Message\x20In\x20Message\x20List\x20As\x20\x27', 'G_MUTE', 'catch', 'MATRIXS\x20STYLE\x20', 'happy\x0a', 'glomp\x0a', 'kickall', '\x20Dika,\x207,\x207,\x202005', '&text=', 'getvideo*\x20\x20\x0a\x20\x20\x20', 'messageContextInfo', '\x20╔══════❨\x20❄\x20❩══════╗\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*🎗️\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴇʜɪ\x20🎗️*\x0a\x20\x20\x20\x20\x0a\x20▫\x20ғʀᴇᴇ\x20ᴇʜɪ\x0a\x20▫\x20ᴍᴀᴋᴇ\x20ᴅᴀᴛᴇ\x0a\x20▫\x20ᴇxᴘɪʀᴇ\x20ᴅᴀᴛᴇ\x20\x0a\x20\x20\x20\x20\x20\x0a\x20_✕\x20ɴᴏ\x20ʜᴀᴄᴋɪɴɢ_\x0a\x20_✕\x20ɴᴏ\x20sᴘᴀᴍ_\x20\x0a\x20_✕\x20ɴᴏ\x20ᴅᴅᴏs_\x0a\x20_✕\x20ᴅᴏɴ\x27ᴛ\x20ᴜsᴇ\x20ᴜɴɴᴇᴄᴇssᴀʀʏ\x20ᴡᴏʀᴋ_\x0a\x20\x0a\x20\x20\x20\x20*ᴇɴᴊᴏʏ\x20ʏᴏᴜʀ\x20ᴇʜɪ\x20ғɪʟᴇs\x20💞.*\x0a\x0a╚══════[💀]\x0a\x20', 'retryytmp4', 'strawberry\x20', 'ecoffee\x20', 'Need\x20some\x20word\x20\x0a\x20ex\x20-\x20attp\x20Mr\x20nima', 'savefrom', 'smug', 'DESCOVERY\x20STYLE\x20', 'tls\x20', '_*SUIT\x20PvP*_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@', 'inori', 'kiss\x0a', 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html', 'status3', 'https://telegra.ph/file/5178ff96358a9e33cf7da.jpg', 'LEAVES\x20STYLE\x20', 'STICKER_MAKING', 'bgWhite', '\x20https://Subscribe.com/watch?v=PtFMhcag%27\x20360p', 'clear', 'locked', 'https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc', 'short2', 'subname', 'youtube.com', '\x0a🔮\x20𝗘𝗫𝗧\x20:\x20MP3\x0a🔮\x20𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡\x20:\x20', 'disable', 'http', 'eloveu', 'Answer:\x20', '▷\x20OWNER\x20MENU◁', '\x20second*', '```Send\x20broadcast\x20all\x20chats```', 'song2*\x20\x20\x0a\x20\x20\x20', 'kurumi\x20\x20\x0a', 'The\x20link\x20you\x20provided\x20is\x20invalid!', 'hddlid', 'smooth', '┌──────────────▢⃝\x0a│\x20\x20\x20\x20\x20\x20\x20\x20*[\x20🧚\x20ᴇʟɪsᴀ\x20ʙᴏᴛ\x20ᴍᴅ\x20🧚\x20]*\x0a│\x0a│\x20*🖥️\x20ɢɪᴛ\x20:*\x20https://github.com/DarkMakerofc/Queen-Elisa-Md-V2\x0a│\x20*📡\x20ʏᴛ\x20ᴄʜᴀɴɴᴇʟ\x20:*\x20https://www.youtube.com/c/MRNIMAOFC\x0a│\x20*🌍\x20ᴡᴇʙ\x20sɪᴛᴇ\x20:*\x20http://queenelisa.42web.io/\x0a│\x0a└───────▢', 'bass\x0a│\x20', 'businessnature\x0a🔵\x20', 'kick\x0a│\x20', 'object', 'eninja\x20', '\x0a*🕜\x20Duration\x20:*\x20', 'ebinary', 'BACK_BUTTON', 'chatModify', 'Successfully\x20delete\x20the\x20TicTacToe\x20session', 'vish', 'unmute', 'birthday-cake5', 'isGroup', 'bully\x0a│\x20', 'gimage\x20', '94716221644@s.whatsapp.net', '\x0a🔵\x20*𝗖𝗛𝗔𝗧\x20:*\x20https://wa.me/', 'underwater\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*', '_Successfully\x20Found\x20Partner,\x20Now\x20You\x20Can\x20Send\x20Messages_', '```Please\x20reply\x20Photo\x20Massage```', '3dstone\x20', '```ගෲප්\x20එකකින්\x20බොට්ව\x20ඉවත්\x20කිරීමට```', 'tlb\x20', '𝗕𝗢𝗧\x20𝗜𝗡𝗦𝗧𝗔𝗟𝗟', 'tiktok2\x0a│\x20', '\x20Group\x0a\x0a', 'character\x0a🔵\x20', 'Message', 'getProfilePicture', 'eneon', '&apikey=RavinduManoj', '3dbox\x20', 'cogan', 'Lanjut', 'suit\x20@', 'sendkontak', 'downxnxx\x20', '```The\x20video\x20you\x20name\x20will\x20download```', 'game', 'https://textpro.me/create-a-sketch-text-effect-online-1044.html', '*👸💬\x20Please\x20give\x20your\x20sticker\x20name\x20and\x20reply\x20it*', 'bolchiyt', 'regular', 'others', '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==', 'pinterest\x0a│\x20', 'https://telegra.ph/file/5e9592ed3d63a4ecc2ae6.jpg', '\x20Group(s)*', 'blush\x0a│\x20', 'Thunder\x20Style\x20Logo\x20Pack\x20-\x204', 'TEXT\x20TO\x20STETUS\x20STYLE\x20(mood)-\x207', 'green', 'thailand\x0a│\x20', '?feature=share', 'SG_FILE2', 'error', 'premium', 'array', '❹\x20Title\x20-\x20', '\x27\x20Has\x20Been\x20Registered\x20In\x20The\x20Message\x20List', 'goodbye_image', '*_🏷️\x20Title_\x20', 'Enter\x20Reason\x20for\x20Vote,\x20', '┌───[💃\x20*𝙴𝚕𝚒𝚜𝚊\x20𝙱𝚘𝚝*\x20💃]───●\x0a│\x0a│\x20\x20\x20\x20\x20\x20\x20\x20🧚‍♀\x20𝚃𝚒𝚔𝚃𝚘𝚔\x20𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛\x20🧚‍♀\x0a│\x20*ᴛʜɪs\x20ɪs\x20', 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png', 'katasenja', 'mathquiz', '️😊', 'music', 'NEXT_BUTTON', 'motivasi', '*Loading...*', 'NUMBER_212_BLOCK', 'ytmp4\x0a│\x20', 'ytl', './database/voice.json', '\x20Use\x20this\x20only\x20if\x20you\x20have\x20not\x20received\x20the\x20request.', '\x0a\x20\x20\x20\x0a│\x20\x20*📽️\x20ᴅᴜʀᴀᴛɪᴏɴ\x20:*\x20', 'hidetag', '```සමූහයේ\x20එඩිට්\x20ඉන්ෆො\x20වෙනස්\x20කරයි```', 'format', '480p', '\x0a🔄\x20Duration\x20:\x20', '```විකිපීඩියා\x20හී\x20සර්ච්\x20කරයි```', '_Please\x20Wait,\x20Looking\x20For\x20A\x20Partner_', 'light\x20', 'neonlight', '𝗯𝗼𝘁\x20𝗻𝗼𝘄\x20𝘄𝗼𝗿𝗸𝗶𝗻𝗴\x20𝗮𝘀\x20𝗽𝘂𝗯𝗹𝗶𝗰', 'hadith\x0a🔵\x20', 'harrypot', 'isBaileys', 'You\x20Have\x20No\x20Permission\x20To\x20Change\x20This\x20Sticker\x20Command', 'ownernma', 'database', '❯\x20NEXT\x20IMAGE\x20❯', 'skeleton', 'ig2*\x20\x20\x0a\x20\x20\x20', '```give\x20admin\x20on\x20group```', 'akira\x20\x20\x0a', '⫷⦁[\x20*👸\x20𝙴𝙻𝙸𝚂𝙰\x20𝚈𝚃\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x20]⦁⫸\x0a\x0a*ᴀʙᴏᴜᴛ\x20ʏᴏᴜʀ\x20ʀᴇsᴜʟᴛ...*\x0a\x0a\x20➥\x20ᴛɪᴛʟᴇ\x20-\x20\x20', '\x20MR\x20NIMA_', 'youtubedlv2', 'eglitch\x20', 'tr\x0a│\x20', 'elaina\x20\x0a', 'SEARCH_CMD', 'fb2', 'QueenElisa.apk', '*🎭\x20\x20XVIDEO\x20RESULTS\x20\x20🎭*\x20', 'හායි', '\x20𝙴𝚕𝚒𝚜𝚊\x20𝙱𝚘𝚝\x20𝚒𝚜\x20𝚑𝚎𝚛𝚎\x20😼♥️', 'https://telegra.ph/file/57221b23abeb4e16a9ffd.jpg', 'demotemessage', 'getyt', 'staart', 'reverse', '*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*', 'fruitjuice\x20', 'https://api.github.com/repos/', '.group\x20close', '\x0a\x0a😼\x20ᴜᴘʟᴏᴀᴅ\x20ᴛɪᴍᴇ\x20:\x20', 'underwater', 'wicker', 'cancer', '-filter_complex\x20\x22areverse\x22', 'Coffee\x20Style\x20Logo\x20Pack\x20-\x204', 'cake-text', '🏹\x20𝗛𝗨𝗡𝗧\x20𝗔𝗚𝗔𝗜𝗡\x20🏹', 'toaudio', 'block_from', 'https://api.tiodevhost.my.id/api/textpro/glitch?text=', '.zip', 'matrix', 'berry', 'block*\x20\x20\x20\x0a\x20\x20\x20\x20', 'snippet', 'repeat', 'sended', 'panel', '\x0a⌚\x20', 'https://api.botcahx.biz.id/api/linkshort/cuttly?link=', 'https://api.itsrose.my.id/searching/googleimages?query=', 'about', 'ytmp3', '\x20Welcome\x20To\x20Anonymous\x20Chat\x0a\x0aClick\x20The\x20Button\x20Below\x20To\x20Find\x20A\x20Partner```', 'sand', 'candy', 'status3\x20', 'Mode:\x20', 'Good\x20Bye\x20Message', '*👸💬\x20Please\x20give\x20me\x20a\x20link*\x0a', '3dstone2', 'akira', '94716221644', 'qfire\x20', '*👸💬\x20Only\x20Can\x20be\x20use\x20groups*', '*𝚃𝚑𝚊𝚗𝚔𝚜\x20𝚏𝚛𝚘\x20𝚌𝚑𝚘𝚘𝚜𝚒𝚗𝚐\x20𝙴𝚕𝚒𝚜𝚊\x20𝙱𝚘𝚝\x20𝙼𝚍\x20💞*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a𝙿𝚕𝚎𝚊𝚜𝚎\x20𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎\x20𝙼𝚁\x20𝙽𝙸𝙼𝙰\x20𝚈𝚃\x20𝙲𝙷𝙰𝙽𝙽𝙴𝙻\x20:\x20*https://www.youtube.com/c/MRNIMAOFC*\x0a*𝚒𝚏\x20𝚈𝚘𝚞\x20𝚆𝚊𝚗𝚝\x20𝙼𝚊𝚔𝚎\x20𝙱𝚘𝚝\x20𝚟𝚒𝚍𝚎𝚘\x20𝚒𝚗\x20𝚖𝚢\x20𝚌𝚑𝚊𝚗𝚗𝚎𝚕\x20♥️*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'tebakgambar', 'audytmp3\x20', '\x0a\x20:\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴜᴘᴠᴏᴛᴇ\x20]──◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a├\x20Total:\x20', 'sendspam', 'waUploadToServer', '*👸\x20𝑄𝑈𝐸𝐸𝑁\x20𝐸𝐿𝐼𝑆𝐴\x20𝑉2\x20👸*\x0a\x0a\x0a*👨‍💻\x20ᴅᴇᴠᴏʟᴏᴘᴇʀ\x20:*\x20ᴍʀ\x20ɴɪᴍᴀ\x0a*📡\x20ᴡᴇʙ\x20ᴀᴘɪ\x20:*\x20ʙᴀɪʟɪʏᴇs\x0a*🦄\x20ᴡᴇʙsɪᴛᴇ\x20:*\x20http://www.queenelisa.42web.io\x0a\x0a*[\x20ɴɪᴍᴀ\x20]\x20\x20💭*\x0a✓\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ʙᴏᴛ\x20ʙᴀsᴇ\x20ɪs\x20ɢᴏᴊᴏ\x20,\x20ᴛʜᴀɴᴋs\x20ғᴏʀ\x20ᴀʟʟ\x20ʜᴇʟᴘᴇʀs\x20|\x20_@sᴀɴᴜᴡᴀ\x20@sʟʀᴇᴀʟᴛᴇᴄʜ\x20@ᴅᴀʀᴋᴀʟᴘʜᴀ\x20\x20@ɪsᴜʀᴜ_\x20|\x20*ғʀᴏ\x20ʜᴇʟᴘs\x20💞*\x0a✓\x20ɴᴏ\x20ᴀɴʏ\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴛᴇᴀᴍ\x0a\x0a*😎\x20ʜᴏᴡ\x20ʏᴏᴜ\x20ᴄᴀɴ\x20ʜᴇʟᴘ\x20ᴍʀ\x20ɴɪᴍᴀ\x20ᴏғᴄ*\x0a\x0a*sᴜʙsᴄʀɪʙᴇ\x20ʜɪs\x20ᴄʜᴀɴɴᴇʟ\x20:\x20https://youtube.com/c/MRNIMAOFC*\x0a', 'contextInfo', '*👸💬\x20කරුනාකර\x20වචනයක්\x20ලබාදෙන්න*\x20\x0a\x20_ℹ️\x20උදාහරණ\x20', '*📤\x20Uploading\x20', 'https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json', 'NEON-BRIGHT\x20BLUE\x20STYLE\x20', '\x0a\x20\x20\x20\x20\x20\x20frog\x20', '240P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢', 'grouplink', '\x20*Ehi\x20file\x20is*,\x0a\x20💬\x20It\x20is\x20a\x20method\x20where\x20you\x20can\x20get\x20free\x20internet\x20by\x20using\x20whatsapp\x20package.\x0a\x20For\x20example,\x20you\x20can\x20use\x20whatsapp\x20package\x20to\x20go\x20to\x20tiktok,\x20fb,\x20youtube,\x20google\x20etc.\x0a\x0a\x20This\x20ehi\x20file\x20does\x20not\x20provide\x20maximum\x20internet\x20speed.\x20\x20But\x20you\x20can\x20get\x20internet\x20facility\x20at\x20some\x20speed.\x0a\x20You\x20can\x20find\x20this\x20ehi\x20file\x20which\x20we\x20usually\x20use\x0a\x20You\x20can\x20use\x20the\x20type\x20of\x20file\x20suitable\x20for\x20packages\x20like\x20whatsapp,\x20facebook,\x20youtube,\x20zoom\x20etc\x0a\x0a*How\x20to\x20use*\x0a\x201.\x20Install\x20the\x20http\x20injector\x20app\x20on\x20your\x20phone.\x0a\x202.\x20Select\x20the\x20ehi\x20file\x20related\x20to\x20your\x20package.\x0a\x203.\x20Enter\x20that\x20file\x20into\x20the\x20httpinjector\x20app\x20and\x20press\x20the\x20start\x20button.\x0a_(\x20If\x20you\x20want\x20to\x20use\x20this\x20file,\x20you\x20must\x20have\x20one\x20of\x20the\x20above\x20packages\x20installed\x20)_\x0a\x0a\x0a*©\x20ᴍʀ\x20ɴɪᴍᴀ*', 'https://coffee.alexflipnote.dev/random', 'pornhub2\x20', 'https://telegra.ph/file/b1343c61f7fcb88abfcee.jpg', 'setgcpp', 'group\x0a│\x20', '\x0a\x0aView\x20List\x20Of\x20Messages\x20With\x20', 'QUITE\x20STYLE\x20', 'elisaranimemenu', 'slap\x0a│\x20', 'ᴅᴏᴡɴʟᴏᴀᴅ\x20ᴠɪᴅᴇᴏ', 'squirrel\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'ʟɪsᴛ\x20ᴍᴇɴᴜ', 'delcmd\x0a│\x20', '✅\x20_Success\x20send_\x20*', 'blown', 'qpubg', '🎧\x20Download\x20Song\x20Document\x20Type\x20\x20', '*👸💬\x20Reply\x20massage*', 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', 'up_at', 'EHI_FILES', 'togif', '\x20144p', 'greenneon', '\x0a➮\x20𝙽𝚄𝙼𝙱𝙴𝚁\x20-\x20', 'findapk', 'qsteel', 'https://telegra.ph/file/f2bb8d4fbd8fc9ca5a496.jpg', '*Enter\x20a\x20Link\x20Query!*', 'updateProfilePicture', 'bug', 'Promote\x20Message', 'promote\x0a│\x20', 'subject', 'capricorn', 'tts\x0a│\x20', 'Invalid\x20Date', 'esana_news', 'facebookdlv2', 'https://api.itsrose.my.id/chatGPT/free?prompt=', 'leaves2', '\x0a🔴\x20𝗧𝗜𝗧𝗟𝗘\x20:\x20', 'WICKER\x20STYLE\x20', 'pinterestdl', '\x20ʜᴛᴛᴘ\x20ɪɴᴊᴇᴄᴛᴏʀ\x20', '```Send\x20random\x20coffee\x20image```', 'recording', '\x0a\x0a*───────────◯*\x20', '\x0a\x0aHello\x20there\x20I\x20am\x20Online\x20!\x20\x0aClick\x20below\x20buttons\x20for\x20more.\x0a\x0a*🧑‍💻\x20Devoloper\x20\x20:*\x20MR\x20THIVA\x20(\x20https://github.com/thivankaonline\x20)\x0a*🧬\x20Version\x20:*\x20', '```ගූගල්හී\x20ජායාරූප\x20සොයයි```', 'details?id=', '*👸💬\x20Please\x20give\x20me\x20a\x20some\x20words*\x20\x0a_ℹ️\x20example\x20', 'sendImage', 'RAINBOW\x20STYLE\x20', '\x20challenging\x20@', 'waterpipe', '\x0a\x20ᴛʜᴀɴᴋs\x20ᴛᴏ\x20sɪsᴜʟʏᴀ', 'rash', 'ytdl4', 'https://api.violetics.pw/api/ephoto360/Typography-Leavesautumn?apikey=', 'ninja', '*\x0aඔබට\x20මෙමගින්\x20welcome\x20message\x20එක\x20on\x20/\x20off\x20කිරීම\x20සිදු\x20කළ\x20හැක\x20ඒ\x20සදහ\x20පහත\x20බටන්\x20බාව්ත\x20කරන්න\x0a', 'tovn', 'message', 'multicolor\x20', '\x20Chat\x0a\x20', 'papercut\x20', 'madara\x20\x20\x0a│\x20', '\x0a🔵\x20*MADE\x20:*\x20', 'modapkdl', '\x0a\x0a\x20➥\x20ᴠɪᴇᴡs\x20-\x20', 'chats', 'linkgc', 'Reply\x20Video/Audio\x20That\x20You\x20Want\x20To\x20Be\x20VN\x20With\x20Caption\x20', '\x2012,\x201,\x202022', 'matalic\x20style\x20', '```ඔබගේ\x20විඩියෝව\x20එවයි```', '\x0a\x20☛\x20𝚄𝚁𝙻\x20:\x20', '```ජායාරූපයක්\x20හෝ\x20කුඩා\x20වීඩීයෝවක්\x20ස්ටිකර්\x20බවට\x20පත්කිරීම```', '*👸💬\x20Please\x20give\x20me\x20a\x20correct\x20link*\x0a\x20_.apk\x20https://play.google.com/store/apps/details?id=com.whatsapp_', 'squirrel*\x0a\x0a', '?apikey=', 'potensi_keberuntungan', '\x0a🔮\x20*𝗣𝗟𝗔𝗡𝗘𝗧\x20:*\x20', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/gm.mp3', 'US_FILE2', 'Flaming\x20Style\x20Logo\x20Pack\x20-\x204', 'The\x20message\x20was\x20not\x20sent\x20by\x20a\x20bot!', '⫷⦁[\x20*👸\x20𝙴𝙻𝙸𝚂𝙰\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x20]⦁⫸\x0a\x0a*ᴀʙᴏᴜᴛ\x20ʏᴏᴜʀ\x20ʀᴇsᴜʟᴛ...*\x0a\x0a\x20➥\x20ᴛɪᴛʟᴇ\x20-\x20\x20', '```Download\x20your\x20facebook\x20video\x20link\x20type\x20(\x20ii\x20)```', 'creation', '_*no\x20voting\x20in\x20this\x20group!*_\x0a\x0a*', '3D\x20BOX\x20STYLE\x20', '```ඉමෝජි\x202ක්\x20එකතු\x20කර\x20ස්ටිකර්\x20සාදයි```', '```Change\x20Bot\x20goodbye\x20message\x20[\x20reply\x20your\x20image\x20goodbye\x20message\x20]```', '\x20;\x20Hello\x20how\x20are\x20you_', '\x0a\x0a─────────────────\x0a\x0a', 'DD/MM/YYYY\x20HH:mm:ss', '```ඔබගේ\x20යූටියුබ්\x20ලින්කුවේ\x20වීඩියෝව\x20බාගත\x20කරය```', '```👸💬\x20Please\x20give\x20me\x20a\x20song\x20name.```\x0a\x20*Example\x20-\x20.song2\x20lelena*', 'perf_hooks', 'ＳＥＬＥＣＴ\x20ＶＩＤＥＯ', 'awoo\x0a', '\x20❤️\x20@', '(((.+)+)+)+$', 'https://textpro.me/create-3d-avengers-logo-online-974.html', 'bgGreen', 'zodiackckdkdk', 'blood-frosted', 'apply', 'tiktok', 'deletemessage*\x20\x20\x20\x0a\x20\x20\x20\x20', 'groupLeave', '```අහබු\x20ලෙස\x20coffee\x20ජායාරූප\x20එවයි.```', 'BLOCK\x20JID', 'wolf\x20style\x20', '📁\x20DOCUMENT\x20📁', '@adiwajshing/baileys', 'setsubject', '94764440407@s.whatsapp.net', 'news', 'watch?v=', 'tiktokjson', 'ephemeral', '*✅\x20Success\x20send\x20_', '```බොට්ගේ\x20පින්ග්\x20පරීක්ශාකිරීමට```', 'https://api.violetics.pw/api/ephoto360/Valentine-Day?apikey=', 'httpinjector', 'grouplink\x0a│\x20', '```ගෲප්\x20එකේ\x20සිටින\x20දෙදෙනෙකු\x20තෝරයි.```', 'gremory', '\x20Kick\x20out\x20!!!*', '\x0a*▣\x20ᴛᴏᴛᴀʟ\x20ʟᴏɢᴏs\x20-*\x20*15*\x0a\x0a☐═════════════════════╝', '```Example\x20.areadmore\x20Mr\x20nima```', 'audioselecttypebutton', 'trt', 'antiwame', 'https://textpro.me/dropwater-text-effect-872.html', 'leave*\x20\x20\x20\x0a\x20\x20\x20\x20', '&link=https://en.ephoto360.com/create-3d-wood-text-effects-online-free-705.html', '\x20_s_\x0a\x20\x20\x20\x0a│\x20*💥\x20ǫᴜᴀʟɪᴛʏ\x20:*\x20', '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20', 'Orange\x20Style\x20Logo\x20Pack\x20-\x204', 'fb3\x0a│\x20', '*[\x20🧜‍♂️\x20HUNT\x20RESULT\x20🧜‍♂️]*\x0a*🦬\x20Cows*\x20:\x20', 'https://api.botcahx.biz.id/api/maker/trigger?url=', 'blockgroup', 'delete\x20welcome', '*ℹ️\x20Not\x20Activated.*', '94719574492@s.whatsapp.net', '\x0a🔵\x20*🔵ID\x20:*\x20', '```🧑‍💻\x20Download\x20Qr\x20Code\x20And\x20Scan\x20Qr\x20||\x20Code\x20More\x20>\x20Linked\x20device\x20||```\x0a\x0a\x20*▷\x20Deploy\x20https://github.com/DarkMakerofc/Queen-Elisa-Md-V2*\x20', '\x0a\x20*🔵OWNER\x20:*\x20@', 'afkTime', 'selectedRowId', '\x20Started\x20Mining🎣', 'singleSelectReply', 'toxic\x20', 'stickerMessage', 'Send/reply\x20text\x20with\x20caption\x20', 'MISC_CMD', '*\x0a\x0a*_📄\x20News_*\x20', '\x0a*𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦\x20𝗠𝗘𝗡𝗨*\x0a👤\x20', 'Berry\x20Style\x20Logo\x20Pack\x20-\x204', '*ᴘᴏɴɢ*\x20', '\x20*Group*\x0a\x0ahttps://chat.whatsapp.com/', '100%', 'https://textpro.me/create-wolf-logo-galaxy-online-936.html', 'bloodglas\x20', '\x20💃\x20ENJOY\x20YOUR\x20VIDEO\x20', '\x0a💮\x20𝗧𝗬𝗣𝗘\x20:\x20', 'fast\x0a│\x20', 'FUN_CMD', 'bloodglas', 'eglitch', '\x0a\x0a\x20*_Example\x20:\x20.logo1\x20MR\x20NIMA_*\x0a\x20\x0a\x20*──────────◯*\x0a\x20', 'https://textpro.me/fruit-juice-text-effect-861.html', '🧝‍♀️', '94716338723', 'fertiletimekekskdk', 'deletealive', 'Converted\x20By\x20', '3dchristmas\x20', 'boruto\x0a│\x20', '*👋\x20Bye\x20Bye\x20', 'sendButtonText', 'genfancy\x20', 'downxvid\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝚂𝙴𝙰𝚁𝙲𝙷\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'joker', 'strawberry', 'tiktokjson3', 'De-Vote', 'fertiletime\x0a🔵\x20', '94719574492', 'https://api.botcahx.biz.id/api/photooxy/illuminated-metallic?text=', 'Done\x20!', 'remove', '🖼️', 'qpubg\x20', 'night', 'block', '▷\x20RANDOM\x20ANIME\x20MENU\x20◁', 'Elisa', './database/Anime/akira.json', 'info', 'bokeh\x20', '🔮\x20*𝗗𝗔𝗧𝗘\x20:*\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ғɪʟᴇ\x20sɪᴢᴇ\x20:*\x20', 'eloveu\x20', 'Send/Reply\x20Video/Audio\x20You\x20Want\x20to\x20Convert\x20into\x20MP3\x20With\x20Caption\x20', '```search\x20wallpapers```', 'keberuntungan11111', 'getnews\x20', 'deep*\x0a', 'fire\x20steel\x20style\x20', '*📥\x20DOWNLOADING\x20YOUR\x20TIKTOK\x20VIDEO\x20...*', 'profession\x0a🔵\x20', '\x20Give\x20Some\x20search*\x20\x0a_*🗳️\x20Example\x20:*\x20.img\x20Thivanka\x20Nirmal\x20Whatsapp\x20bot_', '```Make\x20fancy\x20text```', '\x0a\x0a🥷\x20ᴠɪᴇᴡs\x20:\x20', 'coffe', '♻\x20ᴛʀʏ\x20ᴀɢᴀɪɴ\x20♻️', 'masasubur111111', '*『\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ɢᴏᴏɢʟᴇ\x20sᴇᴀʀᴄʜ\x20』*\x20\x0a_🔍\x20sᴇᴀʀᴄʜ\x20:\x20', 'yt360pvideo', 'piccc', '🔮\x20*𝗥𝗘𝗦𝗨𝗟𝗧𝗦\x20:*\x20', 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', 'delx', '\x0a🔮\x20*𝗥𝗘𝗦𝗨𝗟𝗧𝗦\x20:*\x20', 'LOGO', 'promote', '*\x0a*BOT\x20NAME\x20:*\x20_Queen\x20Elisa\x20V2_\x0a*OWNER\x20:*\x20_MR\x20NIMA_\x0a*TEAM\x20:*\x20_NO\x20TEAM_\x0a\x0a*●═─═─═─═─═─═─═─═─═─═─═☐*\x0a\x0a*ᴛʜᴀᴋs\x20ᴛᴏ\x20\x20💞*\x0a\x0aɢᴏᴊᴏ\x20\x20-\x20\x20ғʀᴏ\x20sᴄʀɪᴘᴛ\x0asʟ\x20ʀᴇᴀʟ\x20ᴛᴇᴀᴄʜ\x20-\x20ғʀᴏ\x20ʜᴇʟᴘ\x0aᴅᴀʀᴋ\x20ᴀʟᴘʜᴀ\x20-\x20ғʀᴏ\x20ʜᴇʟᴘ\x0asᴀɴᴜᴡᴀ\x20-\x20ғʀᴏ\x20ʜᴇʟᴘ\x0aɪsᴜʀᴜ\x20-\x20ғʀᴏ\x20ʜᴇʟᴘ\x0a\x0a\x0a©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴘᴜʙʟɪᴄ\x20ᴇʟᴅɪᴛɪᴏɴ', 'floor', '\x0a*ʀʏᴜᴊɪɴ\x20ɪᴍᴀɢᴇ*', 'toLowerCase', 'setwelcome*\x20\x20\x20\x0a\x20\x20\x20\x20', 'aboutehi', 'imageMessage', '🗃️', 'BLOOD\x20STYLE\x20-\x202', 'CONGRATS', '_\x20of\x20_', 'bokeh', '/zipball', 'sendText', 'getqr', 'watchFile', 'glitch\x20style\x20', '💗\x20Thivanka\x20Nirmal\x20Whatsapp\x20Bot\x20💗', '94706258885@s.whatsapp.net', 'indonesia', '\x20FaceBook\x20Video\x20...\x20🔄*', 'upvote', '```Show\x20online\x20List```', '\x0a*ᴊɪsᴏ\x20ɪᴍᴀɢᴇ*', 'NEON-VALANTINE\x20STYLE\x20', 'menu*\x20\x20\x20\x0a\x20\x20\x20\x20', 'numeric', './lib/scraper', '```Telegram\x20ස්ටිකර්\x20බාගත\x20කිරීමට```', 'HALLOWEN\x20STYLE\x20', 'glitch3\x20', 'hug\x0a│\x20', 'loli', '*👸💬\x20This\x20only\x20can\x20use\x20group\x20admins*', '*🎨\x20LOGO\x20PACK\x202*', 'SF_THUB', 'antiwame\x20off', 'https://youtubeapisdownloader.vercel.app/youtube/downloader/video?url=', '00\x2012\x20*\x20*\x20*', './database/user/limit.js', 'ytplayvid', 'STOP', 'delete\x0a│\x20', 'tiktok.com', 'song4', 'Title', 'HARRYPOTTER\x20STYLE\x20', 'readFileSync', '👸\x20𝙴𝙻𝙸𝚂𝙰\x20𝚃𝙸𝙺𝚃𝙾𝙺\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸\x0a\x0a*👤\x20Author\x20:*\x20', 'https://textpro.me/create-blackpink-logo-style-online-1001.html', '\x0a\x0a☐═════════════════════╝', '▷\x20LOGO\x20PACK\x20MENU\x20◁', 'luck211111', '\x20_type\x20(\x20ii\x20)_\x20\x20\x20\x0a', '\x20ᴠɪᴅᴇᴏ*\x0a│\x0a└───────●\x20', 'bolchidl', 'memoryUsage', '*👸💬\x20Please\x20Give\x20Me\x20A\x20mediafire\x20Link*\x0a```', 'mp14', '*උපරිම\x20තත්පර\x2010ක\x20වීඩියෝ\x20පමණයි\x20!*', 'tiktok2', 'mumaker', '\x20\x0aHas\x20Been\x20Blocked\x20In\x20This\x20Group\x20!', 'Update\x20', '➮\x20𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20', '*📤\x20UPLOADING\x20FB\x20VIDEO...*', '\x20is\x20Ready\x20to\x20make\x20your\x20logo', 'Reply\x20Image', 'inori\x20\x20\x0a│\x20', 'DROPWATER\x20STYLE\x20', '*◯───────[\x20FUN\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'CAKE\x20STYLE\x20-\x202', 'BISCUIT\x20STYLE\x20', 'https://api.ibeng.tech/api/maker/ssweb?url=', '```🚫💬\x20I\x20CAN\x27T\x20FIND\x20ANYTHING\x20!```', 'suit_', 'Please\x20Give\x20youtube\x20link\x20or\x20song\x20name.', 'bunga_keberuntungan', 'hai', '.png', '```Hi\x20', 'ytmp4', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Report\x20Message:\x20', '```👸💬\x20Please\x20give\x20me\x20a\x20video\x20or\x20song\x20name.```\x0a\x20*Example\x20-\x20.yt\x20how\x20to\x20make\x20Thivanka\x20Nirmal\x20bot*', '🎬\x20\x20Download\x20720p\x20Video\x20\x20', 'morning', '*LOADING...*', '\x0a\x20example\x20:\x20.ss\x20http://queenelisa.42web.io/', 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'lockcmd', 'PROMOTE', 'listgc', 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html', 'glue\x20', '*⏺️Your\x20Limit*\x20:\x20', 'korea', 'pemoji3', 'stickergif2', 'NEXT\x20PIC', 'img', '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*', '*👸💬\x20Please\x20give\x20me\x20sticker\x20pack\x20name*', '_Partner\x20Has\x20Left\x20Anonymous\x20Session_', 'groupSettingUpdate', '\x0a\x20\x0a\x20*➮\x20ᴜʀʟ*\x20', 'mulai', 'eberry*\x0a', '240getvideo', '*✅\x20Done\x20Using\x20Default\x20Good\x20Bye\x20Massage*', 'ice', 'bonk', 'MB\x20/\x20', 'status4\x20', '*📥\x20DOWNLOADING\x20FB\x20VIDEO...*', '\x20is\x20Promote\x20to\x20Group\x20Admin*', 'wicker\x20', '```👸💬\x20කරුනාකර\x20වචනයක්\x20ලබාදෙන්න\x20...```\x0a_උදාහරණ\x20.logo3\x20MR\x20|\x20NIMA_', 'metalic', './database/Anime/ayuzawa.json', 'values', '*ℹ️\x20Previously\x20Activated.*', 'neondevil', '```ඔබ\x20දැමූ\x20පනිවිඩ\x20මකාදැමීමට\x20[\x20add\x20,\x20kick\x20,\x20promote\x20,\x20demote\x20,\x20block\x20,\x20unblock\x20,\x20leave\x20]```', 'http://kocakz.herokuapp.com/api/media/xvideo/detail?url=', 'SKIP', 'math', '🐻‍❄', 'decodeJid', '*⫷👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙽𝙴𝚆𝚂\x20👸⫸*', 'audio/mpeg', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌─[\x20ᴜᴘᴠᴏᴛᴇ\x20]─◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a├\x20Total:\x20', '*📤\x20Uploading\x20...*', 'goodbye_message', 'tattoo', 'highfive', 'listonline\x0a│\x20', 'name', 'readmore', 'lick', 'BLOOD\x20STYLE\x20-\x201', 'result', 'fancy', 'readMessages', 'delete\x20goodbye', '\x20ʟᴏᴀᴅɪɴɢ\x20ʏᴏᴜʀ\x20', 'bully', 'add*\x20\x0a\x20\x20\x20', 'Send/Reply\x20Video/Audio\x20You\x20Want\x20To\x20Convert\x20Into\x20MP3\x20With\x20Caption\x20', '```👸💬\x20Please\x20give\x20me\x20a\x20some\x20words\x20...```\x0a_example\x20.logo4\x20MR\x20NIMA_', 'listmsg\x0a│\x20', '➠\x20*Title*\x20:\x20', 'chat\x0a│\x20', '\x0aMr\x20', 'tls', 'deletevote*\x20-\x20to\x20delete\x20votes', '=>\x20In', './database/user/darah.js', 'keluar', '144p', 'There\x20are\x20still\x20unfinished\x20sessions!', '5100750LxReiV', 'setalive\x0a│\x20', 'eninja*\x0a', 'NOT_FOUND', 'christmas\x20', 'off', 'facebook', '\x0a────────────────────────\x0a\x0a', 'promote*\x20\x0a\x20\x20\x20', '*👸💬\x20only\x20owner\x20allowd\x20!!!*', 'setgrouppp', 'akira\x20\x20\x0a│\x20', 'GLITCH\x20STYLE\x20-\x203', 'kill\x0a', '\x20ml\x20nana', 'BC_GC', 'https://api.tiodevhost.my.id/api/textpro/chocolate-cake?text=', 'block_jid', 'thnks', 'status7\x20', '*[\x20⛏️\x20MINING\x20RESULT\x20⛏️]*\x0a*Iron*\x20:\x20', 'get', 'CLOSE', 'WAITING', 'sagittarius', 'author', '*📤\x20ඔබගේ\x20ගොනුව\x20එවමින්\x20පවතී...*', '*◯───────[\x20RANDOM\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20', 'apk\x20', '.apk', '```Default\x20[\x20welcome\x20,\x20goodbye\x20,\x20alive\x20]\x20පනිවිඩ\x20බාවිත\x20කිරීමට```', '*📤\x20UPLOADING\x20YOUR\x20FILE...*', 'https://textpro.me/create-3d-pottery-text-effect-online-1088.html', 'tiktok2*\x20\x20\x0a\x20\x20\x20', 'Random\x20Asupan\x20', 'random', 'hdfbvid\x20', 'xnxxsh*\x20\x20\x0a\x20\x20\x20', 'match', 'relayMessage', './database/user/hasil_buruan.json', 'toLocaleString', 'unwatchFile', '🎬\x20\x20Download\x20360p\x20Video\x20\x20', 'channel', '```Counting\x20with\x20Bot```.', 'faketest', 'tourl*\x20\x20\x20\x0a\x20\x20\x20', 'reverse*\x0a', 'lava', 'toxic', 'AUDIO', 'waifu\x20\x20\x0a│\x20', 'eninja', 'qlovely', '&link=https://en.ephoto360.com/create-logo-avatar-online-style-polygon-logo-320.html', '『\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ʙʀᴏᴀᴅᴄᴀsᴛ\x20』', '\x0a*👽\x20title\x20:*\x20', 'elisaconvertmenu', 'respon', '```සමූහයේ\x20ඇඩ්මින්\x20තනතුර\x20ලබාදීම```', 'https://textpro.me/lava-text-effect-online-914.html', 'https://textpro.me/honey-text-effect-868.html', '⫷⦁[\x20*👸\x20𝙴𝙻𝙸𝚂𝙰\x20𝚂𝙾𝙽𝙶\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x20]⦁⫸\x0a\x0a*ᴀʙᴏᴜᴛ\x20ʏᴏᴜʀ\x20ʀᴇsᴜʟᴛ...*\x0a\x0a\x20➥\x20ᴛɪᴛʟᴇ\x20-\x20\x20', 'unblock*\x20\x20\x20\x0a\x20\x20\x20\x20', '\x27\x20From\x20The\x20Message\x20list', 'SAND\x20STYLE\x20', 'Cake\x20Style\x20Logo\x20Pack\x20-\x204', '```බොට්ගේ\x20වේගය\x20මැනීමට```', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└─────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴅᴇᴠᴏᴛᴇ\x20]──◉\x0a\x0a├\x20Total:\x20', 'listcmd\x0a│\x20', 'naruto\x20\x20\x0a', 'srilanka,rathnapura', 'wikimedia\x0a│\x20', 'videoId', 'PAPERCUT\x20STYLE\x20', 'elaina\x20\x0a│\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*', '*18+\x20DOWNLOAD\x20IS\x20DESABLE\x20BY\x20OWNER*', '*⛔\x20FILE\x20SIZE\x20UP\x20TO\x20100MB\x20⛔*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ғɪʟᴇ\x20ɴᴀᴍᴇ\x20:*\x20', '👸💬\x20Reply\x20Video/Image\x20With\x20Caption\x20', 'stetus', 'tts', 'halloween', '⚜️️', 'cuddle\x0a', '.mp4', 'vietnam', 'https://ytdl.tiodevhost.my.id/', '480P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢', '-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22', '\x0a➠\x20Title\x20', 'magenta', '```සියලුම\x20චැට්\x20සදහා\x20බ්‍රෝඩ්කාස්ට්\x20යැවීම```', '&link=https://textpro.me/create-a-cinematic-horror-text-effect-1045.html', 'fromMe', 'https://textpro.me/blue-gem-text-effect-830.html', 'qninja', 'GROUP_DES', 'thunder\x20', '*This\x20is\x20only\x20main\x20owner\x20command\x20☺*️', 'apk', 'pemoji', 'SHA256\x20Hash\x20Missing', 'ninja\x20style\x20', 'participants', './database/Anime/waifu.json', '🎗️', 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/hi.mp3', '👸💬\x20𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝚒𝚜\x20𝚘𝚗𝚕𝚒𝚗𝚎', 'lockcmd\x0a│\x20', '```බොට්\x20සමග\x20ගණන්\x20සෑදීමට.```', '-filter:a\x20atempo=1.06,asetrate=44100*1.25', 'LEAGUE\x20OF\x20LEGENDS\x20STYLE\x20', '┌────[💃\x20*𝙴𝚕𝚒𝚜𝚊\x20𝙱𝚘𝚝*\x20💃]───●\x0a│\x0a│\x20\x20🧚‍♀️\x20𝚂𝚑𝚘𝚛𝚝\x20𝚅𝚒𝚍𝚎𝚘\x20𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛\x20🧚‍♀️\x0a│⦁\x20𝚃𝚒𝚝𝚕𝚎\x20:\x20', 'cuddle\x0a│\x20', '```⚠️\x20This\x20prevents\x20your\x20phone\x20from\x20getting\x20bogged\x20down\x20by\x20malicious\x20messages\x20!!!```\x0a\x0a', 'wallpaper', '\x0a👽\x20title\x20-\x20', '❽\x20Title\x20-\x20', 'birthday-cake', 'DD/MM/YY\x20HH:mm:ss', 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html', '.mp3', 'https://betabotz-api.herokuapp.com/api/cecan/jeni?apikey=BetaBotz', 'birthday-cake4\x20', 'getDate', 'yuki\x20\x20\x0a│\x20', 'thubs', 'TEXT\x20TO\x20STETUS\x20STYLE\x20(life)-\x203', '\x20Owner\x20is\x20handsome*', 'quoted', '6:08:01', 'tag', '```Download\x20your\x20youtube\x20link\x20video```', 'join', '\x0a*🐸\x20Frogs*\x20:\x20', 'hasOwnProperty', '\x20ඔබගේ\x20ශෝර්ට්\x20වීඩියෝව\x20එවමින්\x20පවතී...\x20🔄*', './database/user/monay.js', 'neon4', 'biscuit\x20', 'REAT_MASSAGE', 'tiktokdlv3', './database/BLOCK_CMD.json', '2000', 'emojimix*\x20\x20\x20\x0a\x20\x20\x20', '*📥\x20Downloading\x20Your\x20Song...*', 'alivelogo', 'blockmessage', 'modapk\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝚁𝙰𝙽𝙳𝙾𝙼\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20', 'youtubeSearch', 'WITH\x20WM', '⌲\x20Next\x20Image', 'earrape', 'Example\x20:\x20', 'antilink\x0a', 'Love\x20You\x20Style\x20Logo\x20Pack\x20-\x204', 'neon3', 'ffmpeg\x20-i\x20', '╔═════════════════════☐\x0a\x0a\x20\x20\x20\x20\x20*_𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙻𝚘𝚐𝚘\x20𝙻𝚒𝚜𝚝\x202_*\x0a\x0a*▣\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20\x20_', 'yt-search', '*👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙵𝙱\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x0a\x0a*➮\x20ᴜʀʟ\x20:*\x20', 'child_process', 'pencil', 'gimage', 'YT_THUB', '🔵\x20@', './database/Anime/gremory.json', '\x20*Please\x20Select\x20What\x20Do\x20you*\x0a*Want\x20Delete*\x09\x0a\x20\x20\x20\x20\x20\x09', '\x20<\x20YOUR\x20REPORT\x20MASSAGE\x20>\x20', '\x20tikus\x0a\x0aNote\x20:\x20For\x20Detail\x20https://primbon.com/shio.htm', 'polygon\x20style\x20', '╔═════════════════════☐\x0a\x0a\x20\x20\x20\x20\x20\x20*_𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙻𝚘𝚐𝚘\x20𝙻𝚒𝚜𝚝_*\x0a\x0a*▣\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20\x20', 'couple\x0a│\x20', 'https://telegra.ph/file/6d131e49aa045657e9e67.jpg', 'tarot\x0a🔵\x20', 'qninja\x20', '*👸💬Please\x20give\x20some\x20words.*\x20\x0a_.img\x20whatsapp,5_', 'nama', 'wallpaper\x20', 'DEL_RASH', 'seconds', 'malaysia', 'ownermenu', '👸\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ғᴀɴᴄʏ\x20ᴛᴇxᴛ\x20👸', 'chatinfo', 'JOKER\x20STYLE\x20', '```image\x20/\x20small\x20video\x20convert\x20to\x20sticker```', 'jidgroup', '\x0a:\x20https://github.com/darkmaker/Queen-Elisa-Md-V2', '```Sorry\x20Can\x27t\x20Download\x20❗```', 'setppgroup', 'https://textpro.me/wood-text-effect-856.html', 'suit', 'menu', 'tagadmin', '```ඔබ\x20නම්\x20යෙදූ\x20ගීතය\x20බාගත\x20කරයි```'];
    _0x4c80 = function() {
        return _0x1b7d52;
    };
    return _0x4c80();
}
let DarahAwal = global['rpg'][_0x1ce957(0x303)];
const isDarah = cekDuluJoinAdaApaKagaDiJson(m['sender']),
    isCekDarah = getDarah(m['sender']),
    isUmpan = getUmpan(m['sender']),
    isPotion = getPotion(m[_0x1ce957(0x448)]),
    isIkan = getIkan(m[_0x1ce957(0x448)]),
    isAyam = getAyam(m[_0x1ce957(0x448)]),
    isKelinci = getKelinci(m[_0x1ce957(0x448)]),
    isDomba = getDomba(m[_0x1ce957(0x448)]),
    isSapi = getSapi(m[_0x1ce957(0x448)]),
    isGajah = getGajah(m['sender']),
    isMonay = getMonay(m['sender']),
    isLimit = getLimit(m[_0x1ce957(0x448)]),
    isBesi = getBesi(m[_0x1ce957(0x448)]),
    isEmas = getEmas(m[_0x1ce957(0x448)]),
    isEmerald = getEmerald(m['sender']),
    isInventory = cekInventoryAdaAtauGak(m[_0x1ce957(0x448)]),
    isInventoriBuruan = cekDuluHasilBuruanNya(m['sender']),
    isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m[_0x1ce957(0x448)]),
    isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m[_0x1ce957(0x448)]),
    isHunt = cekHUNTInventoryAdaAtauGak(m[_0x1ce957(0x448)]),
    ikan = ['🐟', '🐠', '🐡'];
let _limit = JSON[_0x1ce957(0x685)](fs[_0x1ce957(0xab9)]('./database/user/limit.json')),
    _buruan = JSON[_0x1ce957(0x685)](fs[_0x1ce957(0xab9)](_0x1ce957(0xb52))),
    _darahOrg = JSON[_0x1ce957(0x685)](fs['readFileSync'](_0x1ce957(0x306))),
    sticker = JSON['parse'](fs[_0x1ce957(0xab9)](_0x1ce957(0xc7b))),
    audio = JSON[_0x1ce957(0x685)](fs[_0x1ce957(0xab9)](_0x1ce957(0x940))),
    tebaklagu = db[_0x1ce957(0x646)][_0x1ce957(0x91b)][_0x1ce957(0x2d8)] = [],
    _family100 = db[_0x1ce957(0x646)][_0x1ce957(0x91b)][_0x1ce957(0x761)] = [],
    kuismath = db[_0x1ce957(0x646)][_0x1ce957(0x91b)]['math'] = [],
    tebakgambar = db[_0x1ce957(0x646)][_0x1ce957(0x91b)][_0x1ce957(0x992)] = [],
    tebakkata = db['data'][_0x1ce957(0x91b)][_0x1ce957(0x6e4)] = [],
    caklontong = db['data'][_0x1ce957(0x91b)][_0x1ce957(0x5c4)] = [],
    caklontong_desk = db[_0x1ce957(0x646)][_0x1ce957(0x91b)][_0x1ce957(0x4e6)] = [],
    tebakkalimat = db['data'][_0x1ce957(0x91b)][_0x1ce957(0x4b7)] = [],
    tebaklirik = db[_0x1ce957(0x646)][_0x1ce957(0x91b)]['lirik'] = [],
    tebaktebakan = db[_0x1ce957(0x646)][_0x1ce957(0x91b)][_0x1ce957(0x84b)] = [],
    vote = db[_0x1ce957(0x646)][_0x1ce957(0x920)]['vote'] = [];
const prefa = '.';
module[_0x1ce957(0x33e)] = ElisaBotMd = async (_0x4b49f7, _0x3bbe8d, _0x5a516c, _0x547772) => {
    const _0x3e00d3 = _0x1ce957;
    try {
        var _0x37cb19 = _0x3bbe8d[_0x3e00d3(0x7cb)] === _0x3e00d3(0x839) ? _0x3bbe8d['message']['conversation'] : _0x3bbe8d[_0x3e00d3(0x7cb)] == _0x3e00d3(0xa90) ? _0x3bbe8d['message']['imageMessage'][_0x3e00d3(0x451)] : _0x3bbe8d[_0x3e00d3(0x7cb)] == 'videoMessage' ? _0x3bbe8d['message'][_0x3e00d3(0x371)][_0x3e00d3(0x451)] : _0x3bbe8d['mtype'] == 'extendedTextMessage' ? _0x3bbe8d[_0x3e00d3(0x9e1)][_0x3e00d3(0x710)][_0x3e00d3(0x5e0)] : _0x3bbe8d[_0x3e00d3(0x7cb)] == _0x3e00d3(0x3a3) ? _0x3bbe8d[_0x3e00d3(0x9e1)][_0x3e00d3(0x3a3)][_0x3e00d3(0x351)] : _0x3bbe8d[_0x3e00d3(0x7cb)] == _0x3e00d3(0x8b5) ? _0x3bbe8d[_0x3e00d3(0x9e1)][_0x3e00d3(0x8b5)]['singleSelectReply']['selectedRowId'] : _0x3bbe8d[_0x3e00d3(0x7cb)] == 'templateButtonReplyMessage' ? _0x3bbe8d[_0x3e00d3(0x9e1)][_0x3e00d3(0x441)]['selectedId'] : _0x3bbe8d[_0x3e00d3(0x7cb)] === _0x3e00d3(0x8cb) ? _0x3bbe8d[_0x3e00d3(0x9e1)][_0x3e00d3(0x3a3)]?.[_0x3e00d3(0x351)] || _0x3bbe8d['message'][_0x3e00d3(0x8b5)]?.[_0x3e00d3(0xa3e)][_0x3e00d3(0xa3c)] || _0x3bbe8d['text'] : '',
            _0x29f03b = typeof _0x3bbe8d[_0x3e00d3(0x5e0)] == 'string' ? _0x3bbe8d[_0x3e00d3(0x5e0)] : '',
            _0x440929 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi [_0x3e00d3(0x2f1)](_0x37cb19) ? _0x37cb19['match'](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0] : '' : prefa ?? global['prefix'];
        const _0x208f9e = _0x37cb19[_0x3e00d3(0x58b)](_0x440929),
            _0x5a7691 = _0x37cb19['replace'](_0x440929, '')[_0x3e00d3(0xc79)]()[_0x3e00d3(0x341)](/ +/)[_0x3e00d3(0x569)]()[_0x3e00d3(0xa8d)](),
            _0x9b834d = _0x37cb19[_0x3e00d3(0xc79)]()['split'](/ +/)[_0x3e00d3(0x86e)](0x1),
            _0x545402 = _0x3bbe8d[_0x3e00d3(0x7a2)] || _0x3e00d3(0xbfb),
            _0xca02fb = await _0x4b49f7[_0x3e00d3(0xb09)](_0x4b49f7[_0x3e00d3(0x2a0)]['id']),
            _0x476ce2 = _0x3e00d3(0xa63),
            _0x3e93bb = _0x3e00d3(0x597),
            _0x482841 = _0x3e00d3(0xa54),
            _0x1813e9 = _0x3e00d3(0x98e),
            _0x1a0be4 = '94711421243',
            _0x5ef7c8 = [_0x482841, _0x1813e9, _0x1a0be4, _0x3e93bb, _0xca02fb, _0x476ce2, ...global[_0x3e00d3(0x3f2)]][_0x3e00d3(0x56d)](_0x2a124b => _0x2a124b['replace'](/[^0-9]/g, '') + _0x3e00d3(0x5c5))[_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x448)]),
            _0xb4e8d5 = _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x464) ? !![] : ![],
            _0x46024e = _0x3bbe8d[_0x3e00d3(0x448)] == _0xca02fb ? !![] : ![],
            _0x1904bf = _0x3bbe8d[_0x3e00d3(0x5f1)] == _0x3e00d3(0x2f9) ? !![] : ![],
            _0x153b74 = q = _0x9b834d[_0x3e00d3(0xbb1)]('\x20'),
            _0x2d884d = _0x3bbe8d['quoted'] ? _0x3bbe8d['quoted'] : _0x3bbe8d,
            _0x253f71 = (_0x2d884d[_0x3e00d3(0x259)] || _0x2d884d)[_0x3e00d3(0x782)] || '',
            _0x5c4205 = /image|video|sticker|audio/ [_0x3e00d3(0x2f1)](_0x253f71),
            _0x3e5538 = mek[_0x3e00d3(0x2da)][_0x3e00d3(0x76b)],
            _0x1d9c7b = Object['keys'](mek[_0x3e00d3(0x9e1)])[0x0],
            _0x82ea67 = JSON[_0x3e00d3(0x6d6)](mek[_0x3e00d3(0x9e1)]),
            _0x4ecf25 = await getBuffer(_0x3e00d3(0xc07)),
            _0xd5115b = global['NO_BLOCK']['map'](_0x243871 => _0x243871[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5))[_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x448)]),
            _0x8f1ca2 = _0x3bbe8d['isGroup'] ? await _0x4b49f7[_0x3e00d3(0x504)](_0x3bbe8d['chat'])[_0x3e00d3(0x8c3)](_0x4909e2 => {}) : '',
            _0x1c33bb = _0x3bbe8d[_0x3e00d3(0x900)] ? _0x8f1ca2[_0x3e00d3(0x9c3)] : '',
            _0x2d8891 = _0x3bbe8d[_0x3e00d3(0x900)] ? await _0x8f1ca2[_0x3e00d3(0xb93)] : '',
            _0x20d984 = _0x3bbe8d[_0x3e00d3(0x900)] ? await _0x2d8891['filter'](_0x13089e => _0x13089e['admin'] !== null)[_0x3e00d3(0x56d)](_0x2c0eba => _0x2c0eba['id']) : '',
            _0x1177b0 = _0x3bbe8d[_0x3e00d3(0x900)] ? _0x8f1ca2[_0x3e00d3(0x3f2)] : '',
            _0x56a320 = _0x3bbe8d['isGroup'] ? _0x20d984[_0x3e00d3(0x3d5)](_0xca02fb) : ![],
            _0x5f3ab5 = _0x3bbe8d[_0x3e00d3(0x900)] ? _0x20d984[_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x448)]) : ![],
            _0xeeeb81 = _0x5ef7c8 || global['premium'][_0x3e00d3(0x56d)](_0x344b38 => _0x344b38['replace'](/[^0-9]/g, '') + '@s.whatsapp.net')[_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x448)]) || ![];
        try {
            let _0x3f0663 = _0x9ad502 => typeof _0x9ad502 === 'number' && !isNaN(_0x9ad502),
                _0x40458f = _0xeeeb81 ? global['limitawal'][_0x3e00d3(0x92d)] : global[_0x3e00d3(0x461)][_0x3e00d3(0x438)],
                _0x40e295 = global['db'][_0x3e00d3(0x646)]['users'][_0x3bbe8d[_0x3e00d3(0x448)]];
            if (typeof _0x40e295 !== _0x3e00d3(0x8f6)) global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x6b3)][_0x3bbe8d['sender']] = {};
            if (_0x40e295) {
                if (!_0x3f0663(_0x40e295[_0x3e00d3(0xa3b)])) _0x40e295[_0x3e00d3(0xa3b)] = -0x1;
                if (!('afkReason' in _0x40e295)) _0x40e295[_0x3e00d3(0xbfc)] = '';
                if (!_0x3f0663(_0x40e295[_0x3e00d3(0x2f4)])) _0x40e295['limit'] = _0x40458f;
            } else global['db']['data'][_0x3e00d3(0x6b3)][_0x3bbe8d[_0x3e00d3(0x448)]] = {
                'afkTime': -0x1,
                'afkReason': '',
                'limit': _0x40458f
            };
            let _0x256875 = global['db'][_0x3e00d3(0x646)]['chats'][_0x3bbe8d[_0x3e00d3(0x5f1)]];
            if (typeof _0x256875 !== _0x3e00d3(0x8f6)) global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]] = {};
            if (_0x256875) {
                if (!(_0x3e00d3(0xc02) in _0x256875)) _0x256875[_0x3e00d3(0xc02)] = ![];
                if (!(_0x3e00d3(0xb3b) in _0x256875)) _0x256875[_0x3e00d3(0xc02)] = ![];
                if (!(_0x3e00d3(0x705) in _0x256875)) _0x256875[_0x3e00d3(0x705)] = !![];
                if (!('welcome' in _0x256875)) _0x256875[_0x3e00d3(0xc76)] = ![];
                if (!(_0x3e00d3(0x698) in _0x256875)) _0x256875['welcome_message'] = '';
                if (!(_0x3e00d3(0x3a6) in _0x256875)) _0x256875[_0x3e00d3(0x3a6)] = '';
                if (!(_0x3e00d3(0xb0e) in _0x256875)) _0x256875[_0x3e00d3(0xb0e)] = '';
                if (!(_0x3e00d3(0x931) in _0x256875)) _0x256875[_0x3e00d3(0x931)] = '';
            } else global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]] = {
                'mute': ![],
                'block_jid': ![],
                'antilink': !![],
                'welcome': ![],
                'welcome_message': '',
                'welcome_image': '',
                'goodbye_message': '',
                'goodbye_image': ''
            };
            let _0x12b116 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb];
            if (typeof _0x12b116 !== _0x3e00d3(0x8f6)) global['db']['data'][_0x3e00d3(0x3e5)][_0xca02fb] = {};
            if (_0x12b116) {
                if (!_0x3f0663(_0x12b116[_0x3e00d3(0x76e)])) _0x12b116[_0x3e00d3(0x76e)] = 0x0;
                if (!('autobio' in _0x12b116)) _0x12b116['autobio'] = !![];
                if (!('kickmessage' in _0x12b116)) _0x12b116[_0x3e00d3(0x78b)] = '';
                if (!(_0x3e00d3(0xbfd) in _0x12b116)) _0x12b116[_0x3e00d3(0xbfd)] = '';
                if (!(_0x3e00d3(0x86c) in _0x12b116)) _0x12b116[_0x3e00d3(0x86c)] = '';
                if (!(_0x3e00d3(0x965) in _0x12b116)) _0x12b116[_0x3e00d3(0x965)] = '';
                if (!('blockmessage' in _0x12b116)) _0x12b116[_0x3e00d3(0xbbf)] = '';
                if (!('unblockmessage' in _0x12b116)) _0x12b116[_0x3e00d3(0x707)] = '';
            } else global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb] = {
                'status': 0x0,
                'alive': ![],
                'autobio': !![],
                'kickmessage': '',
                'addmessage': '',
                'promotemessage': '',
                'demotemessage': '',
                'blockmessage': '',
                'unblockmessage': ''
            };
        } catch (_0x5cf7c7) {
            console[_0x3e00d3(0x92c)](_0x5cf7c7);
        }
        const _0x34b586 = {
                'key': {
                    'fromMe': ![],
                    'participant': _0x3e00d3(0x61b),
                    ..._0x3e5538 ? {
                        'remoteJid': _0x3e00d3(0x861)
                    } : {}
                },
                'message': {
                    'videoMessage': {
                        'title': '' + global['botnma'],
                        'h': '' + global[_0x3e00d3(0x951)],
                        'seconds': '30',
                        'caption': '' + global[_0x3e00d3(0x951)],
                        'jpegThumbnail': _0x4ecf25
                    }
                }
            },
            _0x1fa331 = {
                'key': {
                    'fromMe': ![],
                    'participant': _0x3e00d3(0x61b),
                    ..._0x3e5538 ? {
                        'remoteJid': '16505434800@s.whatsapp.net'
                    } : {}
                },
                'message': {
                    'productMessage': {
                        'product': {
                            'productImage': {
                                'mimetype': _0x3e00d3(0x66d),
                                'jpegThumbnail': _0x3e00d3(0xc07)
                            },
                            'title': 'Queen\x20Elisa\x20Whatsapp\x20Bot',
                            'description': _0x3e00d3(0x6a0),
                            'currencyCode': _0x3e00d3(0x7a5),
                            'priceAmount1000': _0x3e00d3(0xbbb),
                            'retailerId': _0x3e00d3(0x799),
                            'productImageCount': 0x1
                        },
                        'businessOwnerJid': '0@s.whatsapp.net'
                    }
                }
            },
            _0x134aea = {
                'key': {
                    'fromMe': ![],
                    'participant': _0x3e00d3(0x61b),
                    ..._0x3bbe8d[_0x3e00d3(0x5f1)] ? {
                        'remoteJid': _0x3e00d3(0x802)
                    } : {}
                },
                'message': {
                    'imageMessage': {
                        'url': _0x3e00d3(0xae2),
                        'mimetype': _0x3e00d3(0x66d),
                        'caption': '' + global[_0x3e00d3(0x951)],
                        'fileSha256': _0x3e00d3(0x2d0),
                        'fileLength': _0x3e00d3(0x44d),
                        'height': 0x438,
                        'width': 0x437,
                        'mediaKey': _0x3e00d3(0x59b),
                        'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
                        'directPath': _0x3e00d3(0xc0c),
                        'mediaKeyTimestamp': _0x3e00d3(0x537),
                        'jpegThumbnail': _0x4ecf25,
                        'scansSidecar': _0x3e00d3(0x921)
                    }
                }
            },
            _0x2f1bc9 = _0x3f755d => {
                const _0x1cb470 = _0x3e00d3;
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x1cb470(0x5f1)], {
                    'text': _0x3f755d
                }, {
                    'quoted': _0x34b586
                });
            },
            _0x2d47f4 = _0x3c81cb => {
                const _0x1e5250 = _0x3e00d3;
                _0x4b49f7[_0x1e5250(0x69f)](_0x3bbe8d['chat'], {
                    'text': _0x3c81cb
                }, {
                    'quoted': _0x34b586
                });
            },
            _0x53c8bd = _0x1ef1df => {
                const _0x473131 = _0x3e00d3;
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x473131(0x5f1)], {
                    'text': _0x1ef1df
                }, {
                    'quoted': _0x34b586
                });
            },
            _0x15ef8d = _0x3f4a94 => {
                const _0x37d3f8 = _0x3e00d3;
                _0x4b49f7[_0x37d3f8(0x69f)](_0x3bbe8d[_0x37d3f8(0x5f1)], {
                    'text': _0x3f4a94,
                    'contextInfo': {
                        'externalAdReply': {
                            'title': _0x37d3f8(0x4fd),
                            'mediaType': 0x3,
                            'renderLargerThumbnail': !![],
                            'showAdAttribution': !![],
                            'detectLinks': !![],
                            'body': _0x37d3f8(0xc34),
                            'thumbnail': fs[_0x37d3f8(0xab9)](_0x37d3f8(0x3ac)),
                            'sourceUrl': _0x37d3f8(0x826)
                        }
                    }
                });
            },
            _0x2c3b6e = _0x3000a1 => {
                const _0x18f6a6 = _0x3e00d3;
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x18f6a6(0x5f1)], {
                    'text': _0x3000a1
                }, {
                    'quoted': _0x1fa331
                });
            },
            _0x5ef4bf = _0x4df18c => {
                const _0x382c5a = _0x3e00d3;
                _0x4b49f7[_0x382c5a(0x69f)](_0x3bbe8d[_0x382c5a(0x5f1)], {
                    'text': _0x4df18c
                }, {
                    'quoted': _0x3bbe8d
                });
            };
        if (_0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0xa37)) {
            const _0x304eb3 = ['👨‍💻', '✅', '👸', '🥷'];
            var _0x3ae221 = _0x304eb3[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x304eb3[_0x3e00d3(0x794)])];
            await _0x4b49f7['sendMessage'](_0x3e5538, {
                'react': {
                    'text': '' + _0x3ae221,
                    'key': _0x3bbe8d['key']
                }
            });
        }
        if (db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x976)] && !_0x5ef7c8) return;
        if (db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['block_jid'] && !_0x5ef7c8) return;
        if (_0x3bbe8d[_0x3e00d3(0x5f1)] === _0x3e00d3(0x5b0)) return;
        if (_0x3bbe8d[_0x3e00d3(0x5f1)] == '120363030304247368@g.us') return;
        if (!_0x4b49f7[_0x3e00d3(0x253)]) {
            if (!_0x3bbe8d[_0x3e00d3(0x2da)][_0x3e00d3(0xb89)]) return;
        }
        _0x3bbe8d[_0x3e00d3(0x9e1)] && (global[_0x3e00d3(0xbb8)] == _0x3e00d3(0x52c) && _0x4b49f7['readMessages']([_0x3bbe8d[_0x3e00d3(0x2da)]]), console[_0x3e00d3(0x788)](chalk[_0x3e00d3(0x3ce)](chalk[_0x3e00d3(0x8dd)](_0x3e00d3(0x6e8))), chalk[_0x3e00d3(0x3ce)](chalk[_0x3e00d3(0xa0c)](new Date())), chalk[_0x3e00d3(0x3ce)](chalk['bgBlue'](_0x29f03b || _0x3bbe8d[_0x3e00d3(0x7cb)])) + '\x0a' + chalk[_0x3e00d3(0xb86)](_0x3e00d3(0x868)), chalk[_0x3e00d3(0x928)](_0x545402), chalk['yellow'](_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a' + chalk[_0x3e00d3(0x38d)](_0x3e00d3(0xb25)), chalk[_0x3e00d3(0x928)](_0x3bbe8d['isGroup'] ? _0x545402 : 'Private\x20Chat', _0x3bbe8d[_0x3e00d3(0x5f1)])));
        let _0x33e9ec = require(_0x3e00d3(0xc26));
        _0x33e9ec[_0x3e00d3(0x843)](_0x3e00d3(0xab0), () => {
            const _0x4c1407 = _0x3e00d3;
            let _0x4234b9 = Object[_0x4c1407(0x3e6)](global['db'][_0x4c1407(0x646)][_0x4c1407(0x6b3)]),
                _0x5094e2 = _0xeeeb81 ? global[_0x4c1407(0x461)][_0x4c1407(0x92d)] : global[_0x4c1407(0x461)][_0x4c1407(0x438)];
            for (let _0x5729d9 of _0x4234b9) global['db'][_0x4c1407(0x646)]['users'][_0x5729d9][_0x4c1407(0x2f4)] = _0x5094e2;
            console['log'](_0x4c1407(0x72a));
        }, {
            'scheduled': !![],
            'timezone': _0x3e00d3(0x5a2)
        });
        if (global['db']['data'][_0x3e00d3(0x3e5)][_0xca02fb]['autobio'] && global[_0x3e00d3(0x452)] == 'on') {
            let _0x4728be = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb];
            if (new Date() * 0x1 - _0x4728be[_0x3e00d3(0x76e)] > 0x3e8) {
                let _0x24c8f9 = await runtime(process[_0x3e00d3(0x62b)]());
                const _0x339195 = {
                    'weekday': _0x3e00d3(0x27a),
                    'year': _0x3e00d3(0xaa4),
                    'month': 'long',
                    'day': _0x3e00d3(0xaa4)
                };
                var _0x5c81d3 = new Date()[_0x3e00d3(0x32b)](_0x339195),
                    _0x84bc11 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': 'Asia/Colombo'
                    })['split']('\x20')[0x1];
                const _0x46b39c = _0x3e00d3(0x5cb) + _0x5c81d3 + '\x0a⌚\x20' + _0x84bc11 + '\x0a\x0a' + _0x4b49f7['user'][_0x3e00d3(0xb12)];
                await _0x4b49f7[_0x3e00d3(0x7dd)](_0x46b39c), _0x4728be[_0x3e00d3(0x76e)] = new Date() * 0x1;
            }
        }
        for (let _0x5af92c of sticker) {
            _0x29f03b[_0x3e00d3(0xa8d)]() === _0x5af92c && (result = fs[_0x3e00d3(0xab9)](_0x3e00d3(0x58e) + _0x5af92c + _0x3e00d3(0x69d)), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                'sticker': result
            }, {
                'quoted': _0x3bbe8d
            }));
        }
        for (let _0x58e013 of audio) {
            _0x29f03b['toLowerCase']() === _0x58e013 && (result = fs[_0x3e00d3(0xab9)]('./Media/audio/' + _0x58e013 + '.mp3'), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                'audio': result,
                'mimetype': _0x3e00d3(0x585),
                'ptt': !![]
            }, {
                'quoted': _0x3bbe8d
            }));
        }
        const _0x3df2e0 = JSON['parse'](fs['readFileSync'](_0x3e00d3(0xc71))),
            _0x2e4b1c = _0x3df2e0[_0x3e00d3(0x415)],
            _0x4fd1a8 = _0x3df2e0['reply_massage'];
        for (any in _0x2e4b1c) {
            _0x29f03b[_0x3e00d3(0xa8d)]()[_0x3e00d3(0x58b)](_0x2e4b1c[any]) && (imoji = _0x4fd1a8[any], _0x5ef4bf(imoji));
        }
        const _0x56261f = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0xbba)));
        for (any in _0x56261f) {
            if (_0x29f03b[_0x3e00d3(0xa8d)]()['startsWith'](_0x56261f[any])) {
                if (global['BLOCK_CMD_MESSAGE_SEND']) return _0x5ef4bf(mess[_0x3e00d3(0x59c)]);
                else return;
            }
        }
        const _0x3f6d19 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x5e4)));
        for (any in _0x3f6d19) {
            if (_0x3bbe8d[_0x3e00d3(0x5f1)][_0x3e00d3(0x3d5)](_0x3f6d19[any])) return;
        }
        _0x3bbe8d['sender'] == _0x3e00d3(0xa9c) && await _0x4b49f7['sendMessage'](_0x3e5538, {
            'react': {
                'text': '💟️',
                'key': _0x3bbe8d['key']
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == '94713742435@s.whatsapp.net' && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '🖤',
                'key': _0x3bbe8d['key']
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0xa19) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '🤍',
                'key': _0x3bbe8d['key']
            }
        });
        _0x3bbe8d['sender'] == _0x3e00d3(0x903) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '⚕️',
                'key': _0x3bbe8d['key']
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x8a3) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '🐋',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x1f6) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '🧜‍♂',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x803) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '⚜️',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        });
        _0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x464) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
            'react': {
                'text': '🗿',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        });
        if (global[_0x3e00d3(0x705)] == _0x3e00d3(0x52c) && _0x3bbe8d['isGroup'] && db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d['chat']][_0x3e00d3(0x705)]) {
            if (_0x29f03b['match'](_0x3e00d3(0x69a))) {
                if (!_0x56a320) return;
                let _0x1a0b3f = _0x3e00d3(0x882) + await _0x4b49f7[_0x3e00d3(0x1ee)](_0x3bbe8d[_0x3e00d3(0x5f1)]),
                    _0x2e70cd = new RegExp(_0x1a0b3f, 'i'),
                    _0x53e55c = _0x2e70cd[_0x3e00d3(0x2f1)](_0x3bbe8d[_0x3e00d3(0x5e0)]);
                if (_0x53e55c) return;
                if (_0x5f3ab5) return;
                if (_0x5ef7c8) return;
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x7c3)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x3bbe8d[_0x3e00d3(0x2da)]
                });
            }
        }
        if (global[_0x3e00d3(0xbdf)] == _0x3e00d3(0x52c)) {
            if (_0x3bbe8d[_0x3e00d3(0x448)] == _0x3e00d3(0x760)) await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                'delete': _0x3bbe8d['key']
            });
        }
        _0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x58b)]('212') && !_0x3bbe8d['isGroup'] && global[_0x3e00d3(0x93d)] == 'true' && (_0x4b49f7['sendMessage'](_0x3e5538, {
            'react': {
                'text': '📛',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        }), _0x4b49f7[_0x3e00d3(0x6b5)](_0x3bbe8d[_0x3e00d3(0x448)], _0x3e00d3(0xa6a)));
        if (global['AUTO_REACT'] == 'true') {
            const _0x34a0cd = [HELPERS][_0x3e00d3(0x56d)](_0xcaf086 => _0xcaf086[_0x3e00d3(0x449)](/[^0-9]/g, '') + '@s.whatsapp.net')['includes'](_0x3bbe8d[_0x3e00d3(0x448)]);
            _0x34a0cd && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '👻',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x3bbe8d[_0x3e00d3(0x448)] == global['owner'] + _0x3e00d3(0x5c5) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': global[_0x3e00d3(0x605)],
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🥲') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😙',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('😹') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😹',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('😂') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😹',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🤣') && await _0x4b49f7['sendMessage'](_0x3e5538, {
                'react': {
                    'text': '😂',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b['match']('🥰') && await _0x4b49f7['sendMessage'](_0x3e5538, {
                'react': {
                    'text': '😍',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('😍') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😇',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🤗') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🤗',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🙂') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😔',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('😇') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😇',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b['match']('😙') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🌝',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('😪') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😪',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b['match']('😔') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😔',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)](_0x3e00d3(0x704)) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🍆',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)](_0x3e00d3(0x588)) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '👻',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('❤') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '💞',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b['match']('🌝') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🌚',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🌚') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🌝',
                    'key': _0x3bbe8d['key']
                }
            });
            _0x29f03b['match']('🤨') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '😮‍💨',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b['match']('😒') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🙄',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)]('🤗') && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '👀',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b['match'](_0x3e00d3(0x5f6)) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🧐',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)](_0x3e00d3(0x28b)) && await _0x4b49f7['sendMessage'](_0x3e5538, {
                'react': {
                    'text': '🐼',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)](_0x3e00d3(0x9db)) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                'react': {
                    'text': '🦄',
                    'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                }
            });
            _0x29f03b[_0x3e00d3(0xb50)](_0x3e00d3(0x8fd)) && await _0x4b49f7['sendMessage'](_0x3e5538, {
                'react': {
                    'text': '🦚',
                    'key': _0x3bbe8d['key']
                }
            });
            const _0x16c75d = ['🌍', '🐼', '😎', '🥺', '😳', '😲', '😯', '😥', '😱', '😭', '😖', '😈', '📥', '😀', '😃', '😄', '😁', '😆', '🥹', '😅', '☺', _0x3e00d3(0x938), '🙃', '😉', '😌', '🤓', '💦', '🥸', '🤩', '🥳', '😕', '😖', '😩', '🥺', '🖤', '💔', _0x3e00d3(0xc5b), '❤️‍🩹', '💋', '😤', '🤬', '🥵', '🥶', '😶', '🤡', '😐', '😯', '😮', '🥱', '😪', '😵', _0x3e00d3(0x3e2), '🙈', '👺', '💩', '👻', '💀', '☠️', '👾', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😾', '🫶', '🤲', '🫵', '👍', '🫳', '👉', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', _0x3e00d3(0xb08), '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🌙', '🍆', '🍊', '🥎', '🧡', '💟', '💘', _0x3e00d3(0x22e), '🫂', '👀', '🪀', '⚽', '🧘‍♀️', '✈️', '🎡', '⛲', '🎠', '⛱️', 'Hi', _0x3e00d3(0xadf), _0x3e00d3(0xa69), 'gm', 'gn', '😘', '🤤', '💪', '🙏', '👋', '😊', '🖕', '🌼', '🌸', '🍑', 'ok', _0x3e00d3(0x352), _0x3e00d3(0xa6c)],
                _0x8354aa = ['🌍', '🐼', '😎', '🥺', '😳', '😲', '😯', '😥', '😱', '🤧', '😖', '😈', _0x3e00d3(0x495), '😀', '😃', '😄', '😁', '😆', '🥹', '😅', '☺', _0x3e00d3(0x938), '🙃', '😉', '😌', '🦁', '💥', '🥸', '🤩', '🥳', '😕', '😖', '😩', '🥺', '🤍', '💔', _0x3e00d3(0xc5b), '❤️‍🩹', '💋', '😤', '🤬', '🥵', '🥶', '😶', '🤡', '😐', '😯', '😮', '🥱', '😪', '😵', '😵‍💫', '🙊', '👺', '💩', '👻', '💀', '☠️', '👾', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😾', '🫶', '🤲', '🫵', '👍', '🫳', '👉', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', _0x3e00d3(0xb08), '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🌙', '🍆', '🍊', '🥎', '🧡', '💟', '💘', _0x3e00d3(0x22e), '🫂', '👀', '🪀', '⚽', _0x3e00d3(0x776), '✈️', '🎡', '⛲', '🎠', '⛱️', '👋', '⛅', '🌌', '🌄', '🌙', '😘', '🤤', '💪', '🙏', '👋', '😊', '🖕', '🌼', '🌸', '🍑', '✌️', '👸', '👸'];
            for (any in _0x16c75d) {
                _0x29f03b[_0x3e00d3(0xa8d)]()[_0x3e00d3(0x3d5)](_0x16c75d[any]) && (imoji = _0x8354aa[any], await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': imoji,
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }));
            }
        }
        if (global['ANTI_BADWORD'] == _0x3e00d3(0x52c) && _0x3bbe8d[_0x3e00d3(0x900)] && !_0x5f3ab5 && !_0x5ef7c8) {
            const _0xe3c6f = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0x248)));
            for (any in _0xe3c6f) {
                if (_0x29f03b[_0x3e00d3(0xa8d)]()['includes'](_0xe3c6f[any])) {
                    if (!_0x56a320) return;
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'delete': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '*@' + _0x3bbe8d['sender'][_0x3e00d3(0x341)]('@')[0x0] + '\x20Bot\x20Owner\x20is\x20Activated\x20Anti\x20Bad\x20Words*');
                }
            }
        }
        if (!_0x3bbe8d[_0x3e00d3(0x900)] && global[_0x3e00d3(0x6ad)] == 'on') {
            if (!_0x5ef7c8 && !_0xd5115b) return await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global['INBOX_BLOCK_MSG']), await sleep(0x1f40), await _0x4b49f7[_0x3e00d3(0x6b5)](_0x3bbe8d[_0x3e00d3(0x448)], _0x3e00d3(0xa6a));
        }
        if (db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['mute'] && !_0x5f3ab5 && !_0x5ef7c8) return;
        const _0x5610c3 = _0x1d9c7b === _0x3e00d3(0x710) && _0x82ea67[_0x3e00d3(0x3d5)](_0x3e00d3(0xa90)),
            _0x28f644 = _0x1d9c7b === _0x3e00d3(0x710) && _0x82ea67[_0x3e00d3(0x3d5)](_0x3e00d3(0x371)),
            _0x1e372b = _0x1d9c7b === _0x3e00d3(0x710) && _0x82ea67[_0x3e00d3(0x3d5)](_0x3e00d3(0x561)),
            _0x27da79 = _0x1d9c7b === _0x3e00d3(0x710) && _0x82ea67['includes'](_0x3e00d3(0xa40));
        if (_0x5c4205 && _0x3bbe8d[_0x3e00d3(0x259)]['fileSha256'] && _0x3bbe8d['msg']['fileSha256'][_0x3e00d3(0x7b6)]('base64') in global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)]) {
            let _0x1eb2e2 = global['db']['data']['sticker'][_0x3bbe8d['msg']['fileSha256'][_0x3e00d3(0x7b6)](_0x3e00d3(0x4fc))],
                {
                    text: _0x5d7bd6,
                    mentionedJid: _0x1e36d7
                } = _0x1eb2e2,
                _0x5ea620 = await generateWAMessage(_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x5d7bd6,
                    'mentions': _0x1e36d7
                }, {
                    'userJid': _0x4b49f7[_0x3e00d3(0x2a0)]['id'],
                    'quoted': _0x3bbe8d[_0x3e00d3(0xbad)] && _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x6aa)]
                });
            _0x5ea620['key'][_0x3e00d3(0xb89)] = areJidsSameUser(_0x3bbe8d['sender'], _0x4b49f7[_0x3e00d3(0x2a0)]['id']), _0x5ea620[_0x3e00d3(0x2da)]['id'] = _0x3bbe8d[_0x3e00d3(0x2da)]['id'], _0x5ea620[_0x3e00d3(0x7a2)] = _0x3bbe8d[_0x3e00d3(0x7a2)];
            if (_0x3bbe8d['isGroup']) _0x5ea620['participant'] = _0x3bbe8d[_0x3e00d3(0x448)];
            let _0x1a457b = {
                ..._0x5a516c,
                'messages': [proto[_0x3e00d3(0x38a)][_0x3e00d3(0x747)](_0x5ea620)],
                'type': _0x3e00d3(0x294)
            };
            _0x4b49f7['ev']['emit'](_0x3e00d3(0x275), _0x1a457b);
        }
        let _0x44e55a = [...new Set([..._0x3bbe8d[_0x3e00d3(0x22f)] || [], ..._0x3bbe8d[_0x3e00d3(0xbad)] ? [_0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)]] : []])];
        for (let _0x52e5f8 of _0x44e55a) {
            let _0x2c55b2 = global['db'][_0x3e00d3(0x646)]['users'][_0x52e5f8];
            if (!_0x2c55b2) continue;
            let _0x1353e7 = _0x2c55b2[_0x3e00d3(0xa3b)];
            if (!_0x1353e7 || _0x1353e7 < 0x0) continue;
            let _0x22e60e = _0x2c55b2[_0x3e00d3(0xbfc)] || '';
            _0x53c8bd((_0x3e00d3(0x48a) + (_0x22e60e ? 'dengan\x20alasan\x20' + _0x22e60e : 'no\x20reason') + _0x3e00d3(0x458) + clockString(new Date() - _0x1353e7) + '\x0a')[_0x3e00d3(0xc79)]());
        }
        if (db[_0x3e00d3(0x646)]['users'][_0x3bbe8d[_0x3e00d3(0x448)]][_0x3e00d3(0xa3b)] > -0x1) {
            let _0x332f88 = global['db'][_0x3e00d3(0x646)]['users'][_0x3bbe8d[_0x3e00d3(0x448)]];
            _0x53c8bd((_0x3e00d3(0x3fb) + (_0x332f88[_0x3e00d3(0xbfc)] ? '\x20after\x20' + _0x332f88[_0x3e00d3(0xbfc)] : '') + _0x3e00d3(0x82b) + clockString(new Date() - _0x332f88[_0x3e00d3(0xa3b)]) + '\x0a')[_0x3e00d3(0xc79)]()), _0x332f88[_0x3e00d3(0xa3b)] = -0x1, _0x332f88[_0x3e00d3(0xbfc)] = '';
        }
        _0x3bbe8d['isGroup'] && (!isInventoryLimit && addInventoriLimit(_0x3bbe8d['sender']), addLimit(_0x3bbe8d[_0x3e00d3(0x448)], 0x1));
        const _0x3abb7b = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0xa6d))),
            _0x3003d9 = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0x31a))),
            _0x149a84 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x50a))),
            _0x1f4bd4 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0xb00))),
            _0x296586 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x41d))),
            _0x444565 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x6d2))),
            _0x327b7c = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x806))),
            _0x4fb44c = JSON[_0x3e00d3(0x685)](fs['readFileSync']('./database/Anime/erza.json')),
            _0x3a9d0f = JSON['parse'](fs[_0x3e00d3(0xab9)](_0x3e00d3(0xbd2))),
            _0x2ab0fc = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x807))),
            _0x4698fd = JSON['parse'](fs[_0x3e00d3(0xab9)]('./database/Anime/kaga.json')),
            _0x45a43a = JSON['parse'](fs[_0x3e00d3(0xab9)]('./database/Anime/kaori.json')),
            _0x510400 = JSON[_0x3e00d3(0x685)](fs['readFileSync']('./database/Anime/kurumi.json')),
            _0x102dda = JSON['parse'](fs[_0x3e00d3(0xab9)](_0x3e00d3(0xc38))),
            _0x364455 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x401))),
            _0x2cc816 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x74d))),
            _0xd61c6f = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0x7eb))),
            _0x56268d = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x4b2))),
            _0x864b0e = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0xc3b))),
            _0x930d7a = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0x58a))),
            _0x5dcd8a = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x354))),
            _0x417924 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x635))),
            _0x2b92e8 = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0x78f))),
            _0x4faa8f = JSON[_0x3e00d3(0x685)](fs['readFileSync'](_0x3e00d3(0xc1f))),
            _0x39b559 = JSON[_0x3e00d3(0x685)](fs['readFileSync']('./database/Anime/shota.json')),
            _0x36d873 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0xb94))),
            _0x163281 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x500)));
        switch (_0x5a7691) {
            case _0x3e00d3(0x4ab):
            case _0x3e00d3(0x352): {
                const _0x1db0a1 = _0x153b74 || 'hello';
                try {
                    const _0xc50810 = await fetchJson(_0x3e00d3(0x9c9) + _0x1db0a1),
                        _0x15bd47 = _0xc50810[_0x3e00d3(0x9e1)];
                    _0x5ef4bf(_0x15bd47);
                } catch (_0x421c71) {
                    console[_0x3e00d3(0x788)](_0x3e00d3(0x856));
                }
            }
            break;
            case _0x3e00d3(0x98d): {
                var _0x1f48f1 = _0x3abb7b[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x3abb7b[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x884): {
                var _0x1f48f1 = _0x3003d9[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x3003d9[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x75d): {
                var _0x1f48f1 = _0x149a84[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x149a84[_0x3e00d3(0x794)])];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x3e8): {
                var _0x1f48f1 = _0x1f4bd4[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x1f4bd4[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'boruto': {
                var _0x1f48f1 = _0x296586[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x296586[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'elaina': {
                var _0x1f48f1 = _0x444565[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x444565[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x798): {
                var _0x1f48f1 = _0x327b7c[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x327b7c['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'erza': {
                var _0x1f48f1 = _0x4fb44c[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x4fb44c['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xa24): {
                var _0x1f48f1 = _0x3a9d0f[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x3a9d0f['length'])];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x8d6): {
                var _0x1f48f1 = _0x2ab0fc[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x2ab0fc[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x81b): {
                var _0x1f48f1 = _0x4698fd[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x4698fd['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x1ea): {
                var _0x1f48f1 = _0x45a43a[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x45a43a[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x462): {
                var _0x1f48f1 = _0x510400[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x510400['length'])];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xaaa): {
                var _0x1f48f1 = _0x102dda[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x102dda[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x6a9): {
                var _0x1f48f1 = _0x364455[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x364455[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x488): {
                var _0x1f48f1 = _0x2cc816[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x2cc816[_0x3e00d3(0x794)])];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x29a): {
                var _0x1f48f1 = _0xd61c6f[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0xd61c6f[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x4da): {
                var _0x1f48f1 = naturo[Math[_0x3e00d3(0xa8b)](Math['random']() * naturo[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'nezuko': {
                var _0x1f48f1 = _0x864b0e[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x864b0e[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'rize': {
                var _0x1f48f1 = _0x930d7a[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x930d7a[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'sakura': {
                var _0x1f48f1 = _0x5dcd8a[Math['floor'](Math['random']() * _0x5dcd8a[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'sasuke': {
                var _0x1f48f1 = _0x417924[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x417924[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x3a2): {
                var _0x1f48f1 = _0x2b92e8[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x2b92e8[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x4ef): {
                var _0x1f48f1 = _0x4faa8f[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x4faa8f['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xbf3): {
                var _0x1f48f1 = _0x39b559[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x39b559['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x7aa): {
                var _0x1f48f1 = _0x36d873[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x36d873[_0x3e00d3(0x794)])];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x3ff): {
                var _0x1f48f1 = _0x163281[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x163281[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f48f1
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xc1d):
            case _0x3e00d3(0x24d):
            case _0x3e00d3(0x915):
            case _0x3e00d3(0xa9d):
            case _0x3e00d3(0x3f9):
            case _0x3e00d3(0xae9):
            case _0x3e00d3(0xbe1):
            case _0x3e00d3(0x849):
            case _0x3e00d3(0xb81): {
                _0x5ef4bf(mess['wait']);
                let _0x10ebdf = await fetchJson('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/' + _0x5a7691 + _0x3e00d3(0x37b));
                result = _0x10ebdf[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x10ebdf[_0x3e00d3(0x794)])];
                let _0x47ce50 = [{
                        'buttonId': '' + _0x5a7691,
                        'buttonText': {
                            'displayText': _0x3e00d3(0xbc3)
                        },
                        'type': 0x1
                    }],
                    _0x42e3cf = {
                        'image': {
                            'url': result
                        },
                        'caption': _0x3e00d3(0xb4c) + _0x5a7691,
                        'footer': global[_0x3e00d3(0x673)],
                        'buttons': _0x47ce50,
                        'headerType': 0x4
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x42e3cf, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'cyberspace':
            case _0x3e00d3(0x5d6):
            case 'programming':
            case _0x3e00d3(0x206): {
                _0x5ef4bf(mess[_0x3e00d3(0x42d)] + '\x20\x0a\x20*Loading\x20' + _0x5a7691 + '\x20Wallpapers*');
                let _0xf369dd = await fetchJson('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/' + _0x5a7691 + _0x3e00d3(0x37b));
                result = _0xf369dd[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0xf369dd[_0x3e00d3(0x794)])];
                let _0x472ea8 = [{
                        'buttonId': '' + _0x5a7691,
                        'buttonText': {
                            'displayText': _0x3e00d3(0xbc3)
                        },
                        'type': 0x1
                    }],
                    _0x152e2e = {
                        'image': {
                            'url': result
                        },
                        'caption': _0x3e00d3(0x797) + _0x5a7691,
                        'footer': global[_0x3e00d3(0x673)],
                        'buttons': _0x472ea8,
                        'headerType': 0x4
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x152e2e, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x7f1): {
                global[_0x3e00d3(0xbdf)] = _0x153b74, _0x53c8bd(_0x3e00d3(0xa65));
            }
            break;
            case _0x3e00d3(0xb58): {
                const _0x34d5aa = await getBuffer(_0x3e00d3(0xc07)),
                    _0x1d1871 = {
                        'key': {
                            'fromMe': ![],
                            'participant': _0x3e00d3(0x61b),
                            'remoteJid': _0x3e00d3(0x61b)
                        },
                        'message': {
                            'groupInviteMessage': {
                                'groupJid': _0x3e00d3(0x7cc),
                                'inviteCode': '' + global[_0x3e00d3(0x951)],
                                'groupName': '' + global[_0x3e00d3(0x673)],
                                'caption': _0x3e00d3(0x799),
                                'jpegThumbnail': _0x34d5aa
                            }
                        }
                    },
                    _0x1230c8 = {
                        'key': {
                            'fromMe': ![],
                            'participant': _0x3e00d3(0x61b),
                            ..._0x3e5538 ? {
                                'remoteJid': _0x3e00d3(0x20f)
                            } : {}
                        },
                        'message': {
                            'productMessage': {
                                'product': {
                                    'productImage': {
                                        'mimetype': _0x3e00d3(0x66d),
                                        'jpegThumbnail': _0x34d5aa
                                    },
                                    'title': '' + global['ownernma'],
                                    'description': '' + global[_0x3e00d3(0x673)],
                                    'currencyCode': 'USD',
                                    'priceAmount1000': '2000',
                                    'retailerId': 'ᴍͥ\x20ʀ\x20​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\x20ɴ\x20ɪͣ\x20ᴍͫ\x20ᴀ\x20⁴⁹²',
                                    'productImageCount': 0x1
                                },
                                'businessOwnerJid': _0x3e00d3(0x61b)
                            }
                        }
                    },
                    _0x5e696c = {
                        'key': {
                            'participant': _0x3e00d3(0x61b)
                        },
                        'message': {
                            'locationMessage': {
                                'name': _0x3e00d3(0xb72),
                                'jpegThumbnail': _0x34d5aa
                            }
                        }
                    },
                    _0x21b302 = {
                        'key': {
                            'participant': _0x3e00d3(0x61b)
                        },
                        'message': {
                            'documentMessage': {
                                'title': '' + global['botnma'],
                                'jpegThumbnail': _0x34d5aa
                            }
                        }
                    },
                    _0x5cf704 = {
                        'key': {
                            'fromMe': ![],
                            'participant': '0@s.whatsapp.net',
                            ..._0x3e5538 ? {
                                'remoteJid': _0x3e00d3(0x861)
                            } : {}
                        },
                        'message': {
                            'videoMessage': {
                                'title': '' + global[_0x3e00d3(0x673)],
                                'h': '' + global[_0x3e00d3(0x951)],
                                'seconds': '30',
                                'caption': '' + global[_0x3e00d3(0x951)],
                                'jpegThumbnail': _0x34d5aa
                            }
                        }
                    };
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': 'hello'
                }, {
                    'quoted': _0x1230c8
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'text': _0x3e00d3(0x879)
                }, {
                    'quoted': _0x1d1871
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x3e00d3(0x879)
                }, {
                    'quoted': _0x5e696c
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'text': _0x3e00d3(0x879)
                }, {
                    'quoted': _0x21b302
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x3e00d3(0x879)
                }, {
                    'quoted': _0x5cf704
                }), isSudo && _0x53c8bd(_0x3e00d3(0x85c)), isBlock && _0x53c8bd('this\x20is\x20block\x20group');
            }
            break;
            case 'databasetest': {
                let _0x11584c = _0x3e00d3(0x21b);
                _0x11584c += _0x3e00d3(0x678) + getDarah(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a', _0x11584c += _0x3e00d3(0xc0b) + getBesi(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a', _0x11584c += '*🌟Your\x20Gold*\x20:\x20' + getEmas(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a', _0x11584c += '*💎Your\x20Emerald*\x20:\x20' + getEmerald(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a', _0x11584c += _0x3e00d3(0xae8) + getLimit(_0x3bbe8d['sender']) + _0x3e00d3(0x87e), _0x53c8bd(_0x11584c + _0x3e00d3(0x26e) + getHBesi(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a\x20\x20\x20\x20\x20tiger\x20\x20' + getHEmas(_0x3bbe8d[_0x3e00d3(0x448)]) + _0x3e00d3(0x492) + getHEmerald(_0x3bbe8d[_0x3e00d3(0x448)]) + _0x3e00d3(0x99e) + getDomba(_0x3bbe8d['sender']) + _0x3e00d3(0x3b1) + getHUmpan(_0x3bbe8d[_0x3e00d3(0x448)]) + _0x3e00d3(0x50c) + getHPotion(_0x3bbe8d[_0x3e00d3(0x448)]) + '\x0a\x20\x20' + getLimit(_0x3bbe8d[_0x3e00d3(0x448)]));
            }
            break;
            case _0x3e00d3(0x2c9): {
                const _0x2fabd2 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xbbd), _0x3bbe8d);
                await fetchJson('https://api.zekais.com/spotifydl?url=' + _0x153b74 + _0x3e00d3(0x4f0))[_0x3e00d3(0x6e3)](async _0x18793c => {
                    const _0x295096 = _0x3e00d3;
                    await _0x4b49f7[_0x295096(0x69f)](_0x3bbe8d[_0x295096(0x5f1)], {
                        'delete': _0x2fabd2[_0x295096(0x2da)]
                    });
                    const _0x18751f = await _0x4b49f7[_0x295096(0xa97)](_0x3bbe8d[_0x295096(0x5f1)], _0x295096(0xb0d), _0x3bbe8d);
                    await _0x4b49f7[_0x295096(0x69f)](_0x3bbe8d[_0x295096(0x5f1)], {
                        'document': {
                            'url': _0x18793c[_0x295096(0xb16)]
                        },
                        'mimetype': 'audio/mpeg',
                        'fileName': _0x18793c[_0x295096(0x50b)] + _0x295096(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x295096(0x69f)](_0x3bbe8d[_0x295096(0x5f1)], {
                        'delete': _0x18751f[_0x295096(0x2da)]
                    });
                });
            }
            break;
            case _0x3e00d3(0xb17): {
                if (!_0x153b74) return _0x53c8bd('*👸💬\x20Need\x20some\x20text*\x0a\x20_ex_\x20.fancy\x20Thivanka\x20Nirmal');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], mess['wait']);
                const _0x55bc5c = await fetchJson(_0x3e00d3(0x367) + _0x153b74),
                    _0x339c63 = _0x55bc5c[_0x3e00d3(0xb16)];
                let _0x4e7b36 = [];
                for (let _0x2efe0a of _0x339c63) {
                    const _0x58d595 = {
                        'title': _0x3e00d3(0xbe3),
                        'rows': [{
                            'title': '' + _0x2efe0a['result'],
                            'rowId': _0x3e00d3(0xa5c) + _0x2efe0a[_0x3e00d3(0xb16)] + '\x20'
                        }]
                    };
                    _0x4e7b36[_0x3e00d3(0x748)](_0x58d595);
                }
                const _0x4f6468 = _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x153b74 + '\x20*Here\x20is\x20the\x20list\x20of\x20Fancy\x20Texts,\x20click\x20the\x20button\x20below\x20to\x20choose*\x0a\x0a' + _0x3bbe8d[_0x3e00d3(0x7a2)],
                    'footer': '' + global[_0x3e00d3(0x673)],
                    'title': _0x3e00d3(0x426) + global[_0x3e00d3(0x673)] + _0x3e00d3(0x45d) + _0x153b74,
                    'buttonText': _0x3e00d3(0xc44),
                    'sections': _0x4e7b36
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'hi':
            case _0x3e00d3(0xad8):
            case _0x3e00d3(0x962): {
                global[_0x3e00d3(0x55e)] == _0x3e00d3(0x52c) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3e00d3(0xb96)
                    },
                    'mimetype': _0x3e00d3(0x585),
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x885): {
                _0x5ef4bf(_0x153b74);
            }
            break;
            case 'mk':
            case _0x3e00d3(0x538): {
                global[_0x3e00d3(0x55e)] == _0x3e00d3(0x52c) && await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/mk.mp3'
                    },
                    'mimetype': _0x3e00d3(0x585),
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'gn':
            case _0x3e00d3(0xa69): {
                global[_0x3e00d3(0x55e)] == 'true' && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3e00d3(0xc6e)
                    },
                    'mimetype': _0x3e00d3(0x585),
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'bs': {
                global[_0x3e00d3(0x55e)] == 'true' && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3e00d3(0xc6e)
                    },
                    'mimetype': _0x3e00d3(0x585),
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'gm':
            case _0x3e00d3(0xadf): {
                global['VOICE_REPLY'] == 'true' && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3e00d3(0x9f6)
                    },
                    'mimetype': 'audio/mp4',
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'bye':
            case 'බායි': {
                global['VOICE_REPLY'] == 'true' && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': 'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/bye.mp3'
                    },
                    'mimetype': 'audio/mp4',
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x9bb): {
                if (!_0x153b74) return _0x53c8bd('*👸💬\x20Please\x20give\x20plastore\x20app\x20name*');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], mess['wait']), await fetchJson(_0x3e00d3(0x690) + _0x153b74)[_0x3e00d3(0x6e3)](async _0x5a6db2 => {
                    const _0x44a1f3 = _0x3e00d3,
                        _0x5b0c73 = '\x20\x20\x20*👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙰𝙿𝙺\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20👸*\x0a\x0a\x20☛\x20𝚃𝙸𝚃𝙻𝙴\x20:\x20' + _0x5a6db2['hasil'][0x0][_0x44a1f3(0x50b)] + _0x44a1f3(0x844) + _0x5a6db2[_0x44a1f3(0x53a)][0x0][_0x44a1f3(0x85d)] + _0x44a1f3(0x2fb) + _0x5a6db2['hasil'][0x0][_0x44a1f3(0x7c0)] + _0x44a1f3(0x46e) + _0x5a6db2['hasil'][0x0][_0x44a1f3(0x21a)] + '\x0a\x20☛\x20𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽\x20:\x20' + _0x5a6db2[_0x44a1f3(0x53a)][0x0][_0x44a1f3(0x6ec)] + _0x44a1f3(0x9ef) + _0x5a6db2[_0x44a1f3(0x53a)][0x0][_0x44a1f3(0x47e)] + '\x20\x0a',
                        _0x124ae3 = [{
                            'buttonId': _0x44a1f3(0xb46) + _0x5a6db2['hasil'][0x0][_0x44a1f3(0x47e)],
                            'buttonText': {
                                'displayText': _0x44a1f3(0x77c)
                            },
                            'type': 0x1
                        }],
                        _0x28c0d5 = {
                            'image': {
                                'url': _0x5a6db2[_0x44a1f3(0x53a)][0x0][_0x44a1f3(0x375)]
                            },
                            'caption': _0x5b0c73,
                            'footer': global[_0x44a1f3(0x673)],
                            'buttons': _0x124ae3,
                            'headerType': 0x4
                        };
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x44a1f3(0x5f1)], _0x28c0d5, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x4ada24 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xb8f): {
                if (!_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0x55b))) return _0x53c8bd(_0x3e00d3(0x9f1));
                const _0x213a94 = _0x153b74[_0x3e00d3(0x341)](_0x3e00d3(0x9d4))[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⬇️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await fetchJson(_0x3e00d3(0x73d) + _0x213a94)[_0x3e00d3(0x6e3)](async _0x12fc4b => {
                    const _0x458c0f = _0x3e00d3,
                        _0x29a97d = _0x12fc4b[_0x458c0f(0xb16)]['apk_link'],
                        _0xebee0c = _0x12fc4b[_0x458c0f(0xb16)][_0x458c0f(0x32c)];
                    await _0x4b49f7[_0x458c0f(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x458c0f(0x2da)]
                        }
                    });
                    var _0x3dc91d = await _0x4b49f7[_0x458c0f(0x69f)](_0x3bbe8d[_0x458c0f(0x5f1)], {
                        'document': {
                            'url': _0x29a97d
                        },
                        'mimetype': _0x458c0f(0x230),
                        'fileName': _0xebee0c + _0x458c0f(0xb47)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x458c0f(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x458c0f(0x2da)]
                        }
                    }), await _0x4b49f7[_0x458c0f(0x69f)](_0x3e5538, {
                        'react': {
                            'text': _0x458c0f(0xa91),
                            'key': _0x3dc91d[_0x458c0f(0x2da)]
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x349b74 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case 'modapk': {
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]), await fetchJson(_0x3e00d3(0x22c) + _0x153b74)[_0x3e00d3(0x6e3)](async _0x38b60c => {
                    const _0x450c9f = _0x3e00d3,
                        _0x545ea6 = _0x38b60c[_0x450c9f(0xb65)];
                    let _0x297c61 = [];
                    for (let _0x4962b1 of _0x545ea6) {
                        const _0x17eada = {
                            'title': _0x450c9f(0x29c),
                            'rows': [{
                                'title': '' + _0x4962b1[_0x450c9f(0x50b)],
                                'rowId': 'modapkdl\x20' + _0x4962b1['link'] + '\x20' + _0x4962b1['title'],
                                'description': _0x450c9f(0xaca) + _0x4962b1[_0x450c9f(0x7de)]
                            }]
                        };
                        _0x297c61[_0x450c9f(0x748)](_0x17eada);
                    }
                    const _0x32cbda = _0x4b49f7[_0x450c9f(0x69f)](_0x3bbe8d[_0x450c9f(0x5f1)], {
                        'text': _0x3bbe8d[_0x450c9f(0x7a2)] + '\x20This\x20is\x20matching\x20apk\x0a\x0a➮\x20ʀᴇǫᴜᴇsᴛ\x20' + _0x153b74,
                        'footer': '' + global[_0x450c9f(0x673)],
                        'title': '*👸\x20𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙼𝙾𝙳\x20𝙰𝙿𝙺\x20👸*',
                        'buttonText': _0x450c9f(0x793),
                        'sections': _0x297c61
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x39f18c => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x9e7): {
                const _0x5df382 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'text': _0x3e00d3(0x4d3)
                    }, {
                        'quoted': _0x3bbe8d
                    }),
                    _0x47c002 = await fetchJson(_0x3e00d3(0x830) + _0x9b834d[0x0]),
                    _0x203e8c = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'text': _0x3e00d3(0x6e2)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x5df382['key']
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'document': {
                        'url': _0x47c002[_0x3e00d3(0xb65)][_0x3e00d3(0x724)]
                    },
                    'mimetype': _0x3e00d3(0x230),
                    'fileName': _0x9b834d[0x1] + _0x3e00d3(0xb47)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'delete': _0x203e8c[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'fb3': {
                buttons = [{
                    'buttonId': _0x3e00d3(0xb4e) + _0x153b74,
                    'buttonText': {
                        'displayText': _0x3e00d3(0x8b9)
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'sdfbvid\x20' + _0x153b74,
                    'buttonText': {
                        'displayText': 'SD\x20VIDEO'
                    },
                    'type': 0x1
                }];
                let _0x291e6f = {
                    'image': {
                        'url': _0x3e00d3(0x6ea)
                    },
                    'caption': _0x3e00d3(0xbcc) + _0x153b74 + _0x3e00d3(0x342) + _0x3bbe8d['pushName'] + _0x3e00d3(0x878),
                    'footer': global[_0x3e00d3(0x673)],
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x291e6f, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x316): {
                const _0xd9a549 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xafb), _0x3bbe8d);
                await fetchJson(_0x3e00d3(0x349) + _0x153b74)['then'](async _0x3546bc => {
                    const _0x5e4eca = _0x3e00d3,
                        _0xf79769 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x5e4eca(0x5f1)], _0x5e4eca(0xafb), _0x3bbe8d),
                        _0x19b8dc = await _0x4b49f7[_0x5e4eca(0xa97)](_0x3bbe8d['chat'], _0x5e4eca(0xacb), _0x3bbe8d);
                    await _0x4b49f7[_0x5e4eca(0x69f)](_0x3bbe8d['chat'], {
                        'video': {
                            'url': _0x3546bc[_0x5e4eca(0x53a)]['hd']
                        },
                        'caption': global[_0x5e4eca(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x2a093b => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case 'sdfbvid': {
                await fetchJson(_0x3e00d3(0x349) + _0x153b74)[_0x3e00d3(0x6e3)](async _0xe895d8 => {
                    const _0x199dfe = _0x3e00d3,
                        _0x19e518 = await _0x4b49f7[_0x199dfe(0xa97)](_0x3bbe8d[_0x199dfe(0x5f1)], '*📥\x20DOWNLOADING\x20FB\x20VIDEO...*', _0x3bbe8d),
                        _0x4741fb = await _0x4b49f7[_0x199dfe(0xa97)](_0x3bbe8d[_0x199dfe(0x5f1)], '*📤\x20UPLOADING\x20FB\x20VIDEO...*', _0x3bbe8d);
                    await _0x4b49f7[_0x199dfe(0x69f)](_0x3bbe8d[_0x199dfe(0x5f1)], {
                        'video': {
                            'url': _0xe895d8['hasil']['sd']
                        },
                        'caption': global[_0x199dfe(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0xdf67b1 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x7fa): {
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xae0)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x3e00d3(0x7ec) + _0x153b74
                    },
                    'caption': '' + global['cap']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x3e00d3(0x7ec) + _0x153b74
                    },
                    'caption': '' + global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                } [_0x3e00d3(0x97d)](0x5));
            }
            break;
            case 'news': {
                const _0x143ffb = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d),
                    _0x103f5f = await fetchJson(_0x3e00d3(0x6d5)),
                    _0x1c7080 = _0x3e00d3(0x335) + _0x103f5f['title'] + _0x3e00d3(0x368) + _0x103f5f[_0x3e00d3(0x545)] + _0x3e00d3(0x508) + _0x103f5f[_0x3e00d3(0x485)] + '\x0a\x0a',
                    _0x5bc48c = [{
                        'index': 0x1,
                        'urlButton': {
                            'displayText': _0x3e00d3(0x51a),
                            'url': _0x103f5f['link']
                        }
                    }],
                    _0x2e0f1f = {
                        'image': {
                            'url': _0x103f5f[_0x3e00d3(0xaed)]
                        },
                        'caption': _0x3e00d3(0x33b) + _0x1c7080,
                        'footer': global[_0x3e00d3(0x673)],
                        'templateButtons': _0x5bc48c,
                        'headerType': 0x4
                    };
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x2e0f1f, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x143ffb[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x41c): {
                const _0x56b5b6 = await fetchJson('https://api.sdbots.tk//lyrics?song=' + _0x153b74),
                    _0x4ae7a7 = _0x3e00d3(0x4c6) + _0x56b5b6['artist'] + _0x3e00d3(0x3f1) + _0x56b5b6[_0x3e00d3(0x50b)] + _0x3e00d3(0x62d) + _0x56b5b6['lyrics'] + '\x0a';
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x4ae7a7);
            }
            break;
            case 'news2': {
                const _0xa24a50 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d),
                    {
                        esana_scrape: _0x3a8dab,
                        esana_latest_news_id: _0x5ae00e,
                        esana_scrape_from_id: _0x4a7121
                    } = require(_0x3e00d3(0x52a))[_0x3e00d3(0x9c7)],
                    _0x545082 = await _0x3a8dab({
                        'fetch': _0x3e00d3(0xc33),
                        'passcode': _0x3e00d3(0x487)
                    }),
                    _0x1100af = _0x545082[_0x3e00d3(0xa1a)][_0x3e00d3(0x390)][_0x3e00d3(0x50b)],
                    _0x2c1ea5 = _0x545082[_0x3e00d3(0xa1a)][_0x3e00d3(0x390)][_0x3e00d3(0x485)],
                    _0x15433a = _0x545082[_0x3e00d3(0xa1a)][_0x3e00d3(0x390)][_0x3e00d3(0x3fc)],
                    _0x3ae3ee = _0x545082[_0x3e00d3(0xa1a)][_0x3e00d3(0x390)][_0x3e00d3(0x47e)],
                    _0x5dbb82 = _0x545082[_0x3e00d3(0xa1a)][_0x3e00d3(0x390)][_0x3e00d3(0x646)],
                    _0x1fc0e0 = _0x3e00d3(0x932) + _0x1100af + _0x3e00d3(0xa43) + _0x2c1ea5 + '\x0a',
                    _0x16880f = [{
                        'index': 0x1,
                        'urlButton': {
                            'displayText': _0x3e00d3(0x2b5),
                            'url': _0x3ae3ee
                        }
                    }],
                    _0x103e4c = {
                        'image': {
                            'url': _0x15433a
                        },
                        'caption': '\x20\x20\x20\x20\x20⫷\x20👸\x20*𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙽𝙴𝚆𝚂*\x20👸\x20⫸\x0a\x0a' + _0x1fc0e0,
                        'footer': global[_0x3e00d3(0x673)] + _0x3e00d3(0x9da),
                        'templateButtons': _0x16880f,
                        'headerType': 0x4
                    };
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x103e4c, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0xa24a50[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x7e2): {
                const {
                    esana_scrape: _0x244905,
                    esana_latest_news_id: _0x3caf26,
                    esana_scrape_from_id: _0x1a9d83
                } = require(_0x3e00d3(0x52a))[_0x3e00d3(0x9c7)], _0x1d5da9 = await _0x244905({
                    'fetch': 'all',
                    'passcode': _0x3e00d3(0x487)
                }), _0x997b0 = '\x0a\x20\x20' + jsonformat(_0x1d5da9) + _0x3e00d3(0x211);
                _0x53c8bd(_0x997b0);
            }
            break;
            case _0x3e00d3(0x507): {
                const {
                    esana_scrape: _0x22680e,
                    esana_latest_news_id: _0x300e06,
                    esana_scrape_from_id: _0x1248ef
                } = require('esana-node-api')[_0x3e00d3(0x9c7)], _0xba00c9 = await _0x1248ef({
                    'id': _0x153b74,
                    'passcode': _0x3e00d3(0x487)
                }), _0x1aa93e = _0x3e00d3(0x211) + jsonformat(_0xba00c9) + _0x3e00d3(0x211);
                _0x53c8bd(_0x1aa93e);
            }
            break;
            case _0x3e00d3(0x73b):
            case 'findnews': {
                const _0x336379 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d);
                var _0x4931e7 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4931e7 = _0x3e00d3(0x663);
                if (global['LANG'] == 'SI') _0x4931e7 = _0x3e00d3(0x739);
                const {
                    esana_scrape: _0x355960,
                    esana_latest_news_id: _0x272e35,
                    esana_scrape_from_id: _0x2e69da
                } = require(_0x3e00d3(0x52a))[_0x3e00d3(0x9c7)], _0x4fdc86 = await _0x355960({
                    'fetch': _0x3e00d3(0x69e),
                    'passcode': _0x3e00d3(0x487)
                });
                let _0x2604f5 = [];
                for (let _0xa401e6 of _0x4fdc86) {
                    const _0x17c3b4 = {
                        'title': 'ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ɴᴇᴡs\x20',
                        'rows': [{
                            'title': '' + _0xa401e6['title'],
                            'rowId': _0x3e00d3(0xa76) + _0xa401e6['id']
                        }]
                    };
                    _0x2604f5[_0x3e00d3(0x748)](_0x17c3b4);
                }
                const _0x1f7dd7 = _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x4931e7,
                    'footer': global['botnma'] + _0x3e00d3(0x3de),
                    'title': _0x3e00d3(0xb0a),
                    'buttonText': _0x3e00d3(0x7bf),
                    'sections': _0x2604f5
                }, {
                    'quoted': _0x3bbe8d
                });
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x336379[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xbf9): {
                const _0x1ffb7f = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d),
                    {
                        esana_scrape: _0x46b525,
                        esana_latest_news_id: _0x5a5031,
                        esana_scrape_from_id: _0x59ab1a
                    } = require(_0x3e00d3(0x52a))[_0x3e00d3(0x9c7)],
                    _0x389dd9 = await _0x59ab1a({
                        'id': _0x153b74,
                        'passcode': _0x3e00d3(0x487)
                    }),
                    _0x39b193 = _0x389dd9[_0x3e00d3(0x7d8)][_0x3e00d3(0x390)]['title'],
                    _0x47ecfe = _0x389dd9[_0x3e00d3(0x7d8)][_0x3e00d3(0x390)]['description'],
                    _0x39577b = _0x389dd9['news_from_id'][_0x3e00d3(0x390)]['thumb'],
                    _0xc7a2a = _0x389dd9['news_from_id']['helakuru'][_0x3e00d3(0x47e)],
                    _0x55c289 = _0x389dd9[_0x3e00d3(0x7d8)][_0x3e00d3(0x390)][_0x3e00d3(0x646)],
                    _0x21c9e9 = _0x3e00d3(0x932) + _0x39b193 + '*\x0a\x0a*_📄\x20News_*\x20' + _0x47ecfe + '\x0a',
                    _0x20a4ab = [{
                        'index': 0x1,
                        'urlButton': {
                            'displayText': _0x3e00d3(0x891),
                            'url': _0xc7a2a
                        }
                    }],
                    _0x2ddf7a = {
                        'image': {
                            'url': _0x39577b
                        },
                        'caption': '\x20\x20\x20\x20\x20⫷\x20👸\x20*𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙽𝙴𝚆𝚂*\x20👸\x20⫸\x0a\x0a' + _0x21c9e9,
                        'footer': '' + global[_0x3e00d3(0x673)],
                        'templateButtons': _0x20a4ab,
                        'headerType': 0x4
                    };
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2ddf7a, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1ffb7f[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xac6): {
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0xab5))) return _0x53c8bd('*The\x20link\x20you\x20provided\x20is\x20not\x20valid*');
                const _0x222aa4 = await fetchJson(_0x3e00d3(0x869));
                _0x300b79 = await getBuffer(_0x222aa4['TIKTOK_THUB']);
                const _0x2a6ebe = await fetchJson(_0x3e00d3(0x61f) + _0x153b74),
                    _0x19457b = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '*📥\x20DOWNLOADING\x20YOUR\x20TIKTOK\x20VIDEO\x20...*');
                VID = _0x2a6ebe['result']['withoutWaterMarkVideo'], CAP = '🕵️‍♂️\x20' + _0x2a6ebe['author'] + _0x3e00d3(0x64b) + _0x2a6ebe[_0x3e00d3(0x234)];
                const _0xa746f = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x217));
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x19457b[_0x3e00d3(0x2da)]
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': VID
                    },
                    'jpegThumbnail': _0x300b79,
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0xa746f[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x74b): {
                const _0x471000 = {
                    'weekday': _0x3e00d3(0x27a),
                    'year': 'numeric',
                    'month': _0x3e00d3(0x27a),
                    'day': _0x3e00d3(0xaa4)
                };
                var _0x5c81d3 = new Date()[_0x3e00d3(0x32b)](_0x471000),
                    _0x84bc11 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                const _0x17bdb3 = '📅\x20' + _0x5c81d3 + _0x3e00d3(0x980) + _0x84bc11 + '\x0a\x0a' + _0x3e00d3(0xb97);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x17bdb3);
                if (_0x84bc11 == _0x3e00d3(0xbae)) return await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x17bdb3);
                if (_0x84bc11 == _0x3e00d3(0x6d1)) return await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x17bdb3);
                if (_0x84bc11 == _0x3e00d3(0xc3a)) return await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x17bdb3);
            }
            break;
            case 'hunting': {
                !isHunt && addHhunting(_0x3bbe8d[_0x3e00d3(0x448)]);
                const _0xae44a0 = await getBuffer(_0x3e00d3(0xbd9));
                !isInventoriBuruan && addInventoriBuruan(_0x3bbe8d[_0x3e00d3(0x448)]);
                let _0x209cc2 = [0x1, 0x0, 0x2, 0x3, 0x1, 0x0, 0x2, 0x1, 0x0, 0x1, 0x2, 0x0, 0x1],
                    _0x3c2193 = [0x1, 0x0, 0x2, 0x0, 0x1, 0x0, 0x2, 0x1, 0x0, 0x1, 0x0, 0x0, 0x1],
                    _0x270e2b = [0x1, 0x0, 0x2, 0x6, 0x1, 0x0, 0x2, 0x1, 0x2, 0x1, 0x2, 0x0, 0x1],
                    _0x1c54a5 = [0x1, 0x6, 0x2, 0x3, 0x1, 0x0, 0x2, 0x4, 0x0, 0x1, 0x2, 0x9, 0x1],
                    _0x5931b4 = [0x1, 0x0, 0x2, 0x6, 0x1, 0x0, 0x2, 0x1, 0x2, 0x1, 0x2, 0x0, 0x1],
                    _0x547e4e = [0x1, 0x6, 0x2, 0x3, 0x1, 0x0, 0x2, 0x4, 0x0, 0x1, 0x2, 0x9, 0x1];
                var _0x4935bf = _0x209cc2[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x209cc2[_0x3e00d3(0x794)])],
                    _0x1f5d1b = _0x3c2193[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x3c2193[_0x3e00d3(0x794)])],
                    _0x17885a = _0x270e2b[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x270e2b[_0x3e00d3(0x794)])],
                    _0x262697 = _0x1c54a5[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x1c54a5[_0x3e00d3(0x794)])],
                    _0x501afa = _0x270e2b[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x5931b4[_0x3e00d3(0x794)])],
                    _0x5570c9 = _0x1c54a5[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x547e4e['length'])];
                setTimeout(() => {
                    const _0x5d44b5 = _0x3e00d3;
                    let _0x35221a = _0x5d44b5(0xa32) + _0x4935bf + _0x5d44b5(0x4c3) + _0x1f5d1b + _0x5d44b5(0x84d) + _0x17885a + _0x5d44b5(0xbb2) + _0x262697 + _0x5d44b5(0x7f3) + _0x501afa + _0x5d44b5(0x662) + _0x5570c9;
                    var _0x1e2b1a = [{
                        'quickReplyButton': {
                            'displayText': _0x5d44b5(0x974),
                            'id': _0x440929 + _0x5d44b5(0x6fb)
                        }
                    }];
                    _0x4b49f7[_0x5d44b5(0x69f)](_0x3e5538, {
                        'caption': _0x35221a,
                        'location': {
                            'jpegThumbnail': _0xae44a0
                        },
                        'templateButtons': _0x1e2b1a,
                        'footer': '' + botnma,
                        'mentions': [_0x3bbe8d[_0x5d44b5(0x448)]]
                    });
                }, 0x1b58), setTimeout(() => {
                    const _0x3a6d19 = _0x3e00d3;
                    _0x53c8bd('*@' + _0x3bbe8d[_0x3a6d19(0x448)][_0x3a6d19(0x341)]('@')[0x0] + _0x3a6d19(0x6b1));
                }, 0x5dc), addHBesi(_0x3bbe8d['sender'], _0x4935bf), addHEmas(_0x3bbe8d[_0x3e00d3(0x448)], _0x1f5d1b), addHEmerald(_0x3bbe8d[_0x3e00d3(0x448)], _0x17885a), addHUmpan(_0x3bbe8d[_0x3e00d3(0x448)], _0x501afa), addHPotion(_0x3bbe8d[_0x3e00d3(0x448)], _0x5570c9);
            }
            break;
            case _0x3e00d3(0x7df):
            case 'mine': {
                !isInventory && addInventori(_0x3bbe8d[_0x3e00d3(0x448)]);
                if (isCekDarah < 0x1) return _0x53c8bd(_0x3e00d3(0x752));
                let _0x49f2e8 = [0x1, 0x2, 0x5, 0x0, 0x3, 0x0, 0x1, 0x1, 0x4, 0x1, 0x5, 0x0, 0x0],
                    _0xe9529 = [0x0, 0x1, 0x2, 0x3, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x2],
                    _0x34b787 = [0x0, 0x0, 0x1, 0x0, 0x0, 0x1, 0x0, 0x2, 0x1, 0x0, 0x0, 0x1],
                    _0x96ba98 = [0x5, 0x0, 0x1, 0x2, 0x0, 0x1, 0x0, 0x2, 0x1, 0x3, 0x0, 0x1];
                var _0x5d7093 = _0x49f2e8[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x49f2e8['length'])],
                    _0x4757d8 = _0xe9529[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0xe9529[_0x3e00d3(0x794)])],
                    _0x56efa3 = _0x34b787[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x34b787[_0x3e00d3(0x794)])],
                    _0x40bf8d = _0x96ba98[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x96ba98[_0x3e00d3(0x794)])];
                setTimeout(() => {
                    const _0x167f4b = _0x3e00d3;
                    let _0x3c6074 = _0x167f4b(0xb3e) + _0x5d7093 + _0x167f4b(0x1fe) + _0x4757d8 + '\x0a*Emerald*\x20:\x20' + _0x56efa3 + '\x0a*Jem*\x20:\x20' + _0x40bf8d,
                        _0x34b953 = [{
                            'buttonId': '' + (_0x440929 + _0x5a7691),
                            'buttonText': {
                                'displayText': 'Mine\x20Again⛏️'
                            },
                            'type': 0x1
                        }],
                        _0x37fa9a = {
                            'image': {
                                'url': _0x167f4b(0x599)
                            },
                            'caption': _0x3c6074,
                            'footer': _0x545402,
                            'buttons': _0x34b953,
                            'headerType': 0x4
                        };
                    _0x4b49f7[_0x167f4b(0x69f)](_0x3e5538, _0x37fa9a, {
                        'quoted': _0x3bbe8d
                    });
                }, 0x1b58), setTimeout(() => {
                    const _0x4aeaa3 = _0x3e00d3;
                    _0x53c8bd('@' + _0x3bbe8d[_0x4aeaa3(0x448)][_0x4aeaa3(0x341)]('@')[0x0] + _0x4aeaa3(0xa3d));
                }, 0x5dc), kurangDarah(_0x3bbe8d[_0x3e00d3(0x448)], 0xa), addBesi(_0x3bbe8d['sender'], _0x5d7093), addEmas(_0x3bbe8d[_0x3e00d3(0x97e)], _0x4757d8), addEmerald(_0x3bbe8d[_0x3e00d3(0x448)], _0x56efa3);
            }
            break;
            case _0x3e00d3(0x25c): {
                const _0x2eb4a9 = await getBuffer(_0x3e00d3(0x819)),
                    _0x33620d = 'http://youtube.com/c/MRNIMAOFC';
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💉',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), AGAINTRY = _0x3e00d3(0x8cc);
                let _0x209529 = [{
                        'buttonId': _0x3e00d3(0xa21),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x9ce)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0x821),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x472)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0xa8f),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x300)
                        },
                        'type': 0x1
                    }],
                    _0x29c227 = {
                        'document': fs[_0x3e00d3(0xab9)](_0x3e00d3(0x4ca)),
                        'mimetype': _0x3e00d3(0x658),
                        'jpegThumbnail': _0x2eb4a9,
                        'mentions': [_0x3bbe8d[_0x3e00d3(0x448)]],
                        'fileName': '' + global[_0x3e00d3(0x951)],
                        'fileLength': 0x5af3107a3fff,
                        'caption': AGAINTRY,
                        'footer': _0x3e00d3(0x23a),
                        'buttons': _0x209529,
                        'headerType': 0x4,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + global[_0x3e00d3(0x673)],
                                'body': _0x3e00d3(0x295),
                                'mediaType': 0x2,
                                'thumbnail': _0x2eb4a9,
                                'sourceUrl': _0x33620d,
                                'mediaUrl': _0x33620d
                            }
                        }
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x29c227, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xa8f): {
                var _0x157af5 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x157af5 = _0x3e00d3(0x9a1);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x157af5 = _0x3e00d3(0x52e);
                _0x53c8bd(_0x157af5);
            }
            break;
            case _0x3e00d3(0xa21): {
                const _0x2f38f5 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x42b));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': _0x3e00d3(0x33c)
                    },
                    'mimetype': _0x3e00d3(0x230),
                    'fileName': _0x3e00d3(0x29b)
                }, {
                    'quoted': _0x3bbe8d
                });
                const _0x11a5fc = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x2f38f5[_0x3e00d3(0x2da)]
                });
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🚀',
                        'key': _0x11a5fc[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0xb13): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x713) + _0x3e00d3(0x70c));
                _0x53c8bd(_0x3e00d3(0x593) + _0x153b74);
            }
            break;
            case _0x3e00d3(0x774): {
                if (!_0x153b74) return _0x5ef4bf('*👸💬\x20Please\x20Give\x20Some\x20Text*\x0a' + _0x3e00d3(0xa27));
                _0x53c8bd(_0x153b74 + _0x3e00d3(0x5ae));
            }
            break;
            case _0x3e00d3(0x996):
            case _0x3e00d3(0x218): {
                if (_0x153b74 === _0x3e00d3(0x597)) throw _0x3e00d3(0x731);
                else {
                    if (_0x153b74 === _0x3e00d3(0xa63)) throw _0x3e00d3(0x731);
                    else {
                        if (_0x153b74 === _0x3e00d3(0x40d)) throw _0x3e00d3(0x731);
                    }
                }
                antispmmsg = 'ǫᴜ\x0a\x0aᴇ\x0aᴇ\x0aɴ\x0a\x0a\x0aᴇ\x0aʟ\x0as\x0aᴀ\x0a💃💞\x0a\x20TEST\x201K\x20BNG\x20*ＤＯＮＴ\x20ＧＯ\x20ＵＰ\x20!!!*', await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7['sendText'](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + '@s.whatsapp.net', antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7['sendText'](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + '@s.whatsapp.net', antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + '@s.whatsapp.net', antispmmsg), await _0x4b49f7['sendText'](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7[_0x3e00d3(0xa97)](_0x153b74 + _0x3e00d3(0x5c5), antispmmsg), await _0x4b49f7['sendText'](_0x153b74 + _0x3e00d3(0x5c5), _0x3e00d3(0x96c)), _0x53c8bd(_0x3e00d3(0x810));
            }
            break;
            case _0x3e00d3(0x7d7):
            case _0x3e00d3(0x292):
            case _0x3e00d3(0x3dc):
            case 'activate': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(_0x3e00d3(0x77f));
                var _0x157530 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x157530 = '*👸💬\x20සමූහයේ\x20පරිපාලකයින්ට\x20පමණක්\x20බාවිතාකර\x20හැක\x20!*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x157530 = _0x3e00d3(0xaab);
                var _0x2c678c = '';
                if (global['LANG'] == 'SI') _0x2c678c = '*ඉහලට\x20යාමෙන්\x20වළකින්න\x20!!!*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x2c678c = _0x3e00d3(0x70a);
                var _0x2fe2d2 = '';
                if (global['LANG'] == 'SI') _0x2fe2d2 = '```⚠️\x20මෙය\x20විකෘති\x20පනිවිඩ\x20වලින්\x20ඔබේ\x20දුරකතනය\x20සිරවීම\x20වළකාලයි\x20!!!```\x0a\x0a';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x2fe2d2 = _0x3e00d3(0xb9e);
                if (!_0x5f3ab5) return _0x53c8bd(_0x157530);
                const _0x12e12e = _0x3e00d3(0x5ee) + _0x2c678c + _0x3e00d3(0x5a6) + _0x2c678c + '\x0a';
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7['sendText'](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x12e12e), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x12e12e), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2fe2d2 + global['botnma']);
            }
            break;
            case _0x3e00d3(0x821): {
                const _0x5af05c = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/EHIJSON.json');
                ehi = _0x5af05c[_0x3e00d3(0x9b6)][0x0][_0x3e00d3(0x606)], ehi2 = _0x5af05c[_0x3e00d3(0x9b6)][0x0][_0x3e00d3(0x92b)], ehi3 = _0x5af05c[_0x3e00d3(0x9b6)][0x0][_0x3e00d3(0x4a8)], ehi4 = _0x5af05c[_0x3e00d3(0x9b6)][0x0]['SG_FILE4'], ehi5 = _0x5af05c[_0x3e00d3(0x9b6)][0x1]['US_FILE1'], ehi6 = _0x5af05c[_0x3e00d3(0x9b6)][0x1][_0x3e00d3(0x9f7)], ehi7 = _0x5af05c['EHI_FILES'][0x1][_0x3e00d3(0x75a)], ehi8 = _0x5af05c[_0x3e00d3(0x9b6)][0x1][_0x3e00d3(0x892)], await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': '\x0a' + _0x5af05c['EHI'] + '\x0a' + _0x5af05c[_0x3e00d3(0x765)] + '\x0a' + _0x5af05c[_0x3e00d3(0x22d)] + '\x0a'
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'document': {
                        'url': ehi
                    },
                    'mimetype': 'application/octet-stream',
                    'fileName': _0x5af05c[_0x3e00d3(0x7a1)] + '\x20FaceBook\x20' + _0x5af05c['EHI_IMOJI'] + _0x3e00d3(0x73e)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': ehi2
                    },
                    'mimetype': _0x3e00d3(0x497),
                    'fileName': _0x5af05c[_0x3e00d3(0x7a1)] + '\x20Whatsapp\x20' + _0x5af05c[_0x3e00d3(0x7a1)] + _0x3e00d3(0x875)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': ehi3
                    },
                    'mimetype': 'application/octet-stream',
                    'fileName': _0x5af05c[_0x3e00d3(0x7a1)] + _0x3e00d3(0x3a0) + _0x5af05c[_0x3e00d3(0x7a1)] + _0x3e00d3(0x73e)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'document': {
                        'url': ehi4
                    },
                    'mimetype': _0x3e00d3(0x497),
                    'fileName': _0x5af05c[_0x3e00d3(0x7a1)] + '\x20Zoom\x20' + _0x5af05c[_0x3e00d3(0x7a1)] + '.ehi'
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'document': {
                        'url': ehi5
                    },
                    'mimetype': _0x3e00d3(0x497),
                    'fileName': _0x5af05c[_0x3e00d3(0x2d1)] + '\x20FaceBook\x20' + _0x5af05c[_0x3e00d3(0x2d1)] + _0x3e00d3(0x73e)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': ehi6
                    },
                    'mimetype': _0x3e00d3(0x497),
                    'fileName': _0x5af05c[_0x3e00d3(0x2d1)] + _0x3e00d3(0x39c) + _0x5af05c[_0x3e00d3(0x2d1)] + _0x3e00d3(0x875)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': ehi7
                    },
                    'mimetype': _0x3e00d3(0x497),
                    'fileName': _0x5af05c[_0x3e00d3(0x2d1)] + _0x3e00d3(0x3a0) + _0x5af05c[_0x3e00d3(0x2d1)] + '.ehi'
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': ehi8
                    },
                    'mimetype': 'application/octet-stream',
                    'fileName': _0x5af05c['EHI_IMOJI2'] + '\x20Zoom\x20' + _0x5af05c[_0x3e00d3(0x2d1)] + _0x3e00d3(0x73e)
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x9af) + _0x3bbe8d['pushName'] + _0x3e00d3(0x772), _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x2d2):
            case _0x3e00d3(0x657): {
                var _0x19d5fc;
                if (global['LANG'] == 'EN') _0x19d5fc = _0x3e00d3(0x75e) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20Short\x20Video\x20...\x20🔄*';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x19d5fc = '\x20*' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x617);
                var _0x1db473;
                if (global['LANG'] == 'EN') _0x1db473 = '\x20*Uploading\x20Your\x20\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x640);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x1db473 = '*' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0xbb4);
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x9be));
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0x4f3))) return _0x53c8bd(_0x3e00d3(0x696));
                const _0x1a1091 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x19d5fc);
                anu = await fetchJson(_0x3e00d3(0x72f) + global['fbapi'] + _0x3e00d3(0x680) + _0x153b74), tummb = await getBuffer(_0x3e00d3(0x6bf)), FBCAP = _0x3e00d3(0xb9c) + anu[_0x3e00d3(0xb16)][_0x3e00d3(0x573)]['title'] + _0x3e00d3(0x729) + anu[_0x3e00d3(0xb16)]['url'][0x0][_0x3e00d3(0x8e3)] + _0x3e00d3(0x65f) + anu['result'][_0x3e00d3(0x573)][_0x3e00d3(0x622)] + _0x3e00d3(0x358), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1a1091[_0x3e00d3(0x2da)]
                });
                var _0x1146c4 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x1db473);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': anu['result'][_0x3e00d3(0x47e)][0x0]['url']
                    },
                    'jpegThumbnail': tummb,
                    'caption': FBCAP
                }, {
                    'quoted': _0x3bbe8d
                })['catch'](_0x25c6b4 => _0x5ef4bf(_0x3e00d3(0xc61))), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1146c4[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x966):
            case _0x3e00d3(0x7b5):
            case _0x3e00d3(0x93f): {
                if (!_0x153b74) return _0x53c8bd(Lang[_0x3e00d3(0x582)] + '\x0a\x20' + (_0x440929 + _0x5a7691) + '\x20bts\x20boy\x20with\x20luv');
                let _0x391e51 = require('yt-search'),
                    _0x53c092 = await _0x391e51(_0x153b74);
                for (let _0x265875 of _0x53c092[_0x3e00d3(0x69e)])
                    if (_0x53c092[_0x3e00d3(0x794)] < 0x1) return _0x53c8bd('\x20NOT\x20FOUND\x20!!!\x20');
                const _0x4fb46b = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a╔═════════════════════◉\x0a║\x20\x20\x20\x20𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝚈𝚝\x20𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍\x20\x20\x20║\x0a\x20◉═════════════════════╝\x0a\x20\x0a🐣\x20ᴛɪᴛʟᴇ\x20:\x20' + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)] + '\x0a\x0a🔍\x20ɢᴇᴛ\x20ᴛʏᴘᴇ\x20:\x20Search\x0a\x0a📨\x20ɪᴅ\x20:\x20' + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0xb74)] + '\x0a\x0a⏰\x20ᴅᴜʀᴀᴛɪᴏɴ\x20:\x20' + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0xc19)] + _0x3e00d3(0xa7d) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x5c0)] + _0x3e00d3(0x96d) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x35b)] + _0x3e00d3(0x823) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x485)] + _0x3e00d3(0x60d) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x35b)] + _0x3e00d3(0x4af);
                let _0x560ce5 = [{
                    'title': _0x3e00d3(0x64e) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x0]['url']
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)]
                    }, {
                        'title': 'Download\x20360p\x20Video',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x0]['url']
                    }, {
                        'title': 'Download\x20720p\x20Video\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x0]['url']
                    }]
                }, {
                    'title': _0x3e00d3(0x2de) + _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x1]['url']
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x1]['title'],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x1][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': _0x3e00d3(0x60b) + _0x53c092[_0x3e00d3(0x69e)][0x2][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': '📁\x20\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x2]['title'],
                        'rowId': 'ytmp3\x20' + _0x53c092[_0x3e00d3(0x69e)][0x2]['url']
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x2]['title'],
                        'rowId': _0x3e00d3(0x993) + _0x53c092['all'][0x2][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x2][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092['all'][0x2]['url']
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x2][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092['all'][0x2][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': _0x3e00d3(0x92f) + _0x53c092['all'][0x3][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x3][_0x3e00d3(0x50b)],
                        'rowId': 'ytmp3\x20' + _0x53c092[_0x3e00d3(0x69e)][0x3]['url']
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x3]['title'],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x3][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092['all'][0x3][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x3][_0x3e00d3(0x47e)]
                    }, {
                        'title': '🎬\x20\x20Download\x20720p\x20Video\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x3][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x3][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': '❺\x20Title\x20-\x20' + _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x4]['url']
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x4][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092['all'][0x4][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x4]['url']
                    }]
                }, {
                    'title': _0x3e00d3(0x5eb) + _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': '📁\x20\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092['all'][0x5]['title'],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x47e)]
                    }, {
                        'title': '🎬\x20\x20Download\x20360p\x20Video\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x50b)],
                        'rowId': 'ytmp4\x20' + _0x53c092[_0x3e00d3(0x69e)][0x5]['url']
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x5][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x5]['url']
                    }]
                }, {
                    'title': _0x3e00d3(0x439) + _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': '📁\x20\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x6][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': _0x3e00d3(0xba1) + _0x53c092['all'][0x7][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': '📁\x20\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x7]['title'],
                        'rowId': 'ytmp3\x20' + _0x53c092['all'][0x7][_0x3e00d3(0x47e)]
                    }, {
                        'title': '🎧\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x7]['title'],
                        'rowId': _0x3e00d3(0x993) + _0x53c092['all'][0x7]['url']
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x7][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x7]['url']
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x7][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x7][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': _0x3e00d3(0x2f6) + _0x53c092[_0x3e00d3(0x69e)][0x8]['title'],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0x832) + _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0x9b2),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x50b)],
                        'rowId': 'audytmp3\x20' + _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xb55),
                        'description': _0x53c092['all'][0x8][_0x3e00d3(0x50b)],
                        'rowId': 'ytmp4\x20' + _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x8]['title'],
                        'rowId': 'ytmp4\x20' + _0x53c092[_0x3e00d3(0x69e)][0x8][_0x3e00d3(0x47e)]
                    }]
                }, {
                    'title': _0x3e00d3(0xc4e) + _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x50b)],
                    'rows': [{
                        'title': _0x3e00d3(0x54f),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x9]['title'],
                        'rowId': 'ytmp3\x20' + _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x47e)]
                    }, {
                        'title': '🎧\x20Download\x20Song\x20Document\x20Type\x20\x20',
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x9]['title'],
                        'rowId': _0x3e00d3(0x993) + _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x47e)]
                    }, {
                        'title': '🎬\x20\x20Download\x20360p\x20Video\x20\x20',
                        'description': _0x53c092['all'][0x9][_0x3e00d3(0x50b)],
                        'rowId': 'ytmp4\x20' + _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x47e)]
                    }, {
                        'title': _0x3e00d3(0xade),
                        'description': _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x50b)],
                        'rowId': _0x3e00d3(0xc36) + _0x53c092[_0x3e00d3(0x69e)][0x9][_0x3e00d3(0x47e)]
                    }]
                }];
                await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x4fb46b, '' + global[_0x3e00d3(0x673)], '' + global[_0x3e00d3(0x951)], 'ALL\x20MENU', _0x560ce5, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xa86):
            case _0x3e00d3(0x2a7): {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x5ef4bf(_0x3e00d3(0x9b3));
                if (!_0x3bbe8d['isGroup']) return _0x5ef4bf(_0x3e00d3(0x990));
                if (!_0x5f3ab5) return _0x5ef4bf(_0x3e00d3(0x725));
                let {
                    chat: _0x2889bf,
                    fromMe: _0x264f9d,
                    id: _0x26a8c3
                } = _0x3bbe8d['quoted'];
                const _0x1a102c = {
                    'remoteJid': _0x3bbe8d[_0x3e00d3(0x5f1)],
                    'fromMe': ![],
                    'id': _0x3bbe8d['quoted']['id'],
                    'participant': _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)]
                };
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1a102c
                });
            }
            break;
            case 'delttc':
            case 'delttt': {
                this[_0x3e00d3(0x91b)] = this[_0x3e00d3(0x91b)] ? this[_0x3e00d3(0x91b)] : {};
                try {
                    if (this[_0x3e00d3(0x91b)]) delete this[_0x3e00d3(0x91b)], _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x8fc), _0x3bbe8d);
                    else {
                        if (!this[_0x3e00d3(0x91b)]) _0x53c8bd('TicTacToe\x20Session🎮\x20there\x20is\x20not\x20any');
                        else throw '?';
                    }
                } catch (_0x4a2e54) {
                    _0x53c8bd(_0x3e00d3(0x92c));
                }
            }
            break;
            case _0x3e00d3(0x4ae):
            case _0x3e00d3(0xbec): {
                this['suit'] = this[_0x3e00d3(0xbec)] ? this['suit'] : {};
                let _0x4243e7 = 0xa,
                    _0x4501aa = 0xa,
                    _0x569928 = 0xea60;
                if (Object['values'](this[_0x3e00d3(0xbec)])['find'](_0x312619 => _0x312619['id'][_0x3e00d3(0x58b)](_0x3e00d3(0xbec)) && [_0x312619['p'], _0x312619['p2']]['includes'](_0x3bbe8d[_0x3e00d3(0x448)]))) _0x53c8bd(_0x3e00d3(0x1e2));
                if (_0x3bbe8d[_0x3e00d3(0x22f)][0x0] === _0x3bbe8d[_0x3e00d3(0x448)]) return _0x53c8bd(_0x3e00d3(0x5cf));
                if (!_0x3bbe8d['mentionedJid'][0x0]) return _0x53c8bd(_0x3e00d3(0x555) + _0x440929 + _0x3e00d3(0x917) + owner[0x1], _0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'mentions': [owner[0x1] + _0x3e00d3(0x5c5)]
                });
                if (Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0xbec)])['find'](_0x2c8144 => _0x2c8144['id'][_0x3e00d3(0x58b)](_0x3e00d3(0xbec)) && [_0x2c8144['p'], _0x2c8144['p2']][_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x22f)][0x0]))) throw 'The\x20person\x20you\x20are\x20challenging\x20is\x20playing\x20suit\x20with\x20someone\x20else\x20:(';
                let _0x129ac7 = _0x3e00d3(0xad5) + new Date() * 0x1,
                    _0x24ba9b = _0x3e00d3(0x8d5) + _0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x341)] `@` [0x0] + _0x3e00d3(0x9d8) + _0x3bbe8d['mentionedJid'][0x0][_0x3e00d3(0x341)] `@` [0x0] + _0x3e00d3(0x317) + _0x3bbe8d[_0x3e00d3(0x22f)][0x0][_0x3e00d3(0x341)] `@` [0x0] + '\x20to\x20type\x20accept/reject';
                this['suit'][_0x129ac7] = {
                    'chat': await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x24ba9b, _0x3bbe8d, {
                        'mentions': parseMention(_0x24ba9b)
                    }),
                    'id': _0x129ac7,
                    'p': _0x3bbe8d[_0x3e00d3(0x448)],
                    'p2': _0x3bbe8d['mentionedJid'][0x0],
                    'status': _0x3e00d3(0x42d),
                    'waktu': setTimeout(() => {
                        const _0x2f45db = _0x3e00d3;
                        if (this[_0x2f45db(0xbec)][_0x129ac7]) _0x4b49f7['sendText'](_0x3bbe8d[_0x2f45db(0x5f1)], _0x2f45db(0xc2d), _0x3bbe8d);
                        delete this[_0x2f45db(0xbec)][_0x129ac7];
                    }, 0xea60),
                    'poin': _0x4243e7,
                    'poin_lose': _0x4501aa,
                    'timeout': _0x569928
                };
            }
            break;
            case 'donasi':
            case _0x3e00d3(0x269):
            case 'sewabot':
            case _0x3e00d3(0x4cc):
            case _0x3e00d3(0x587):
            case 'donate': {
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x3e00d3(0x307)
                    },
                    'caption': _0x3e00d3(0xbf7) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0xa8a)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'sc':
            case _0x3e00d3(0x42c):
            case _0x3e00d3(0x79c): {
                _0x53c8bd(_0x3e00d3(0x8f2));
            }
            break;
            case _0x3e00d3(0x7e9):
            case _0x3e00d3(0x72b):
            case _0x3e00d3(0xb3c):
            case 'thank': {
                _0x53c8bd(_0x3e00d3(0x54c) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '*');
            }
            break;
            case _0x3e00d3(0x5f1): {
                if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                if (!q) return _0x53c8bd('Option\x20:\x201.\x20mute\x0a2.\x20unmute\x0a3.\x20archive\x0a4.\x20unarchive\x0a5.\x20read\x0a6.\x20unread\x0a7.\x20delete');
                if (_0x9b834d[0x0] === _0x3e00d3(0xc02)) _0x4b49f7['chatModify']({
                    'mute': _0x3e00d3(0x333)
                }, _0x3bbe8d['chat'], [])[_0x3e00d3(0x6e3)](_0x35bf55 => _0x53c8bd(jsonformat(_0x35bf55)))['catch'](_0x3d4bef => _0x53c8bd(jsonformat(_0x3d4bef)));
                else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0x8fe)) _0x4b49f7[_0x3e00d3(0x8fb)]({
                        'mute': null
                    }, _0x3bbe8d['chat'], [])[_0x3e00d3(0x6e3)](_0x451e82 => _0x53c8bd(jsonformat(_0x451e82)))[_0x3e00d3(0x8c3)](_0x4b0196 => _0x53c8bd(jsonformat(_0x4b0196)));
                    else {
                        if (_0x9b834d[0x0] === _0x3e00d3(0x44a)) _0x4b49f7[_0x3e00d3(0x8fb)]({
                            'archive': !![]
                        }, _0x3bbe8d['chat'], [])['then'](_0x3e8e13 => _0x53c8bd(jsonformat(_0x3e8e13)))[_0x3e00d3(0x8c3)](_0x4abe8c => _0x53c8bd(jsonformat(_0x4abe8c)));
                        else {
                            if (_0x9b834d[0x0] === _0x3e00d3(0x825)) _0x4b49f7[_0x3e00d3(0x8fb)]({
                                'archive': ![]
                            }, _0x3bbe8d['chat'], [])[_0x3e00d3(0x6e3)](_0x23829f => _0x53c8bd(jsonformat(_0x23829f)))['catch'](_0x3be834 => _0x53c8bd(jsonformat(_0x3be834)));
                            else {
                                if (_0x9b834d[0x0] === 'read') _0x4b49f7[_0x3e00d3(0x8fb)]({
                                    'markRead': !![]
                                }, _0x3bbe8d['chat'], [])['then'](_0x29582c => _0x53c8bd(jsonformat(_0x29582c)))['catch'](_0x729a49 => _0x53c8bd(jsonformat(_0x729a49)));
                                else {
                                    if (_0x9b834d[0x0] === 'unread') _0x4b49f7[_0x3e00d3(0x8fb)]({
                                        'markRead': ![]
                                    }, _0x3bbe8d[_0x3e00d3(0x5f1)], [])[_0x3e00d3(0x6e3)](_0xab2f6b => _0x53c8bd(jsonformat(_0xab2f6b)))['catch'](_0x27a508 => _0x53c8bd(jsonformat(_0x27a508)));
                                    else _0x9b834d[0x0] === _0x3e00d3(0x2fc) && _0x4b49f7[_0x3e00d3(0x8fb)]({
                                        'clear': {
                                            'message': {
                                                'id': _0x3bbe8d[_0x3e00d3(0xbad)]['id'],
                                                'fromMe': !![]
                                            }
                                        }
                                    }, _0x3bbe8d[_0x3e00d3(0x5f1)], [])[_0x3e00d3(0x6e3)](_0x232b1a => _0x53c8bd(jsonformat(_0x232b1a)))[_0x3e00d3(0x8c3)](_0x2267c7 => _0x53c8bd(jsonformat(_0x2267c7)));
                                }
                            }
                        }
                    }
                }
            }
            break;
            case _0x3e00d3(0xc1a):
            case 'ping2': {
                const _0xf306d1 = new Date()['getTime']();
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x7ed));
                const _0x5df516 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x5453f6 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xa46) + (_0x5df516 - _0xf306d1) + _0x3e00d3(0x716));
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x5453f6['key']
                    }
                });
            }
            break;
            case 'afk': {
                let _0x10d8c5 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x6b3)][_0x3bbe8d['sender']];
                _0x10d8c5[_0x3e00d3(0xa3b)] = +new Date(), _0x10d8c5['afkReason'] = _0x153b74, _0x5ef4bf(_0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20*Already\x20Afk*' + (_0x153b74 ? ':\x20' + _0x153b74 : ''));
            }
            break;
            case _0x3e00d3(0x221):
            case _0x3e00d3(0x76e): {
                const _0x184526 = new Date()['getTime']();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⚧️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x45cc33 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x3bbde2 = _0x45cc33 - _0x184526 + 'ms',
                    _0x51eca6 = (process[_0x3e00d3(0xac2)]()['heapUsed'] / 0x400 / 0x400)[_0x3e00d3(0xc7c)](0x2) + _0x3e00d3(0xaf9) + Math['round'](require('os')['totalmem'] / 0x400 / 0x400) + 'MB';
                _0x5ef4bf('```🧬\x20Bot\x20Status\x20🧬\x20```\x0a\x0a' + _0x3e00d3(0x388) + _0x3bbde2 + _0x3e00d3(0x64a) + runtime(process[_0x3e00d3(0x62b)]()) + _0x3e00d3(0x414) + _0x51eca6 + '```\x0a');
            }
            break;
            case _0x3e00d3(0x937):
            case _0x3e00d3(0xb07): {
                if (kuismath[_0x3e00d3(0xbb3)](_0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x341)]('@')[0x0])) throw _0x3e00d3(0xb29);
                let {
                    genMath: _0x303812,
                    modes: _0x199cc9
                } = require(_0x3e00d3(0x5ad));
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x989) + Object['keys'](_0x199cc9)[_0x3e00d3(0xbb1)](_0x3e00d3(0x39a)) + '\x0a' + Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x684) + _0x440929 + 'math\x20medium');
                let _0x15c69a = await _0x303812(_0x153b74[_0x3e00d3(0xa8d)]());
                _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x24c) + _0x15c69a[_0x3e00d3(0x770)]['toLowerCase']() + '*?\x0a\x0aTime:\x20' + (_0x15c69a[_0x3e00d3(0x3eb)] / 0x3e8)[_0x3e00d3(0xc7c)](0x2) + '\x20seconds', _0x3bbe8d)[_0x3e00d3(0x6e3)](() => {
                    const _0x239eda = _0x3e00d3;
                    kuismath[_0x3bbe8d[_0x239eda(0x448)]['split']('@')[0x0]] = _0x15c69a[_0x239eda(0x332)];
                }), await sleep(_0x15c69a[_0x3e00d3(0x3eb)]), kuismath[_0x3e00d3(0xbb3)](_0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x341)]('@')[0x0]) && (console['log'](_0x3e00d3(0x8e9) + _0x15c69a[_0x3e00d3(0x332)]), _0x53c8bd(_0x3e00d3(0x46c) + kuismath[_0x3bbe8d['sender'][_0x3e00d3(0x341)]('@')[0x0]]), delete kuismath[_0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x341)]('@')[0x0]]);
            }
            break;
            case _0x3e00d3(0x675): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                let _0xb16511 = _0x2d8891[_0x3e00d3(0x56d)](_0x4f85ec => _0x4f85ec['id']),
                    _0x2ecafe = _0x3bbe8d[_0x3e00d3(0x448)],
                    _0x93f0c = _0xb16511[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0xb16511['length'])],
                    _0x55c39f = _0x3e00d3(0x77e) + _0x2ecafe[_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0xa09) + _0x93f0c[_0x3e00d3(0x341)]('@')[0x0],
                    _0x2ef99e = [_0x2ecafe, _0x93f0c],
                    _0x1b5bb0 = [{
                        'buttonId': '❤️',
                        'buttonText': {
                            'displayText': '❤️'
                        },
                        'type': 0x1
                    }];
                await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], _0x1b5bb0, _0x55c39f, _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d, {
                    'mentions': _0x2ef99e
                });
            }
            break;
            case _0x3e00d3(0xc6d): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                let _0x3f85a8 = _0x2d8891['map'](_0x4d2fb4 => _0x4d2fb4['id']),
                    _0x4e8140 = _0x3f85a8[Math['floor'](Math['random']() * _0x3f85a8[_0x3e00d3(0x794)])],
                    _0x53d986 = _0x3f85a8[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x3f85a8[_0x3e00d3(0x794)])],
                    _0xd8a5c8 = '@' + _0x4e8140[_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0xa09) + _0x53d986[_0x3e00d3(0x341)]('@')[0x0] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ciee\x20Whats\x20Going\x20On💖👀',
                    _0x4616bf = [_0x4e8140, _0x53d986],
                    _0x3e4921 = [{
                        'buttonId': _0x3e00d3(0xa93),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xa93)
                        },
                        'type': 0x1
                    }];
                await _0x4b49f7['sendButtonText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e4921, _0xd8a5c8, _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d, {
                    'mentions': _0x4616bf
                });
            }
            break;
            case _0x3e00d3(0xbb1): {
                if (!_0x5ef7c8) return _0x53c8bd(mess['owner']);
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x6d4));
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0x5b5))) return _0x53c8bd(_0x3e00d3(0x574));
                _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                let _0x39d74b = _0x9b834d[0x0][_0x3e00d3(0x341)](_0x3e00d3(0x882))[0x1];
                await _0x4b49f7[_0x3e00d3(0x478)](_0x39d74b)[_0x3e00d3(0x6e3)](_0x5993c9 => _0x53c8bd(jsonformat(_0x3e00d3(0x365))))[_0x3e00d3(0x8c3)](_0xa9400d => _0x53c8bd(jsonformat('*CAN`T\x20JOIN\x20NOW\x20!!!*')));
            }
            break;
            case 'jidchat': {
                let _0x428834 = _0x3bbe8d[_0x3e00d3(0x22f)][0x0] ? _0x3bbe8d['mentionedJid'][0x0] : _0x3bbe8d[_0x3e00d3(0xbad)] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x428834);
            }
            break;
            case _0x3e00d3(0xbe7): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x3bbe8d['chat']);
            }
            break;
            case 'leave': {
                if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                const _0x1d88fc = mess[_0x3e00d3(0x2f3)] || global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0x83c)] || _0x3e00d3(0xa5a) + _0x8f1ca2[_0x3e00d3(0x9c3)] + '\x20Members\x20&\x20Admins*';
                await _0x4b49f7['sendText'](_0x3bbe8d['chat'], _0x1d88fc), await _0x4b49f7[_0x3e00d3(0xa12)](_0x3bbe8d[_0x3e00d3(0x5f1)])[_0x3e00d3(0x6e3)](_0x3b9f1e => _0x53c8bd(jsonformat(_0x3b9f1e)))[_0x3e00d3(0x8c3)](_0x16e2f3 => _0x53c8bd(jsonformat(_0x16e2f3)));
            }
            break;
            case _0x3e00d3(0x85b):
            case _0x3e00d3(0xa66):
            case _0x3e00d3(0x509): {
                if (!_0x3bbe8d['isGroup']) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess['botAdmin']);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                let _0x2f7424 = _0x3bbe8d['quoted'] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                if (_0x2f7424 === _0x3e00d3(0x464)) return _0x53c8bd(_0x3e00d3(0x31b));
                const _0x362731 = mess[_0x3e00d3(0x444)] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x78b)] || '*' + _0x2f7424['split']('@')[0x0] + _0x3e00d3(0x3cd);
                await _0x4b49f7[_0x3e00d3(0x213)](_0x3bbe8d[_0x3e00d3(0x5f1)], [_0x2f7424], _0x3e00d3(0xa66))[_0x3e00d3(0x6e3)](_0x2306b7 => _0x53c8bd(_0x362731))[_0x3e00d3(0x8c3)](_0x361b6a => _0x53c8bd(jsonformat(_0x361b6a)));
            }
            break;
            case _0x3e00d3(0x8c7):
            case _0x3e00d3(0x526): {
                if (!_0x5ef7c8) return _0x53c8bd(_0x3e00d3(0xb33));
                for (let _0x23e458 of _0x2d8891) {
                    await sleep(0x3e8);
                    if (_0x23e458['id'] == _0xca02fb + _0x3e00d3(0x5c5)) return;
                    if (_0x23e458['id'] == owner + '@s.whatsapp.net') return;
                    await _0x4b49f7[_0x3e00d3(0x213)](_0x3bbe8d['chat'], [_0x23e458['id']], 'remove'), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '*' + _0x23e458['id']['split']('@')[0x0] + _0x3e00d3(0xa25));
                }
            }
            case 'add': {
                if (!_0x3bbe8d['isGroup']) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                let _0x41a83c = _0x3bbe8d['quoted'] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                const _0x2b66d9 = mess[_0x3e00d3(0x7c5)] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xbfd)] || '*' + _0x41a83c('@')[0x0] + '\x20Add\x20to\x20Group*';
                await _0x4b49f7[_0x3e00d3(0x213)](_0x3bbe8d[_0x3e00d3(0x5f1)], [_0x41a83c], 'add')[_0x3e00d3(0x6e3)](_0x4ae312 => _0x53c8bd(_0x2b66d9))[_0x3e00d3(0x8c3)](_0x59a501 => _0x53c8bd(jsonformat(_0x59a501)));
            }
            break;
            case _0x3e00d3(0xa89): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                let _0x500a79 = _0x3bbe8d['mentionedJid'][0x0] ? _0x3bbe8d['mentionedJid'][0x0] : _0x3bbe8d['quoted'] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                const _0x5e278c = mess[_0x3e00d3(0xae4)] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb]['promotemessage'] || '*' + _0x500a79[_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0xafc);
                await _0x4b49f7[_0x3e00d3(0x213)](_0x3bbe8d[_0x3e00d3(0x5f1)], [_0x500a79], _0x3e00d3(0xa89))[_0x3e00d3(0x6e3)](_0x3f7095 => _0x53c8bd(_0x5e278c))['catch'](_0x486dbb => _0x53c8bd(jsonformat(_0x486dbb)));
            }
            break;
            case 'demote': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                let _0x29e647 = _0x3bbe8d[_0x3e00d3(0x22f)][0x0] ? _0x3bbe8d[_0x3e00d3(0x22f)][0x0] : _0x3bbe8d[_0x3e00d3(0xbad)] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                const _0x15b166 = mess['DEMOTE'] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x965)] || '*' + _0x29e647[_0x3e00d3(0x341)]('@')[0x0] + '\x20is\x20demote\x20to\x20Group\x20member*';
                await _0x4b49f7['groupParticipantsUpdate'](_0x3bbe8d[_0x3e00d3(0x5f1)], [_0x29e647], _0x3e00d3(0x443))[_0x3e00d3(0x6e3)](_0x22990f => _0x53c8bd(_0x15b166))[_0x3e00d3(0x8c3)](_0x5b7f73 => _0x53c8bd(jsonformat(_0x5b7f73)));
            }
            break;
            case _0x3e00d3(0xa6a): {
                if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                let _0x4a27fc = _0x3bbe8d[_0x3e00d3(0x22f)][0x0] ? _0x3bbe8d[_0x3e00d3(0x22f)][0x0] : _0x3bbe8d[_0x3e00d3(0xbad)] ? _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                const _0x126d15 = mess[_0x3e00d3(0x815)] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xbbf)] || '*' + _0x4a27fc[_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0x2f2);
                await _0x4b49f7['updateBlockStatus'](_0x4a27fc, _0x3e00d3(0xa6a))[_0x3e00d3(0x6e3)](_0x5d7ab6 => _0x53c8bd(_0x126d15))[_0x3e00d3(0x8c3)](_0x5b114f => _0x53c8bd(jsonformat(_0x5b114f)));
            }
            break;
            case _0x3e00d3(0x23f): {
                if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                let _0x3f5b8d = _0x3bbe8d[_0x3e00d3(0x22f)][0x0] ? _0x3bbe8d['mentionedJid'][0x0] : _0x3bbe8d[_0x3e00d3(0xbad)] ? _0x3bbe8d['quoted'][_0x3e00d3(0x448)] : _0x153b74[_0x3e00d3(0x449)](/[^0-9]/g, '') + _0x3e00d3(0x5c5);
                const _0x5814c1 = mess['UNBLOCK'] || global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x707)] || '*' + _0x3f5b8d[_0x3e00d3(0x341)]('@')[0x0] + '\x20is\x20Unblocked\x20!*';
                await _0x4b49f7['updateBlockStatus'](_0x3f5b8d, _0x3e00d3(0x23f))[_0x3e00d3(0x6e3)](_0x430301 => _0x53c8bd(_0x5814c1))[_0x3e00d3(0x8c3)](_0x59940e => _0x53c8bd(jsonformat(_0x59940e)));
            }
            break;
            case _0x3e00d3(0x6e6):
            case _0x3e00d3(0xa18): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess['botAdmin']);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x6af));
                await _0x4b49f7[_0x3e00d3(0x4be)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x153b74), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], Lang[_0x3e00d3(0x578)])[_0x3e00d3(0x6e3)](_0xeab309 => _0x53c8bd(mess[_0x3e00d3(0x226)]))[_0x3e00d3(0x8c3)](_0x3dd3c8 => _0x53c8bd(jsonformat(_0x3dd3c8)));
            }
            break;
            case _0x3e00d3(0x63a):
            case _0x3e00d3(0x791): {
                if (!_0x3bbe8d['isGroup']) return _0x53c8bd(mess[_0x3e00d3(0x6c4)]);
                if (!_0x56a320) return _0x53c8bd(mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x53c8bd(mess[_0x3e00d3(0x36e)]);
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x6af));
                await _0x4b49f7[_0x3e00d3(0x897)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x153b74), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang[_0x3e00d3(0xb8c)])[_0x3e00d3(0x6e3)](_0xdcb3d6 => _0x53c8bd(mess[_0x3e00d3(0x226)]))[_0x3e00d3(0x8c3)](_0x1dd317 => _0x53c8bd(jsonformat(_0x1dd317)));
            }
            break;
            case 'setppbot':
            case _0x3e00d3(0xc81): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                if (!_0x2d884d) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (/webp/ ['test'](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                let _0x1b1113 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d);
                await _0x4b49f7[_0x3e00d3(0x9bf)](_0xca02fb, {
                    'url': _0x1b1113
                })[_0x3e00d3(0x8c3)](_0x3ad255 => fs['unlinkSync'](_0x1b1113)), _0x53c8bd(mess[_0x3e00d3(0x226)]);
            }
            break;
            case _0x3e00d3(0xbea):
            case _0x3e00d3(0xb34):
            case _0x3e00d3(0x9a5):
            case _0x3e00d3(0x523):
            case 'setppgc': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                if (!_0x2d884d) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (/webp/ ['test'](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                let _0x4193dc = await _0x4b49f7['downloadAndSaveMediaMessage'](_0x2d884d);
                await _0x4b49f7[_0x3e00d3(0x9bf)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'url': _0x4193dc
                })[_0x3e00d3(0x8c3)](_0x1d77bf => fs[_0x3e00d3(0x36a)](_0x4193dc)), _0x53c8bd(mess[_0x3e00d3(0x226)]);
            }
            break;
            case _0x3e00d3(0x286): {
                if (!_0x5ef7c8) return _0x2f1bc9('' + mess[_0x3e00d3(0x3f2)]);
                if (!_0x153b74) return _0x2f1bc9(Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x6be));
                global['packname'] = _0x153b74[_0x3e00d3(0x341)]('|')[0x0], global[_0x3e00d3(0xb43)] = _0x153b74['split']('|')[0x1], _0x53c8bd(_0x3e00d3(0x4e5) + global[_0x3e00d3(0x7f6)] + '\x0a🔮\x20Author\x20:\x20' + global['author']);
            }
            break;
            case _0x3e00d3(0x6b6):
            case _0x3e00d3(0x7f9):
                try {
                    var _0x2a6cc2 = await _0x4b49f7[_0x3e00d3(0x911)](_0x3bbe8d[_0x3e00d3(0x5f1)]);
                } catch {
                    var _0x2a6cc2 = _0x3e00d3(0x935);
                }
                let _0x3e6178 = _0x3e00d3(0x28a) + _0x1c33bb + _0x3e00d3(0x33d) + _0x3bbe8d['chat'] + _0x3e00d3(0x2ba) + moment(('' + _0x8f1ca2['creation']) * 0x3e8)['tz'](_0x3e00d3(0x651))['format'](_0x3e00d3(0xa03)) + _0x3e00d3(0xc04) + _0x8f1ca2[_0x3e00d3(0x3f2)]['split']('@')[0x0] + _0x3e00d3(0x6b7) + _0x20d984[_0x3e00d3(0x794)] + _0x3e00d3(0x771) + _0x2d8891['length'] + _0x3e00d3(0x5fe) + _0x8f1ca2[_0x3e00d3(0x234)];
                ds = await getBuffer(_0x2a6cc2), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': ds,
                    'caption': _0x3e6178,
                    'mentions': [_0x8f1ca2[_0x3e00d3(0x3f2)]]
                }, {
                    'quoted': _0x3bbe8d
                });
                break;
            case _0x3e00d3(0xbee): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                let _0x39fcc3 = '\x20_❗\x20' + _0x1c33bb + _0x3e00d3(0xc2e) + (q ? q : _0x3e00d3(0x5df)) + '\x0a\x0a';
                for (let _0x998115 of _0x20d984) {
                    _0x39fcc3 += _0x3e00d3(0x2ea);
                }
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': _0x39fcc3,
                    'mentions': _0x20d984[_0x3e00d3(0x56d)](_0x2ef0a7 => _0x2ef0a7['id'])
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x4dc):
            case _0x3e00d3(0xbaf): {
                if (!_0x3bbe8d['isGroup']) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x56a320) throw mess[_0x3e00d3(0x4bb)];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                let _0x542e0e = _0x3e00d3(0xbf8) + (q ? q : _0x3e00d3(0x5df)) + '*\x0a\x0a';
                for (let _0x5d6268 of _0x2d8891) {
                    _0x542e0e += _0x3e00d3(0xbd1) + _0x5d6268['id'][_0x3e00d3(0x341)]('@')[0x0] + '\x0a';
                }
                _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'text': _0x542e0e,
                    'mentions': _0x2d8891[_0x3e00d3(0x56d)](_0x44927c => _0x44927c['id'])
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x943): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess['group'];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'text': q ? q : '',
                    'mentions': _0x2d8891[_0x3e00d3(0x56d)](_0x3dadf9 => _0x3dadf9['id'])
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case '####taggrp': {
                for (let _0x1abf6d of _0x2d8891) {
                    await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x1abf6d['id']);
                }
            }
            break;
            case _0x3e00d3(0x7fb):
            case 'styletext': {
                let {
                    styletext: _0x13c8af
                } = require(_0x3e00d3(0xaa5));
                if (!_0x153b74) throw 'Enter\x20Query\x20text!';
                let _0x4eae0a = await _0x13c8af(_0x153b74),
                    _0x59be7b = 'Entered\x20Text:\x20\x20' + _0x153b74 + '\x0a\x0a';
                for (let _0x2b65ea of _0x4eae0a) {
                    _0x59be7b += '🔵\x20*' + _0x2b65ea[_0x3e00d3(0xb12)] + '*\x20:\x20' + _0x2b65ea[_0x3e00d3(0xb16)] + '\x0a\x0a';
                }
                _0x53c8bd(_0x59be7b);
            }
            break;
            case 'vote': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (_0x3bbe8d[_0x3e00d3(0x5f1)] in vote) throw _0x3e00d3(0x584) + _0x440929 + _0x3e00d3(0xb24);
                if (!_0x153b74) throw _0x3e00d3(0x933) + Lang['EXAMPLE'] + _0x3e00d3(0x8b4) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xbac);
                _0x53c8bd(_0x3e00d3(0x5f8) + _0x440929 + 'upvote*\x20-\x20for\x20yes\x0a*' + _0x440929 + _0x3e00d3(0x252) + _0x440929 + _0x3e00d3(0x3d1) + _0x440929 + _0x3e00d3(0x5fb)), vote[_0x3bbe8d['chat']] = [q, [],
                    []
                ], await sleep(0x3e8), upvote = vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1], devote = vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2], teks_vote = _0x3e00d3(0x7b3) + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x0] + _0x3e00d3(0xb0c) + vote[_0x3bbe8d['chat']][0x1][_0x3e00d3(0x794)] + _0x3e00d3(0x1e3) + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2][_0x3e00d3(0x794)] + _0x3e00d3(0xb77) + _0x440929 + _0x3e00d3(0xb24);
                let _0x44d009 = [{
                        'buttonId': _0x440929 + _0x3e00d3(0xa9f),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xc1c)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x440929 + _0x3e00d3(0x76f),
                        'buttonText': {
                            'displayText': 'De-Vote'
                        },
                        'type': 0x1
                    }],
                    _0x3011e5 = {
                        'text': teks_vote,
                        'footer': _0x4b49f7['user'][_0x3e00d3(0xb12)],
                        'buttons': _0x44d009,
                        'headerType': 0x1
                    };
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3011e5);
            }
            break;
            case 'upvote': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!(_0x3bbe8d[_0x3e00d3(0x5f1)] in vote)) throw '_*no\x20voting\x20in\x20this\x20group!*_\x0a\x0a*Type\x20' + _0x440929 + _0x3e00d3(0x4a2);
                isVote = vote[_0x3bbe8d['chat']][0x1][_0x3e00d3(0x33f)](vote[_0x3bbe8d['chat']][0x2]), wasVote = isVote['includes'](_0x3bbe8d[_0x3e00d3(0x448)]);
                if (wasVote) throw _0x3e00d3(0x851);
                vote[_0x3bbe8d['chat']][0x1][_0x3e00d3(0x748)](_0x3bbe8d[_0x3e00d3(0x448)]), menvote = vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1]['concat'](vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2]), teks_vote = _0x3e00d3(0x5f9) + vote[_0x3bbe8d['chat']][0x0] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴜᴘᴠᴏᴛᴇ\x20]──◉\x0a\x0a├\x20Total:\x20' + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1][_0x3e00d3(0x794)] + '\x0a' + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1][_0x3e00d3(0x56d)]((_0x55a5fd, _0x471f06) => '├\x20' + (_0x471f06 + 0x1) + _0x3e00d3(0x3ca) + _0x55a5fd[_0x3e00d3(0x341)] `@` [0x0])[_0x3e00d3(0xbb1)]('\x0a') + _0x3e00d3(0xb6f) + vote[_0x3bbe8d['chat']][0x2]['length'] + '\x0a' + vote[_0x3bbe8d['chat']][0x2]['map']((_0x1b0275, _0x22a5a4) => '├\x20' + (_0x22a5a4 + 0x1) + _0x3e00d3(0x3ca) + _0x1b0275[_0x3e00d3(0x341)] `@` [0x0])[_0x3e00d3(0xbb1)]('\x0a') + _0x3e00d3(0x784) + _0x440929 + _0x3e00d3(0xc0d);
                let _0x719bb7 = [{
                        'buttonId': _0x440929 + _0x3e00d3(0xa9f),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xc1c)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x440929 + _0x3e00d3(0x76f),
                        'buttonText': {
                            'displayText': 'De-Vote'
                        },
                        'type': 0x1
                    }],
                    _0x2c7951 = {
                        'text': teks_vote,
                        'footer': _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)],
                        'buttons': _0x719bb7,
                        'headerType': 0x1,
                        'mentions': menvote
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2c7951);
            }
            break;
            case _0x3e00d3(0x76f): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!(_0x3bbe8d[_0x3e00d3(0x5f1)] in vote)) throw '_*no\x20voting\x20in\x20this\x20group!*_\x0a\x0a*' + _0x440929 + _0x3e00d3(0x4a2);
                isVote = vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1][_0x3e00d3(0x33f)](vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2]), wasVote = isVote[_0x3e00d3(0x3d5)](_0x3bbe8d[_0x3e00d3(0x448)]);
                if (wasVote) throw 'You\x20Have\x20Voted';
                vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2][_0x3e00d3(0x748)](_0x3bbe8d['sender']), menvote = vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1][_0x3e00d3(0x33f)](vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2]), teks_vote = '◉◍──[\x20*ᴇʟɪsᴀ\x20ʙᴏᴛ*\x20]──◍◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*𝗗𝗘𝗩𝗢𝗧𝗘:*\x20' + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x0] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌──[\x20ᴜᴘᴠᴏᴛᴇ\x20]──◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a├\x20Total:\x20' + vote[_0x3bbe8d['chat']][0x1][_0x3e00d3(0x794)] + '\x0a' + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1]['map']((_0x5c9c54, _0x5a761f) => '├\x20' + (_0x5a761f + 0x1) + '.\x20@' + _0x5c9c54[_0x3e00d3(0x341)] `@` [0x0])[_0x3e00d3(0xbb1)]('\x0a') + _0x3e00d3(0x5da) + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x2][_0x3e00d3(0x794)] + '\x0a' + vote[_0x3bbe8d['chat']][0x2][_0x3e00d3(0x56d)]((_0x2b3bcb, _0x4615a7) => '├\x20' + (_0x4615a7 + 0x1) + '.\x20@' + _0x2b3bcb[_0x3e00d3(0x341)] `@` [0x0])['join']('\x0a') + '\x0a\x0a└────◉\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*' + _0x440929 + _0x3e00d3(0xc0d);
                let _0x34e264 = [{
                        'buttonId': _0x440929 + _0x3e00d3(0xa9f),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xc1c)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x440929 + _0x3e00d3(0x76f),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xa61)
                        },
                        'type': 0x1
                    }],
                    _0x3f783d = {
                        'text': teks_vote,
                        'footer': _0x4b49f7[_0x3e00d3(0x2a0)]['name'],
                        'buttons': _0x34e264,
                        'headerType': 0x1,
                        'mentions': menvote
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x3f783d);
            }
            break;
            case 'cekvote':
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!(_0x3bbe8d['chat'] in vote)) throw _0x3e00d3(0x9fd) + _0x440929 + _0x3e00d3(0x4a2);
                teks_vote = _0x3e00d3(0x5f9) + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x0] + _0x3e00d3(0x995) + upvote[_0x3e00d3(0x794)] + '\x0a' + vote[_0x3bbe8d[_0x3e00d3(0x5f1)]][0x1][_0x3e00d3(0x56d)]((_0x571a69, _0x56f8ee) => '├\x20' + (_0x56f8ee + 0x1) + _0x3e00d3(0x3ca) + _0x571a69[_0x3e00d3(0x341)] `@` [0x0])[_0x3e00d3(0xbb1)]('\x0a') + _0x3e00d3(0x871) + devote[_0x3e00d3(0x794)] + '\x0a' + vote[_0x3bbe8d['chat']][0x2][_0x3e00d3(0x56d)]((_0xf52229, _0xfcc4bf) => '├\x20' + (_0xfcc4bf + 0x1) + _0x3e00d3(0x3ca) + _0xf52229[_0x3e00d3(0x341)] `@` [0x0])[_0x3e00d3(0xbb1)]('\x0a') + _0x3e00d3(0x906) + _0x440929 + 'hapusvote*\x20-\x20to\x20delete\x20votes\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20©' + _0x4b49f7[_0x3e00d3(0x2a0)]['id'] + _0x3e00d3(0x2dc), _0x4b49f7[_0x3e00d3(0x5bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], teks_vote, _0x3bbe8d);
                break;
            case 'deletevote':
            case _0x3e00d3(0x228):
            case _0x3e00d3(0x743): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!(_0x3bbe8d['chat'] in vote)) throw '_*tidak\x20ada\x20voting\x20digrup\x20ini!*_\x0a\x0a*' + _0x440929 + _0x3e00d3(0x4a2);
                delete vote[_0x3bbe8d[_0x3e00d3(0x5f1)]], _0x53c8bd(_0x3e00d3(0x23b));
            }
            break;
            case _0x3e00d3(0x6c4):
            case 'grup': {
                if (!_0x3bbe8d['isGroup']) throw mess['group'];
                if (!_0x56a320) throw mess[_0x3e00d3(0x4bb)];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                if (_0x9b834d[0x0] === _0x3e00d3(0x2ee)) await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x758))[_0x3e00d3(0x6e3)](_0x499d5e => _0x53c8bd(Lang['G_MUTE']))[_0x3e00d3(0x8c3)](_0x508d3d => _0x53c8bd(jsonformat(_0x508d3d)));
                else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0x3d2)) await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x2b3))['then'](_0x20ae37 => _0x53c8bd(Lang['G_UNMUTE']))[_0x3e00d3(0x8c3)](_0x470b3e => _0x53c8bd(jsonformat(_0x470b3e)));
                    else {
                        let _0x1189fb = [{
                            'buttonId': 'group\x20open',
                            'buttonText': {
                                'displayText': 'Open'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x5d5),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x1f3)
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7['sendButtonText'](_0x3bbe8d['chat'], _0x1189fb, 'Group\x20Mode', _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                    }
                }
            }
            break;
            case _0x3e00d3(0xc02): {
                if (!_0x3bbe8d['isGroup']) throw mess['group'];
                if (!_0x56a320) throw mess[_0x3e00d3(0x4bb)];
                if (!_0x5f3ab5) throw mess['admin'];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔐',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d['chat'], _0x3e00d3(0x758));
                const _0xbe0562 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang[_0x3e00d3(0x8c2)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔇',
                        'key': _0xbe0562[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x8fe): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x56a320) throw mess['botAdmin'];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔓',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d['chat'], _0x3e00d3(0x2b3));
                const _0x3e08ce = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], Lang[_0x3e00d3(0x6e7)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔊',
                        'key': _0x3e08ce[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x59f): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x56a320) throw mess['botAdmin'];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                if (_0x9b834d[0x0] === _0x3e00d3(0x3d2)) await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x516))[_0x3e00d3(0x6e3)](_0x423d0f => _0x53c8bd(Lang[_0x3e00d3(0x2dd)]))[_0x3e00d3(0x8c3)](_0x5d42ff => _0x53c8bd(jsonformat(_0x5d42ff)));
                else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0x2ee)) await _0x4b49f7[_0x3e00d3(0xaf1)](_0x3bbe8d[_0x3e00d3(0x5f1)], 'locked')[_0x3e00d3(0x6e3)](_0x549f7c => _0x53c8bd(Lang[_0x3e00d3(0x6e7)]))['catch'](_0x15baa1 => _0x53c8bd(jsonformat(_0x15baa1)));
                    else {
                        let _0x205061 = [{
                            'buttonId': 'editinfo\x20open',
                            'buttonText': {
                                'displayText': _0x3e00d3(0x614)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x5f7),
                            'buttonText': {
                                'displayText': _0x3e00d3(0xb40)
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x205061, _0x3e00d3(0x3a8), _0x4b49f7[_0x3e00d3(0x2a0)]['name'], _0x3bbe8d);
                    }
                }
            }
            break;
            case _0x3e00d3(0x705): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x2f1bc9('' + mess['group']);
                if (!_0x56a320) return _0x2f1bc9('' + mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x2f1bc9('' + mess['admin']);
                if (_0x9b834d[0x0] === 'on') {
                    if (db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['antilink']) return _0x53c8bd(_0x3e00d3(0xb02));
                    db[_0x3e00d3(0x646)]['chats'][_0x3bbe8d['chat']][_0x3e00d3(0x705)] = !![], _0x53c8bd('Antilink\x20Active\x20!');
                } else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0xb2f)) {
                        if (!db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['antilink']) return _0x53c8bd(_0x3e00d3(0xa36));
                        db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x705)] = ![], _0x53c8bd(_0x3e00d3(0x3fd));
                    } else {
                        let _0x325baf = [{
                            'buttonId': 'antilink\x20on',
                            'buttonText': {
                                'displayText': 'On'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x3aa),
                            'buttonText': {
                                'displayText': 'Off'
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x325baf, _0x3e00d3(0x343), _0x4b49f7[_0x3e00d3(0x2a0)]['name'], _0x3bbe8d);
                    }
                }
            }
            break;
            break;
            case _0x3e00d3(0xa2a): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x56a320) throw mess[_0x3e00d3(0x4bb)];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                if (_0x9b834d[0x0] === 'on') {
                    if (db[_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x48f)]) return _0x5ef4bf(_0x3e00d3(0x5ba));
                    db[_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x48f)] = !![], _0x5ef4bf('Anti\x20Wa.me\x20Activated!');
                } else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0xb2f)) {
                        if (!db[_0x3e00d3(0x9e9)][_0x3bbe8d['chat']][_0x3e00d3(0x48f)]) return _0x5ef4bf(_0x3e00d3(0x828));
                        db[_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x48f)] = ![], _0x5ef4bf('Anti\x20Wa.me\x20is\x20not\x20activated!');
                    } else {
                        let _0x3b5a02 = [{
                            'buttonId': _0x3e00d3(0x4bc),
                            'buttonText': {
                                'displayText': 'ON'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0xaae),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x440)
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3b5a02, 'Mode\x20Anti\x20Wa.me', _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                    }
                }
            }
            break;
            case _0x3e00d3(0xa34):
            case 'blockgc': {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x2f1bc9('' + mess['group']);
                if (!_0x56a320) return _0x2f1bc9('' + mess[_0x3e00d3(0x4bb)]);
                if (!_0x5f3ab5) return _0x2f1bc9('' + mess[_0x3e00d3(0x36e)]);
                if (_0x9b834d[0x0] === 'on') {
                    if (db['data'][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x976)]) return _0x53c8bd(_0x3e00d3(0x829));
                    db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x976)] = !![], _0x53c8bd(_0x4b49f7[_0x3e00d3(0x2a0)]['name'] + _0x3e00d3(0xac8));
                } else {
                    if (_0x9b834d[0x0] === 'off') {
                        if (!db['data'][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['block_from']) return _0x53c8bd(_0x3e00d3(0x88a));
                        db[_0x3e00d3(0x646)]['chats'][_0x3bbe8d[_0x3e00d3(0x5f1)]]['block_from'] = ![], _0x53c8bd(_0x4b49f7[_0x3e00d3(0x2a0)]['name'] + '\x0a\x20Has\x20Been\x20Unblocked\x20In\x20This\x20Group!');
                    } else {
                        let _0x46e4ce = [{
                            'buttonId': 'blockgc\x20on',
                            'buttonText': {
                                'displayText': 'BLOCK'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': 'blockgc\x20off',
                            'buttonText': {
                                'displayText': _0x3e00d3(0x5c2)
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x46e4ce, '*🧑‍💻\x20BOT\x20DESABLE\x20ON\x20GROUP\x20🧑‍💻*\x0a\x20*👥Group\x20jid\x20:*\x20' + _0x3bbe8d[_0x3e00d3(0x5f1)], _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                    }
                }
            }
            break;
            case _0x3e00d3(0x637):
            case 'jidblock': {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                if (_0x9b834d[0x0] === 'on') {
                    if (db['data'][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['block_jid']) return _0x53c8bd(_0x3e00d3(0x829));
                    db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d['chat']][_0x3e00d3(0xb3b)] = !![], _0x53c8bd(_0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)] + '\x20\x0aHas\x20Been\x20Blocked\x20In\x20This\x20Jid\x20!');
                } else {
                    if (_0x9b834d[0x0] === 'off') {
                        if (!db['data'][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0xb3b)]) return _0x53c8bd(_0x3e00d3(0x88a));
                        db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0xb3b)] = ![], _0x53c8bd(_0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)] + '\x0a\x20Has\x20Been\x20Unblocked\x20In\x20This\x20Jid!');
                    } else {
                        let _0x352b6f = [{
                            'buttonId': _0x3e00d3(0x5ff),
                            'buttonText': {
                                'displayText': _0x3e00d3(0xa14)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x25a),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x4c2)
                            },
                            'type': 0x1
                        }];
                        await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x352b6f, '*🧑‍💻\x20JID\x20BLOCK🧑‍💻*\x0a*👤\x20jid\x20:*\x20' + _0x3bbe8d[_0x3e00d3(0x5f1)] + '\x20', _0x4b49f7['user'][_0x3e00d3(0xb12)], _0x3bbe8d);
                    }
                }
            }
            break;
            case 'invite':
            case _0x3e00d3(0x369):
            case _0x3e00d3(0x9a0):
            case _0x3e00d3(0x533):
            case _0x3e00d3(0x9ea): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                let _0x171198 = await _0x4b49f7['groupInviteCode'](_0x3bbe8d[_0x3e00d3(0x5f1)]);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '*🖇️Link\x20Of\x20:*\x20' + _0x8f1ca2[_0x3e00d3(0x9c3)] + _0x3e00d3(0xa47) + _0x171198, _0x3bbe8d, {
                    'detectLink': !![]
                });
            }
            break;
            case _0x3e00d3(0xa1d): {
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) throw mess[_0x3e00d3(0x6c4)];
                if (!_0x56a320) throw mess['botAdmin'];
                if (!_0x5f3ab5) throw mess[_0x3e00d3(0x36e)];
                if (!_0x153b74) throw _0x3e00d3(0x6f8);
                if (_0x9b834d[0x0] === 'enable') await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'disappearingMessagesInChat': WA_DEFAULT_EPHEMERAL
                })[_0x3e00d3(0x6e3)](_0x2d41cb => _0x53c8bd(jsonformat(_0x2d41cb)))[_0x3e00d3(0x8c3)](_0x3eede2 => _0x53c8bd(jsonformat(_0x3eede2)));
                else _0x9b834d[0x0] === _0x3e00d3(0x8e6) && await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'disappearingMessagesInChat': ![]
                })['then'](_0x328c4f => _0x53c8bd(jsonformat(_0x328c4f)))['catch'](_0x5c48f4 => _0x53c8bd(jsonformat(_0x5c48f4)));
            }
            break;
            case 'deletem':
            case 'del': {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) throw ![];
                let {
                    chat: _0xb48258,
                    fromMe: _0x3b1f63,
                    id: _0x33bedf,
                    isBaileys: _0x42007a
                } = _0x3bbe8d[_0x3e00d3(0xbad)];
                if (!_0x42007a) throw Lang[_0x3e00d3(0x6fa)];
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': {
                        'remoteJid': _0x3bbe8d[_0x3e00d3(0x5f1)],
                        'fromMe': !![],
                        'id': _0x3bbe8d[_0x3e00d3(0xbad)]['id'],
                        'participant': _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x448)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x8df): {
                await _0x4b49f7['chatModify']({
                    'clear': {
                        'messages': [{
                            'id': _0x3bbe8d[_0x3e00d3(0x2da)],
                            'fromMe': !![]
                        }]
                    }
                }, _0x3bbe8d['chat']);
            }
            break;
            case _0x3e00d3(0x49f): {
                if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                if (!_0x153b74) throw Lang[_0x3e00d3(0xb39)] + '\x0a' + Lang[_0x3e00d3(0x582)] + '\x20' + (_0x440929 + _0x5a7691) + '\x20*Hello\x20i\x20am\x20using\x20Thivanka\x20Nirmal\x20🤍*';
                let _0x539e48 = await _0x4b49f7[_0x3e00d3(0x5a0)](),
                    _0x55c9a7 = Object['entries'](_0x539e48)['slice'](0x0)[_0x3e00d3(0x56d)](_0x7c1a42 => _0x7c1a42[0x1]),
                    _0x19c50e = _0x55c9a7['map'](_0x45e6f9 => _0x45e6f9['id']);
                _0x53c8bd(_0x3e00d3(0x700) + _0x19c50e[_0x3e00d3(0x794)] + _0x3e00d3(0x3ea) + _0x19c50e[_0x3e00d3(0x794)] * 1.5 + '\x20second*');
                for (let _0x33496f of _0x19c50e) {
                    await sleep(0x5dc), await _0x4b49f7[_0x3e00d3(0xa97)](_0x33496f, _0x3e00d3(0xb62) + _0x153b74);
                }
                _0x53c8bd(_0x3e00d3(0x4bf) + _0x19c50e[_0x3e00d3(0x794)] + _0x3e00d3(0x924));
            }
            break;
            case _0x3e00d3(0x331): {
                let _0x3dd775 = await _0x2d884d[_0x3e00d3(0xbf4)](),
                    _0x272531 = await _0x4b49f7['groupFetchAllParticipating'](),
                    _0x7cfcc7 = Object[_0x3e00d3(0xbf0)](_0x272531)['slice'](0x0)[_0x3e00d3(0x56d)](_0x2a3c04 => _0x2a3c04[0x1]),
                    _0xa7e10 = _0x7cfcc7[_0x3e00d3(0x56d)](_0x386159 => _0x386159['id']);
                _0x53c8bd(_0x3e00d3(0x700) + _0xa7e10[_0x3e00d3(0x794)] + '\x20Group\x20Chat,\x20Finish\x20Time\x20' + _0xa7e10[_0x3e00d3(0x794)] * 1.5 + _0x3e00d3(0x8eb));
                for (let _0x59ac0f of _0xa7e10) {
                    await sleep(0x5dc), await _0x4b49f7[_0x3e00d3(0xa97)](_0x59ac0f, '' + _0x153b74), await _0x4b49f7['sendMessage'](_0x59ac0f, {
                        'image': {
                            'url': _0x3dd775
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    }), _0x53c8bd(_0x3e00d3(0x4bf) + _0xa7e10[_0x3e00d3(0x794)] + _0x3e00d3(0x924));
                }
            }
            break;
            case 'bcgc':
            case _0x3e00d3(0x549): {
                if (!_0x5ef7c8) throw mess['owner'];
                if (!_0x153b74) throw '' + Lang[_0x3e00d3(0xb39)] + Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x20hello\x20guys,\x20am\x20back';
                let _0x38e576 = await _0x4b49f7['groupFetchAllParticipating'](),
                    _0x4194e3 = Object['entries'](_0x38e576)['slice'](0x0)['map'](_0x105002 => _0x105002[0x1]),
                    _0x464896 = _0x4194e3[_0x3e00d3(0x56d)](_0x523cab => _0x523cab['id']);
                _0x53c8bd(_0x3e00d3(0xc7e) + _0x464896['length'] + _0x3e00d3(0x3ea) + _0x464896[_0x3e00d3(0x794)] * 1.5 + _0x3e00d3(0x703));
                for (let _0x5b0a38 of _0x464896) {
                    await sleep(0x5dc), _0x4b49f7['sendText'](_0x5b0a38, _0x3e00d3(0x61c) + _0x153b74);
                }
                _0x53c8bd(_0x3e00d3(0x299) + _0x464896[_0x3e00d3(0x794)] + '\x20Group(s)');
            }
            break;
            case 'bc':
            case _0x3e00d3(0x203):
            case _0x3e00d3(0x8b2): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                if (!_0x153b74) throw Lang[_0x3e00d3(0xb39)] + 'Example\x20:\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x963);
                let _0x224646 = await _0x547772['chats'][_0x3e00d3(0x69e)]()['map'](_0x47974c => _0x47974c['id']);
                _0x53c8bd(_0x3e00d3(0xc7e) + _0x224646[_0x3e00d3(0x794)] + _0x3e00d3(0x9e3) + _0x224646[_0x3e00d3(0x794)] * 1.5 + _0x3e00d3(0x703));
                for (let _0x4b2cce of _0x224646) {
                    await sleep(0x5dc), _0x4b49f7[_0x3e00d3(0xa97)](_0x4b2cce, _0x3e00d3(0x61c) + _0x153b74);
                }
                _0x53c8bd(_0x3e00d3(0x6d8));
            }
            break;
            case _0x3e00d3(0xbe4): {
                if (!_0x3bbe8d['quoted']) _0x53c8bd(Lang[_0x3e00d3(0x36b)]);
                let _0x1c1eec = await _0x3bbe8d[_0x3e00d3(0xc3e)]();
                if (!_0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x94f)]) return _0x53c8bd(_0x3e00d3(0x9f9));
                let _0x35391b = '';
                for (let _0x5929a9 of _0x1c1eec[_0x3e00d3(0x23d)]) {
                    let _0x23d968 = _0x5929a9[_0x3e00d3(0x357)],
                        _0xf383d6 = _0x5929a9[_0x3e00d3(0x23e)],
                        _0x318dbd = _0x23d968 ? _0x23d968 : _0xf383d6;
                    _0x35391b += _0x3e00d3(0xbd1) + _0x5929a9[_0x3e00d3(0x659)][_0x3e00d3(0x341)]('@')[0x0] + '\x0a', _0x35391b += '🔵\x20*𝗧𝗜𝗠𝗘\x20:*\x20' + moment(_0x318dbd * 0x3e8)[_0x3e00d3(0x945)](_0x3e00d3(0xba3)) + '\x20🔵\x20*𝗦𝗧𝗔𝗧𝗨𝗦\x20:*\x20' + (_0x23d968 ? 'Read' : _0x3e00d3(0x8b6)) + '\x0a\x0a';
                }
                _0x4b49f7['sendTextWithMentions'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x35391b, _0x3bbe8d);
            }
            break;
            case 'q':
            case _0x3e00d3(0xbad): {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd(Lang['M_REPLY']);
                let _0x250c5e = await _0x4b49f7[_0x3e00d3(0x71c)](await _0x3bbe8d[_0x3e00d3(0xc3e)]());
                if (!_0x250c5e[_0x3e00d3(0xbad)]) return _0x53c8bd(_0x3e00d3(0x4ff));
                await _0x250c5e[_0x3e00d3(0xbad)]['copyNForward'](_0x3bbe8d[_0x3e00d3(0x5f1)], !![]);
            }
            break;
            case _0x3e00d3(0xc0f): {
                let _0x3a3c72 = await _0x547772[_0x3e00d3(0x9e9)][_0x3e00d3(0x69e)]()[_0x3e00d3(0x32e)](_0x10c86b => _0x10c86b['id'][_0x3e00d3(0x746)]('.net'))[_0x3e00d3(0x56d)](_0x1d08ab => _0x1d08ab['id']),
                    _0x36244d = _0x3e00d3(0x51c) + _0x3a3c72[_0x3e00d3(0x794)] + '\x20Chat\x0a\x0a';
                for (let _0x2b39ad of _0x3a3c72) {
                    let _0x2b7d1b = _0x547772[_0x3e00d3(0x3a1)][_0x2b39ad][_0x3e00d3(0x92e)][0x0][_0x3e00d3(0x7a2)];
                    _0x36244d += _0x3e00d3(0x556) + _0x2b7d1b + '\x0a🔵\x20*𝗨𝗦𝗘𝗥\x20:*\x20@' + _0x2b39ad[_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0x904) + _0x2b39ad[_0x3e00d3(0x341)]('@')[0x0] + '\x0a\x0a────────────────────────\x0a\x0a';
                }
                _0x4b49f7[_0x3e00d3(0x5bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x36244d, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xae5): {
                let _0x162586 = await _0x547772['chats']['all']()[_0x3e00d3(0x32e)](_0x208cbb => _0x208cbb['id'][_0x3e00d3(0x746)](_0x3e00d3(0x389)))['map'](_0x1896ea => _0x1896ea['id']),
                    _0x5ca0d4 = '⬣\x20*LIST\x20GROUP\x20CHAT*\x0a\x0aTotal\x20Group\x20:\x20' + _0x162586[_0x3e00d3(0x794)] + _0x3e00d3(0x90e);
                for (let _0x1adacb of _0x162586) {
                    let _0x1f06ca = await _0x4b49f7[_0x3e00d3(0x504)](_0x1adacb);
                    _0x5ca0d4 += _0x3e00d3(0x556) + _0x1f06ca[_0x3e00d3(0x9c3)] + _0x3e00d3(0xa3a) + _0x1f06ca[_0x3e00d3(0x3f2)][_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0xa38) + _0x1f06ca['id'] + _0x3e00d3(0x9e6) + moment(_0x1f06ca[_0x3e00d3(0x9fc)] * 0x3e8)['tz']('Africa/Harare')[_0x3e00d3(0x945)](_0x3e00d3(0xa03)) + '\x0a🔵\x20*MEMBERS\x20:*\x20' + _0x1f06ca['participants']['length'] + _0x3e00d3(0x4de);
                }
                _0x4b49f7[_0x3e00d3(0x5bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x5ca0d4, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x644):
            case _0x3e00d3(0x4f6):
            case _0x3e00d3(0x26a): {
                let _0x24995f = _0x9b834d && /\d+\-\d+@g.us/ [_0x3e00d3(0x2f1)](_0x9b834d[0x0]) ? _0x9b834d[0x0] : _0x3bbe8d[_0x3e00d3(0x5f1)],
                    _0x615dca = [...Object[_0x3e00d3(0x3e6)](_0x547772['presences'][_0x24995f]), _0xca02fb];
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x204) + _0x615dca[_0x3e00d3(0x56d)](_0x2381c5 => '🔵\x20@' + _0x2381c5[_0x3e00d3(0x449)](/@.+/, ''))[_0x3e00d3(0xbb1)] `\n`, _0x3bbe8d, {
                    'mentions': _0x615dca
                });
            }
            break;
            case _0x3e00d3(0x244):
            case _0x3e00d3(0x39f): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x91d));
                if (!_0x2d884d) return _0x53c8bd(_0x3e00d3(0xb7a) + (_0x440929 + _0x5a7691));
                if (/image/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                    let _0x26bf5a = await _0x2d884d[_0x3e00d3(0xbf4)](),
                        _0x439706 = await _0x4b49f7['sendImageAsSticker'](_0x3bbe8d['chat'], _0x26bf5a, _0x3bbe8d, {
                            'author': _0x153b74
                        });
                    await fs[_0x3e00d3(0x36a)](_0x439706);
                } else {
                    if (/video/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                        if ((_0x2d884d[_0x3e00d3(0x259)] || _0x2d884d)[_0x3e00d3(0xbe0)] > 0xb) return _0x53c8bd(_0x3e00d3(0x92c));
                        let _0x2d6bbb = await _0x2d884d[_0x3e00d3(0xbf4)](),
                            _0x3a5801 = await _0x4b49f7[_0x3e00d3(0x7b9)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2d6bbb, _0x3bbe8d, {
                                'author': _0x153b74
                            });
                        await fs[_0x3e00d3(0x36a)](_0x3a5801);
                    } else throw _0x3e00d3(0x91d);
                }
            }
            break;
            case _0x3e00d3(0x318): {
                _0x5ef4bf(mess[_0x3e00d3(0x42d)]);
                let {
                    UploadFileUgu: _0x45eaa2,
                    webp2mp4File: _0xd9b3e2,
                    TelegraPh: _0x2f7975
                } = require(_0x3e00d3(0x1f7)), _0x4411d0 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d);
                if (/image/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                    let _0x20bfe8 = await _0x2f7975(_0x4411d0);
                    _0x5ef4bf(util[_0x3e00d3(0x945)](_0x20bfe8));
                } else {
                    if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                        let _0x2f24fe = await _0x45eaa2(_0x4411d0);
                        _0x5ef4bf(util[_0x3e00d3(0x945)](_0x2f24fe));
                    }
                }
                await fs[_0x3e00d3(0x36a)](_0x4411d0);
            }
            break;
            case _0x3e00d3(0xc6a):
            case 'st':
            case _0x3e00d3(0xaeb):
            case _0x3e00d3(0x330): {
                if (!_0x2d884d) return _0x53c8bd(_0x3e00d3(0xb7a) + (_0x440929 + _0x5a7691));
                var _0x453732 = '';
                if (global['LANG'] == 'EN') _0x453732 = '*Maximum\x2010\x20seconds\x20videos\x20only!*';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x453732 = _0x3e00d3(0xac5);
                var _0x9dd8eb = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x9dd8eb = '*👸💬\x20වීඩියෝවකට\x20හෝ\x20ජායාරූපයකට\x20රිප්ලයි\x20ලබාදෙන්න\x20!*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x9dd8eb = _0x3e00d3(0x6e1);
                _0x4b49f7['sendText'](_0x3bbe8d['chat'], Lang[_0x3e00d3(0x8dc)]);
                if (/image/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                    let _0x20d565 = await _0x2d884d[_0x3e00d3(0xbf4)](),
                        _0x244804 = await _0x4b49f7[_0x3e00d3(0x56f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x20d565, _0x3bbe8d, {
                            'packname': global[_0x3e00d3(0x7f6)],
                            'author': _0x3bbe8d[_0x3e00d3(0x7a2)]
                        });
                    await fs[_0x3e00d3(0x36a)](_0x244804);
                } else {
                    if (/video/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                        if ((_0x2d884d[_0x3e00d3(0x259)] || _0x2d884d)[_0x3e00d3(0xbe0)] > 0xb) return _0x53c8bd(_0x453732);
                        let _0xb0f4c0 = await _0x2d884d[_0x3e00d3(0xbf4)](),
                            _0x25bc9d = await _0x4b49f7[_0x3e00d3(0x7b9)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0xb0f4c0, _0x3bbe8d, {
                                'packname': global['packname'],
                                'author': _0x3bbe8d[_0x3e00d3(0x7a2)]
                            });
                        await fs[_0x3e00d3(0x36a)](_0x25bc9d);
                    } else throw _0x9dd8eb;
                }
            }
            break;
            case 'attp': {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x8d0));
                try {
                    const _0x5bc827 = _0x3e00d3(0x4c4) + _0x153b74 + _0x3e00d3(0x532);
                    _0x4b49f7[_0x3e00d3(0x7b9)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x5bc827, _0x3bbe8d, {
                        'packname': global[_0x3e00d3(0x7f6)],
                        'author': _0x3bbe8d[_0x3e00d3(0x7a2)]
                    });
                } catch (_0x1f32d6) {
                    _0x5ef4bf('*error\x20😔*');
                }
            }
            break;
            case 'attp2': {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x8d0));
                const _0x131a9c = 'https://api.botcahx.biz.id/api/maker/attp?text=' + _0x153b74;
                await _0x4b49f7[_0x3e00d3(0x2bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x131a9c, '𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰', _0x3e00d3(0x7e1), _0x3bbe8d, {
                    'asSticker': !![]
                })['catch'](_0x4ce9c1 => _0x53c8bd(_0x4ce9c1));
            }
            break;
            case 'ttp': {
                try {
                    if (!_0x153b74) return _0x53c8bd('Need\x20some\x20word\x20\x0a\x20ex\x20-\x20ttp\x20Mr\x20nima');
                    await _0x4b49f7[_0x3e00d3(0x2bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x689) + _0x153b74, _0x3e00d3(0x23c), _0x3e00d3(0x7e1), _0x3bbe8d, {
                        'asSticker': !![]
                    })[_0x3e00d3(0x8c3)](_0x28f431 => _0x53c8bd(_0x28f431));
                } catch (_0x163cb8) {
                    _0x53c8bd(_0x163cb8);
                }
            }
            break;
            case _0x3e00d3(0xb7c): {
                try {
                    if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x20b));
                    const _0x41786f = await fetchJson(_0x3e00d3(0x2fd) + _0x153b74 + _0x3e00d3(0xc15))[_0x3e00d3(0x8c3)](_0x5a643d => _0x53c8bd('Error\x20🙂')),
                        _0x57b199 = _0x41786f[_0x3e00d3(0xb16)];
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                        'audio': {
                            'url': _0x57b199
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'ptt': !![]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                } catch (_0xb1ab96) {
                    console[_0x3e00d3(0x788)](_0xb1ab96);
                }
            }
            break;
            case _0x3e00d3(0x3c8): {
                if (!isUrl(_0x9b834d[0x0])) return _0x53c8bd(_0x3e00d3(0x238));
                const _0x21eea0 = await fetchJson(_0x3e00d3(0x981) + _0x153b74 + _0x3e00d3(0x661));
                _0x5ef4bf(_0x21eea0[_0x3e00d3(0xb16)]);
            }
            break;
            case _0x3e00d3(0x8e2): {
                if (!isUrl(_0x9b834d[0x0])) return _0x53c8bd('*👸💬\x20Please\x20Give\x20Me\x20a\x20Correct\x20Link*\x0a_Example\x20-\x20.short2\x20https://youtube.com/c/NIMAOFC\x20MY\x20YT\x20CHANNEL_');
                const _0x53ac1e = await fetchJson('https://api.botcahx.biz.id/api/linkshort/tinyurlwithalias?link=' + _0x9b834d[0x0] + _0x3e00d3(0x7fd) + _0x9b834d[0x1] + _0x3e00d3(0x661));
                _0x5ef4bf(_0x53ac1e[_0x3e00d3(0xb16)]);
            }
            break;
            case _0x3e00d3(0x1fa): {
                if (!_0x2d884d) return _0x53c8bd(_0x3e00d3(0x3fa));
                let _0x26d376 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d);
                const _0x36a34e = _0x3e00d3(0xa33) + _0x26d376 + _0x3e00d3(0x661);
                await fs['unlinkSync'](_0x26d376), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x36a34e,
                        'caption': global[_0x3e00d3(0x576)]
                    },
                    'gifPlayback': !![]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✨',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x289): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x153b74
                    },
                    'mimetype': _0x3e00d3(0xb0b)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x8f9): {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)] && !_0x153b74) throw 'Send/reply\x20text\x20with\x20caption\x20' + (_0x440929 + _0x5a7691);
                let {
                    eBinary: _0x12029b
                } = require(_0x3e00d3(0x88f)), _0x4695d1 = _0x153b74 ? _0x153b74 : _0x3bbe8d[_0x3e00d3(0xbad)] && _0x3bbe8d['quoted'][_0x3e00d3(0x5e0)] ? _0x3bbe8d['quoted'][_0x3e00d3(0x5e0)] : _0x3bbe8d[_0x3e00d3(0x5e0)], _0x41d84e = await _0x12029b(_0x4695d1);
                _0x53c8bd(_0x41d84e);
            }
            break;
            case 'dbinary': {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)] && !_0x153b74) throw _0x3e00d3(0xa41) + (_0x440929 + _0x5a7691);
                let {
                    dBinary: _0x267805
                } = require(_0x3e00d3(0x88f)), _0x2e33a4 = _0x153b74 ? _0x153b74 : _0x3bbe8d[_0x3e00d3(0xbad)] && _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)] ? _0x3bbe8d['quoted']['text'] : _0x3bbe8d[_0x3e00d3(0x5e0)], _0xfd654d = await _0x267805(_0x2e33a4);
                _0x53c8bd(_0xfd654d);
            }
            break;
            case 'emojimix': {
                var _0x4b79bc;
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4b79bc = _0x3e00d3(0xbc5) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xc68);
                if (global['LANG'] == 'SI') _0x4b79bc = _0x3e00d3(0x47c) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xc68);
                if (!_0x153b74) throw _0x4b79bc;
                let [_0x4a6bd9, _0x1e743c] = _0x153b74[_0x3e00d3(0x341)] `+`, _0x365857 = await fetchJson(_0x3e00d3(0x3d7) + encodeURIComponent(_0x4a6bd9) + '_' + encodeURIComponent(_0x1e743c));
                for (let _0x55062e of _0x365857['results']) {
                    let _0x1ea1b7 = await _0x4b49f7[_0x3e00d3(0x56f)](_0x3bbe8d['chat'], _0x55062e[_0x3e00d3(0x47e)], _0x3bbe8d, {
                        'packname': global[_0x3e00d3(0x7f6)],
                        'author': global[_0x3e00d3(0xb43)],
                        'categories': _0x55062e[_0x3e00d3(0x2a5)]
                    });
                    await fs['unlinkSync'](_0x1ea1b7);
                }
            }
            break;
            case 'photo':
            case _0x3e00d3(0x29d): {
                var _0x5ce22c;
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5ce22c = '*Please\x20reply\x20sticker*';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x5ce22c = '*කරුනාකර\x20ස්ටිකර්\x20එකකට\x20රිප්ලයි\x20කරන්න*';
                var _0x27ef90;
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x27ef90 = _0x3e00d3(0x46f);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x27ef90 = '*ඔබ\x20රිප්ලයි\x20කරන\x20ලද්දේ\x20ස්ටිකර්\x20එකකට\x20නොවේ\x20කරුනාකර\x20ස්ටිකර්\x20එකකට\x20රිප්ලයි\x20කරන්න*';
                if (!_0x2d884d) throw '*photo\x20එකකට\x20රිප්ලයි\x20කරන්න\x20!*';
                if (!/webp/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x5ce22c + '\x20*' + (_0x440929 + _0x5a7691) + '*';
                const _0x4b52bd = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang[_0x3e00d3(0x428)]);
                let _0x12d98b = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x4b52bd[_0x3e00d3(0x2da)]
                });
                let _0x4ba6eb = await getRandom('.png');
                exec(_0x3e00d3(0xbc9) + _0x12d98b + '\x20' + _0x4ba6eb, _0x2a6e06 => {
                    const _0x583a3d = _0x3e00d3;
                    fs[_0x583a3d(0x36a)](_0x12d98b);
                    if (_0x2a6e06) throw _0x2a6e06;
                    let _0x370285 = fs[_0x583a3d(0xab9)](_0x4ba6eb);
                    _0x4b49f7[_0x583a3d(0x69f)](_0x3bbe8d[_0x583a3d(0x5f1)], {
                        'image': _0x370285,
                        'caption': global[_0x583a3d(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    }), fs[_0x583a3d(0x36a)](_0x4ba6eb);
                });
            }
            break;
            case 'sticvid':
            case 'tomp4':
            case 'tovideo': {
                if (!_0x2d884d) throw _0x3e00d3(0xacd);
                if (!/webp/ [_0x3e00d3(0x2f1)](_0x253f71)) throw 'balas\x20stiker\x20dengan\x20caption\x20*' + (_0x440929 + _0x5a7691) + '*';
                const _0x4e2bfd = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang[_0x3e00d3(0x428)]);
                let {
                    webp2mp4File: _0x385200
                } = require('./lib/uploader'), _0x4f23bb = await _0x4b49f7['downloadAndSaveMediaMessage'](_0x2d884d), _0x4cf812 = await _0x385200(_0x4f23bb);
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x4cf812[_0x3e00d3(0xb16)],
                        'caption': global[_0x3e00d3(0x576)]
                    }
                }, {
                    'quoted': _0x3bbe8d
                }), await fs[_0x3e00d3(0x36a)](_0x4f23bb), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x4e2bfd[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x85e):
            case _0x3e00d3(0x975): {
                if (!/video/ ['test'](_0x253f71) && !/audio/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0x215) + (_0x440929 + _0x5a7691);
                if (!_0x2d884d) throw _0x3e00d3(0x250) + (_0x440929 + _0x5a7691);
                const _0x147fc7 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang['CONVER_TING']);
                let _0x5ac846 = await _0x2d884d[_0x3e00d3(0xbf4)](),
                    {
                        toAudio: _0x43b8e2
                    } = require(_0x3e00d3(0x4e7)),
                    _0x17a3d3 = await _0x43b8e2(_0x5ac846, _0x3e00d3(0x7ca));
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': _0x17a3d3,
                    'mimetype': _0x3e00d3(0xb0b)
                }, {
                    'quoted': _0x3bbe8d
                }), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x147fc7[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xc5e):
            case _0x3e00d3(0x5ec): {
                if (/document/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xa73) + (_0x440929 + _0x5a7691);
                if (!/video/ [_0x3e00d3(0x2f1)](_0x253f71) && !/audio/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xb1d) + (_0x440929 + _0x5a7691);
                if (!_0x2d884d) throw _0x3e00d3(0xb1d) + (_0x440929 + _0x5a7691);
                const _0x20d907 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang['CONVER_TING']);
                let _0x48d3fd = await _0x2d884d[_0x3e00d3(0xbf4)](),
                    {
                        toAudio: _0x5765f2
                    } = require(_0x3e00d3(0x4e7)),
                    _0xf90d52 = await _0x5765f2(_0x48d3fd, 'mp4');
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': _0xf90d52,
                    'mimetype': _0x3e00d3(0xb0b),
                    'fileName': _0x3e00d3(0xa57) + _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)] + '.mp3'
                }, {
                    'quoted': _0x3bbe8d
                }), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x20d907[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x9e0):
            case _0x3e00d3(0x2a1): {
                if (!/video/ [_0x3e00d3(0x2f1)](_0x253f71) && !/audio/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0x9eb) + (_0x440929 + _0x5a7691);
                if (!_0x2d884d) throw _0x3e00d3(0x9eb) + (_0x440929 + _0x5a7691);
                _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                let _0x60bb6d = await _0x2d884d[_0x3e00d3(0xbf4)](),
                    {
                        toPTT: _0x4c2b55
                    } = require(_0x3e00d3(0x4e7)),
                    _0x472838 = await _0x4c2b55(_0x60bb6d, 'mp4');
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': _0x472838,
                    'mimetype': _0x3e00d3(0xb0b),
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x9b7): {
                if (!_0x2d884d) throw _0x3e00d3(0xacd);
                if (!/webp/ ['test'](_0x253f71)) throw _0x3e00d3(0xc48) + (_0x440929 + _0x5a7691) + '*';
                const _0x5bc9ec = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], Lang['CONVER_TING']);
                let {
                    webp2mp4File: _0x505f6d
                } = require(_0x3e00d3(0x1f7)), _0x48fcce = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d), _0x582182 = await _0x505f6d(_0x48fcce);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': _0x582182[_0x3e00d3(0xb16)],
                        'caption': 'Convert\x20Webp\x20To\x20Video'
                    },
                    'gifPlayback': !![]
                }, {
                    'quoted': _0x3bbe8d
                }), await fs[_0x3e00d3(0x36a)](_0x48fcce), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x5bc9ec[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x831):
            case 'removebg':
            case _0x3e00d3(0x3a7): {
                if (!_0x2d884d) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (!/image/ ['test'](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (/webp/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                let _0x5e8ade = require(_0x3e00d3(0x284)),
                    _0x48cebb = ['uFexCoDgX9DYk4sgDYEmuE74', '5Cx1DPgcR54PVn5Z5WGGn64V', 'BEbDqa2mxYkgRC31Z7NCpdNa'],
                    _0x24a1b8 = global['REMOVE_BG_API'] || _0x48cebb[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x48cebb[_0x3e00d3(0x794)])];
                hmm = await _0x3e00d3(0x380) + getRandom(''), localFile = await _0x4b49f7['downloadAndSaveMediaMessage'](_0x2d884d, hmm), outputFile = await _0x3e00d3(0x575) + getRandom(_0x3e00d3(0xad9)), _0x2f1bc9(mess['wait']), _0x5e8ade[_0x3e00d3(0x6cd)]({
                    'path': localFile,
                    'apiKey': _0x24a1b8,
                    'size': _0x3e00d3(0x91f),
                    'type': 'auto',
                    'scale': _0x3e00d3(0xa48),
                    'outputFile': outputFile
                })['then'](async _0x191b4b => {
                    const _0x1b6f8a = _0x3e00d3;
                    _0x4b49f7[_0x1b6f8a(0x69f)](_0x3bbe8d[_0x1b6f8a(0x5f1)], {
                        'image': fs[_0x1b6f8a(0xab9)](outputFile),
                        'caption': mess[_0x1b6f8a(0x226)]
                    }, {
                        'quoted': _0x3bbe8d
                    }), await fs[_0x1b6f8a(0x36a)](localFile), await fs['unlinkSync'](outputFile);
                });
            }
            break;
            case _0x3e00d3(0x40b): {
                if (!_0x2d884d) throw 'Send/Reply\x20Image\x20With\x20Caption\x20' + (_0x440929 + _0x5a7691);
                if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                if (/webp/ ['test'](_0x253f71)) throw _0x3e00d3(0xc06) + (_0x440929 + _0x5a7691);
                const _0x1bac32 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x1bac32), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': 'https://api.akuari.my.id/other/removebg3?link=' + _0x1bac32
                    },
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                }), await fs[_0x3e00d3(0x36a)](_0x1bac32);
            }
            break;
            case _0x3e00d3(0x430):
            case _0x3e00d3(0x3ef): {
                if (!_0x153b74) return _0x53c8bd(Lang['EXAMPLE'] + '\x0a\x20_' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x683));
                let _0x3b5087 = require(_0x3e00d3(0xbcb)),
                    _0x2f6396 = await _0x3b5087(_0x153b74),
                    _0x484945 = _0x3e00d3(0xc55) + _0x153b74 + '\x0a\x0a',
                    _0x27787f = 0x1;
                for (let _0x463d3e of _0x2f6396[_0x3e00d3(0x69e)]) {
                    _0x484945 += _0x3e00d3(0x84a) + _0x27787f++ + _0x3e00d3(0xa4c) + _0x463d3e[_0x3e00d3(0x834)] + _0x3e00d3(0x52f) + _0x463d3e[_0x3e00d3(0xb74)] + _0x3e00d3(0x9cb) + _0x463d3e[_0x3e00d3(0x50b)] + _0x3e00d3(0x47a) + _0x463d3e[_0x3e00d3(0x5c0)] + _0x3e00d3(0x2ed) + _0x463d3e['timestamp'] + _0x3e00d3(0x639) + _0x463d3e[_0x3e00d3(0x35b)] + _0x3e00d3(0x625) + _0x463d3e['url'] + _0x3e00d3(0xa02);
                }
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2f6396['all'][0x0][_0x3e00d3(0x76a)]
                    },
                    'caption': _0x484945
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x766): {
                if (!_0x1904bf) return _0x5ef4bf(_0x3e00d3(0xc52));
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xc77);
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🍑',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x5eff15 = await fetchJson(_0x3e00d3(0x336) + _0x153b74),
                    _0x17b077 = _0x3e00d3(0x674) + _0x153b74 + '\x0a\x0a',
                    _0x28b565 = 0x1,
                    _0x185c80 = [];
                for (let _0x335f54 of _0x5eff15) {
                    const _0x2c3bf6 = {
                        'title': '💥\x20xɴxx\x20ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20💥',
                        'rows': [{
                            'title': _0x28b565++ + '\x20>\x20' + _0x335f54['title'],
                            'rowId': _0x3e00d3(0x919) + _0x335f54['link'],
                            'description': _0x3e00d3(0xb85) + _0x335f54[_0x3e00d3(0x50b)] + _0x3e00d3(0x638) + _0x335f54[_0x3e00d3(0x622)]
                        }]
                    };
                    _0x185c80[_0x3e00d3(0x748)](_0x2c3bf6);
                }
                const _0x4d763e = _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'text': _0x153b74 + _0x3e00d3(0x679) + _0x3bbe8d[_0x3e00d3(0x7a2)],
                    'footer': _0x3e00d3(0x38f),
                    'title': _0x3e00d3(0x1f5),
                    'buttonText': _0x3e00d3(0x9ab),
                    'sections': _0x185c80
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x55a): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🍑',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) throw Lang['EXAMPLE'] + '\x0a\x20:\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x590);
                let _0x4ec2b8 = await fetchJson('https://nimaxxx.herokuapp.com/api/srhx?q=' + _0x153b74),
                    _0x5d2e86 = '*🎭\x20XNXX\x20RESULTS\x20🎭*\x20' + _0x153b74 + '\x0a\x0a',
                    _0x17de48 = 0x1;
                for (let _0x260d2b of _0x4ec2b8) {
                    _0x5d2e86 += _0x3e00d3(0x84a) + _0x17de48++ + _0x3e00d3(0xba0) + _0x260d2b[_0x3e00d3(0x50b)] + _0x3e00d3(0x947) + _0x260d2b['duration'] + _0x3e00d3(0x2ca) + _0x260d2b[_0x3e00d3(0x3e1)] + _0x3e00d3(0xa02);
                }
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': 'https://telegra.ph/file/023d7602dcf73bd2638a6.jpg'
                    },
                    'caption': _0x5d2e86
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'xvideo': {
                if (SEX_DL == _0x3e00d3(0x52c)) {
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🔞',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x323);
                    let _0x50f2ed = await fetchJson(_0x3e00d3(0x873) + _0x153b74),
                        _0x20813f = _0x3e00d3(0x961) + _0x153b74 + '\x0a\x0a',
                        _0x369097 = 0x1;
                    const _0x2771c8 = _0x50f2ed[_0x3e00d3(0xb16)];
                    for (let _0x1f435a of _0x2771c8) {
                        _0x20813f += _0x3e00d3(0x84a) + _0x369097++ + _0x3e00d3(0xb63) + _0x1f435a[_0x3e00d3(0x50b)] + _0x3e00d3(0x5e2) + _0x1f435a[_0x3e00d3(0xa6e)] + _0x3e00d3(0x58c) + _0x1f435a[_0x3e00d3(0x3e1)] + _0x3e00d3(0xa02);
                    }
                    _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'image': {
                            'url': 'https://telegra.ph/file/1d4a15912ba140214fa37.jpg'
                        },
                        'caption': _0x20813f
                    }, {
                        'quoted': _0x3bbe8d
                    });
                } else _0x5ef4bf(_0x3e00d3(0xb78));
            }
            break;
            case _0x3e00d3(0xc0e): {
                if (SEX_DL == _0x3e00d3(0x52c)) {
                    if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x98b) + '```example\x20:\x20.downxvid\x20https://www.xvideos.com/video31785617/milf_jessryan_hot_video_clip_pussy_play_time```');
                    if (!_0x9b834d[0x0][_0x3e00d3(0x3d5)]('https://www.xvideos.com/')) return _0x53c8bd(_0x3e00d3(0x714) + '```example\x20:\x20.downxvid\x20https://www.xvideos.com/video31785617/milf_jessryan_hot_video_clip_pussy_play_time```');
                    await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x297) + _0x3bbe8d['pushName'] + '...*', _0x3bbe8d);
                    const _0x41e572 = await fetchJson(_0x3e00d3(0xb05) + _0x153b74),
                        _0x517cad = _0x41e572[_0x3e00d3(0xb16)]['files']['low'],
                        _0x26fc52 = _0x41e572[_0x3e00d3(0xb16)][_0x3e00d3(0xc32)];
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'image': {
                            'url': _0x26fc52
                        },
                        'caption': '┌\x20\x20\x20\x20\x20\x20\x20*༺\x20📥\x20\x20𝚇𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁\x20\x20📥\x20༻*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a│\x20*📡\x20ᴛɪᴛʟᴇ*\x20:\x20' + _0x41e572[_0x3e00d3(0xb16)][_0x3e00d3(0x50b)] + _0x3e00d3(0x942) + _0x41e572['result']['duration'] + _0x3e00d3(0xa2e) + _0x41e572[_0x3e00d3(0xb16)][_0x3e00d3(0x4ac)] + _0x3e00d3(0x264)
                    }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'video': {
                            'url': _0x517cad
                        },
                        'caption': _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20*XVIDEO\x20DOWNLOADED*'
                    }, {
                        'quoted': _0x3bbe8d
                    });
                } else _0x5ef4bf('*18+\x20DOWNLOAD\x20IS\x20DESABLE\x20BY\x20OWNER*');
            }
            break;
            case _0x3e00d3(0x741): {
                if (!_0x1904bf) throw _0x3e00d3(0x6ab);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🤤',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x863) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x548), _0x3bbe8d);
                const _0x55c506 = await axios[_0x3e00d3(0xb3f)](_0x3e00d3(0x4a7) + _0x153b74),
                    _0xb38bf5 = _0x55c506[_0x3e00d3(0x646)][_0x3e00d3(0x47e)],
                    _0x3295d7 = _0x55c506[_0x3e00d3(0x646)][_0x3e00d3(0x3fc)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x3295d7
                    },
                    'caption': _0x3e00d3(0xc05) + _0x55c506[_0x3e00d3(0x646)]['title'] + _0x3e00d3(0x942) + _0x55c506[_0x3e00d3(0x646)]['duration'] + _0x3e00d3(0x540) + _0x55c506[_0x3e00d3(0x646)]['quality'] + _0x3e00d3(0xc2b) + _0x55c506['data']['views'] + '\x0a\x20\x20\x20\x0a└───────────❍'
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0xb38bf5
                    },
                    'caption': _0x3e00d3(0xc83)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x862): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🤤',
                        'key': _0x3bbe8d['key']
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x2518f4 = await axios[_0x3e00d3(0xb3f)](_0x3e00d3(0x4a7) + _0x153b74),
                    _0xb41506 = _0x2518f4['data'][_0x3e00d3(0x47e)];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': _0xb41506
                    },
                    'caption': '*' + _0x2518f4[_0x3e00d3(0x646)][_0x3e00d3(0x50b)] + '*'
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x79c):
            case _0x3e00d3(0xc73): {
                let _0x394f19 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
                if (!_0x9b834d[0x0]) _0x53c8bd('Use\x20' + _0x440929 + _0x3e00d3(0x429) + Lang[_0x3e00d3(0x582)] + _0x3e00d3(0xbe8));
                if (!_0x394f19[_0x3e00d3(0x2f1)](_0x9b834d[0x0])) return _0x53c8bd(_0x3e00d3(0x3e1));
                let [, _0x105b16, _0x3746f9] = _0x9b834d[0x0]['match'](_0x394f19) || [];
                _0x3746f9 = _0x3746f9[_0x3e00d3(0x449)](/.git$/, '');
                let _0xfff891 = _0x3e00d3(0x96b) + _0x105b16 + '/' + _0x3746f9 + _0x3e00d3(0xa96),
                    _0x58a01b = '' + _0x105b16 + _0x3746f9;
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': _0xfff891
                    },
                    'fileName': _0x58a01b + _0x3e00d3(0x978),
                    'mimetype': _0x3e00d3(0x3e0)
                }, {
                    'quoted': _0x3bbe8d
                })[_0x3e00d3(0x8c3)](_0x1b50ca => _0x53c8bd(mess['error']));
            }
            break;
            case 'directvideo': {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x153b74
                    },
                    'caption': _0x3e00d3(0x5ef)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x565): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x153b74
                    },
                    'caption': '*If\x20you\x20want\x20Download\x20Hight\x20Qulity\x20Video\x20use\x20this\x20link*'
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xc50): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'audio': {
                        'url': _0x153b74
                    },
                    'mimetype': _0x3e00d3(0xb0b)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xc75): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'document': {
                        'url': _0x153b74
                    },
                    'mimetype': _0x3e00d3(0x230),
                    'fileName': _0x3e00d3(0x960)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'qr': {
                if (!_0x5ef7c8) throw mess['owner'];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x265)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x3e00d3(0x223)
                    },
                    'caption': _0x3e00d3(0xa39)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xa98):
            case 'genqr': {
                if (!_0x5ef7c8) throw mess['owner'];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d['key']
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x265));
                for (let _0x2fac43 = 0x0; _0x2fac43 < 0x5; _0x2fac43++) {
                    await sleep(0x5dc * 0xa), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'image': {
                            'url': 'https://Mr-Nima-Test.gahakola.repl.co'
                        },
                        'caption': _0x3e00d3(0x1e5)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                }
                return _0x53c8bd(_0x3e00d3(0x3da));
            }
            break;
            case 'google': {
                if (!_0x153b74) throw _0x3e00d3(0xbc5) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5d4);
                await fetchJson('https://api.akuari.my.id/search/google?query=' + _0x153b74)['then'](async _0x222ba0 => {
                    const _0x3ec673 = _0x3e00d3,
                        _0x4c75af = _0x222ba0[_0x3ec673(0xb16)];
                    let _0x2e8682 = _0x3ec673(0xa81) + _0x153b74 + '_\x0a\x0a';
                    for (let _0x332bdc of _0x4c75af) {
                        _0x2e8682 += _0x3ec673(0xb20) + _0x332bdc['title'] + '\x0a', _0x2e8682 += _0x3ec673(0x81f) + _0x332bdc[_0x3ec673(0x97c)] + '\x0a', _0x2e8682 += _0x3ec673(0x8a7) + _0x332bdc[_0x3ec673(0x3e1)] + '\x0a\x0a────────────────────────\x0a\x0a';
                    }
                    _0x53c8bd(_0x3ec673(0x557));
                })[_0x3e00d3(0x8c3)](_0x4ce15f => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xbfe): {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x84e) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0xa7b));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0xa67),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await fetchJson(_0x3e00d3(0x982) + _0x153b74)[_0x3e00d3(0x6e3)](async _0x5d9583 => {
                    const _0x97faa0 = _0x3e00d3,
                        _0x2f60f8 = _0x5d9583['result'],
                        _0x21fe27 = _0x2f60f8[Math[_0x97faa0(0xa8b)](Math[_0x97faa0(0xb4d)]() * _0x2f60f8[_0x97faa0(0x794)])],
                        _0x10d3ef = [{
                            'buttonId': 'img2\x20' + _0x153b74,
                            'buttonText': {
                                'displayText': _0x97faa0(0x953)
                            },
                            'type': 0x1
                        }];
                    let _0xce182b = {
                        'image': {
                            'url': _0x21fe27
                        },
                        'caption': global[_0x97faa0(0x576)],
                        'footer': global[_0x97faa0(0x673)],
                        'buttons': _0x10d3ef,
                        'headerType': 0x4
                    };
                    await _0x4b49f7[_0x97faa0(0x69f)](_0x3bbe8d[_0x97faa0(0x5f1)], _0xce182b, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x291cae => _0x53c8bd(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xaed):
            case _0x3e00d3(0xbcf):
            case 'pic': {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0xbdc));
                try {
                    const _0x229e37 = _0x153b74[_0x3e00d3(0x341)](',')[0x0] || _0x153b74,
                        _0x356571 = _0x153b74[_0x3e00d3(0x341)](',')[0x1] || 0x5,
                        _0x5642eb = await fetchJson(_0x3e00d3(0x982) + _0x229e37),
                        _0x20c3ac = _0x5642eb[_0x3e00d3(0xb16)];
                    for (let _0x3cc85c = 0x0; _0x3cc85c < _0x356571; _0x3cc85c++) {
                        await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                            'image': {
                                'url': _0x20c3ac[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x20c3ac['length'])]
                            },
                            'caption': global[_0x3e00d3(0x576)]
                        }, {
                            'quoted': _0x3bbe8d
                        });
                    }
                    return _0x5ef4bf(_0x3e00d3(0xa1e) + _0x356571 + _0x3e00d3(0xa94) + _0x229e37 + _0x3e00d3(0x8a8));
                } catch (_0x444c4f) {
                    _0x5ef4bf(NOT_FOUND);
                }
            }
            break;
            case _0x3e00d3(0xbcf):
            case _0x3e00d3(0x38b): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔍',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + '\x0a\x20:\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0xb38);
                let _0x2ba6be = require('g-i-s');
                _0x2ba6be(_0x153b74, async (_0x1b8294, _0x5a35ea) => {
                    const _0x324bad = _0x3e00d3;
                    n = _0x5a35ea, images = n[Math[_0x324bad(0xa8b)](Math['random']() * n[_0x324bad(0x794)])][_0x324bad(0x47e)];
                    const _0x59f588 = [{
                            'buttonId': _0x324bad(0x902) + _0x153b74,
                            'buttonText': {
                                'displayText': _0x324bad(0x953)
                            },
                            'type': 0x1
                        }],
                        _0x33c354 = {
                            'image': {
                                'url': images
                            },
                            'caption': '*𝚀𝚄𝙴𝙴𝙽\x20𝙴𝙻𝙸𝚂𝙰\x20𝙸𝙼𝙰𝙶𝙴\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*\x0a⦁\x20*𝚁𝙴𝚀𝚄𝙴𝚂𝚃*\x20:\x20' + _0x153b74 + _0x324bad(0x305) + images + _0x324bad(0x7d2) + _0x3bbe8d[_0x324bad(0x7a2)],
                            'footer': footer,
                            'buttons': _0x59f588,
                            'headerType': 0x4
                        };
                    _0x4b49f7[_0x324bad(0x69f)](_0x3bbe8d['chat'], _0x33c354, {
                        'quoted': _0x3bbe8d
                    });
                });
            }
            break;
            case _0x3e00d3(0x4f4):
            case 'yt': {
                var _0x377bd9 = '';
                if (global['LANG'] == 'SI') _0x377bd9 = _0x3e00d3(0x3d6);
                if (global['LANG'] == 'EN') _0x377bd9 = _0x3e00d3(0xadd);
                if (!_0x153b74) throw _0x377bd9;
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x524),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x2cc5fa = require('yt-search');
                var _0x2bf41b = _0x153b74[_0x3e00d3(0x449)](_0x3e00d3(0x28c), 'watch?v='),
                    _0x1da833 = _0x2bf41b['replace'](_0x3e00d3(0x92a), '');
                _0x2cc5fa(_0x1da833)[_0x3e00d3(0x6e3)](async _0x175055 => {
                    const _0x293e8d = _0x3e00d3;
                    let _0x174936 = _0x175055['all'];
                    if (_0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x834)] == _0x293e8d(0xb56)) {
                        const _0x439e15 = [{
                                'buttonId': _0x293e8d(0x531) + _0x175055[_0x293e8d(0x69e)][0x1]['url'],
                                'buttonText': {
                                    'displayText': _0x293e8d(0x3d9)
                                },
                                'type': 0x1
                            }, {
                                'buttonId': _0x293e8d(0x55d) + _0x175055['all'][0x1][_0x293e8d(0x47e)] + '\x20',
                                'buttonText': {
                                    'displayText': _0x293e8d(0x730)
                                },
                                'type': 0x1
                            }],
                            _0x26e3ff = {
                                'image': {
                                    'url': _0x175055[_0x293e8d(0x69e)][0x1][_0x293e8d(0x76a)]
                                },
                                'caption': _0x293e8d(0x958) + _0x175055[_0x293e8d(0x69e)][0x1][_0x293e8d(0x50b)] + _0x293e8d(0x9e8) + _0x175055['all'][0x1][_0x293e8d(0x5c0)] + _0x293e8d(0x695) + _0x175055['all'][0x1][_0x293e8d(0xc19)] + _0x293e8d(0x301) + _0x175055[_0x293e8d(0x69e)][0x1][_0x293e8d(0x35b)] + '\x0a\x0a\x20➥\x20ᴜʀʟ\x20-\x20' + _0x175055[_0x293e8d(0x69e)][0x1][_0x293e8d(0x47e)],
                                'footer': global['botnma'],
                                'buttons': _0x439e15,
                                'headerType': 0x4
                            };
                        _0x4b49f7[_0x293e8d(0x69f)](_0x3bbe8d[_0x293e8d(0x5f1)], _0x26e3ff, {
                            'quoted': _0x3bbe8d
                        });
                    } else {
                        if (_0x175055[_0x293e8d(0x69e)][0x0]['type'] == _0x293e8d(0x7c9)) {
                            let _0x38145d = _0x175055['all'];
                            const _0x5f378e = [{
                                    'buttonId': 'selecttypebutton\x20' + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x47e)],
                                    'buttonText': {
                                        'displayText': '🎬\x20VIDEO\x20🎬'
                                    },
                                    'type': 0x1
                                }, {
                                    'buttonId': _0x293e8d(0x55d) + _0x175055[_0x293e8d(0x69e)][0x0]['url'] + '\x20',
                                    'buttonText': {
                                        'displayText': _0x293e8d(0x730)
                                    },
                                    'type': 0x1
                                }],
                                _0x352516 = {
                                    'image': {
                                        'url': _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x76a)]
                                    },
                                    'caption': _0x293e8d(0x958) + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x50b)] + '\x0a\x0a\x20➥\x20ᴠɪᴇᴡs\x20-\x20' + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x5c0)] + '\x0a\x0a\x20➥\x20ᴅᴜʀᴀᴛɪᴏɴ\x20-\x20' + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0xc19)] + _0x293e8d(0x301) + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x35b)] + _0x293e8d(0x7b4) + _0x175055[_0x293e8d(0x69e)][0x0][_0x293e8d(0x47e)],
                                    'footer': global['botnma'],
                                    'buttons': _0x5f378e,
                                    'headerType': 0x4
                                };
                            _0x4b49f7[_0x293e8d(0x69f)](_0x3bbe8d[_0x293e8d(0x5f1)], _0x352516, {
                                'quoted': _0x3bbe8d
                            });
                        }
                    }
                });
            }
            break;
            case 'ytv': {
                const _0x210d24 = await fetchJson(_0x3e00d3(0x99c)),
                    _0x1bb873 = _0x210d24[_0x3e00d3(0xac4)],
                    _0x24cacd = _0x210d24[_0x3e00d3(0x49e)],
                    _0x1adfe9 = _0x210d24[_0x3e00d3(0x57c)],
                    _0x1b6e8c = _0x210d24['sdmiddlid'],
                    _0xfd2cc4 = _0x210d24[_0x3e00d3(0x8f0)];
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + '\x0a\x20:\x20*' + (_0x440929 + _0x5a7691) + '\x20How\x20to\x20make\x20Thivanka\x20Nirmal\x20V2*';
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x35e23d = require(_0x3e00d3(0xbcb));
                var _0x2bf41b = _0x153b74[_0x3e00d3(0x449)](_0x3e00d3(0x28c), 'watch?v='),
                    _0x1da833 = _0x2bf41b[_0x3e00d3(0x449)](_0x3e00d3(0x92a), '');
                _0x35e23d(_0x1da833)[_0x3e00d3(0x6e3)](async _0x347c18 => {
                    const _0x4a8e66 = _0x3e00d3;
                    for (let _0x12ce32 of _0x347c18['all']) views = _0x347c18[_0x4a8e66(0x69e)][0x0]['views'];
                    ngen = _0x4a8e66(0x745) + _0x347c18[_0x4a8e66(0x69e)][0x0]['title'] + '\x0a\x0a\x20➥\x20ᴠɪᴇᴡs\x20-\x20' + views + _0x4a8e66(0x695) + _0x347c18[_0x4a8e66(0x69e)][0x0]['timestamp'] + _0x4a8e66(0x301) + _0x347c18[_0x4a8e66(0x69e)][0x0]['ago'] + _0x4a8e66(0x7b4) + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x47e)];
                    const _0xf0a2fa = [{
                            'title': _0x4a8e66(0x7f5),
                            'rows': [{
                                'title': _0x4a8e66(0x51f),
                                'rowId': _0x1bb873 + '\x20' + _0x347c18['all'][0x0]['url'] + _0x4a8e66(0x9b8),
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }, {
                                'title': _0x4a8e66(0x99f),
                                'rowId': _0x24cacd + '\x20' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x47e)] + '\x20240p',
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }, {
                                'title': _0x4a8e66(0x3f5),
                                'rowId': _0x1adfe9 + '\x20' + _0x347c18[_0x4a8e66(0x69e)][0x0]['url'] + _0x4a8e66(0x6e5),
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }, {
                                'title': _0x4a8e66(0xb83),
                                'rowId': _0x1b6e8c + '\x20' + _0x347c18[_0x4a8e66(0x69e)][0x0]['url'] + _0x4a8e66(0x8b3),
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }, {
                                'title': '720P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢',
                                'rowId': _0xfd2cc4 + '\x20' + _0x347c18['all'][0x0][_0x4a8e66(0x47e)] + _0x4a8e66(0x54d),
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }, {
                                'title': '1080P\x20𝚀𝚞𝚊𝚕𝚒𝚝𝚢',
                                'rowId': _0x4a8e66(0x49b) + _0x347c18['all'][0x0][_0x4a8e66(0x47e)] + '\x201080p',
                                'description': '' + _0x347c18[_0x4a8e66(0x69e)][0x0][_0x4a8e66(0x50b)]
                            }]
                        }],
                        _0x3216d7 = {
                            'text': ngen,
                            'footer': global['botnma'],
                            'buttonText': _0x4a8e66(0xa07),
                            'sections': _0xf0a2fa
                        },
                        _0xeba3da = await _0x4b49f7[_0x4a8e66(0x69f)](_0x3bbe8d['chat'], _0x3216d7);
                })[_0x3e00d3(0x8c3)](_0x583e79 => _0x5ef4bf(_0x3e00d3(0x3f4))), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎦',
                        'key': _0x3bbe8d['key']
                    }
                }), await new Promise(_0x56dafe => setTimeout(_0x56dafe, 0x7d0)), await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '⏳',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0xbaa762 => setTimeout(_0xbaa762, 0x7d0)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎦',
                        'key': _0x3bbe8d['key']
                    }
                });
            }
            break;
            case _0x3e00d3(0x5a8): {
                var _0x377bd9 = '';
                if (global['LANG'] == 'SI') _0x377bd9 = '```👸💬\x20කරුනාකර\x20මට\x20ගීතයක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.song\x20rosa\x20male\x20natuwe\x20katu*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x377bd9 = _0x3e00d3(0xc2f);
                const _0x9b3315 = await fetchJson('https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json'),
                    _0x21b833 = _0x9b3315[_0x3e00d3(0x22a)],
                    _0x43d617 = _0x9b3315[_0x3e00d3(0x216)];
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess['wait'], _0x3bbe8d);
                let _0x1012c5 = require(_0x3e00d3(0xbcb));
                _0x1012c5(_0x153b74)[_0x3e00d3(0x6e3)](async _0x50622f => {
                    const _0x237258 = _0x3e00d3;
                    for (let _0xf46377 of _0x50622f[_0x237258(0x69e)])
                        if (_0x50622f[_0x237258(0x69e)]['length'] < 0x1) throw Lang[_0x237258(0xb2d)];
                    const _0x4a4c7f = global[_0x237258(0x673)],
                        _0x93b5e7 = [{
                            'buttonId': _0x43d617 + '\x20' + _0x50622f[_0x237258(0x69e)][0x0][_0x237258(0x47e)],
                            'buttonText': {
                                'displayText': _0x237258(0xa16)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x21b833 + '\x20\x20' + _0x50622f[_0x237258(0x69e)][0x0]['url'],
                            'buttonText': {
                                'displayText': _0x237258(0x730)
                            },
                            'type': 0x1
                        }],
                        _0x21c638 = {
                            'image': {
                                'url': _0x50622f['all'][0x0][_0x237258(0x76a)]
                            },
                            'caption': _0x237258(0xb69) + _0x50622f[_0x237258(0x69e)][0x0]['title'] + '\x0a\x0a\x20➥\x20ᴠɪᴇᴡs\x20-\x20' + _0x50622f[_0x237258(0x69e)][0x0][_0x237258(0x5c0)] + '\x0a\x0a\x20➥\x20ᴅᴜʀᴀᴛɪᴏɴ\x20-\x20' + _0x50622f[_0x237258(0x69e)][0x0]['timestamp'] + _0x237258(0x301) + _0x50622f['all'][0x0][_0x237258(0x35b)] + _0x237258(0x7b4) + _0x50622f[_0x237258(0x69e)][0x0][_0x237258(0x47e)],
                            'footer': _0x4a4c7f,
                            'buttons': _0x93b5e7,
                            'headerType': 0x4
                        };
                    _0x4b49f7[_0x237258(0x69f)](_0x3bbe8d[_0x237258(0x5f1)], _0x21c638, {
                        'quoted': _0x3bbe8d
                    });
                });
            }
            break;
            case _0x3e00d3(0x7c9): {
                const _0x60d776 = await fetchJson('https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json'),
                    _0x2a5bfd = _0x60d776[_0x3e00d3(0x57c)],
                    _0x1c4824 = _0x60d776['sdmiddlid'],
                    _0x377964 = _0x60d776[_0x3e00d3(0x8f0)];
                var _0x377bd9 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x377bd9 = _0x3e00d3(0x34b);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x377bd9 = _0x3e00d3(0x361);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📽️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                let _0x6ead6b = require(_0x3e00d3(0xbcb));
                var _0x2bf41b = _0x153b74[_0x3e00d3(0x449)](_0x3e00d3(0x28c), _0x3e00d3(0xa1b)),
                    _0x1da833 = _0x2bf41b[_0x3e00d3(0x449)](_0x3e00d3(0x92a), '');
                _0x6ead6b(_0x1da833)[_0x3e00d3(0x6e3)](async _0xe5f1cd => {
                    const _0x3bf84c = _0x3e00d3;
                    let _0x3fc043 = _0xe5f1cd['all'];
                    if (_0xe5f1cd[_0x3bf84c(0x69e)][0x0][_0x3bf84c(0x834)] == _0x3bf84c(0xb56)) {
                        const _0x4b9651 = [{
                                'buttonId': _0x2a5bfd + '\x20' + _0xe5f1cd['all'][0x1][_0x3bf84c(0x47e)],
                                'buttonText': {
                                    'displayText': _0x3bf84c(0x2bb)
                                },
                                'type': 0x1
                            }, {
                                'buttonId': _0x1c4824 + '\x20' + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x47e)] + '\x20480p',
                                'buttonText': {
                                    'displayText': _0x3bf84c(0x946)
                                },
                                'type': 0x1
                            }, {
                                'buttonId': _0x377964 + '\x20' + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x47e)] + '\x20720p',
                                'buttonText': {
                                    'displayText': _0x3bf84c(0x7a3)
                                },
                                'type': 0x1
                            }],
                            _0x574f84 = {
                                'image': {
                                    'url': _0xe5f1cd['all'][0x1][_0x3bf84c(0x76a)]
                                },
                                'caption': _0x3bf84c(0x9fa) + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x50b)] + _0x3bf84c(0x9e8) + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x5c0)] + _0x3bf84c(0x695) + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0xc19)] + '\x0a\x0a\x20➥\x20ᴜᴘʟᴏᴀᴅ\x20ᴏɴ\x20-\x20' + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x35b)] + _0x3bf84c(0x7b4) + _0xe5f1cd[_0x3bf84c(0x69e)][0x1][_0x3bf84c(0x47e)],
                                'footer': global['botnma'],
                                'buttons': _0x4b9651,
                                'headerType': 0x4
                            };
                        _0x4b49f7[_0x3bf84c(0x69f)](_0x3bbe8d[_0x3bf84c(0x5f1)], _0x574f84, {
                            'quoted': _0x3bbe8d
                        });
                    } else {
                        if (_0xe5f1cd[_0x3bf84c(0x69e)][0x0][_0x3bf84c(0x834)] == _0x3bf84c(0x7c9)) {
                            const _0x14b3e1 = await fetchJson(_0x3bf84c(0x99c)),
                                _0x3fc7ef = _0x14b3e1[_0x3bf84c(0x57c)],
                                _0x34965a = _0x14b3e1['sdmiddlid'],
                                _0xef66ec = _0x14b3e1[_0x3bf84c(0x8f0)];
                            let _0xb7e27e = _0xe5f1cd['all'];
                            const _0xff8f77 = [{
                                    'buttonId': _0x3fc7ef + '\x20' + _0xe5f1cd['all'][0x0][_0x3bf84c(0x47e)],
                                    'buttonText': {
                                        'displayText': _0x3bf84c(0x2bb)
                                    },
                                    'type': 0x1
                                }, {
                                    'buttonId': _0x34965a + '\x20' + _0xe5f1cd['all'][0x0]['url'] + _0x3bf84c(0x8b3),
                                    'buttonText': {
                                        'displayText': _0x3bf84c(0x946)
                                    },
                                    'type': 0x1
                                }, {
                                    'buttonId': _0xef66ec + '\x20' + _0xe5f1cd[_0x3bf84c(0x69e)][0x0]['url'] + _0x3bf84c(0x54d),
                                    'buttonText': {
                                        'displayText': _0x3bf84c(0x7a3)
                                    },
                                    'type': 0x1
                                }],
                                _0xdcd70c = {
                                    'image': {
                                        'url': _0xe5f1cd['all'][0x0][_0x3bf84c(0x76a)]
                                    },
                                    'caption': _0x3bf84c(0x9fa) + _0xe5f1cd[_0x3bf84c(0x69e)][0x0][_0x3bf84c(0x50b)] + _0x3bf84c(0x9e8) + _0xe5f1cd[_0x3bf84c(0x69e)][0x0]['views'] + _0x3bf84c(0x695) + _0xe5f1cd[_0x3bf84c(0x69e)][0x0][_0x3bf84c(0xc19)] + '\x0a\x0a\x20➥\x20ᴜᴘʟᴏᴀᴅ\x20ᴏɴ\x20-\x20' + _0xe5f1cd[_0x3bf84c(0x69e)][0x0]['ago'] + _0x3bf84c(0x7b4) + _0xe5f1cd['all'][0x0][_0x3bf84c(0x47e)],
                                    'footer': global[_0x3bf84c(0x673)],
                                    'buttons': _0xff8f77,
                                    'headerType': 0x4
                                };
                            _0x4b49f7[_0x3bf84c(0x69f)](_0x3bbe8d[_0x3bf84c(0x5f1)], _0xdcd70c, {
                                'quoted': _0x3bbe8d
                            });
                        }
                    }
                });
            }
            break;
            case _0x3e00d3(0x5e7): {
                var _0x377bd9 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x377bd9 = _0x3e00d3(0xc64);
                if (global['LANG'] == 'EN') _0x377bd9 = _0x3e00d3(0xa05);
                text1 = q[_0x3e00d3(0x341)](';')[0x0], text2 = q[_0x3e00d3(0x341)](';')[0x1], await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⌛',
                        'key': _0x3bbe8d['key']
                    }
                });
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                let _0x45a3bd = require(_0x3e00d3(0xbcb));
                const _0x313063 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], global[_0x3e00d3(0x6cc)], _0x3bbe8d);
                _0x45a3bd(_0x153b74)[_0x3e00d3(0x6e3)](async _0x5d7055 => {
                    const _0x4454aa = _0x3e00d3;
                    let _0x507eee = _0x5d7055[_0x4454aa(0x69e)],
                        _0x5ebea = await fetchJson(_0x4454aa(0x619) + _0x5d7055[_0x4454aa(0x69e)][0x0][_0x4454aa(0x47e)]);
                    _0x300b79 = await getBuffer(_0x5ebea[_0x4454aa(0xb16)][_0x4454aa(0x3fc)]), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x4454aa(0x5f1)], {
                        'delete': _0x313063[_0x4454aa(0x2da)]
                    });
                    const _0x255b10 = await _0x4b49f7['sendText'](_0x3bbe8d['chat'], global[_0x4454aa(0x57d)], _0x3bbe8d);
                    if (_0x5ebea[_0x4454aa(0xb16)][_0x4454aa(0x554)] >= 0x1d4c0) return _0x53c8bd(_0x4454aa(0x70b));
                    const _0x4c3d8e = await _0x4b49f7[_0x4454aa(0x69f)](_0x3bbe8d[_0x4454aa(0x5f1)], {
                        'document': {
                            'url': _0x5ebea[_0x4454aa(0xb16)]['mp3']
                        },
                        'mimetype': _0x4454aa(0xb0b),
                        'fileName': _0x5ebea[_0x4454aa(0xb16)][_0x4454aa(0xab7)] + '.mp3',
                        'quoted': _0x3bbe8d,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + _0x5ebea['result']['Title'],
                                'body': 'YOUTUBE\x20MP3',
                                'mediaType': 0x2,
                                'thumbnail': _0x300b79,
                                'mediaUrl': '' + _0x153b74,
                                'sourceUrl': '' + global[_0x4454aa(0x32f)]
                            }
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                        'delete': _0x255b10[_0x4454aa(0x2da)]
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x4c3d8e['key']
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x143cef => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x486): {
                var _0x377bd9 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x377bd9 = _0x3e00d3(0xc64);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x377bd9 = _0x3e00d3(0xa05);
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '⌛',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                let _0x340301 = require(_0x3e00d3(0xbcb));
                const _0xd0cbdb = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x6cc)], _0x3bbe8d);
                _0x340301(_0x153b74)[_0x3e00d3(0x6e3)](async _0x505290 => {
                    const _0x5ceb1a = _0x3e00d3;
                    let _0xc58bf8 = _0x505290[_0x5ceb1a(0x69e)],
                        _0x352d27 = await fetchJson(_0x5ceb1a(0x322) + _0x505290[_0x5ceb1a(0x69e)][0x0][_0x5ceb1a(0x47e)]);
                    _0x300b79 = await getBuffer(_0x352d27['result'][_0x5ceb1a(0x3fc)]), await _0x4b49f7[_0x5ceb1a(0x69f)](_0x3bbe8d[_0x5ceb1a(0x5f1)], {
                        'delete': _0xd0cbdb[_0x5ceb1a(0x2da)]
                    });
                    const _0x4601e8 = await _0x4b49f7['sendText'](_0x3bbe8d['chat'], global[_0x5ceb1a(0x57d)], _0x3bbe8d);
                    if (_0x352d27['result'][_0x5ceb1a(0x554)] >= 0x1d4c0) return _0x53c8bd('*FILE\x20SIZE\x20IS\x20BIG\x20!!!*');
                    const _0x5b33e8 = await _0x4b49f7[_0x5ceb1a(0x69f)](_0x3bbe8d[_0x5ceb1a(0x5f1)], {
                        'audio': {
                            'url': _0x352d27[_0x5ceb1a(0xb16)][_0x5ceb1a(0x5ec)]
                        },
                        'mimetype': _0x5ceb1a(0xb0b),
                        'fileName': _0x352d27[_0x5ceb1a(0xb16)]['Title'] + _0x5ceb1a(0xba5),
                        'quoted': _0x3bbe8d,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + _0x352d27[_0x5ceb1a(0xb16)]['Title'],
                                'body': 'YOUTUBE\x20MP3',
                                'mediaType': 0x2,
                                'thumbnail': _0x300b79,
                                'mediaUrl': '' + _0x153b74,
                                'sourceUrl': '' + global[_0x5ceb1a(0x32f)]
                            }
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x5ceb1a(0x69f)](_0x3bbe8d[_0x5ceb1a(0x5f1)], {
                        'delete': _0x4601e8[_0x5ceb1a(0x2da)]
                    }), await _0x4b49f7[_0x5ceb1a(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x5b33e8['key']
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x4489c3 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xab6): {
                var _0x377bd9 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x377bd9 = '```👸💬\x20කරුනාකර\x20මට\x20ගීතයක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.song3\x20lelena*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x377bd9 = '```👸💬\x20Please\x20give\x20me\x20a\x20song\x20name.```\x0a\x20*Example\x20-\x20.song3\x20lelena*';
                text1 = q[_0x3e00d3(0x341)](';')[0x0], text2 = q[_0x3e00d3(0x341)](';')[0x1], await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎧',
                        'key': _0x3bbe8d['key']
                    }
                });
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                let _0x3c58f6 = require(_0x3e00d3(0xbcb));
                const _0x61ce88 = await _0x4b49f7['sendText'](_0x3bbe8d['chat'], global[_0x3e00d3(0x6cc)], _0x3bbe8d);
                _0x3c58f6(_0x153b74)[_0x3e00d3(0x6e3)](async _0x5a9189 => {
                    const _0x7991cc = _0x3e00d3;
                    let _0x47e05b = _0x5a9189[_0x7991cc(0x69e)];
                    const _0x492820 = await fetchJson(_0x7991cc(0x1f0) + _0x5a9189['all'][0x0]['url'] + _0x7991cc(0x5d0)),
                        _0x48e630 = _0x492820[_0x7991cc(0x2ae)][_0x7991cc(0x2ae)];
                    await _0x4b49f7[_0x7991cc(0x69f)](_0x3bbe8d[_0x7991cc(0x5f1)], {
                        'delete': load[_0x7991cc(0x2da)]
                    });
                    const _0x3df343 = await _0x4b49f7[_0x7991cc(0xa97)](_0x3bbe8d['chat'], global[_0x7991cc(0x57d)], _0x3bbe8d);
                    if (text2 === 'audio') return await _0x4b49f7[_0x7991cc(0x69f)](_0x3bbe8d[_0x7991cc(0x5f1)], {
                        'audio': {
                            'url': _0x48e630
                        },
                        'mimetype': _0x7991cc(0xb0b),
                        'fileName': _0x492820[_0x7991cc(0x50b)] + _0x7991cc(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x7991cc(0x69f)](_0x3bbe8d[_0x7991cc(0x5f1)], {
                        'delete': _0x3df343['key']
                    });
                    await _0x4b49f7[_0x7991cc(0x69f)](_0x3bbe8d['chat'], {
                        'document': {
                            'url': _0x48e630
                        },
                        'mimetype': _0x7991cc(0xb0b),
                        'fileName': _0x492820[_0x7991cc(0x50b)] + _0x7991cc(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x7991cc(0x69f)](_0x3bbe8d[_0x7991cc(0x5f1)], {
                        'delete': _0x3df343[_0x7991cc(0x2da)]
                    });
                })['catch'](_0x5bfc4c => _0x5ef4bf(_0x5bfc4c));
            }
            break;
            case 'video3': {
                var _0x377bd9 = '';
                if (global['LANG'] == 'SI') _0x377bd9 = '```👸💬\x20කරුනාකර\x20මට\x20වීඩියෝවක\x20නමක්\x20ලබාදෙන්න.```\x0a*උදාහරණ\x20-\x20.yt\x20how\x20to\x20make\x20Thivanka\x20Nirmal\x20bot*';
                if (global['LANG'] == 'EN') _0x377bd9 = _0x3e00d3(0xadd);
                text1 = q['split'](';')[0x0], text2 = q[_0x3e00d3(0x341)](';')[0x1];
                if (!_0x153b74) return _0x53c8bd(_0x377bd9);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x42bfdc = require('yt-search'),
                    _0x2817f5 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '📥\x20Downloading\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x79e), _0x3bbe8d),
                    _0xd395a9 = await _0x42bfdc(_0x153b74),
                    _0x106764 = await fetchJson(_0x3e00d3(0xaaf) + _0xd395a9[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)]),
                    _0x5e2581 = global[_0x3e00d3(0x576)] + _0x3e00d3(0x860) + _0x106764[_0x3e00d3(0xb16)][_0x3e00d3(0x50b)] + _0x3e00d3(0xaf2) + _0xd395a9[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)] + _0x3e00d3(0x313),
                    _0x92674e = _0x106764['result'][_0x3e00d3(0x409)][_0x3e00d3(0x5b8)][0x0][_0x3e00d3(0x801)],
                    _0x4596f0 = _0x106764[_0x3e00d3(0xb16)][_0x3e00d3(0x409)][_0x3e00d3(0x5b8)][0x1][_0x3e00d3(0x801)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x2817f5[_0x3e00d3(0x2da)]
                });
                if (_0x153b74['split'](';')[0x1] == 'hd') {
                    if (_0x4596f0[_0x3e00d3(0x341)]('MB')[0x0] >= 0x6e) return _0x53c8bd(_0x3e00d3(0x718));
                    const _0x2b1cb9 = _0x106764[_0x3e00d3(0xb16)][_0x3e00d3(0x409)][_0x3e00d3(0x5b8)][0x1][_0x3e00d3(0x47e)],
                        _0x793833 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '*📤\x20Uploading\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x79e), _0x3bbe8d);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                        'video': {
                            'url': _0x2b1cb9
                        },
                        'mimetype': _0x3e00d3(0xc3f),
                        'jpegThumbnail': _0x300b79,
                        'caption': _0x5e2581
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    return;
                }
                if (_0x92674e['split']('MB')[0x0] >= 0x6e) return _0x53c8bd(_0x3e00d3(0x718));
                const _0x17079c = _0x106764[_0x3e00d3(0xb16)][_0x3e00d3(0x409)][_0x3e00d3(0x5b8)][0x0]['url'],
                    _0x46b664 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x99b) + _0x3bbe8d['pushName'] + _0x3e00d3(0x79e), _0x3bbe8d);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x17079c
                    },
                    'mimetype': 'video/mp4',
                    'jpegThumbnail': _0x300b79,
                    'caption': _0x5e2581
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x46b664[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x44f): {
                const _0x8bc6ca = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json');
                _0x300b79 = await getBuffer(_0x8bc6ca['YT_THUB']);
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x2d3));
                if (_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0x858))) {
                    const _0x2018d7 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x541);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x1dc309 = await fetchJson(_0x3e00d3(0x6eb) + _0x9b834d[0x0] + _0x3e00d3(0x2ef) + _0x2018d7);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d['key']
                        }
                    });
                    if (_0x1dc309[_0x3e00d3(0x7ca)]['size'][_0x3e00d3(0x341)]('MB')[0x0] >= 0x6e) return _0x5ef4bf('*FILE\x20SIZE\x20IS\x20BIG\x20!!!*');
                    const _0x293464 = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'video': {
                            'url': _0x1dc309[_0x3e00d3(0x7ca)][_0x3e00d3(0xbf4)]
                        },
                        'mimetype': _0x3e00d3(0xc3f),
                        'jpegThumbnail': _0x300b79,
                        'caption': global['cap'] + '\x0a\x0a\x20*🏷\x20title\x20:*️\x20' + _0x1dc309[_0x3e00d3(0x50b)] + _0x3e00d3(0xc70) + _0x2018d7 + 'p\x20'
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': _0x3e00d3(0x524),
                            'key': _0x293464[_0x3e00d3(0x2da)]
                        }
                    });
                } else {
                    _0x5ef4bf(mess[_0x3e00d3(0x42d)]);
                    const _0x52c5ca = require(_0x3e00d3(0xbcb)),
                        _0x3daf0c = await _0x52c5ca(_0x153b74),
                        _0xb0ab4b = _0x3daf0c[_0x3e00d3(0x69e)];
                    let _0x4a40f7 = [];
                    for (let _0x40a6b2 of _0xb0ab4b) {
                        const _0xec77a0 = {
                            'title': _0x3e00d3(0x483),
                            'rows': [{
                                'title': '' + _0x40a6b2[_0x3e00d3(0x50b)],
                                'rowId': _0x3e00d3(0x49b) + _0x40a6b2['url'] + '\x20',
                                'description': _0x3e00d3(0x792)
                            }, {
                                'title': '' + _0x40a6b2['title'],
                                'rowId': _0x3e00d3(0x49b) + _0x40a6b2[_0x3e00d3(0x47e)] + _0x3e00d3(0x5c6),
                                'description': _0x3e00d3(0x7c7)
                            }]
                        };
                        _0x4a40f7[_0x3e00d3(0x748)](_0xec77a0);
                    }
                    const _0x4c56cf = _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'text': _0x153b74 + '\x20*Here\x20is\x20the\x20list\x20of\x20videos,\x20click\x20the\x20button\x20below\x20to\x20choose*\x0a\x0a' + _0x3bbe8d['pushName'],
                        'footer': '' + global['botnma'],
                        'title': _0x3e00d3(0x3b8) + _0x153b74,
                        'buttonText': _0x3e00d3(0x9ab),
                        'sections': _0x4a40f7
                    }, {
                        'quoted': _0x3bbe8d
                    });
                }
            }
            break;
            case _0x3e00d3(0x9dc): {
                let _0x546505 = require(_0x3e00d3(0xc35));
                await _0x546505[_0x3e00d3(0x95a)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x27c537 => {
                    const _0x579830 = _0x3e00d3,
                        _0x4aafa3 = await _0x27c537[_0x579830(0x7c9)]['360p'][_0x579830(0xbf4)](),
                        _0x1d7257 = await _0x27c537[_0x579830(0x7c9)][_0x579830(0x67f)]['download'](),
                        _0x579847 = await _0x27c537['video'][_0x579830(0x7a3)]['download'](),
                        _0x9f27d0 = await _0x27c537[_0x579830(0x2ae)]['128kbps'][_0x579830(0xbf4)]();
                    await _0x4b49f7[_0x579830(0xa97)](_0x3bbe8d[_0x579830(0x5f1)], '\x0a360\x20' + _0x4aafa3 + _0x579830(0x260) + _0x579847 + _0x579830(0x2c2) + _0x1d7257 + _0x579830(0x411) + _0x9f27d0 + _0x579830(0x719) + jsonformat(_0x27c537));
                });
            }
            break;
            case _0x3e00d3(0xac1): {
                let _0x4dea13 = require(_0x3e00d3(0xc35));
                const _0x1e3761 = await _0x4dea13[_0x3e00d3(0x3ba)]('' + _0x153b74),
                    _0x544ff5 = await _0x4dea13['youtubedlv2']('' + _0x153b74),
                    _0x380dcd = await _0x4dea13['youtubedl3']('' + _0x153b74);
                _0x53c8bd(jsonformat(_0x1e3761) + '\x0a▷▷▷\x0a\x0a' + jsonformat(_0x544ff5) + '\x0a\x0a▷▷▷▷\x0a\x0a' + jsonformat(_0x380dcd) + '\x0a');
            }
            break;
            case _0x3e00d3(0x91e): {
                let _0x57e6fc = require(_0x3e00d3(0xc35));
                const _0x42eddc = await _0x57e6fc[_0x3e00d3(0xbc1)]('' + _0x153b74);
                _0x53c8bd('' + jsonformat(_0x42eddc));
            }
            break;
            case _0x3e00d3(0x7a9): {
                const _0x306a9e = _0x153b74[_0x3e00d3(0x341)](';')[0x0],
                    _0xaebb1c = _0x153b74[_0x3e00d3(0x341)](';')[0x1],
                    _0xb5eb23 = require(_0x3e00d3(0x37f)),
                    _0x5379db = await _0xb5eb23[_0x3e00d3(0x86d)]['youtube'][_0x3e00d3(0x984)](_0x306a9e),
                    _0x453bf9 = await _0xb5eb23[_0x3e00d3(0x86d)][_0x3e00d3(0x220)][_0x3e00d3(0xadb)](_0x306a9e),
                    _0x43698b = await _0xb5eb23[_0x3e00d3(0x86d)][_0x3e00d3(0x220)][_0x3e00d3(0x4b9)](_0xaebb1c),
                    _0x12fb5d = await _0xb5eb23['downloader'][_0x3e00d3(0x220)][_0x3e00d3(0xab2)](_0xaebb1c);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + jsonformat(_0x12fb5d)), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + jsonformat(_0x5379db)), await _0x4b49f7['sendText'](_0x3bbe8d['chat'], '' + jsonformat(_0x453bf9)), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + jsonformat(_0x43698b));
            }
            break;
            case _0x3e00d3(0x50d): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                const _0x13172b = require(_0x3e00d3(0xbcb)),
                    _0x24a4f3 = await _0x13172b('' + _0x9b834d[0x0]);
                let _0x427dab = require(_0x3e00d3(0xc35));
                await _0x427dab[_0x3e00d3(0x95a)](_0x24a4f3[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)])['then'](async _0x51eb3d => {
                    const _0x59b2be = _0x3e00d3,
                        _0x315324 = await _0x51eb3d[_0x59b2be(0x7c9)][_0x59b2be(0xb28)][_0x59b2be(0xbf4)](),
                        _0x344ecd = _0x51eb3d[_0x59b2be(0x7c9)][_0x59b2be(0xb28)][_0x59b2be(0x82e)];
                    if (_0x344ecd >= 0x1d4c0) return _0x5ef4bf(_0x59b2be(0x898));
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x59b2be(0x5f1)], {
                        'video': {
                            'url': _0x315324
                        },
                        'mimetype': _0x59b2be(0xc3f),
                        'caption': global['cap']
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x3ab1f7 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xaf5): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d['key']
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                const _0x41ffd3 = require(_0x3e00d3(0xbcb)),
                    _0x3b7c25 = await _0x41ffd3('' + _0x9b834d[0x0]);
                let _0x42c310 = require(_0x3e00d3(0xc35));
                await _0x42c310['youtubedlv2'](_0x3b7c25[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)])[_0x3e00d3(0x6e3)](async _0xc34502 => {
                    const _0x1a23d4 = _0x3e00d3,
                        _0x294a63 = await _0xc34502[_0x1a23d4(0x7c9)]['240p']['download'](),
                        _0x4f1c79 = _0xc34502[_0x1a23d4(0x7c9)][_0x1a23d4(0x67f)][_0x1a23d4(0x82e)];
                    if (_0x4f1c79 >= 0x1d4c0) return _0x5ef4bf(_0x1a23d4(0x898));
                    await _0x4b49f7[_0x1a23d4(0x69f)](_0x3bbe8d[_0x1a23d4(0x5f1)], {
                        'video': {
                            'url': _0x294a63
                        },
                        'mimetype': _0x1a23d4(0xc3f),
                        'caption': global[_0x1a23d4(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x111655 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x404): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                const _0x13fc79 = require('yt-search'),
                    _0x4c0c23 = await _0x13fc79(_0x153b74);
                let _0x26989a = require('@bochilteam/scraper');
                await _0x26989a['youtubedlv2'](_0x4c0c23['all'][0x0][_0x3e00d3(0x47e)])[_0x3e00d3(0x6e3)](async _0x4c76d6 => {
                    const _0x3e9420 = _0x3e00d3,
                        _0x174ecb = await _0x4c76d6[_0x3e9420(0x7c9)]['360p']['download'](),
                        _0x402148 = _0x4c76d6[_0x3e9420(0x7c9)][_0x3e9420(0x2bb)][_0x3e9420(0x82e)];
                    if (_0x402148 >= 0x1d4c0) return _0x5ef4bf(_0x3e9420(0x898));
                    await _0x4b49f7[_0x3e9420(0x69f)](_0x3bbe8d[_0x3e9420(0x5f1)], {
                        'video': {
                            'url': _0x174ecb
                        },
                        'mimetype': _0x3e9420(0xc3f),
                        'jpegThumbnail': _0x300b79,
                        'caption': global[_0x3e9420(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0x3ea931 => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x71e): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                const _0x4e6692 = require('yt-search'),
                    _0x22704c = await _0x4e6692(_0x153b74['split'](_0x3e00d3(0xc2a))[0x0]);
                let _0xce5010 = require(_0x3e00d3(0xc35));
                await _0xce5010[_0x3e00d3(0x95a)](_0x22704c[_0x3e00d3(0x69e)][0x0]['url'])[_0x3e00d3(0x6e3)](async _0x48d348 => {
                    const _0x3e3092 = _0x3e00d3,
                        _0x3fff31 = await _0x48d348[_0x3e3092(0x7c9)]['480p'][_0x3e3092(0xbf4)](),
                        _0x459b13 = _0x48d348[_0x3e3092(0x7c9)][_0x3e3092(0x946)][_0x3e3092(0x82e)];
                    if (_0x459b13 >= 0x1d4c0) return _0x5ef4bf(_0x3e3092(0x898));
                    await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                        'video': {
                            'url': _0x3fff31
                        },
                        'mimetype': 'video/mp4',
                        'caption': global[_0x3e3092(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })[_0x3e00d3(0x8c3)](_0xd04cfa => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x345): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                const _0xb5dec = require(_0x3e00d3(0xbcb)),
                    _0x1fe04c = await _0xb5dec('' + _0x9b834d[0x0]);
                let _0x8aabab = require(_0x3e00d3(0xc35));
                await _0x8aabab[_0x3e00d3(0x95a)](_0x1fe04c[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)])['then'](async _0x19c8ad => {
                    const _0x2cf206 = _0x3e00d3,
                        _0x463df2 = await _0x19c8ad['video']['720p'][_0x2cf206(0xbf4)](),
                        _0x487f5b = _0x19c8ad[_0x2cf206(0x7c9)]['720p'][_0x2cf206(0x82e)];
                    if (_0x487f5b >= 0x1d4c0) return _0x5ef4bf('*FILE\x20SIZE\x20IS\x20SO\x20BIG\x20!!!*');
                    await _0x4b49f7[_0x2cf206(0x69f)](_0x3bbe8d['chat'], {
                        'video': {
                            'url': _0x463df2
                        },
                        'mimetype': _0x2cf206(0xc3f),
                        'caption': global[_0x2cf206(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                })['catch'](_0x1b772a => _0x5ef4bf(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x6a6): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                const _0x1f7fbb = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], global['SONG_DOWN'], _0x3bbe8d),
                    _0x14d718 = require(_0x3e00d3(0xbcb)),
                    _0x172230 = await _0x14d718(_0x153b74),
                    _0x484342 = await getBuffer(_0x172230[_0x3e00d3(0x69e)][0x0]['thumbnail']),
                    _0x5f0715 = require(_0x3e00d3(0xc35));
                await _0x5f0715[_0x3e00d3(0x95a)](_0x172230[_0x3e00d3(0x69e)][0x0]['url'])[_0x3e00d3(0x6e3)](async _0x1c384c => {
                    const _0xfd6e9c = _0x3e00d3,
                        _0x4951b4 = await _0x1c384c[_0xfd6e9c(0x2ae)][_0xfd6e9c(0x822)][_0xfd6e9c(0xbf4)]();
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0xfd6e9c(0x5f1)], {
                        'delete': _0x1f7fbb[_0xfd6e9c(0x2da)]
                    });
                    const _0x4e33f7 = await _0x4b49f7[_0xfd6e9c(0xa97)](_0x3bbe8d[_0xfd6e9c(0x5f1)], global[_0xfd6e9c(0x57d)], _0x3bbe8d),
                        _0x34f36d = await _0x4b49f7[_0xfd6e9c(0x69f)](_0x3bbe8d[_0xfd6e9c(0x5f1)], {
                            'document': {
                                'url': _0x4951b4
                            },
                            'mimetype': 'audio/mpeg',
                            'fileName': _0x1c384c['title'] + '.mp3',
                            'quoted': _0x3bbe8d,
                            'contextInfo': {
                                'externalAdReply': {
                                    'title': '' + _0x1c384c[_0xfd6e9c(0x50b)],
                                    'body': 'YOUTUBE\x20MP3',
                                    'mediaType': 0x2,
                                    'thumbnail': _0x484342,
                                    'mediaUrl': '' + _0x153b74,
                                    'sourceUrl': '' + global[_0xfd6e9c(0x32f)]
                                }
                            }
                        }, {
                            'quoted': _0x3bbe8d
                        });
                    await _0x4b49f7[_0xfd6e9c(0x69f)](_0x3bbe8d['chat'], {
                        'delete': _0x4e33f7[_0xfd6e9c(0x2da)]
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x34f36d['key']
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x36a9a0 => _0x5ef4bf(_0x36a9a0));
            }
            break;
            case _0x3e00d3(0x36c): {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '⬇️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x499648 = require('yt-search'),
                    _0x2a3e3a = await _0x499648(_0x153b74),
                    _0x269e6f = require('@bochilteam/scraper');
                await _0x269e6f[_0x3e00d3(0x670)](_0x2a3e3a[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)])[_0x3e00d3(0x6e3)](async _0x32a6f1 => {
                    const _0x3dfa58 = _0x3e00d3,
                        _0x4aab9c = await _0x32a6f1[_0x3dfa58(0x2ae)][_0x3dfa58(0x4d6)]['download']();
                    await _0x4b49f7[_0x3dfa58(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3dfa58(0x2da)]
                        }
                    }), await _0x4b49f7[_0x3dfa58(0x69f)](_0x3bbe8d[_0x3dfa58(0x5f1)], {
                        'audio': {
                            'url': _0x4aab9c
                        },
                        'mimetype': 'audio/mpeg',
                        'fileName': _0x2a3e3a[_0x3dfa58(0x69e)][0x0]['title'] + _0x3dfa58(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x3dfa58(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3dfa58(0x2da)]
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x44e3db => _0x5ef4bf(_0x44e3db));
            }
            break;
            case 'audiosong3': {
                if (!_0x153b74) return _0x5ef4bf(_0x3e00d3(0x6c6));
                const _0x27dd63 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x6cc)], _0x3bbe8d),
                    _0x25f551 = require(_0x3e00d3(0xbcb)),
                    _0x3cd107 = await _0x25f551(_0x153b74),
                    _0x43b59b = await getBuffer(_0x3cd107[_0x3e00d3(0x69e)][0x0]['thumbnail']),
                    _0x1b0975 = require(_0x3e00d3(0xc35));
                await _0x1b0975[_0x3e00d3(0x95a)](_0x3cd107[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x47e)])['then'](async _0x244784 => {
                    const _0x2200df = _0x3e00d3,
                        _0x4602c7 = await _0x244784[_0x2200df(0x2ae)]['128kbps'][_0x2200df(0xbf4)]();
                    await _0x4b49f7[_0x2200df(0x69f)](_0x3bbe8d['chat'], {
                        'delete': _0x27dd63[_0x2200df(0x2da)]
                    });
                    const _0x56b9e9 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x2200df(0x5f1)], global[_0x2200df(0x57d)], _0x3bbe8d),
                        _0x3345fd = await _0x4b49f7[_0x2200df(0x69f)](_0x3bbe8d['chat'], {
                            'audio': {
                                'url': _0x4602c7
                            },
                            'mimetype': _0x2200df(0xb0b),
                            'fileName': _0x244784['title'] + _0x2200df(0xba5),
                            'quoted': _0x3bbe8d,
                            'contextInfo': {
                                'externalAdReply': {
                                    'title': '' + _0x244784['title'],
                                    'body': _0x2200df(0x4bd),
                                    'mediaType': 0x2,
                                    'thumbnail': _0x43b59b,
                                    'mediaUrl': '' + _0x153b74,
                                    'sourceUrl': '' + global[_0x2200df(0x32f)]
                                }
                            }
                        }, {
                            'quoted': _0x3bbe8d
                        });
                    await _0x4b49f7[_0x2200df(0x69f)](_0x3bbe8d[_0x2200df(0x5f1)], {
                        'delete': _0x56b9e9[_0x2200df(0x2da)]
                    }), await _0x4b49f7[_0x2200df(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x3345fd[_0x2200df(0x2da)]
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x9d6e68 => _0x5ef4bf(_0x9d6e68));
            }
            break;
            case _0x3e00d3(0xa1c): {
                let _0x17076b = require('@bochilteam/scraper');
                _0x17076b[_0x3e00d3(0x670)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0xa18f57 => {
                    _0x53c8bd('' + jsonformat(_0xa18f57));
                });
            }
            break;
            case _0x3e00d3(0x362): {
                let _0x21734a = require('@bochilteam/scraper');
                _0x21734a['youtubedl']('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x196072 => {
                    _0x53c8bd('' + jsonformat(_0x196072));
                });
            }
            break;
            case _0x3e00d3(0xa60): {
                let _0x354836 = require(_0x3e00d3(0xc35));
                _0x354836[_0x3e00d3(0x95a)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x2a562f => {
                    _0x53c8bd('' + jsonformat(_0x2a562f));
                });
            }
            break;
            case _0x3e00d3(0x385): {
                let _0x298bb7 = require(_0x3e00d3(0xc35));
                _0x298bb7[_0x3e00d3(0x8d1)](_0x153b74)['then'](async _0x4e040f => {
                    _0x53c8bd('' + jsonformat(_0x4e040f));
                });
            }
            break;
            case _0x3e00d3(0x7ae): {
                const _0x3c19d1 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global['SONG_DOWN'], _0x3bbe8d),
                    _0x4ac13e = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x57d)], _0x3bbe8d);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x3c19d1['key']
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': _0x153b74
                    },
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x4ac13e[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x386): {
                var _0x19d5fc = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x19d5fc = _0x3e00d3(0x837);
                if (global['LANG'] == 'EN') _0x19d5fc = _0x3e00d3(0x847);
                var _0x2dd9ee = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x2dd9ee = '*📤\x20ඔබගේ\x20විඩියෝව\x20ඔබවෙත\x20එවමින්\x20පවතී...*';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x2dd9ee = _0x3e00d3(0x7db);
                const _0x1f61c0 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x19d5fc, _0x3bbe8d),
                    _0x5e977c = await fetchJson(_0x3e00d3(0x869));
                _0x300b79 = await getBuffer(_0x5e977c[_0x3e00d3(0xaad)]);
                const _0x324ce3 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2dd9ee, _0x3bbe8d);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1f61c0[_0x3e00d3(0x2da)]
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x153b74
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x153b74 + _0x3e00d3(0xb80),
                    'jpegThumbnail': _0x300b79,
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x324ce3[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xc6b): {
                const _0x35b804 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], global[_0x3e00d3(0x6cc)], _0x3bbe8d);
                _0x300b79 = await getBuffer(thub['SF_THUB']);
                const _0xfb5840 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x57d)], _0x3bbe8d);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x35b804[_0x3e00d3(0x2da)]
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x153b74
                    },
                    'mimetype': _0x3e00d3(0xc3f),
                    'fileName': _0x153b74 + _0x3e00d3(0xb80),
                    'jpegThumbnail': _0x300b79,
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0xfb5840[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x82d): {
                const _0x268fa8 = require('yt-search');
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0xad6));
                if (_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0x220))) {
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎧',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x584d4a = require(_0x3e00d3(0xc35));
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x21bf9b = _0x153b74,
                        _0x2b1b7e = await _0x584d4a[_0x3e00d3(0x95a)](_0x21bf9b),
                        _0x2ada2b = await _0x2b1b7e['audio'][_0x3e00d3(0x822)][_0x3e00d3(0xbf4)]();
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    var _0x38b7e9 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'document': {
                            'url': _0x2ada2b
                        },
                        'mimetype': 'audio/mpeg',
                        'fileName': _0x2b1b7e[_0x3e00d3(0x50b)] + _0x3e00d3(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                } else {
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '🎧',
                            'key': _0x3bbe8d['key']
                        }
                    });
                    const _0x50bd1e = await _0x268fa8(_0x153b74);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d['key']
                        }
                    });
                    const {
                        title: _0x5937e0,
                        description: _0x4d3641,
                        thumbnail: _0x1a6934,
                        videoId: _0x195c02
                    } = _0x50bd1e;
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x5e88df = _0x3e00d3(0xb82) + _0x50bd1e[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0xb74)] + _0x3e00d3(0x5aa);
                    var _0x38b7e9 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'document': {
                            'url': _0x5e88df
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'fileName': _0x50bd1e['all'][0x0][_0x3e00d3(0x50b)] + _0x3e00d3(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                }
            }
            break;
            case _0x3e00d3(0x984):
            case _0x3e00d3(0x50f): {
                const _0x48b5ae = require(_0x3e00d3(0xbcb));
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0xad6));
                if (_0x153b74[_0x3e00d3(0x3d5)]('youtube')) {
                    const _0x4450d9 = require(_0x3e00d3(0xc35));
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x1a028c = _0x153b74,
                        _0x19a589 = await _0x4450d9[_0x3e00d3(0x95a)](_0x1a028c),
                        _0x1d9d57 = await getBuffer(_0x19a589[_0x3e00d3(0x76a)]),
                        _0x3c1342 = await _0x19a589['audio']['128kbps']['download']();
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    var _0x38b7e9 = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'document': {
                            'url': _0x3c1342
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'fileName': _0x19a589['title'] + _0x3e00d3(0xba5),
                        'quoted': _0x3bbe8d,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + _0x19a589[_0x3e00d3(0x50b)],
                                'body': _0x3e00d3(0x4bd),
                                'mediaType': 0x2,
                                'thumbnail': _0x1d9d57,
                                'mediaUrl': '' + _0x153b74,
                                'sourceUrl': '' + global[_0x3e00d3(0x32f)]
                            }
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d['key']
                        }
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                } else {
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x297a7a = await _0x48b5ae(_0x153b74),
                        {
                            title: _0x4bd4c0,
                            description: _0x32dbf8,
                            thumbnail: _0x59c320,
                            videoId: _0x4827c2
                        } = _0x297a7a;
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d['key']
                        }
                    });
                    const _0x5179ab = _0x3e00d3(0xb82) + _0x297a7a['all'][0x0][_0x3e00d3(0xb74)] + _0x3e00d3(0x5aa),
                        _0x50d071 = _0x3e00d3(0x626) + _0x297a7a[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)] + _0x3e00d3(0x2eb) + _0x297a7a[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0xb43)]['name'] + _0x3e00d3(0x6f0) + _0x297a7a[_0x3e00d3(0x69e)][0x0]['url'] + _0x3e00d3(0x721) + _0x297a7a['all'][0x0][_0x3e00d3(0x622)] + '\x0a\x0a' + global[_0x3e00d3(0x576)];
                    var _0x38b7e9 = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'document': {
                            'url': _0x5179ab
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'caption': _0x50d071,
                        'fileName': _0x297a7a[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0x50b)] + _0x3e00d3(0xba5)
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                }
            }
            break;
            case _0x3e00d3(0x2ae): {
                const _0x2e7d18 = require(_0x3e00d3(0xbcb));
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0xad6));
                if (_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0x220))) {
                    const _0x55fe99 = require(_0x3e00d3(0xc35));
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x377316 = _0x153b74,
                        _0x1303dc = await _0x55fe99[_0x3e00d3(0x95a)](_0x377316),
                        _0x57d44e = await getBuffer(_0x1303dc[_0x3e00d3(0x76a)]),
                        _0x2b2519 = _0x1303dc[_0x3e00d3(0x50b)],
                        _0x15cc8f = await _0x1303dc[_0x3e00d3(0x2ae)][_0x3e00d3(0x822)][_0x3e00d3(0xbf4)]();
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    var _0x38b7e9 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'audio': {
                            'url': _0x15cc8f
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'fileName': _0x2b2519 + _0x3e00d3(0xba5),
                        'quoted': _0x3bbe8d,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + _0x1303dc['title'],
                                'body': _0x3e00d3(0x4bd),
                                'mediaType': 0x2,
                                'thumbnail': _0x57d44e,
                                'mediaUrl': '' + _0x153b74,
                                'sourceUrl': '' + global[_0x3e00d3(0x32f)]
                            }
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                } else {
                    const _0x35dd98 = await _0x2e7d18(_0x153b74);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬇️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const {
                        title: _0x53ad45,
                        description: _0x41a8c4,
                        thumbnail: _0xdd4eba,
                        videoId: _0x3d8728
                    } = _0x35dd98;
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x3e4297 = _0x3e00d3(0xb82) + _0x35dd98[_0x3e00d3(0x69e)][0x0][_0x3e00d3(0xb74)] + _0x3e00d3(0x5aa);
                    var _0x38b7e9 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                        'audio': {
                            'url': _0x3e4297
                        },
                        'mimetype': _0x3e00d3(0xb0b),
                        'fileName': _0x35dd98[_0x3e00d3(0x69e)][0x0]['title'] + _0x3e00d3(0xba5),
                        'quoted': _0x3bbe8d,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': '' + _0x53ad45,
                                'body': _0x3e00d3(0x4bd),
                                'mediaType': 0x2,
                                'thumbnail': _0x300b79,
                                'mediaUrl': _0x3e00d3(0x767),
                                'sourceUrl': '' + global[_0x3e00d3(0x32f)]
                            }
                        }
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d['key']
                        }
                    }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '🎶',
                            'key': _0x38b7e9[_0x3e00d3(0x2da)]
                        }
                    });
                }
            }
            break;
            case _0x3e00d3(0x4e3): {
                const _0x1256c7 = await fetchJson(_0x3e00d3(0x99c)),
                    _0x13fdc4 = _0x1256c7[_0x3e00d3(0x57c)],
                    _0x462884 = _0x1256c7['sdmiddlid'],
                    _0xe3ddd4 = _0x1256c7[_0x3e00d3(0x8f0)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📽️',
                        'key': _0x3bbe8d['key']
                    }
                }), (YTMASS = _0x3e00d3(0x591), buttons = [{
                    'buttonId': _0x13fdc4 + '\x20' + _0x153b74,
                    'buttonText': {
                        'displayText': _0x3e00d3(0x2bb)
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x462884 + '\x20' + _0x153b74 + _0x3e00d3(0x8b3),
                    'buttonText': {
                        'displayText': '480p'
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0xe3ddd4 + '\x20' + _0x153b74,
                    'buttonText': {
                        'displayText': '720p'
                    },
                    'type': 0x1
                }]), await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], buttons, YTMASS, _0x3e00d3(0x82f), _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xa28): {
                const _0x5dfde8 = await fetchJson('https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json'),
                    _0x5d6904 = _0x5dfde8[_0x3e00d3(0x22a)],
                    _0xf660e3 = _0x5dfde8[_0x3e00d3(0x216)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎧',
                        'key': _0x3bbe8d['key']
                    }
                }), (YTMASS = '\x0a\x0a╭───[\x20\x20*ᴇʟɪsᴀ\x20ʙᴏᴛ*\x20\x20]───◉\x0a│\x0a│\x20\x20🎬\x20ʏᴛ\x20\x20sᴏɴɢ\x20ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20🎬\x0a│\x20\x0a│\x20➧\x20sᴇʟᴇᴄᴛ\x20ʏᴏᴜʀ\x20sᴏɴɢ\x20ᴛʏᴘᴇ\x0a│\x0a╰──────◉\x0a', buttons = [{
                    'buttonId': _0xf660e3 + '\x20' + _0x153b74,
                    'buttonText': {
                        'displayText': '📁\x20DOCUMENT\x20📁'
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x5d6904 + '\x20' + _0x153b74,
                    'buttonText': {
                        'displayText': _0x3e00d3(0x730)
                    },
                    'type': 0x1
                }]), await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], buttons, YTMASS, '𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈\x20𝙴𝙻𝙸𝚂𝙰\x20𝙱𝙾𝚃\x20', _0x3bbe8d);
            }
            break;
            case 'ytmp4': {
                const _0x2897c8 = await fetchJson(_0x3e00d3(0x869)),
                    _0x46aa02 = await getBuffer(_0x2897c8['YT_THUB']);
                if (!_0x153b74) return _0x53c8bd('*👸💬\x20Need\x20youtube\x20url*\x20\x0a' + _0x3e00d3(0x7f8));
                if (!_0x153b74[_0x3e00d3(0x3d5)]('https://youtu')) return _0x53c8bd('*👸💬\x20Need\x20youtube\x20url*\x20\x0a' + _0x3e00d3(0x7f8));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⬇️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x3dab82 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb);
                const _0x4baa50 = _0x9b834d[0x0];
                let _0x19afc2 = require(_0x3e00d3(0xc35));
                await _0x19afc2[_0x3e00d3(0x95a)](_0x4baa50)[_0x3e00d3(0x6e3)](async _0x16bc7a => {
                    const _0x52631a = _0x3e00d3,
                        _0x2dea13 = await _0x16bc7a[_0x52631a(0x7c9)][_0x3dab82][_0x52631a(0xbf4)](),
                        _0x4e632f = _0x16bc7a[_0x52631a(0x7c9)][_0x3dab82][_0x52631a(0x82e)];
                    if (_0x4e632f >= 0x1d4c0) return _0x53c8bd(_0x52631a(0x898));
                    await _0x4b49f7[_0x52631a(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x52631a(0x2da)]
                        }
                    });
                    const _0x2b2edb = await _0x4b49f7[_0x52631a(0x69f)](_0x3bbe8d[_0x52631a(0x5f1)], {
                        'video': {
                            'url': _0x2dea13
                        },
                        'mimetype': _0x52631a(0xc3f),
                        'fileName': _0x16bc7a[_0x52631a(0x50b)] + _0x52631a(0xb80),
                        'jpegThumbnail': _0x46aa02,
                        'caption': global[_0x52631a(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x52631a(0x69f)](_0x3e5538, {
                        'react': {
                            'text': _0x52631a(0x524),
                            'key': _0x2b2edb['key']
                        }
                    }), await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d['key']
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x5063c5 => _0x53c8bd(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0x254):
            case _0x3e00d3(0xc39): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x524),
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x433046 = await fetchJson(_0x3e00d3(0x869));
                _0x300b79 = await getBuffer(_0x433046[_0x3e00d3(0xbd0)]);
                let {
                    ytv: _0x1903f3
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) return _0x53c8bd(Lang[_0x3e00d3(0x582)] + '\x0a\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x63e));
                const _0x2fd057 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d);
                let _0x183a0a = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb);
                await _0x1903f3(_0x153b74, _0x183a0a)[_0x3e00d3(0x6e3)](async _0x231330 => {
                    const _0x2d9a7c = _0x3e00d3;
                    _0x300b79 = await getBuffer(_0x433046[_0x2d9a7c(0xbd0)]);
                    if (_0x231330['filesize'] >= 0x186a0) {
                        const _0x4abd1f = _0x2d9a7c(0xb79) + _0x231330[_0x2d9a7c(0x50b)] + _0x2d9a7c(0xa71) + _0x231330[_0x2d9a7c(0x2c5)] + '\x0a',
                            _0x3797ed = [{
                                'index': 0x1,
                                'urlButton': {
                                    'displayText': _0x2d9a7c(0x769),
                                    'url': _0x231330[_0x2d9a7c(0x39b)] + _0x2d9a7c(0xb80)
                                }
                            }, {
                                'index': 0x2,
                                'urlButton': {
                                    'displayText': 'ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴘᴜʙʟɪᴄ',
                                    'url': _0x2d9a7c(0x8e1)
                                }
                            }],
                            _0x341bce = {
                                'text': _0x4abd1f,
                                'footer': global['botnma'],
                                'templateButtons': _0x3797ed
                            };
                        return await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x2d9a7c(0x5f1)], _0x341bce, {
                            'quoted': _0x3bbe8d
                        });
                    }
                    await _0x4b49f7[_0x2d9a7c(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x2d9a7c(0x2da)]
                        }
                    }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x2d9a7c(0x5f1)], {
                        'video': {
                            'url': _0x231330[_0x2d9a7c(0x39b)]
                        },
                        'mimetype': _0x2d9a7c(0xc3f),
                        'fileName': _0x231330[_0x2d9a7c(0x50b)] + '.mp4',
                        'jpegThumbnail': _0x300b79,
                        'caption': global[_0x2d9a7c(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    })[_0x2d9a7c(0x8c3)](_0x3fe1af => _0x5ef4bf(_0x2d9a7c(0x3b0))), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x2d9a7c(0x5f1)], {
                        'delete': _0x2fd057['key']
                    });
                })[_0x3e00d3(0x8c3)](_0x4ce6b2 => _0x5ef4bf(NOT_FOUND)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d['key']
                    }
                });
            }
            break;
            case _0x3e00d3(0x283):
            case _0x3e00d3(0x7af): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🎥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), AGAINTRY = _0x3e00d3(0xa4b), buttons = [{
                    'buttonId': _0x3e00d3(0x65a) + _0x153b74,
                    'buttonText': {
                        'displayText': _0x3e00d3(0xa7f)
                    },
                    'type': 0x1
                }];
                const _0x3b4899 = {
                    'text': AGAINTRY,
                    'footer': _0x3bbe8d['pushName'] + _0x3e00d3(0x941),
                    'buttons': buttons,
                    'headerType': 0x2
                };
                let {
                    ytv: _0xaced14
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x8de);
                const _0x109228 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)], _0x3bbe8d);
                let _0x181b6e = _0x9b834d[0x1] ? _0x9b834d[0x1] : '360p';
                await _0xaced14(_0x153b74, _0x181b6e)['then'](async _0x5dbb15 => {
                    const _0x5dd0e0 = _0x3e00d3;
                    await _0x4b49f7['sendText'](_0x3bbe8d[_0x5dd0e0(0x5f1)], _0x5dd0e0(0x1f8) + _0x3bbe8d[_0x5dd0e0(0x7a2)] + _0x5dd0e0(0x850));
                    if (_0x5dbb15[_0x5dd0e0(0x2c5)] >= 0x186a0) {
                        const _0x276e67 = '*⛔\x20FILE\x20SIZE\x20UP\x20TO\x20100MB\x20⛔*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ғɪʟᴇ\x20ɴᴀᴍᴇ\x20:*\x20' + _0x5dbb15[_0x5dd0e0(0x50b)] + _0x5dd0e0(0xa71) + _0x5dbb15[_0x5dd0e0(0x2c5)] + '\x0a\x0a',
                            _0x130252 = [{
                                'index': 0x1,
                                'urlButton': {
                                    'displayText': 'DOWNLOAD\x20ON\x20WEB',
                                    'url': _0x5dbb15[_0x5dd0e0(0x39b)] + _0x5dd0e0(0xb80)
                                }
                            }, {
                                'index': 0x2,
                                'urlButton': {
                                    'displayText': _0x5dd0e0(0x4fb),
                                    'url': _0x5dd0e0(0x8e1)
                                }
                            }],
                            _0x3732af = {
                                'text': _0x276e67,
                                'footer': global[_0x5dd0e0(0x673)],
                                'templateButtons': _0x130252
                            };
                        return await _0x4b49f7[_0x5dd0e0(0x69f)](_0x3bbe8d[_0x5dd0e0(0x5f1)], _0x3732af, {
                            'quoted': _0x3bbe8d
                        });
                    }
                    await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                        'delete': _0x109228[_0x5dd0e0(0x2da)]
                    });
                    const _0x4ed0ae = await _0x4b49f7[_0x5dd0e0(0x69f)](_0x3bbe8d[_0x5dd0e0(0x5f1)], _0x3b4899, {
                        'quoted': _0x3bbe8d
                    });
                    await _0x4b49f7[_0x5dd0e0(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x5dd0e0(0x2da)]
                        }
                    }), _0x4b49f7[_0x5dd0e0(0x69f)](_0x3bbe8d['chat'], {
                        'video': {
                            'url': _0x5dbb15[_0x5dd0e0(0x39b)]
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x5dbb15[_0x5dd0e0(0x50b)] + '.mp4',
                        'caption': global[_0x5dd0e0(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x5dd0e0(0x5f1)], {
                        'delete': _0x4ed0ae[_0x5dd0e0(0x2da)]
                    });
                })[_0x3e00d3(0x8c3)](_0x5ec4a5 => _0x5ef4bf(NOT_FOUND)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d['key']
                    }
                });
            }
            break;
            case _0x3e00d3(0x8cd):
            case _0x3e00d3(0x73f): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d['key']
                    }
                });
                let {
                    ytv: _0x8c332d
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x8de);
                let _0x5d359f = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb),
                    _0x376284 = await _0x8c332d(_0x153b74, _0x5d359f);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x1f8) + _0x3bbe8d['pushName'] + _0x3e00d3(0x850));
                if (_0x376284['filesize'] >= 0x186a0) {
                    const _0xe63f02 = _0x3e00d3(0xb79) + _0x376284[_0x3e00d3(0x50b)] + _0x3e00d3(0xa71) + _0x376284[_0x3e00d3(0x2c5)] + '\x0a',
                        _0x365eaa = [{
                            'index': 0x1,
                            'urlButton': {
                                'displayText': _0x3e00d3(0x769),
                                'url': _0x376284[_0x3e00d3(0x39b)] + _0x3e00d3(0xb80)
                            }
                        }, {
                            'index': 0x2,
                            'urlButton': {
                                'displayText': _0x3e00d3(0x4fb),
                                'url': _0x3e00d3(0x8e1)
                            }
                        }],
                        _0x25c23b = {
                            'text': _0xe63f02,
                            'footer': global[_0x3e00d3(0x673)],
                            'templateButtons': _0x365eaa
                        };
                    return await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x25c23b, {
                        'quoted': _0x3bbe8d
                    });
                }
                var _0x22656a = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x450));
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': _0x376284[_0x3e00d3(0x39b)]
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x376284[_0x3e00d3(0x50b)] + _0x3e00d3(0xb80),
                    'caption': global['cap']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x84f):
            case _0x3e00d3(0xa82): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📽️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let {
                    ytv: _0x5e666b
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x8de);
                const _0x1f8d20 = await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔄',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x5ad119 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb),
                    _0x19b83e = await _0x5e666b(_0x153b74, _0x5ad119);
                if (_0x19b83e['filesize'] >= 0x186a0) {
                    const _0x40d734 = _0x3e00d3(0xb79) + _0x19b83e[_0x3e00d3(0x50b)] + _0x3e00d3(0xa71) + _0x19b83e[_0x3e00d3(0x2c5)] + '\x0a',
                        _0x31baf1 = [{
                            'index': 0x1,
                            'urlButton': {
                                'displayText': 'DOWNLOAD\x20ON\x20WEB',
                                'url': _0x19b83e[_0x3e00d3(0x39b)] + '.mp4'
                            }
                        }, {
                            'index': 0x2,
                            'urlButton': {
                                'displayText': _0x3e00d3(0x4fb),
                                'url': _0x3e00d3(0x8e1)
                            }
                        }],
                        _0x2684c4 = {
                            'text': _0x40d734,
                            'footer': global[_0x3e00d3(0x673)],
                            'templateButtons': _0x31baf1
                        };
                    return await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2684c4, {
                        'quoted': _0x3bbe8d
                    });
                }
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⬆️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x19b83e[_0x3e00d3(0x39b)]
                    },
                    'mimetype': _0x3e00d3(0xc3f),
                    'fileName': _0x19b83e['title'] + _0x3e00d3(0xb80),
                    'caption': global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d['key']
                    }
                });
            }
            break;
            case _0x3e00d3(0x80f): {
                let {
                    yta: _0x378ec2
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) throw Lang['EXAMPLE'] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x201';
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd('Reply\x20Message');
                if (!_0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x94f)]) throw _0x3e00d3(0x539);
                let _0x40a139 = _0x2d884d[_0x3e00d3(0x5e0)][_0x3e00d3(0xb50)](new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
                if (!_0x40a139) throw _0x3e00d3(0x406);
                let _0x3743c6 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x633),
                    _0x3ae93a = await _0x378ec2(_0x40a139[_0x153b74 - 0x1], _0x3743c6);
                if (_0x3ae93a[_0x3e00d3(0x2c5)] >= 0xf423f) return _0x53c8bd('Audio\x20size\x20is\x20too\x20big\x20' + util[_0x3e00d3(0x945)](_0x3ae93a));
                _0x4b49f7[_0x3e00d3(0x9d6)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3ae93a[_0x3e00d3(0x3fc)], _0x3e00d3(0x887) + _0x3ae93a[_0x3e00d3(0x50b)] + _0x3e00d3(0x693) + _0x3ae93a[_0x3e00d3(0x394)] + _0x3e00d3(0x280) + isUrl(_0x153b74) + _0x3e00d3(0x8e5) + (_0x9b834d[0x1] || _0x3e00d3(0x633)), _0x3bbe8d), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3ae93a[_0x3e00d3(0x39b)]
                    },
                    'mimetype': _0x3e00d3(0xb0b),
                    'fileName': _0x3ae93a['title'] + '.mp3'
                }, {
                    'quoted': _0x3bbe8d
                })[_0x3e00d3(0x8c3)](_0x56a99c => _0x5ef4bf(_0x3e00d3(0x3b0)));
            }
            break;
            case _0x3e00d3(0x404): {
                let {
                    ytv: _0xac60d0
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) throw Lang['EXAMPLE'] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x201';
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd('Reply\x20To\x20A\x20Message\x20That\x20Has\x20Been\x20Already\x20Sent');
                if (!_0x3bbe8d['quoted'][_0x3e00d3(0x94f)]) throw 'Hanya\x20Bisa\x20Membalas\x20Pesan\x20Dari\x20Bot';
                let _0x533df8 = _0x2d884d[_0x3e00d3(0x5e0)][_0x3e00d3(0xb50)](new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
                if (!_0x533df8) throw _0x3e00d3(0x6e0);
                let _0x3ecb50 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb),
                    _0x2d5584 = await _0xac60d0(_0x533df8[_0x153b74 - 0x1], _0x3ecb50);
                if (_0x2d5584[_0x3e00d3(0x2c5)] >= 0x186a0) return _0x53c8bd(_0x3e00d3(0x768) + util['format'](_0x2d5584));
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x2d5584[_0x3e00d3(0x39b)]
                    },
                    'mimetype': _0x3e00d3(0xc3f),
                    'fileName': _0x2d5584['title'] + _0x3e00d3(0xb80),
                    'caption': '🔮\x20𝗧𝗜𝗧𝗟𝗘\x20:\x20' + _0x2d5584[_0x3e00d3(0x50b)] + _0x3e00d3(0x693) + _0x2d5584[_0x3e00d3(0x394)] + _0x3e00d3(0x280) + isUrl(_0x153b74) + '\x0a🔮\x20𝗘𝗫𝗧\x20:\x20MP3\x0a🔮\x20𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡\x20:\x20' + (_0x9b834d[0x1] || _0x3e00d3(0x2bb))
                }, {
                    'quoted': _0x3bbe8d
                })[_0x3e00d3(0x8c3)](_0x4ad230 => _0x5ef4bf(_0x3e00d3(0x3b0)));
            }
            break;
            case 'pinterest': {
                _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                let {
                    pinterest: _0x165537
                } = require(_0x3e00d3(0xaa5));
                anu = await _0x165537(_0x153b74), result = anu[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * anu[_0x3e00d3(0x794)])], _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': result
                    },
                    'caption': _0x3e00d3(0x374) + result
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x5f5): {
                if (!_0xb4e8d5) throw _0x3e00d3(0xb8e);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x153b74);
            }
            break;
            case _0x3e00d3(0x4b0):
            case 'ppcouple': {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💏',
                        'key': _0x3bbe8d['key']
                    }
                }), _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                let _0x21b724 = await fetchJson(_0x3e00d3(0x410)),
                    _0x32e102 = _0x21b724[Math[_0x3e00d3(0xa8b)](Math[_0x3e00d3(0xb4d)]() * _0x21b724[_0x3e00d3(0x794)])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x32e102[_0x3e00d3(0x321)]
                    },
                    'caption': _0x3e00d3(0x74c)
                }, {
                    'quoted': _0x3bbe8d
                }), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x32e102[_0x3e00d3(0x201)]
                    },
                    'caption': _0x3e00d3(0x222)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'coffee':
            case 'kopi': {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '☕',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x5a1db7 = [{
                        'buttonId': _0x3e00d3(0xa7e),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xaec)
                        },
                        'type': 0x1
                    }],
                    _0x1d57e6 = {
                        'image': {
                            'url': _0x3e00d3(0x9a2)
                        },
                        'caption': _0x3e00d3(0x2be),
                        'footer': _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)],
                        'buttons': _0x5a1db7,
                        'headerType': 0x4
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x1d57e6, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xb9f): {
                if (!_0x153b74) throw _0x3e00d3(0x68e);
                let {
                    wallpaper: _0x284c12
                } = require(_0x3e00d3(0xaa5));
                anu = await _0x284c12(_0x153b74), result = anu[Math['floor'](Math['random']() * anu['length'])];
                let _0x254fbf = [{
                        'buttonId': _0x3e00d3(0xbde) + _0x153b74,
                        'buttonText': {
                            'displayText': 'NEXT\x20\x20PIC'
                        },
                        'type': 0x1
                    }],
                    _0x1d7cd1 = {
                        'image': {
                            'url': result['image'][0x0]
                        },
                        'caption': _0x3e00d3(0x887) + result[_0x3e00d3(0x50b)] + '\x0a🔮\x20𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬\x20:\x20' + result['type'] + _0x3e00d3(0x7b0) + result[_0x3e00d3(0x6a1)] + _0x3e00d3(0xc30) + (result['image'][0x2] || result[_0x3e00d3(0xc32)][0x1] || result['image'][0x0]),
                        'footer': _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)],
                        'buttons': _0x254fbf,
                        'headerType': 0x4
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x1d7cd1, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x310): {
                if (!_0x153b74) throw _0x3e00d3(0x68e);
                let {
                    wikimedia: _0x2efad6
                } = require('./lib/scraper');
                anu = await _0x2efad6(_0x153b74), result = anu[Math['floor'](Math['random']() * anu['length'])];
                let _0x490916 = [{
                        'buttonId': _0x3e00d3(0x699) + _0x153b74,
                        'buttonText': {
                            'displayText': _0x3e00d3(0xaec)
                        },
                        'type': 0x1
                    }],
                    _0x2e18d0 = {
                        'image': {
                            'url': result['image']
                        },
                        'caption': _0x3e00d3(0x887) + result[_0x3e00d3(0x50b)] + _0x3e00d3(0x498) + result['source'] + '\x0a🔮\x20𝗠𝗘𝗗𝗜𝗔\x20𝗨𝗥𝗟\x20:\x20' + result['image'],
                        'footer': _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)],
                        'buttons': _0x490916,
                        'headerType': 0x4
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2e18d0, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x836):
            case _0x3e00d3(0x2e8): {
                let {
                    quotesAnime: _0x54900b
                } = require(_0x3e00d3(0xaa5)), _0x4977b0 = await _0x54900b();
                result = _0x4977b0[Math['floor'](Math[_0x3e00d3(0xb4d)]() * _0x4977b0[_0x3e00d3(0x794)])];
                let _0x2e31f3 = [{
                        'buttonId': 'quotesanime',
                        'buttonText': {
                            'displayText': _0x3e00d3(0x7b7)
                        },
                        'type': 0x1
                    }],
                    _0x382242 = {
                        'text': '~_' + result[_0x3e00d3(0x854)] + _0x3e00d3(0x872) + result['karakter'] + '\x27,\x20' + result['anime'] + _0x3e00d3(0x224) + result[_0x3e00d3(0x9b5)],
                        'footer': 'Press\x20The\x20Button\x20Below',
                        'buttons': _0x2e31f3,
                        'headerType': 0x2
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x382242, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x93b):
            case _0x3e00d3(0x88c):
            case _0x3e00d3(0x708):
            case _0x3e00d3(0x936):
            case _0x3e00d3(0x612): {
                let _0x1e8778 = await fetchJson(api('zenz', '/api/' + _0x5a7691, {}, _0x3e00d3(0x66e))),
                    _0x245bc0 = [{
                        'buttonId': 'motivasi',
                        'buttonText': {
                            'displayText': _0x3e00d3(0x7b7)
                        },
                        'type': 0x1
                    }],
                    _0x2c7213 = {
                        'text': _0x1e8778['result']['message'],
                        'footer': 'Press\x20The\x20Button\x20Below',
                        'buttons': _0x245bc0,
                        'headerType': 0x2
                    };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2c7213, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x6bb): {
                var _0x453732 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x453732 = _0x3e00d3(0x3cf);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0x75c);
                if (!_0x153b74) return _0x53c8bd(_0x453732);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x2b9),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x179a34 = '╔═════════════════════☐\x0a\x0a\x20\x20\x20\x20\x20\x20*_𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙻𝚘𝚐𝚘\x20𝙻𝚒𝚜𝚝_*\x0a\x0a*▣\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x867) + _0x153b74 + _0x3e00d3(0xabc);
                let _0x211207 = [{
                    'title': 'ʙᴏᴛ\x20ʟɪsᴛ\x20ᴍᴇɴᴜ\x20ᴄʟɪᴄᴋ\x20ᴀɴᴅ\x20sᴇʟᴇᴄᴛ\x20ʏᴏᴜʀ\x20ᴏᴡɴ',
                    'rows': [{
                        'title': 'CANDY\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xc3c) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x2b8),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xb2e) + _0x153b74
                    }, {
                        'title': 'DEEPSEA\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x208) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x740),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'scifi\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9d7),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x583) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x824),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x520) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x778),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'spooky\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x667),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x817) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x2a4),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x6dc) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8d3),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x3d0) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x4b6),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x762) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x775),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'demon\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x3bd),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'transformer\x20' + _0x153b74
                    }, {
                        'title': 'BERRY\x20STYLE\x20',
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x243) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x476),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xb8d) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x237),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x34a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x805),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x909) + _0x153b74
                    }, {
                        'title': 'NEONLIGHT\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'neonlight\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x686),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x5f2) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xab8),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'harrypotter\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x7da),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x4d9) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb75),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x9e4) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x398),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x30c) + _0x153b74
                    }, {
                        'title': 'MULTICOLOR\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x9e2) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x418),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x866) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x325),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x905) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8bb),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x5b4) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x270),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'snow\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x1e6),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'cloud\x20' + _0x153b74
                    }, {
                        'title': 'HONEY\x20STYLE\x20',
                        'description': '\x0aMr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x7be) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x456),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x6c2) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xad2),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xbb7) + _0x153b74
                    }, {
                        'title': 'WOOD\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x8bd) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x701),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'chocolate\x20' + _0x153b74
                    }, {
                        'title': 'STRAWBERRY\x20STYLE\x20',
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x8ce) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8c4),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': 'matrix\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x26c),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x650) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xacf),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x481) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8ae),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xa3f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x2ac),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x600) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x433),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xc40) + _0x153b74
                    }, {
                        'title': 'BLOODGLAS\x20STYLE\x20',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xa4a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xaa7),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x65d) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc66),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x7a8) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xbe5),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x80e) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9cc),
                        'description': '\x0aMr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xafd) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x677),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x7ad) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc12),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x25b) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x66a),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': 'blackpink\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb6c),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xc43) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x785),
                        'description': '\x0aMr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xae7) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9fe),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x914) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x6ce),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'glitch2\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb36),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xaa8) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc6f),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'greenneon\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x6cb),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x2d4) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x543),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xa6f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x566),
                        'description': '\x0aMr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x27f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x5bf),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'sparklechristmas\x20' + _0x153b74
                    }, {
                        'title': 'CHRISTMAS\x20STYLE\x20-\x203',
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xa58) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x7ba),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x59e) + _0x153b74
                    }, {
                        'title': 'FRUIT\x20JUICE\x20STYLE',
                        'description': '\x0aMr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x96a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x212),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': '1917\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8db),
                        'description': _0x3e00d3(0xb22) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x2df) + _0x153b74
                    }]
                }];
                await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x179a34, '' + global['botnma'], '*🎨\x20LOGO\x20PACK\x201*', 'MAKE\x20LOGO', _0x211207, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xa50):
            case _0x3e00d3(0x6b9):
            case _0x3e00d3(0x912):
            case _0x3e00d3(0x37e):
            case _0x3e00d3(0x403):
            case _0x3e00d3(0xb5f):
            case _0x3e00d3(0x611):
            case _0x3e00d3(0x6c7):
            case _0x3e00d3(0x207):
            case _0x3e00d3(0x89e):
            case _0x3e00d3(0x34f):
            case _0x3e00d3(0x8b7):
            case _0x3e00d3(0x8e8):
            case _0x3e00d3(0x44c):
            case _0x3e00d3(0x3f8): {
                var _0x55b93f = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x55b93f = _0x3e00d3(0x9d5) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x959);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x55b93f = _0x3e00d3(0x99a) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x959);
                if (!_0x153b74) return _0x53c8bd(_0x55b93f);
                const _0x44c4ae = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                let _0x568c94;
                if (/eglitch/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x2a9) + _0x153b74;
                if (/eberry/ ['test'](_0x5a7691)) _0x568c94 = 'https://api.botcahx.biz.id/api/textpro/berry?text=' + _0x153b74;
                if (/eneon/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x65e) + _0x153b74;
                if (/ecrismas/ ['test'](_0x5a7691)) _0x568c94 = _0x3e00d3(0x2aa) + _0x153b74;
                if (/ethunder/ ['test'](_0x5a7691)) _0x568c94 = _0x3e00d3(0x2a6) + _0x153b74;
                if (/eninja/ ['test'](_0x5a7691)) _0x568c94 = _0x3e00d3(0x81e) + _0x153b74 + _0x3e00d3(0x6fe);
                if (/eorange/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = 'https://api.botcahx.biz.id/api/textpro/3d-orange-juice?text=' + _0x153b74;
                if (/ecake/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = 'https://api.botcahx.biz.id/api/textpro/chocolate-cake?text=' + _0x153b74;
                if (/estrowberry/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x328) + _0x153b74;
                if (/eflaming/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = 'https://api.botcahx.biz.id/api/photooxy/flaming?text=' + _0x153b74;
                if (/eshadow/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x6c1) + _0x153b74;
                if (/eongrass/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x34e) + _0x153b74;
                if (/eloveu/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x816) + _0x153b74;
                if (/ecoffee/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x568c94 = _0x3e00d3(0x641) + _0x153b74;
                if (/eilluminati/ ['test'](_0x5a7691)) _0x568c94 = _0x3e00d3(0xa64) + _0x153b74;
                const _0x519be8 = await getBuffer(_0x568c94);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': _0x519be8,
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x44c4ae[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x987):
            case _0x3e00d3(0x6da):
            case _0x3e00d3(0x3c3):
            case 'sparklechristmas':
            case _0x3e00d3(0x8ac):
            case _0x3e00d3(0x717):
            case _0x3e00d3(0x800):
            case _0x3e00d3(0x9d9):
            case _0x3e00d3(0xc16):
            case _0x3e00d3(0x610):
            case _0x3e00d3(0xbce):
            case _0x3e00d3(0x56b):
            case 'discovery':
            case _0x3e00d3(0xaff):
            case _0x3e00d3(0x350):
            case 'demon':
            case 'transformer':
            case _0x3e00d3(0x97a):
            case _0x3e00d3(0x66c):
            case _0x3e00d3(0x98c):
            case _0x3e00d3(0x51b):
            case 'goldlion':
            case _0x3e00d3(0x229):
            case _0x3e00d3(0x7f2):
            case _0x3e00d3(0x94b):
            case _0x3e00d3(0x255):
            case _0x3e00d3(0x664):
            case _0x3e00d3(0x8aa):
            case _0x3e00d3(0x87f):
            case _0x3e00d3(0x855):
            case 'watercolor':
            case 'multicolor':
            case _0x3e00d3(0xb03):
            case _0x3e00d3(0x96e):
            case _0x3e00d3(0xc42):
            case 'snow':
            case _0x3e00d3(0x4b1):
            case _0x3e00d3(0x4c7):
            case _0x3e00d3(0xaf7):
            case 'fruitjuice':
            case _0x3e00d3(0x7b2):
            case _0x3e00d3(0x5c1):
            case 'chocolate':
            case _0x3e00d3(0xa5f):
            case _0x3e00d3(0x979):
            case _0x3e00d3(0x3a4):
            case _0x3e00d3(0x811):
            case _0x3e00d3(0xb5c):
            case _0x3e00d3(0xb5b):
            case 'rock':
            case _0x3e00d3(0xa4f):
            case _0x3e00d3(0xb7d):
            case 'darkgold':
            case 'joker':
            case _0x3e00d3(0x96f):
            case _0x3e00d3(0x304):
            case _0x3e00d3(0x954):
            case 'blackpink':
            case _0x3e00d3(0x986):
            case _0x3e00d3(0x833):
            case '1917':
            case 'leaves':
            case 'demon': {
                var _0x29dd95 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x29dd95 = _0x3e00d3(0x969);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x29dd95 = '*🌈\x20මදක්\x20රැදීසිටින්න\x20ඔබගේ\x20textlogo\x20සෑදමින්\x20පවතී...*';
                if (!q) return _0x53c8bd(Lang['EXAMPLE'] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x20Qeen\x20Elisa');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎡',
                        'key': _0x3bbe8d['key']
                    }
                });
                let _0x3d38aa;
                if (/candy/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x3b7);
                if (/christmas/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html';
                if (/3dchristmas/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html';
                if (/sparklechristmas/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x72d);
                if (/deepsea/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html';
                if (/scifi/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x535);
                if (/rainbow/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html';
                if (/waterpipe/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x732);
                if (/spooky/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x210);
                if (/pencil/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html';
                if (/circuit/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x2b1);
                if (/discovery/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x38c);
                if (/metalic/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x30d);
                if (/fiction/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html';
                if (/demon/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x25e);
                if (/transformer/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x6c8);
                if (/berry/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x67b);
                if (/thunder/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xc18);
                if (/magma/ ['test'](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html';
                if (/3dstone2/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x5a5);
                if (/neonlight/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x737);
                if (/glitch/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x1e0);
                if (/harrypotter/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xc09);
                if (/brokenglass/ ['test'](_0x5a7691)) _0x3d38aa = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html';
                if (/papercut/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xc5a);
                if (/watercolor/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xae6);
                if (/multicolor/ ['test'](_0x5a7691)) _0x3d38aa = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html';
                if (/neondevil/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x653);
                if (/underwater/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html';
                if (/graffitibike/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html';
                if (/snow/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x427);
                if (/cloud/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x3a5);
                if (/honey/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xb68);
                if (/ice/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x261);
                if (/fruitjuice/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xa52);
                if (/biscuit/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/biscuit-text-effect-858.html';
                if (/wood/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xbeb);
                if (/chocolate/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x77a);
                if (/strawberry/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/strawberry-text-effect-online-889.html';
                if (/matrix/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/matrix-style-text-effect-online-884.html';
                if (/blood/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x432);
                if (/dropwater/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xa2b);
                if (/toxic/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x6b4);
                if (/lava/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xb67);
                if (/rock/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/rock-text-effect-online-915.html';
                if (/bloodglas/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x338);
                if (/halloween/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/halloween-fire-text-effect-940.html';
                if (/darkgold/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xc3d);
                if (/joker/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x681);
                if (/wicker/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x251);
                if (/firework/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/firework-sparkle-text-effect-930.html';
                if (/skeleton/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x7e7);
                if (/blackpink/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xabb);
                if (/sand/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xba4);
                if (/glue/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xc10);
                if (/1917/ ['test'](_0x5a7691)) _0x3d38aa = 'https://textpro.me/1917-style-text-effect-online-980.html';
                if (/leaves/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/natural-leaves-text-effect-931.html';
                if (/neonhart/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-neon-light-on-brick-wall-online-1062.html';
                if (/wolflogo/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x3c5);
                if (/goldlion/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0x562);
                if (/neonhart2/ ['test'](_0x5a7691)) _0x3d38aa = 'https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html';
                if (/gem/ ['test'](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xb8a);
                if (/potty/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x3d38aa = _0x3e00d3(0xb4a);
                let _0x373388 = await maker[_0x3e00d3(0x2e5)](_0x3d38aa, q);
                const _0x6c0b57 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x29dd95);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x373388
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x6c0b57[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x7ab):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text|text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q['split']('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x9b4), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x33ea93 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x33ea93
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x3aae70 => console[_0x3e00d3(0x788)](_0x3aae70));
                break;
            case _0x3e00d3(0x2ec):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x603), ['' + q])['then'](_0x30efd2 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x30efd2
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x497237 => console[_0x3e00d3(0x788)](_0x497237));
                break;
            case _0x3e00d3(0x484):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)]('https://textpro.me/dropwater-text-effect-872.html', ['' + q])['then'](_0x4fe362 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x4fe362
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x2285c8 => console['log'](_0x2285c8));
                break;
            case 'lion2':
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x4a1), ['' + q])['then'](_0x5e5453 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x5e5453
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0xfe0011 => console[_0x3e00d3(0x788)](_0xfe0011));
                break;
            case _0x3e00d3(0x87f):
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xc5a), ['' + q])[_0x3e00d3(0x6e3)](_0x49e2b6 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x49e2b6
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x495890 => console[_0x3e00d3(0x788)](_0x495890));
                break;
            case _0x3e00d3(0x87c):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)]('https://textpro.me/create-a-transformer-text-effect-online-1035.html', ['' + q])[_0x3e00d3(0x6e3)](_0x45a903 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x45a903
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x1cc2a2 => console['log'](_0x1cc2a2));
                break;
            case _0x3e00d3(0x94e):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x232));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q['split']('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xc09), ['' + teks1, '' + teks2])['then'](_0x24e125 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x24e125
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x3b71ce => console[_0x3e00d3(0x788)](_0x3b71ce));
                break;
            case _0x3e00d3(0xb03):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker['textpro'](_0x3e00d3(0x653), ['' + q])[_0x3e00d3(0x6e3)](_0x2cc12a => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2cc12a
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x2a055e => console['log'](_0x2a055e));
                break;
            case _0x3e00d3(0x209):
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x632), ['' + q])[_0x3e00d3(0x6e3)](_0x48824d => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x48824d
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x3ab319 => console[_0x3e00d3(0x788)](_0x3ab319));
                break;
            case _0x3e00d3(0x29f):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xa0b), ['' + q])[_0x3e00d3(0x6e3)](_0x4f1069 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x4f1069
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x58ffaa => console['log'](_0x58ffaa));
                break;
            case _0x3e00d3(0x66c):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xc18), ['' + q])[_0x3e00d3(0x6e3)](_0x5831c4 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x5831c4
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x5c4f85 => console[_0x3e00d3(0x788)](_0x5c4f85));
                break;
            case 'window':
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x423), ['' + q])[_0x3e00d3(0x6e3)](_0x2286b0 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2286b0
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x1f90c2 => console[_0x3e00d3(0x788)](_0x1f90c2));
                break;
            case 'blackpinkneon':
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)]('https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html', ['' + q])[_0x3e00d3(0x6e3)](_0xc4e335 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0xc4e335
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x5ad0d5 => console[_0x3e00d3(0x788)](_0x5ad0d5));
                break;
            case 'graffiti':
            case _0x3e00d3(0x71f):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x232));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), teks1 = q['split']('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker['textpro'](_0x3e00d3(0xa85), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x5aae8a => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x5aae8a
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x5c2a61 => console['log'](_0x5c2a61));
                break;
            case _0x3e00d3(0x75b):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xc2c), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x36a46a => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x36a46a
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x1caf7e => console[_0x3e00d3(0x788)](_0x1caf7e));
                break;
            case _0x3e00d3(0x83d):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xabb), ['' + q])[_0x3e00d3(0x6e3)](_0x4a5ad4 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x4a5ad4
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x5aa5eb => console[_0x3e00d3(0x788)](_0x5aa5eb));
                break;
            case _0x3e00d3(0x255):
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker['textpro'](_0x3e00d3(0x1e0), ['' + q])[_0x3e00d3(0x6e3)](_0x16771a => _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x16771a
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0xe88a4c => console[_0x3e00d3(0x788)](_0xe88a4c));
                break;
            case _0x3e00d3(0x20a):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text|text');
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), teks1 = q['split']('|')[0x0], teks2 = q['split']('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x2cc), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x699244 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x699244
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x2c111e => console[_0x3e00d3(0x788)](_0x2c111e));
                break;
            case _0x3e00d3(0x7ab):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x232));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x9b4), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x181306 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x181306
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x4e5b71 => console[_0x3e00d3(0x788)](_0x4e5b71));
                break;
            case _0x3e00d3(0x2c0):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text|text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x49a), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x13ea56 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x13ea56
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x32644a => console[_0x3e00d3(0x788)](_0x32644a));
                break;
            case _0x3e00d3(0x773):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text|text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x4a1), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x59fab2 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x59fab2
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x59252f => console[_0x3e00d3(0x788)](_0x59252f));
                break;
            case _0x3e00d3(0x513):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker['textpro'](_0x3e00d3(0x737), ['' + q])['then'](_0x47cbc4 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x47cbc4
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x4294b7 => console[_0x3e00d3(0x788)](_0x4294b7));
                break;
            case 'neon':
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x5d9), ['' + q])[_0x3e00d3(0x6e3)](_0x2969c8 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2969c8
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x3bc88d => console[_0x3e00d3(0x788)](_0x3bc88d));
                break;
            case _0x3e00d3(0x9b9):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker['textpro']('https://textpro.me/green-neon-text-effect-874.html', ['' + q])[_0x3e00d3(0x6e3)](_0x450faf => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x450faf
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x2fc690 => console[_0x3e00d3(0x788)](_0x2fc690));
                break;
            case _0x3e00d3(0xa95):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker[_0x3e00d3(0x2e5)]('https://textpro.me/bokeh-text-effect-876.html', ['' + q])[_0x3e00d3(0x6e3)](_0x33d59c => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x33d59c
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x2fbd38 => console[_0x3e00d3(0x788)](_0x2fbd38));
                break;
            case _0x3e00d3(0x419):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x73a), ['' + q])[_0x3e00d3(0x6e3)](_0x54fba9 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x54fba9
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x176997 => console['log'](_0x176997));
                break;
            case _0x3e00d3(0x7c1):
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), teks1 = q[_0x3e00d3(0x341)]('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x3c5), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x356b1d => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x356b1d
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x9309e3 => console[_0x3e00d3(0x788)](_0x9309e3));
                break;
            case _0x3e00d3(0x666):
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), teks1 = q['split']('|')[0x0], teks2 = q[_0x3e00d3(0x341)]('|')[0x1], maker[_0x3e00d3(0x2e5)](_0x3e00d3(0xa49), ['' + teks1, '' + teks2])[_0x3e00d3(0x6e3)](_0x4cb952 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x4cb952
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x4a0b40 => console['log'](_0x4a0b40));
                break;
            case _0x3e00d3(0xa5e):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker['textpro']('https://textpro.me/create-logo-joker-online-934.html', ['' + q])[_0x3e00d3(0x6e3)](_0x466a24 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x466a24
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x166e2b => console[_0x3e00d3(0x788)](_0x166e2b));
                break;
            case _0x3e00d3(0x5ab):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)]('https://textpro.me/dropwater-text-effect-872.html', ['' + q])[_0x3e00d3(0x6e3)](_0x1fa4b4 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1fa4b4
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x1b762c => console['log'](_0x1b762c));
                break;
            case _0x3e00d3(0x848):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), maker['textpro'](_0x3e00d3(0x274), ['' + q])[_0x3e00d3(0x6e3)](_0x1316fa => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1316fa
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x303559 => console['log'](_0x303559));
                break;
            case 'neonlight2':
                if (!q) return _0x53c8bd('Use\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x6f6), ['' + q])[_0x3e00d3(0x6e3)](_0x185523 => _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x185523
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x497989 => console['log'](_0x497989));
                break;
            case _0x3e00d3(0x405):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker['textpro'](_0x3e00d3(0x3cc), ['' + q])[_0x3e00d3(0x6e3)](_0x75409e => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x75409e
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))['catch'](_0x4115f6 => console[_0x3e00d3(0x788)](_0x4115f6));
                break;
            case _0x3e00d3(0x7ff):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x5e9));
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)]('https://textpro.me/natural-leaves-text-effect-931.html', ['' + q])['then'](_0x7c7fd9 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x7c7fd9
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0xdd98aa => console['log'](_0xdd98aa));
                break;
            case _0x3e00d3(0x27d):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], '\x20*🌈\x20Take\x20a\x20moment\x20to\x20createing\x20your\x20textlogo...*'), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x78a), ['' + q])[_0x3e00d3(0x6e3)](_0x1f247d => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1f247d
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x44dbf1 => console[_0x3e00d3(0x788)](_0x44dbf1));
                break;
            case _0x3e00d3(0xbce):
                if (!q) return _0x53c8bd(_0x3e00d3(0x553) + (_0x440929 + _0x5a7691) + '\x20text');
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0xaee)), maker[_0x3e00d3(0x2e5)](_0x3e00d3(0x91c), ['' + q])[_0x3e00d3(0x6e3)](_0x45ddf8 => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x45ddf8
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x45de65 => console[_0x3e00d3(0x788)](_0x45de65));
                break;
            case _0x3e00d3(0x3d3):
                maker['photooxy'](_0x3e00d3(0x8d8), ['' + q])[_0x3e00d3(0x6e3)](_0x2901cb => _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2901cb
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x1328b8 => console[_0x3e00d3(0x788)](_0x1328b8));
                break;
            case _0x3e00d3(0x70e):
                maker['photooxy'](_0x3e00d3(0x43f), ['' + q])['then'](_0x20490f => _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x20490f
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }))[_0x3e00d3(0x8c3)](_0x2e47c0 => console[_0x3e00d3(0x788)](_0x2e47c0));
                break;
            case _0x3e00d3(0x9bc):
            case 'qavenger':
            case _0x3e00d3(0x81a):
            case 'qhsteel':
            case _0x3e00d3(0x1eb):
            case _0x3e00d3(0xb60):
            case 'qmetalic':
            case 'qneon':
            case _0x3e00d3(0x9b1):
            case _0x3e00d3(0x73c):
            case 'qhorr':
            case _0x3e00d3(0x468):
            case _0x3e00d3(0x4a3):
            case 'qwolf':
            case _0x3e00d3(0xb8b):
            case 'qreto': {
                const _0x1d0eab = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                text1 = q[_0x3e00d3(0x341)]('|')[0x0], text2 = q[_0x3e00d3(0x341)]('|')[0x1];
                var _0x372d94;
                if (/qsteel/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + _0x3e00d3(0x242) + text2 + '&link=https://en.ephoto360.com/steel-text-effect-66.html';
                if (/qavenger/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x5e5);
                if (/qpolugon/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + '&text2=' + text2 + _0x3e00d3(0xb61);
                if (/qhsteel/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + _0x3e00d3(0x242) + text2 + '&link=https://en.ephoto360.com/heated-steel-lettering-effect-65.html';
                if (/qwood/ ['test'](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0xa2d);
                if (/qlovely/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x205) + text1 + _0x3e00d3(0x242) + text2 + '&link=https://en.ephoto360.com/lovely-floral-ornamental-banner-online-603.html';
                if (/qmetalic/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = 'https://api.akuari.my.id/ephoto/scraper-2?text=' + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x383);
                if (/qneon/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = 'https://api.akuari.my.id/ephoto/scraper-2?text=' + text1 + _0x3e00d3(0x242) + text2 + '&link=https://en.ephoto360.com/neon-text-effect-online-78.html';
                if (/qpubg/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = 'https://api.akuari.my.id/photooxy/scraper2?text1=' + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x3f0);
                if (/qfire/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x8a9) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0xc51);
                if (/qhorr/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0xb88);
                if (/qhalowin/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x6de);
                if (/qvideogame/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x852);
                if (/qwolf/ ['test'](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x5a9);
                if (/qninja/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + _0x3e00d3(0x45c);
                if (/reto/ ['test'](_0x5a7691)) _0x372d94 = _0x3e00d3(0x46b) + text1 + _0x3e00d3(0x242) + text2 + '&link=https://textpro.me/create-3d-retro-text-effect-online-free-106a5.html';
                const _0x225090 = await fetchJson(_0x372d94),
                    _0x278e4f = _0x225090[_0x3e00d3(0xb65)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x278e4f
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x1d0eab['key']
                });
            }
            break;
            case _0x3e00d3(0xc21):
            case _0x3e00d3(0xb23):
            case _0x3e00d3(0x602):
            case 'tle':
            case _0x3e00d3(0x400):
            case _0x3e00d3(0x5d6): {
                const _0x100c9f = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                text1 = q[_0x3e00d3(0x341)]('|')[0x0], text2 = q[_0x3e00d3(0x341)]('|')[0x1];
                var _0x372d94;
                if (/tlc/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x621) + text1 + _0x3e00d3(0x48b) + text2;
                if (/tls/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = 'https://api.akuari.my.id/ephoto/team-logo-singa?text=' + text1 + _0x3e00d3(0x48b) + text2;
                if (/tlm/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0xbf6) + text1 + _0x3e00d3(0x48b) + text2;
                if (/tle/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x790) + text1 + _0x3e00d3(0x48b) + text2;
                if (/tlb/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = 'https://api.akuari.my.id/ephoto/team-logo-banteng?text=' + text1 + _0x3e00d3(0x48b) + text2;
                if (/mountain/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x372d94 = _0x3e00d3(0x377) + text1 + '&text_2=' + text2;
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x372d94
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x100c9f[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'logo3': {
                var _0x453732 = '';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x453732 = _0x3e00d3(0xafe);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0x31c);
                if (!_0x153b74 && !_0x153b74[_0x3e00d3(0x3d5)]('|')) return _0x53c8bd(_0x453732);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x5e3),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x2a762f = _0x3e00d3(0xbd7) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x867) + _0x153b74 + '\x0a*▣\x20ᴛᴏᴛᴀʟ\x20ʟᴏɢᴏs\x20-*\x20*30*\x0a\x0a☐═════════════════════╝';
                let _0x5c3e7b = [{
                    'rows': [{
                        'title': _0x3e00d3(0x33a),
                        'rowId': 'qsteel\x20' + _0x153b74
                    }, {
                        'title': 'avenger\x20style',
                        'rowId': _0x3e00d3(0x82a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xbd6),
                        'rowId': 'qpolugon\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xa78),
                        'rowId': _0x3e00d3(0x720) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x7e5),
                        'rowId': _0x3e00d3(0x89d) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x623),
                        'rowId': 'qlovely\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9ed),
                        'rowId': 'qmetalic\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x407),
                        'rowId': 'qneon\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x3bb),
                        'rowId': _0x3e00d3(0xa68) + _0x153b74
                    }, {
                        'title': 'fire\x20game\x20style\x20',
                        'rowId': _0x3e00d3(0x98f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x399),
                        'rowId': _0x3e00d3(0x592) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x6f5),
                        'rowId': _0x3e00d3(0x30a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x609),
                        'rowId': 'qvideogame\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xa15),
                        'rowId': _0x3e00d3(0x89f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb92),
                        'rowId': _0x3e00d3(0xbdb) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x4b8),
                        'rowId': _0x3e00d3(0x648) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x5b7),
                        'rowId': _0x3e00d3(0x27f) + _0x153b74
                    }, {
                        'title': 'lion\x20style\x20',
                        'rowId': _0x3e00d3(0x8b8) + _0x153b74
                    }, {
                        'title': '3dspace\x20style\x20',
                        'rowId': '3dspace\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xa9a),
                        'rowId': _0x3e00d3(0xaa8) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x408),
                        'rowId': _0x3e00d3(0x628) + _0x153b74
                    }, {
                        'title': 'pron\x20hub\x20style\x20',
                        'rowId': _0x3e00d3(0x9a3) + _0x153b74
                    }, {
                        'title': 'grafiti\x20style\x20',
                        'rowId': _0x3e00d3(0x558) + _0x153b74
                    }, {
                        'title': 'giltch\x20style\x203\x20',
                        'rowId': _0x3e00d3(0xaa8) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x239),
                        'rowId': _0x3e00d3(0x647) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x522),
                        'rowId': _0x3e00d3(0x8d4) + _0x153b74
                    }, {
                        'title': 'team\x20logo\x20style\x20-\x203\x20',
                        'rowId': 'tlm\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x3c9),
                        'rowId': _0x3e00d3(0x613) + _0x153b74
                    }, {
                        'title': 'team\x20logo\x20style\x20-\x205\x20',
                        'rowId': _0x3e00d3(0x90b) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x4b4),
                        'rowId': _0x3e00d3(0xc11) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x3bf),
                        'rowId': 'about'
                    }]
                }];
                await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d['chat'], '' + _0x2a762f, '' + global[_0x3e00d3(0x673)], _0x3e00d3(0x240), _0x3e00d3(0x48d), _0x5c3e7b, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x431): {
                var _0x453732 = '';
                if (global['LANG'] == 'SI') _0x453732 = _0x3e00d3(0x7fc);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0xb1e);
                if (!_0x153b74) return _0x53c8bd(_0x453732);
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x4ad),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x39b1e7 = '╔═════════════════════☐\x0a\x0a\x20\x20\x20\x20\x20\x20*_𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙻𝚘𝚐𝚘\x20𝙻𝚒𝚜𝚝_*\x0a\x0a*▣\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x867) + _0x153b74 + _0x3e00d3(0xa26);
                let _0x199ac1 = [{
                    'rows': [{
                        'title': _0x3e00d3(0xa45),
                        'rowId': _0x3e00d3(0xc54) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc25),
                        'rowId': _0x3e00d3(0x95b) + _0x153b74
                    }, {
                        'title': 'Neon\x20Style\x20Logo\x20Pack\x20-\x204',
                        'rowId': 'eneon\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x309),
                        'rowId': _0x3e00d3(0x53e) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x926),
                        'rowId': 'ethunder\x20' + _0x153b74
                    }, {
                        'title': 'Ninja\x20Style\x20Pack\x20-\x204',
                        'rowId': _0x3e00d3(0x8f7) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xa30),
                        'rowId': 'eorange\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb6d),
                        'rowId': _0x3e00d3(0x21d) + _0x153b74
                    }, {
                        'title': 'StrowBerry\x20Style\x20Logo\x20Pack\x20-\x204',
                        'rowId': _0x3e00d3(0x493) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9f8),
                        'rowId': _0x3e00d3(0x559) + _0x153b74
                    }, {
                        'title': 'Shadow\x20Style\x20Logo\x20Pack\x20-\x204',
                        'rowId': _0x3e00d3(0x4a6) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x68c),
                        'rowId': _0x3e00d3(0x534) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xbc7),
                        'rowId': _0x3e00d3(0xa72) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x972),
                        'rowId': _0x3e00d3(0x8cf) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x424),
                        'rowId': _0x3e00d3(0x631) + _0x153b74
                    }]
                }];
                await _0x4b49f7['sendListMsg'](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x39b1e7, '' + global[_0x3e00d3(0x673)], _0x3e00d3(0x845), _0x3e00d3(0x48d), _0x199ac1, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xa50):
            case 'eberry':
            case _0x3e00d3(0x912):
            case _0x3e00d3(0x37e):
            case 'ethunder':
            case _0x3e00d3(0xb5f):
            case _0x3e00d3(0x611):
            case _0x3e00d3(0x6c7):
            case _0x3e00d3(0x207):
            case _0x3e00d3(0x89e):
            case _0x3e00d3(0x34f):
            case 'eongrass':
            case _0x3e00d3(0x8e8):
            case _0x3e00d3(0x44c):
            case _0x3e00d3(0x3f8): {
                var _0x55b93f = '';
                if (global['LANG'] == 'EN') _0x55b93f = _0x3e00d3(0x9d5) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x959);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x55b93f = _0x3e00d3(0x99a) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x959);
                if (!_0x153b74) return _0x53c8bd('GIVEE');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🥨',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x4bd13a;
                if (/eglitch/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x977) + _0x153b74;
                if (/eberry/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x20c) + _0x153b74;
                if (/eneon/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0xc24) + _0x153b74;
                if (/ecrismas/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/textpro/3dchristmas?text=' + _0x153b74;
                if (/ethunder/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x8a5) + _0x153b74;
                if (/eninja/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x550) + _0x153b74 + _0x3e00d3(0x6fe);
                if (/eorange/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/textpro/3d-orange-juice?text=' + _0x153b74;
                if (/ecake/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0xb3a) + _0x153b74;
                if (/estrowberry/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/textpro/strawberry?text=' + _0x153b74;
                if (/eflaming/ ['test'](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/photooxy/flaming?text=' + _0x153b74;
                if (/eshadow/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x45b) + _0x153b74;
                if (/eongrass/ ['test'](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/photooxy/under-grass?text=' + _0x153b74;
                if (/eloveu/ ['test'](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/photooxy/picture-of-love?text=' + _0x153b74;
                if (/ecoffee/ ['test'](_0x5a7691)) _0x4bd13a = 'https://api.tiodevhost.my.id/api/photooxy/coffee-cup?text=' + _0x153b74;
                if (/eilluminati/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x4bd13a = _0x3e00d3(0x3e7) + _0x153b74;
                const _0x4bd4c = await getBuffer(_0x4bd13a);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': _0x4bd4c,
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xa75):
            case _0x3e00d3(0xabe): {
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + '\x0a\x20:\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x8c8);
                let [_0x1a49cf, _0x135c9a, _0x3b150b, _0x45ea4f] = _0x153b74[_0x3e00d3(0x341)] `,`, _0x70a12f = await primbon[_0x3e00d3(0x9f4)](_0x1a49cf, _0x135c9a, _0x3b150b, _0x45ea4f);
                if (_0x70a12f[_0x3e00d3(0x76e)] == ![]) return _0x53c8bd(_0x70a12f['message']);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x3d4) + _0x70a12f['message'][_0x3e00d3(0xbdd)] + '\x0a🔮\x20*𝗕𝗢𝗥𝗡\x20:*\x20' + _0x70a12f[_0x3e00d3(0x9e1)][_0x3e00d3(0xc58)] + _0x3e00d3(0xa87) + _0x70a12f[_0x3e00d3(0x9e1)][_0x3e00d3(0xb16)], _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x827):
            case _0x3e00d3(0x505): {
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x9ec);
                let [_0x597f72, _0x17f494, _0x30a929] = _0x153b74[_0x3e00d3(0x341)] `,`, _0x5d72b4 = await primbon[_0x3e00d3(0x665)](_0x597f72, _0x17f494, _0x30a929);
                if (_0x5d72b4['status'] == ![]) return _0x53c8bd(_0x5d72b4['message']);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xa70) + _0x5d72b4[_0x3e00d3(0x9e1)][_0x3e00d3(0x70d)] + _0x3e00d3(0xa87) + _0x5d72b4['message'][_0x3e00d3(0xb16)] + _0x3e00d3(0xc17) + _0x5d72b4[_0x3e00d3(0x9e1)]['catatan'], _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0xa80):
            case _0x3e00d3(0xa55): {
                if (!_0x153b74) throw Lang['EXAMPLE'] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x6d0) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xc69);
                let [_0x16bf0b, _0x4dbc3c, _0x37ec63, _0x26c2ce] = _0x153b74[_0x3e00d3(0x341)] `,`, _0x1f7877 = await primbon[_0x3e00d3(0x6ed)](_0x16bf0b, _0x4dbc3c, _0x37ec63, _0x26c2ce);
                if (_0x1f7877[_0x3e00d3(0x76e)] == ![]) return _0x53c8bd(_0x1f7877[_0x3e00d3(0x9e1)]);
                _0x4b49f7['sendText'](_0x3bbe8d['chat'], _0x3e00d3(0x46a) + _0x1f7877['message']['result'] + _0x3e00d3(0xc17) + _0x1f7877[_0x3e00d3(0x9e1)][_0x3e00d3(0x502)], _0x3bbe8d);
            }
            break;
            case 'zodiakjfjdkkd':
            case _0x3e00d3(0xa0d): {
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x207\x207\x202005';
                let _0x3d650f = [
                    [_0x3e00d3(0x9c4), new Date(0x7b2, 0x0, 0x1)],
                    [_0x3e00d3(0x889), new Date(0x7b2, 0x0, 0x14)],
                    ['pisces', new Date(0x7b2, 0x1, 0x13)],
                    [_0x3e00d3(0x715), new Date(0x7b2, 0x2, 0x15)],
                    [_0x3e00d3(0x2db), new Date(0x7b2, 0x3, 0x15)],
                    [_0x3e00d3(0x65b), new Date(0x7b2, 0x4, 0x15)],
                    [_0x3e00d3(0x970), new Date(0x7b2, 0x5, 0x16)],
                    ['leo', new Date(0x7b2, 0x6, 0x17)],
                    [_0x3e00d3(0x308), new Date(0x7b2, 0x7, 0x17)],
                    [_0x3e00d3(0xc03), new Date(0x7b2, 0x8, 0x17)],
                    [_0x3e00d3(0x4c1), new Date(0x7b2, 0x9, 0x17)],
                    [_0x3e00d3(0xb42), new Date(0x7b2, 0xa, 0x16)],
                    ['capricorn', new Date(0x7b2, 0xb, 0x16)]
                ][_0x3e00d3(0x968)]();

                function _0x352a22(_0x26a09e, _0x2a3522) {
                    const _0x1adae6 = _0x3e00d3;
                    let _0x2dddb5 = new Date(0x7b2, _0x26a09e - 0x1, _0x2a3522);
                    return _0x3d650f[_0x1adae6(0x581)](([_0x5a73a9, _0x350eca]) => _0x2dddb5 >= _0x350eca)[0x0];
                }
                let _0x583e12 = new Date(_0x153b74);
                if (_0x583e12 == _0x3e00d3(0x9c6)) throw _0x583e12;
                let _0xd94e2b = new Date(),
                    [_0x2072d0, _0x16a565, _0x13390e] = [_0xd94e2b[_0x3e00d3(0x276)](), _0xd94e2b[_0x3e00d3(0x55f)]() + 0x1, _0xd94e2b[_0x3e00d3(0xba8)]()],
                    _0x5b71c3 = [_0x583e12['getFullYear'](), _0x583e12['getMonth']() + 0x1, _0x583e12[_0x3e00d3(0xba8)]()],
                    _0x3310ca = await _0x352a22(_0x5b71c3[0x1], _0x5b71c3[0x2]),
                    _0x4f40c8 = await primbon['zodiak'](_0x3310ca);
                if (_0x4f40c8['status'] == ![]) return _0x53c8bd(_0x4f40c8['message']);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x320) + _0x4f40c8[_0x3e00d3(0x9e1)][_0x3e00d3(0x38e)] + _0x3e00d3(0x496) + _0x4f40c8[_0x3e00d3(0x9e1)][_0x3e00d3(0x39e)] + _0x3e00d3(0xbf5) + _0x4f40c8[_0x3e00d3(0x9e1)][_0x3e00d3(0x360)] + _0x3e00d3(0x9f5) + _0x4f40c8['message'][_0x3e00d3(0x525)] + '\x0a🔮\x20*𝗙𝗟𝗢𝗪𝗘𝗥\x20:*\x20' + _0x4f40c8[_0x3e00d3(0x9e1)][_0x3e00d3(0xad7)] + _0x3e00d3(0x842) + _0x4f40c8[_0x3e00d3(0x9e1)][_0x3e00d3(0x393)] + _0x3e00d3(0x781) + _0x4f40c8['message']['batu_keberuntungan'] + _0x3e00d3(0x3f6) + _0x4f40c8['message'][_0x3e00d3(0x67a)] + _0x3e00d3(0x2d9) + _0x4f40c8['message']['pasangan_zodiak'] + _0x3e00d3(0xc17) + _0x4f40c8[_0x3e00d3(0x9e1)]['catatan'], _0x3bbe8d);
            }
            break;
            case 'shiondkskskso': {
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0xbd5);
                let _0x41ee41 = await primbon[_0x3e00d3(0x6ff)](_0x153b74);
                if (_0x41ee41[_0x3e00d3(0x76e)] == ![]) return _0x53c8bd(_0x41ee41['message']);
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xa84) + _0x41ee41[_0x3e00d3(0x9e1)], _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x3e9):
            case 'nowm': {
                const _0x544506 = await fetchJson(_0x3e00d3(0x869));
                if (!_0x153b74) throw _0x3e00d3(0x9be);
                const _0x2daa75 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xa79));
                let _0x2142f7 = require(_0x3e00d3(0xc35));
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0xab5))) throw _0x3e00d3(0x696);
                _0x2142f7[_0x3e00d3(0xbb9)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x5e0530 => {
                    const _0xdf93c3 = _0x3e00d3;
                    _0x300b79 = await getBuffer(_0x544506[_0xdf93c3(0x692)]), await _0x4b49f7[_0xdf93c3(0x69f)](_0x3bbe8d[_0xdf93c3(0x5f1)], {
                        'delete': _0x2daa75[_0xdf93c3(0x2da)]
                    });
                    const _0x22de14 = await _0x4b49f7[_0xdf93c3(0xa97)](_0x3bbe8d[_0xdf93c3(0x5f1)], _0xdf93c3(0x217));
                    await _0x4b49f7[_0xdf93c3(0x69f)](_0x3bbe8d[_0xdf93c3(0x5f1)], {
                        'video': {
                            'url': _0x5e0530[_0xdf93c3(0x7c9)][_0xdf93c3(0x702)]
                        },
                        'jpegThumbnail': _0x300b79,
                        'caption': global[_0xdf93c3(0x576)] + '\x0a'
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0xdf93c3(0x5f1)], {
                        'delete': _0x22de14['key']
                    });
                })[_0x3e00d3(0x8c3)](_0x21498a => {
                    const _0x3738fc = _0x3e00d3;
                    _0x4b49f7['sendText'](_0x3bbe8d[_0x3738fc(0x5f1)], _0x3738fc(0x2c6));
                });
            }
            break;
            case _0x3e00d3(0xa10):
            case 'tt': {
                if (!_0x153b74 && !_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0xab5))) throw _0x3e00d3(0x329);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⬇️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x2e85f6 = require(_0x3e00d3(0xc35));
                _0x2e85f6[_0x3e00d3(0x8d1)](_0x153b74)[_0x3e00d3(0x6e3)](async _0x3746e4 => {
                    const _0x2cb145 = _0x3e00d3,
                        _0x6d33aa = _0x3746e4[_0x2cb145(0x47e)][0x0]['url'],
                        _0x4eb26f = global[_0x2cb145(0x576)] + _0x2cb145(0x756) + _0x3746e4['meta'][_0x2cb145(0x50b)] + '\x0a*🖇️\x20Source\x20:*\x20' + _0x3746e4[_0x2cb145(0x573)][_0x2cb145(0x6a1)] + _0x2cb145(0x8f8) + _0x3746e4[_0x2cb145(0x573)]['duration'] + '\x0a',
                        _0x1aa48f = _0x3746e4[_0x2cb145(0x47e)][0x1][_0x2cb145(0x47e)];
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': '⬆️',
                            'key': _0x3bbe8d[_0x2cb145(0x2da)]
                        }
                    });
                    const _0x4a8442 = [{
                        'buttonId': 'directmp3\x20' + _0x1aa48f,
                        'buttonText': {
                            'displayText': _0x2cb145(0xb5d)
                        },
                        'type': 0x1
                    }];
                    let _0x27b068 = {
                        'video': {
                            'url': _0x6d33aa
                        },
                        'caption': _0x4eb26f,
                        'footer': global[_0x2cb145(0x673)],
                        'buttons': _0x4a8442,
                        'headerType': 0x4
                    };
                    await _0x4b49f7[_0x2cb145(0x69f)](_0x3bbe8d[_0x2cb145(0x5f1)], _0x27b068, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x2cb145(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '✅',
                            'key': _0x3bbe8d[_0x2cb145(0x2da)]
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x43298c => _0x53c8bd(NOT_FOUND));
            }
            break;
            case _0x3e00d3(0xac6):
            case _0x3e00d3(0x2c8): {
                if (!_0x153b74 && !_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0xab5))) throw _0x3e00d3(0x329);
                await fetchJson(_0x3e00d3(0xc14) + _0x153b74 + _0x3e00d3(0x661))[_0x3e00d3(0x6e3)](async _0x1ba896 => {
                    const _0x1e953e = _0x3e00d3;
                    if (_0x9b834d[0x0] == 'wm') {
                        await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                            'react': {
                                'text': '⬇️',
                                'key': _0x3bbe8d[_0x1e953e(0x2da)]
                            }
                        });
                        const _0x25289f = _0x1ba896[_0x1e953e(0xb16)][_0x1e953e(0x85f)];
                        await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                            'react': {
                                'text': '⬆️',
                                'key': _0x3bbe8d[_0x1e953e(0x2da)]
                            }
                        });
                        const _0x563fe9 = await _0x4b49f7[_0x1e953e(0x69f)](_0x3bbe8d['chat'], {
                            'video': {
                                'url': _0x25289f
                            },
                            'mimetype': _0x1e953e(0xc3f),
                            'gifPlayback': !![],
                            'caption': global['cap']
                        }, {
                            'quoted': _0x3bbe8d
                        });
                        await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                            'react': {
                                'text': '✅',
                                'key': _0x3bbe8d[_0x1e953e(0x2da)]
                            }
                        }), await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                            'react': {
                                'text': '💧',
                                'key': _0x3bbe8d[_0x1e953e(0x2da)]
                            }
                        });
                    } else {
                        if (_0x9b834d[0x0] == _0x1e953e(0x89a)) {
                            await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '⬇️',
                                    'key': _0x3bbe8d['key']
                                }
                            });
                            const _0x1bf497 = _0x1ba896[_0x1e953e(0xb16)][_0x1e953e(0x266)] || _0x1ba896['result'][_0x1e953e(0x7c9)];
                            await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '⬆️',
                                    'key': _0x3bbe8d['key']
                                }
                            });
                            const _0x1da0ad = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x1e953e(0x5f1)], {
                                'video': {
                                    'url': _0x1bf497
                                },
                                'mimetype': _0x1e953e(0xc3f),
                                'gifPlayback': !![],
                                'caption': global[_0x1e953e(0x576)]
                            }, {
                                'quoted': _0x3bbe8d
                            });
                            await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '✅',
                                    'key': _0x3bbe8d[_0x1e953e(0x2da)]
                                }
                            }), await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '🚫',
                                    'key': _0x3bbe8d[_0x1e953e(0x2da)]
                                }
                            });
                        } else {
                            if (_0x9b834d[0x0] == 'audio') {
                                await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                    'react': {
                                        'text': '⬇️',
                                        'key': _0x3bbe8d['key']
                                    }
                                });
                                const _0x42e2f8 = _0x1ba896[_0x1e953e(0xb16)]['audio'];
                                await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                    'react': {
                                        'text': '⬆️',
                                        'key': _0x3bbe8d[_0x1e953e(0x2da)]
                                    }
                                });
                                const _0xc066d0 = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x1e953e(0x5f1)], {
                                    'audio': {
                                        'url': _0x42e2f8
                                    },
                                    'mimetype': 'audio/mpeg'
                                }, {
                                    'quoted': _0x3bbe8d
                                });
                                await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                    'react': {
                                        'text': '✅',
                                        'key': _0x3bbe8d[_0x1e953e(0x2da)]
                                    }
                                }), await _0x4b49f7[_0x1e953e(0x69f)](_0x3e5538, {
                                    'react': {
                                        'text': '🎶',
                                        'key': _0x3bbe8d[_0x1e953e(0x2da)]
                                    }
                                });
                            } else {
                                const _0x22bee2 = _0x1ba896[_0x1e953e(0xb16)]['username'],
                                    _0x459ae4 = ttname[_0x1e953e(0xb16)]['description'],
                                    _0x514515 = _0x1e953e(0xaba) + _0x22bee2 + _0x1e953e(0x66b) + description + '\x0a',
                                    _0x87095 = _0x1ba896[_0x1e953e(0xb16)]['pp'],
                                    _0x1354ea = [{
                                        'buttonId': 'tiktok\x20wm\x20' + _0x153b74,
                                        'buttonText': {
                                            'displayText': _0x1e953e(0xbc2)
                                        },
                                        'type': 0x1
                                    }, {
                                        'buttonId': _0x1e953e(0x51d) + _0x153b74,
                                        'buttonText': {
                                            'displayText': 'NO\x20WM'
                                        },
                                        'type': 0x1
                                    }, {
                                        'buttonId': _0x1e953e(0x4f1) + _0x153b74,
                                        'buttonText': {
                                            'displayText': _0x1e953e(0xb5d)
                                        },
                                        'type': 0x1
                                    }];
                                let _0x1fdc87 = {
                                    'image': {
                                        'url': _0x87095
                                    },
                                    'caption': _0x514515,
                                    'footer': global[_0x1e953e(0x673)],
                                    'buttons': _0x1354ea,
                                    'headerType': 0x4
                                };
                                await _0x4b49f7[_0x1e953e(0x69f)](_0x3bbe8d['chat'], _0x1fdc87, {
                                    'quoted': _0x3bbe8d
                                });
                            }
                        }
                    }
                })[_0x3e00d3(0x8c3)](_0x222265 => _0x53c8bd(_0x222265));
            }
            break;
            case _0x3e00d3(0x35e): {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x36f));
                const _0x503922 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '*📥\x20DOWNLOADING\x20YOUR\x20TIKTOK\x20VIDEO\x20...*');
                await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')[_0x3e00d3(0x6e3)](async _0x2e9275 => {
                    const _0x7cfd7b = _0x3e00d3;
                    _0x300b79 = await getBuffer(_0x2e9275[_0x7cfd7b(0x692)]);
                    const _0x388990 = await getBuffer('https://api.akuari.my.id/downloader/tiktokwithwm?link=' + _0x153b74);
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x7cfd7b(0x5f1)], {
                        'delete': _0x503922[_0x7cfd7b(0x2da)]
                    });
                    const _0x12427e = await _0x4b49f7[_0x7cfd7b(0xa97)](_0x3bbe8d[_0x7cfd7b(0x5f1)], '*📤\x20UPLOADING\x20YOUR\x20TIKTOK\x20VIDEO\x20...*');
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x7cfd7b(0x5f1)], {
                        'video': _0x388990,
                        'jpegThumbnail': _0x300b79,
                        'caption': global[_0x7cfd7b(0x576)] + '\x0a'
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x7cfd7b(0x69f)](_0x3bbe8d[_0x7cfd7b(0x5f1)], {
                        'delete': _0x12427e[_0x7cfd7b(0x2da)]
                    });
                })['catch'](_0x4ed8fd => {
                    const _0x10286c = _0x3e00d3;
                    _0x4b49f7[_0x10286c(0xa97)](_0x3bbe8d[_0x10286c(0x5f1)], NOT_FOUND);
                });
            }
            break;
            case _0x3e00d3(0x620):
            case _0x3e00d3(0x437): {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0xaef));
                await fetchJson(_0x3e00d3(0x706) + _0x153b74);
            }
            case 'stelegram': {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x62f));
                if (!_0x153b74[_0x3e00d3(0x3d5)](_0x3e00d3(0x512))) return _0x53c8bd('*👸💬\x20Please\x20give\x20me\x20a\x20correct\x20link*\x0a\x20_.stelegram\x20https://t.me/addstickers/ViniProduction_by_MekathKalawak_');
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x93c)), await fetchJson(_0x3e00d3(0x893) + _0x153b74)[_0x3e00d3(0x6e3)](async _0x39e4fc => {
                    const _0x570a43 = _0x3e00d3,
                        _0x16a9ea = _0x39e4fc[_0x570a43(0xb16)],
                        _0x56afd1 = _0x16a9ea[0x1]['url'],
                        _0x2b46a5 = _0x16a9ea[0x2][_0x570a43(0x47e)],
                        _0x562631 = _0x16a9ea[0x3][_0x570a43(0x47e)],
                        _0x140e4e = _0x16a9ea[0x4][_0x570a43(0x47e)],
                        _0x3c1611 = _0x16a9ea[0x5][_0x570a43(0x47e)],
                        _0x285ecb = _0x16a9ea[0x6][_0x570a43(0x47e)],
                        _0x26f8dd = _0x16a9ea[0x7]['url'],
                        _0x55456a = _0x16a9ea[0x8][_0x570a43(0x47e)],
                        _0x2b8859 = _0x16a9ea[0x9][_0x570a43(0x47e)],
                        _0x525e66 = _0x16a9ea[0xa][_0x570a43(0x47e)],
                        _0x55c6a6 = _0x16a9ea[0xb][_0x570a43(0x47e)],
                        _0x505b58 = _0x16a9ea[0xc][_0x570a43(0x47e)],
                        _0x35c042 = _0x16a9ea[0xd]['url'],
                        _0x4584de = _0x16a9ea[0xe][_0x570a43(0x47e)],
                        _0x4d52f5 = _0x16a9ea[0xf]['url'];
                    await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x56afd1, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7['sendImageAsSticker'](_0x3bbe8d[_0x570a43(0x5f1)], _0x2b46a5, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x562631, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': '『©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20』'
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x140e4e, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7['sendImageAsSticker'](_0x3bbe8d[_0x570a43(0x5f1)], _0x3c1611, _0x3bbe8d, {
                        'packname': global['packname'],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x285ecb, _0x3bbe8d, {
                        'packname': global['packname'],
                        'author': '『©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20』'
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x26f8dd, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x55456a, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': '『©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20』'
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x2b8859, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d['chat'], _0x525e66, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d['chat'], _0x55c6a6, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x505b58, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d[_0x570a43(0x5f1)], _0x35c042, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d['chat'], _0x4584de, _0x3bbe8d, {
                        'packname': global['packname'],
                        'author': _0x570a43(0x51e)
                    }), await _0x4b49f7[_0x570a43(0x56f)](_0x3bbe8d['chat'], _0x4d52f5, _0x3bbe8d, {
                        'packname': global[_0x570a43(0x7f6)],
                        'author': '『©\x20ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20』'
                    });
                })[_0x3e00d3(0x8c3)](_0x25bd63 => _0x5ef4bf('*මෙම\x20telegram\x20sticker\x20Download\x20කල\x20නොහැක\x20!!!*'));
            }
            break;
            case _0x3e00d3(0x236): {
                text1 = q['split'](';')[0x0], text2 = q['split'](';')[0x1];
                if (!_0x153b74) throw _0x3e00d3(0x2d5) + global[_0x3e00d3(0x3f2)] + _0x3e00d3(0xa01);
                await _0x4b49f7[_0x3e00d3(0xa97)](text1 + _0x3e00d3(0x5c5), text2 || '*Hello\x20I\x20am\x20Thivanka\x20Nirmal*\x0a\x0a\x20_Join\x20My\x20Main\x20Group_\x20\x0a\x20\x20*https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc*');
            }
            break;
            case 'ss': {
                var _0x5ede50 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5ede50 = _0x3e00d3(0x25d);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x5ede50 = _0x3e00d3(0xbf1);
                if (!_0x153b74 && !_0x153b74[_0x3e00d3(0x58b)](_0x3e00d3(0x8e7))) throw _0x5ede50 + _0x3e00d3(0xae1);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📸',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                try {
                    const _0x481d39 = _0x3e00d3(0xad3) + _0x9b834d[0x0] + _0x3e00d3(0x532);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'image': {
                            'url': _0x481d39
                        },
                        'caption': global['cap']
                    }, {
                        'quoted': _0x3bbe8d
                    });
                } catch {
                    const _0x519fc8 = 'https://api.ibeng.tech/api/maker/ssweb2?url=' + _0x9b834d[0x0] + _0x3e00d3(0x532);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                        'image': {
                            'url': _0x519fc8
                        },
                        'caption': global[_0x3e00d3(0x576)]
                    }, {
                        'quoted': _0x3bbe8d
                    });
                }
            }
            break;
            case _0x3e00d3(0x759): {
                themeemoji = _0x3e00d3(0x524);
                const _0x15bf30 = await fetchJson(_0x3e00d3(0x869));
                let {
                    ytv: _0x4938ea
                } = require(_0x3e00d3(0x5fa));
                if (!_0x153b74) return _0x53c8bd(Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + '\x20https://youtube.com/watch?v=RNa4thokVJ4\x20360p');
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0x8e4))) return _0x53c8bd(_0x3e00d3(0x8ef));
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x524),
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x2196f5 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], mess[_0x3e00d3(0x42d)]);
                let _0x2fc9a9 = _0x9b834d[0x1] ? _0x9b834d[0x1] : _0x3e00d3(0x2bb),
                    _0x3f80f0 = await _0x4938ea(_0x153b74, _0x2fc9a9);
                if (_0x3f80f0[_0x3e00d3(0x2c5)] >= 0x186a0) {
                    _0x405c6e = _0x3e00d3(0xb79) + _0x3f80f0[_0x3e00d3(0x50b)] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ғɪʟᴇ\x20sɪᴢᴇ\x20:*\x20' + _0x3f80f0[_0x3e00d3(0x2c5)] + '\x0a';
                    const _0x93a4eb = [{
                            'index': 0x1,
                            'urlButton': {
                                'displayText': 'DOWNLOAD\x20ON\x20WEB',
                                'url': _0x3f80f0[_0x3e00d3(0x39b)] + '.mp4'
                            }
                        }, {
                            'index': 0x2,
                            'urlButton': {
                                'displayText': _0x3e00d3(0x4fb),
                                'url': _0x3e00d3(0x8e1)
                            }
                        }],
                        _0x42a723 = {
                            'text': _0x405c6e,
                            'footer': global[_0x3e00d3(0x673)],
                            'templateButtons': _0x93a4eb
                        };
                    return await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x42a723, {
                        'quoted': _0x3bbe8d
                    });
                }
                var _0x5780a1 = _0x3e00d3(0x279) + themeemoji + 'Title*\x20:\x20' + _0x3f80f0[_0x3e00d3(0x50b)] + '\x0a*' + themeemoji + 'File\x20size*\x20:\x20' + _0x3f80f0['filesizeF'] + '\x0a*' + themeemoji + _0x3e00d3(0x786) + isUrl(_0x153b74) + '\x0a*' + themeemoji + _0x3e00d3(0xc13) + themeemoji + _0x3e00d3(0x460) + (_0x9b834d[0x1] || _0x3e00d3(0x2bb)),
                    _0x300b79 = await getBuffer(_0x15bf30['YT_THUB']);
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '⬆️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'video': {
                        'url': _0x3f80f0[_0x3e00d3(0x39b)]
                    },
                    'jpegThumbnail': _0x300b79,
                    'mimetype': _0x3e00d3(0xc3f),
                    'fileName': _0x3f80f0[_0x3e00d3(0x50b)] + _0x3e00d3(0xb80),
                    'caption': '' + global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                })[_0x3e00d3(0x8c3)](_0x5f10a9 => _0x53c8bd(mess['error'])), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x2196f5[_0x3e00d3(0x2da)]
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d['key']
                    }
                });
            }
            break;
            case _0x3e00d3(0xb90): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🛠️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x5ede50 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5ede50 = _0x3e00d3(0x571);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x5ede50 = _0x3e00d3(0x2e4);
                if (!_0x153b74) throw _0x5ede50;
                const _0x51a977 = await fetchJson(_0x3e00d3(0x3bc) + encodeURIComponent(_0x153b74) + _0x3e00d3(0x532)),
                    _0x4ef5af = _0x51a977[_0x3e00d3(0xb16)];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x4ef5af
                    },
                    'caption': '' + global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x69c): {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x5d1) + _0x5a7691 + '👸');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✨',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x3e00d3(0x886) + encodeURIComponent(_0x153b74) + '\x20'
                    },
                    'caption': '' + global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xaea): {
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x5d1) + _0x5a7691 + '👸');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✨',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': 'https://api.botcahx.biz.id/api/emoji/samsung?emoji=' + encodeURIComponent(_0x153b74)
                    },
                    'caption': '' + global['cap']
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x501): {
                if (!_0x153b74) return _0x53c8bd('*👸💬\x20Please\x20Give\x20me\x20a\x20imoji*\x0aExample\x20-\x20.' + _0x5a7691 + '👸');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✨',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await _0x4b49f7[_0x3e00d3(0x2bd)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x25f) + encodeURIComponent(_0x153b74), _0x3e00d3(0x23c), _0x3e00d3(0x7e1), _0x3bbe8d, {
                    'asSticker': !![]
                })[_0x3e00d3(0x8c3)](_0x2dd2ae => _0x53c8bd(_0x2dd2ae));
            }
            break;
            case _0x3e00d3(0x7cf): {
                const _0x1bf8b6 = _0x3e00d3(0x857);
                var _0x453732 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0x4ea);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x453732 = _0x3e00d3(0x235);
                var _0x3d8a69 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x3d8a69 = _0x3e00d3(0x4c5) + '```' + _0x1bf8b6 + _0x3e00d3(0x30f);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3d8a69 = _0x3e00d3(0xbfa) + _0x3e00d3(0x30f) + _0x1bf8b6 + _0x3e00d3(0x30f);
                var _0x41a6b1 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x41a6b1 = '*👸💬\x20Sorry\x20can\x27t\x20translete\x20become\x20a\x20error\x20!*';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x41a6b1 = _0x3e00d3(0x749);
                if (!_0x153b74) return _0x53c8bd(_0x3d8a69);
                text1 = _0x153b74['split'](';')[0x0], text2 = _0x153b74[_0x3e00d3(0x341)](';')[0x1];
                const _0x45bba5 = await fetchJson(_0x3e00d3(0x48e) + text1 + _0x3e00d3(0x387) + text2);
                if (_0x45bba5[_0x3e00d3(0xb7b)] === 'false') return _0x53c8bd(_0x41a6b1);
                const _0x3736b9 = _0x45bba5[_0x3e00d3(0xb16)];
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], '' + _0x45bba5[_0x3e00d3(0xb16)]);
            }
            break;
            break;
            case _0x3e00d3(0xa83): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🌝',
                        'key': _0x3bbe8d['key']
                    }
                }), _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20*Please\x20enter\x20pic\x20name*\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20▶\x20*.picjeni*\x0a\x20\x20\x20\x20\x20▶\x20*.picrose*\x0a\x20\x20\x20\x20\x20▶\x20*.picjiso*\x0a\x20\x20\x20\x20\x20▶\x20*.picryujin*\x0a\x20\x20\x20\x20\x20▶\x20*.pichijaber*\x20');
            }
            break;
            case _0x3e00d3(0x6f2): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x853),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x16859c = _0x3e00d3(0xba6);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x16859c
                    },
                    'caption': '' + global[_0x3e00d3(0x576)]
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x57b): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x853),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x290cf1 = _0x3e00d3(0xc5d);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x290cf1
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0x421)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x544): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x853),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x87433d = _0x3e00d3(0x645);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x87433d
                    },
                    'caption': global['cap'] + _0x3e00d3(0xaa1)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x3ab): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x853),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x15f102 = 'https://betabotz-api.herokuapp.com/api/cecan/ryujin?apikey=BetaBotz';
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x15f102
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa8c)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x4f7): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x755),
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x1f6269 = _0x3e00d3(0x6b2);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x1f6269
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0x327)
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xac6):
            case _0x3e00d3(0x3c6): {
                if (!_0x153b74) throw _0x3e00d3(0x553) + Lang['EXAMPLE'] + '\x0a\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x85a);
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0]['includes']('tiktok.com')) throw '*The\x20link\x20you\x20provided\x20is\x20not\x20valid*';
                const _0xb25eff = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xb1a) + _0x3bbe8d['pushName'] + _0x3e00d3(0x34c));
                anu = await fetchJson('https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url=' + _0x153b74 + _0x3e00d3(0x913));
                let _0x2cdd1c = _0x3e00d3(0x934) + _0x3bbe8d['pushName'] + _0x3e00d3(0xac0);
                _0x300b79 = await getBuffer(_0x3e00d3(0x7d4)), buf2 = await getBuffer(anu[_0x3e00d3(0xb16)]['nowm']);
                let _0x216ce1 = await prepareWAMessageMedia({
                    'video': buf2,
                    'gifPlayback': ![]
                }, {
                    'upload': _0x4b49f7[_0x3e00d3(0x997)]
                });
                const _0x37cf23 = generateWAMessageFromContent(_0x3bbe8d['chat'], proto[_0x3e00d3(0x910)][_0x3e00d3(0x747)]({
                    'templateMessage': {
                        'hydratedTemplate': {
                            'videoMessage': _0x216ce1[_0x3e00d3(0x371)],
                            'hydratedContentText': _0x2cdd1c,
                            'hydratedFooterText': global[_0x3e00d3(0x673)],
                            'hydratedButtons': [{
                                'quickReplyButton': {
                                    'displayText': _0x3e00d3(0x6ee),
                                    'id': _0x3e00d3(0xc00)
                                }
                            }]
                        }
                    }
                }), {
                    'userJid': _0x3bbe8d[_0x3e00d3(0x5f1)],
                    'quoted': _0x3bbe8d
                });
                _0x4b49f7[_0x3e00d3(0xb51)](_0x3bbe8d['chat'], _0x37cf23['message'], {
                    'messageId': _0x37cf23[_0x3e00d3(0x2da)]['id']
                });
            }
            break;
            case _0x3e00d3(0x2cd): {
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x453732 = _0x3e00d3(0x3cf);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0x75c);
                if (!_0x153b74) return _0x53c8bd(_0x453732);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x28d),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                let _0x103213 = [{
                    'title': _0x3e00d3(0x54e),
                    'rows': [{
                        'title': 'LEAGUE\x20OF\x20KING\x20STYLE\x20',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x6b0) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x78d),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x83a) + _0x153b74
                    }, {
                        'title': 'HORROR\x20STYLE\x20',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x1ef) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x30e),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x671) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb9b),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x8a4) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x5c3),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x94a) + _0x153b74
                    }, {
                        'title': 'NINJA\x20STYLE\x20',
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x754) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x99d),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'neon5\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x494),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x467) + _0x153b74
                    }, {
                        'title': 'NEON\x20SATIN\x20STYLE\x20',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x87b) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xaa2),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x83e) + _0x153b74
                    }, {
                        'title': 'NEON-GALAXY\x20STYLE\x20',
                        'description': 'Mr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x783) + _0x153b74
                    }, {
                        'title': 'TEXT\x20TO\x20STETUS\x20STYLE\x20(life)-\x201',
                        'description': 'Mr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x728) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x8ad),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xb3d) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xbab),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x796) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x4d4),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x45a) + _0x153b74
                    }, {
                        'title': 'TEXT\x20TO\x20STETUS\x20STYLE\x20(lovely)-\x205',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xafa) + _0x153b74
                    }, {
                        'title': 'TEXT\x20TO\x20STETUS\x20STYLE\x20(mood)-\x206',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x988) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x927),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'status2\x20' + _0x153b74
                    }, {
                        'title': 'TEXT\x20TO\x20STETUS\x20STYLE\x20(mood)-\x208',
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x60a) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc72),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': 'tattoo\x20' + _0x153b74
                    }, {
                        'title': 'LEAVES\x20STYLE\x20-\x201',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x5d2) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x876),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x5c7) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x499),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'leaves2\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x691),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x52d) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x7d1),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x2df) + _0x153b74
                    }, {
                        'title': 'LEAVES\x20STYLE\x20-\x206',
                        'description': 'Mr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'leaves5\x20' + _0x153b74
                    }, {
                        'title': 'VALANTINE\x20STYLE\x20',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x363) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x32a),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x2b6) + _0x153b74
                    }, {
                        'title': 'GALAXY-ANGAL-WINGS\x20STYLE\x20',
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x41e) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc60),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x580) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xad1),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0xc5f) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x20e),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x67c) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xb15),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x2c3) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xa92),
                        'description': 'Mr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'blood-steel\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0xc84),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'Blood-Text2\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x21f),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'birthday-cake7\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x3f7),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x642) + _0x153b74
                    }, {
                        'title': 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x203',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x356) + _0x153b74
                    }, {
                        'title': 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x204',
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0xba7) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x337),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': _0x3e00d3(0x4e2) + _0x153b74
                    }, {
                        'title': 'BIRTHDAY\x20CAKE\x20STYLE\x20-\x206',
                        'description': 'Mr\x20' + _0x3bbe8d['pushName'] + '\x20' + global[_0x3e00d3(0x673)] + '\x20is\x20Ready\x20to\x20make\x20your\x20logo',
                        'rowId': 'birthday-cake2\x20' + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x751),
                        'description': 'Mr\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global['botnma'] + _0x3e00d3(0xacc),
                        'rowId': _0x3e00d3(0x2f8) + _0x153b74
                    }, {
                        'title': _0x3e00d3(0x9a8),
                        'description': _0x3e00d3(0x459) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '\x20' + global[_0x3e00d3(0x673)] + _0x3e00d3(0xacc),
                        'rowId': 'darkgold\x20' + _0x153b74
                    }]
                }];
                await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0xbca) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0xc7f) + _0x153b74 + _0x3e00d3(0x470), '' + global[_0x3e00d3(0x673)], _0x3e00d3(0xaac), 'MAKE\x20LOGO', _0x103213, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x40f): {
                const _0x127238 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING),
                    _0x439cea = 'https://api.violetics.pw/api/ephoto360/azzenka-league-of-kings?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74;
                await await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x439cea
                    },
                    'caption': '' + global['cap']
                });
            }
            break;
            case _0x3e00d3(0x62a): {
                const _0x4212c7 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING),
                    _0x12136c = _0x3e00d3(0x79d) + _0x153b74;
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x12136c
                    },
                    'caption': '' + global[_0x3e00d3(0x576)]
                });
            }
            break;
            case _0x3e00d3(0x551): {
                const _0x2b1815 = 'https://api.violetics.pw/api/ephoto360/Horror-Gift?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x2334ed = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2b1815
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x2334ed[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x340): {
                const _0x352130 = 'https://api.violetics.pw/api/ephoto360/Kahlii-Arena-Of-Valor?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x2bf3f6 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x352130
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x2bf3f6[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x560): {
                const _0x25e6aa = 'https://api.violetics.pw/api/ephoto360/Kaisa-League-Of-Legends?apikey=' + global['fbapi'] + '&text=' + _0x153b74,
                    _0x42c59d = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x25e6aa
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x42c59d[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x595): {
                const _0x1ecf6b = _0x3e00d3(0x3b6) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x37b86b = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1ecf6b
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x37b86b[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x9de): {
                const _0x236d03 = _0x3e00d3(0x42a) + global['fbapi'] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x162306 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x236d03
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x162306['key']
                });
            }
            break;
            case _0x3e00d3(0x2ab): {
                const _0x30021f = _0x3e00d3(0xc23) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0xfea720 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x30021f
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0xfea720['key']
                });
            }
            break;
            case _0x3e00d3(0xbb6): {
                const _0x16ec94 = _0x3e00d3(0x447) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x36c7bd = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x16ec94
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x36c7bd[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xbc8): {
                const _0x55a67e = 'https://api.violetics.pw/api/ephoto360/Neon-Satin?apikey=' + global['fbapi'] + '&text=' + _0x153b74,
                    _0x369582 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x55a67e
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'delete': _0x369582[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x65c): {
                const _0x519546 = 'https://api.violetics.pw/api/ephoto360/Neon-Valentine?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x1f297b = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x519546
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1f297b['key']
                });
            }
            break;
            case _0x3e00d3(0x2d7): {
                const _0x45765c = _0x3e00d3(0x570) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x43d5e5 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x45765c
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x43d5e5[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x58d): {
                const _0x3ffc6e = _0x3e00d3(0x530) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x5b6f15 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x3ffc6e
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x5b6f15[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x80b): {
                const _0x3c7e61 = 'https://api.violetics.pw/api/ephoto360/Status-Life2?apikey=' + global['fbapi'] + '&text=' + _0x153b74,
                    _0x3e4424 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x3c7e61
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x3e4424[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x5de): {
                const _0xa3bee4 = _0x3e00d3(0x652) + global[_0x3e00d3(0x888)] + '&text=' + _0x153b74,
                    _0x511af6 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0xa3bee4
                    },
                    'caption': global['cap'] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x511af6[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'status5': {
                const _0xd71255 = _0x3e00d3(0x5d3) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x973ceb = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global['LANG']);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0xd71255
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x973ceb[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x3e3): {
                const _0x58bdd0 = 'https://api.violetics.pw/api/ephoto360/Status-Love2?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x4da371 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x58bdd0
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x4da371[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'statuslogo': {
                const _0x4c1ddf = 'https://api.violetics.pw/api/ephoto360/Status-Mood?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x9ac856 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x4c1ddf
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x9ac856[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'status2': {
                const _0x441724 = 'https://api.violetics.pw/api/ephoto360/Status-Mood2?apikey=' + global['fbapi'] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x155b22 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x441724
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x155b22[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x8d9): {
                const _0xf210d1 = _0x3e00d3(0x3c2) + global[_0x3e00d3(0x888)] + '&text=' + _0x153b74,
                    _0x4c4f20 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global['LANG']);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0xf210d1
                    },
                    'caption': global['cap'] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'delete': _0x4c4f20[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0xb0f): {
                const _0x1b192d = _0x3e00d3(0x7ee) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x96ee93 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x1b192d
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x96ee93[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x9ca): {
                const _0x477f64 = _0x3e00d3(0x2b2) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x1c5e7c = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], global[_0x3e00d3(0x79a)]);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x477f64
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1c5e7c[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x66f): {
                const _0x3f712c = _0x3e00d3(0x9dd) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x4b7123 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x3f712c
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x4b7123[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x64c): {
                const _0x2f8871 = 'https://api.violetics.pw/api/ephoto360/Typography-Maker?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x3b2134 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x2f8871
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x3b2134[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x74a): {
                const _0x55ef3b = _0x3e00d3(0x6ba) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x22f1a2 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x55ef3b
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x22f1a2[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'leaves5': {
                const _0x29e673 = _0x3e00d3(0x434) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x1e4797 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x29e673
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x1e4797['key']
                });
            }
            break;
            case 'valentine': {
                const _0x2947a6 = _0x3e00d3(0xa20) + global[_0x3e00d3(0x888)] + '&text=' + _0x153b74,
                    _0x306936 = await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x2947a6
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x306936[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x53b): {
                const _0x274fad = 'https://api.violetics.pw/api/ephoto360/Leaves-Text?apikey=' + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x3df35e = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x274fad
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'delete': _0x3df35e[_0x3e00d3(0x2da)]
                });
            }
            break;
            case 'lende': {
                const _0x41337c = _0x3e00d3(0x3b5) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x4b4a92 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'image': {
                        'url': _0x41337c
                    },
                    'caption': global[_0x3e00d3(0x576)] + _0x3e00d3(0xa2f) + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x4b4a92['key']
                });
            }
            break;
            case _0x3e00d3(0x6a7): {
                const _0x7a5836 = _0x3e00d3(0x4d2) + global[_0x3e00d3(0x888)] + '&text=' + _0x153b74,
                    _0x8f554f = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x7a5836
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d['pushName']
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x8f554f[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x973):
            case _0x3e00d3(0x2fa):
            case _0x3e00d3(0x1ec):
            case _0x3e00d3(0xa0e):
            case 'blood-steel':
            case _0x3e00d3(0x262):
            case _0x3e00d3(0xba2):
            case 'birthday-cake2':
            case _0x3e00d3(0x6df):
            case _0x3e00d3(0xc80):
            case _0x3e00d3(0x8ff):
            case 'birthday-cake6':
            case _0x3e00d3(0x2c1):
            case 'cute-typography': {
                const _0x158a33 = _0x3e00d3(0xc67) + _0x5a7691 + _0x3e00d3(0x9f3) + global['fbapi'] + _0x3e00d3(0x8c9) + _0x153b74,
                    _0x52aaf2 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], LOGO_MAKING);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], {
                    'image': {
                        'url': _0x158a33
                    },
                    'caption': global[_0x3e00d3(0x576)] + '\x0a\x0a*🗳️\x20ʀᴇǫᴜᴇsᴛᴇʀ\x20-*\x20' + _0x3bbe8d[_0x3e00d3(0x7a2)]
                }, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'delete': _0x52aaf2[_0x3e00d3(0x2da)]
                });
            }
            break;
            case _0x3e00d3(0x3b4): {
                if (!_0x153b74) throw _0x3e00d3(0x9be);
                const _0x20e6bd = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x257));
                let _0x558dc0 = require(_0x3e00d3(0xc35));
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0]['includes'](_0x3e00d3(0xab5))) throw '*The\x20link\x20you\x20provided\x20is\x20not\x20valid*';
                _0x558dc0[_0x3e00d3(0xbb9)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x39a4e7 => {
                    const _0x3b161a = _0x3e00d3;
                    await _0x4b49f7[_0x3b161a(0x69f)](_0x3bbe8d['chat'], {
                        'delete': _0x20e6bd[_0x3b161a(0x2da)]
                    });
                    const _0x28279c = await _0x4b49f7[_0x3b161a(0xa97)](_0x3bbe8d[_0x3b161a(0x5f1)], _0x3b161a(0x5ce));
                    await _0x4b49f7[_0x3b161a(0x69f)](_0x3bbe8d[_0x3b161a(0x5f1)], {
                        'audio': {
                            'url': _0x39a4e7[_0x3b161a(0x7c9)][_0x3b161a(0x939)]
                        },
                        'mimetype': 'audio/mpeg'
                    }, {
                        'quoted': _0x3bbe8d
                    }), await _0x4b49f7[_0x3b161a(0x69f)](_0x3bbe8d[_0x3b161a(0x5f1)], {
                        'delete': _0x28279c[_0x3b161a(0x2da)]
                    });
                })[_0x3e00d3(0x8c3)](_0x36b0e1 => {
                    const _0x57c81a = _0x3e00d3;
                    _0x4b49f7[_0x57c81a(0xa97)](_0x3bbe8d[_0x57c81a(0x5f1)], _0x57c81a(0x263));
                });
            }
            break;
            case _0x3e00d3(0xbaa): {
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x0a\x20\x20\x20\x20' + thub['YT_THUB'] + _0x3e00d3(0x480) + thub[_0x3e00d3(0x615)] + _0x3e00d3(0x480) + thub[_0x3e00d3(0xaad)] + '\x0a\x20\x20\x20\x20' + thub[_0x3e00d3(0x692)] + _0x3e00d3(0x480));
            }
            break;
            case _0x3e00d3(0x95f):
            case _0x3e00d3(0xb30): {
                if (!_0x153b74) throw _0x3e00d3(0x9be);
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0x4fa))) throw _0x3e00d3(0x696);
                await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x787) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0xa9e)), anu = await fetchJson(_0x3e00d3(0x2cf) + global[_0x3e00d3(0x888)] + _0x3e00d3(0x680) + _0x153b74), tummb = await getBuffer(thub[_0x3e00d3(0x615)]), FBCAP = _0x3e00d3(0x30b) + anu[_0x3e00d3(0xb16)][_0x3e00d3(0x573)][_0x3e00d3(0x50b)] + _0x3e00d3(0x808) + anu[_0x3e00d3(0xb16)][_0x3e00d3(0x47e)][0x0][_0x3e00d3(0x8e3)] + _0x3e00d3(0x358), _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': anu[_0x3e00d3(0xb16)][_0x3e00d3(0x47e)][0x0][_0x3e00d3(0x47e)]
                    },
                    'jpegThumbnail': tummb,
                    'caption': FBCAP
                }, {
                    'quoted': _0x3bbe8d
                })['catch'](_0xd548cd => _0x5ef4bf('*Sorry,\x20the\x20feature\x20is\x20in\x20error*'));
            }
            break;
            case _0x3e00d3(0x54a): {
                anu = await fetchJson(_0x3e00d3(0x542) + _0x153b74 + _0x3e00d3(0x344)), _0x53c8bd('\x20' + anu[_0x3e00d3(0xb16)][_0x3e00d3(0xbdd)] + _0x3e00d3(0x5bb) + anu[_0x3e00d3(0xb16)][_0x3e00d3(0x801)] + _0x3e00d3(0x5bb) + anu['result'][_0x3e00d3(0x3e1)]);
            }
            break;
            case 'fbook': {
                if (!_0x153b74) return _0x53c8bd('*Please\x20give\x20me\x20a\x20link*');
                var _0x17cb46 = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x3e00d3(0x2f7));
                let _0x56acac = require(_0x3e00d3(0xc35));
                _0x56acac[_0x3e00d3(0x9c8)]('' + _0x153b74)[_0x3e00d3(0x6e3)](async _0x4f3c12 => {
                    const _0x57af35 = _0x3e00d3;
                    _0x300b79 = await getBuffer(_0x57af35(0x72e));
                    for (let _0x327a94 of _0x4f3c12[_0x57af35(0xb16)]) {
                        await _0x4b49f7[_0x57af35(0x69f)](_0x3bbe8d['chat'], {
                            'delete': _0x17cb46['key']
                        });
                        var _0x46d3f8 = await await _0x4b49f7[_0x57af35(0xa97)](_0x3bbe8d[_0x57af35(0x5f1)], _0x57af35(0x63f));
                        await _0x4b49f7[_0x57af35(0x69f)](_0x3bbe8d[_0x57af35(0x5f1)], {
                            'video': {
                                'url': _0x327a94[_0x57af35(0x47e)]
                            },
                            'caption': global[_0x57af35(0x576)] + '\x0a\x0a*Quality\x20:*\x20' + _0x327a94[_0x57af35(0x4ac)]
                        }, {
                            'quoted': _0x3bbe8d
                        }), await _0x4b49f7[_0x57af35(0x69f)](_0x3bbe8d['chat'], {
                            'delete': _0x46d3f8[_0x57af35(0x2da)]
                        });
                    }
                })[_0x3e00d3(0x8c3)](_0x726f0b => {
                    const _0xc6e6f6 = _0x3e00d3;
                    _0x4b49f7[_0xc6e6f6(0xa97)](_0x3bbe8d[_0xc6e6f6(0x5f1)], _0xc6e6f6(0xbe9));
                });
            }
            break;
            case _0x3e00d3(0x43a):
            case _0x3e00d3(0x598):
            case 'igvid':
            case 'fb':
            case _0x3e00d3(0xb3f): {
                var _0x2f02ec = '';
                if (_0x5a7691 == _0x3e00d3(0x43a)) _0x2f02ec = _0x3e00d3(0xb95);
                if (_0x5a7691 == _0x3e00d3(0x598)) _0x2f02ec = '🪅';
                if (_0x5a7691 == 'fb') _0x2f02ec = '🪀';
                if (_0x5a7691 == _0x3e00d3(0xb3f)) _0x2f02ec = '🧸';
                const _0x395690 = _0x9b834d[0x1] || _0x3e00d3(0x453),
                    _0x415d88 = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json');
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⬇️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) {
                    await _0x4b49f7['sendMessage'](_0x3e5538, {
                        'react': {
                            'text': 'ℹ️',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    throw _0x3e00d3(0x2b7);
                }
                _0x300b79 = await getBuffer(_0x415d88[_0x3e00d3(0xaad)]);
                let _0x24b0c7 = require(_0x3e00d3(0xc35)),
                    _0x339369 = _0x9b834d[0x0];
                _0x24b0c7[_0x3e00d3(0x8d1)](_0x339369)[_0x3e00d3(0x6e3)](async _0x1fdc9b => {
                    const _0x35ac68 = _0x3e00d3;
                    for (let _0x1b1da7 of _0x1fdc9b[_0x35ac68(0x47e)]) {
                        if (_0x1b1da7[_0x35ac68(0x47e)][_0x35ac68(0x3d5)](_0x35ac68(0x7ca))) {
                            let _0x37386c = await getBuffer(_0x1b1da7[_0x35ac68(0x47e)]);
                            await _0x4b49f7[_0x35ac68(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '⬆️',
                                    'key': _0x3bbe8d[_0x35ac68(0x2da)]
                                }
                            });
                            const _0x1844ae = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x35ac68(0x5f1)], {
                                'video': _0x37386c,
                                'jpegThumbnail': _0x300b79,
                                'caption': '' + global[_0x35ac68(0x576)]
                            }, {
                                'quoted': _0x3bbe8d
                            });
                            await _0x4b49f7[_0x35ac68(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': '✅',
                                    'key': _0x3bbe8d['key']
                                }
                            }), await _0x4b49f7[_0x35ac68(0x69f)](_0x3e5538, {
                                'react': {
                                    'text': _0x2f02ec,
                                    'key': _0x1844ae['key']
                                }
                            });
                        }
                    }
                })[_0x3e00d3(0x8c3)](_0xd9772a => _0x53c8bd(_0x3e00d3(0x656)));
            }
            break;
            case _0x3e00d3(0x68b):
            case _0x3e00d3(0x9cd): {
                if (!_0x153b74) throw _0x3e00d3(0x26f);
                _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                let _0x3e1a0c = await fetchJson(api('zenz', _0x3e00d3(0x634), {
                    'url': _0x153b74
                }, 'apikey'));
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'video': {
                        'url': _0x3e1a0c[_0x3e00d3(0xb16)]
                    },
                    'caption': 'Download\x20From\x20' + _0x153b74
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x563): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0xac3) + '.mediafire\x20https://www.mediafire.com/view/mdn9ja4wcmy7dtd/QueenElisaBot.jpg/file```');
                if (!isUrl(_0x9b834d[0x0]) && !_0x9b834d[0x0][_0x3e00d3(0x3d5)](_0x3e00d3(0x630))) return _0x53c8bd(_0x3e00d3(0x1ff));
                const _0x5d187d = await _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3e00d3(0x473));
                await fetchJson(_0x3e00d3(0x542) + _0x153b74 + _0x3e00d3(0x344))['then'](async _0x27c14d => {
                    const _0x26b449 = _0x3e00d3;
                    mname = _0x27c14d[_0x26b449(0xb16)][_0x26b449(0xbdd)], msize = _0x27c14d['result'][_0x26b449(0x801)], murl = _0x27c14d[_0x26b449(0xb16)][_0x26b449(0x3e1)], mmeme = _0x27c14d[_0x26b449(0xb16)][_0x26b449(0x1ed)], await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x26b449(0x5f1)], {
                        'delete': _0x5d187d[_0x26b449(0x2da)]
                    });
                    const _0x3de9fe = await _0x4b49f7[_0x26b449(0xa97)](_0x3bbe8d['chat'], _0x26b449(0x5b3));
                    await _0x4b49f7[_0x26b449(0x69f)](_0x3bbe8d[_0x26b449(0x5f1)], {
                        'delete': _0x3de9fe[_0x26b449(0x2da)]
                    }), await _0x4b49f7[_0x26b449(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '📁',
                            'key': me['key']
                        }
                    });
                });
            }
            break;
            case _0x3e00d3(0x69b): {
                const {
                    mediafireDl: _0x22fbb4
                } = require(_0x3e00d3(0x214));
                await _0x22fbb4(_0x153b74)['then'](async _0x43cb1e => {
                    const _0x519d57 = _0x3e00d3;
                    if (_0x43cb1e[0x0][_0x519d57(0x801)][_0x519d57(0x341)]('MB')[0x0] >= 0x96) return _0x53c8bd(_0x519d57(0x3b2) + util[_0x519d57(0x945)](_0x43cb1e));
                    const _0x498c37 = await _0x4b49f7[_0x519d57(0xa97)](_0x3bbe8d[_0x519d57(0x5f1)], _0x519d57(0x473));
                    await _0x4b49f7[_0x519d57(0x69f)](_0x3bbe8d[_0x519d57(0x5f1)], {
                        'delete': _0x498c37['key']
                    });
                    const _0x531599 = await _0x4b49f7[_0x519d57(0xa97)](_0x3bbe8d['chat'], _0x519d57(0x5b3)),
                        _0x8c2191 = _0x519d57(0x518) + _0x43cb1e[0x0][_0x519d57(0xbdd)] + _0x519d57(0x417) + _0x43cb1e[0x0]['size'] + _0x519d57(0x527) + _0x43cb1e[0x0][_0x519d57(0x1ed)] + _0x519d57(0x654) + _0x43cb1e[0x0][_0x519d57(0x3e1)],
                        _0x308c88 = await _0x4b49f7[_0x519d57(0x69f)](_0x3bbe8d[_0x519d57(0x5f1)], {
                            'document': {
                                'url': _0x43cb1e[0x0][_0x519d57(0x3e1)]
                            },
                            'fileName': _0x43cb1e[0x0][_0x519d57(0xbdd)],
                            'mimetype': _0x43cb1e[0x0][_0x519d57(0x1ed)]
                        }, {
                            'quoted': _0x3bbe8d
                        })[_0x519d57(0x8c3)](_0x234c0e => _0x53c8bd(mess[_0x519d57(0x92c)]));
                    await _0x4b49f7[_0x519d57(0x69f)](_0x3bbe8d['chat'], {
                        'delete': _0x531599['key']
                    }), await _0x4b49f7[_0x519d57(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '📁',
                            'key': _0x308c88['key']
                        }
                    });
                })[_0x3e00d3(0x8c3)](_0x43be37 => _0x53c8bd(NOT_FOUND));
            }
            break;
            case 'ringtone': {
                if (!_0x153b74) throw Lang[_0x3e00d3(0x582)] + '\x0a\x20:\x20' + (_0x440929 + _0x5a7691) + '\x20black\x20rover';
                let {
                    ringtone: _0x2af92f
                } = require(_0x3e00d3(0xaa5)), _0x459e65 = await _0x2af92f(_0x153b74), _0x3fbc19 = _0x459e65[Math['floor'](Math['random']() * _0x459e65['length'])];
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                    'audio': {
                        'url': _0x3fbc19[_0x3e00d3(0x2ae)]
                    },
                    'fileName': _0x3fbc19['title'] + _0x3e00d3(0xba5),
                    'mimetype': 'audio/mpeg'
                }, {
                    'quoted': _0x3bbe8d
                });
            }
            case _0x3e00d3(0x79b):
            case _0x3e00d3(0x9b0):
            case 'deep':
            case _0x3e00d3(0xbc4):
            case 'fast':
            case _0x3e00d3(0x890):
            case _0x3e00d3(0x6bc):
            case _0x3e00d3(0x968):
            case 'robot':
            case _0x3e00d3(0x4d8):
            case _0x3e00d3(0x8f1):
            case _0x3e00d3(0x877):
                var _0x453732 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x453732 = _0x3e00d3(0xc1b);
                if (global['LANG'] == 'SI') _0x453732 = _0x3e00d3(0xc6c);
                try {
                    let _0x47440d;
                    if (/bass/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x37c);
                    if (/blown/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = '-af\x20acrusher=.1:1:64:0:log';
                    if (/deep/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = '-af\x20atempo=4/4,asetrate=44500*2/3';
                    if (/earrape/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x777);
                    if (/fast/ ['test'](_0x5a7691)) _0x47440d = '-filter:a\x20\x22atempo=1.63,asetrate=44100\x22';
                    if (/fat/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x6a5);
                    if (/nightcore/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0xb9a);
                    if (/reverse/ ['test'](_0x5a7691)) _0x47440d = _0x3e00d3(0x971);
                    if (/robot/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0xb84);
                    if (/slow/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x7bc);
                    if (/smooth/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x57e);
                    if (/squirrel/ [_0x3e00d3(0x2f1)](_0x5a7691)) _0x47440d = _0x3e00d3(0x2b0);
                    if (/audio/ [_0x3e00d3(0x2f1)](_0x253f71)) {
                        await _0x4b49f7['sendMessage'](_0x3e5538, {
                            'react': {
                                'text': _0x3e00d3(0x579),
                                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                            }
                        }), _0x2f1bc9(mess[_0x3e00d3(0x42d)]);
                        let _0xd8fbeb = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d),
                            _0x3323de = getRandom(_0x3e00d3(0xba5));
                        exec(_0x3e00d3(0xbc9) + _0xd8fbeb + '\x20' + _0x47440d + '\x20' + _0x3323de, (_0x2b089b, _0x5f08fa, _0x16f862) => {
                            const _0x4f1a65 = _0x3e00d3;
                            fs['unlinkSync'](_0xd8fbeb);
                            if (_0x2b089b) return _0x53c8bd(_0x2b089b);
                            let _0x2b435f = fs['readFileSync'](_0x3323de);
                            _0x4b49f7['sendMessage'](_0x3bbe8d[_0x4f1a65(0x5f1)], {
                                'audio': _0x2b435f,
                                'mimetype': _0x4f1a65(0xb0b)
                            }, {
                                'quoted': _0x3bbe8d
                            }), fs[_0x4f1a65(0x36a)](_0x3323de);
                        });
                    } else _0x53c8bd(_0x453732);
                } catch (_0x5c1456) {
                    _0x53c8bd(_0x5c1456);
                }
                break;
            case _0x3e00d3(0x2f5): {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd('Reply\x20Message!');
                if (!_0x3bbe8d['quoted'][_0x3e00d3(0x372)]) return _0x53c8bd('SHA256\x20Hash\x20Missing');
                if (!_0x153b74) return _0x53c8bd(_0x3e00d3(0x618));
                let _0x58b0eb = _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x372)][_0x3e00d3(0x7b6)](_0x3e00d3(0x4fc));
                if (global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)][_0x58b0eb] && global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)][_0x58b0eb][_0x3e00d3(0x8e0)]) return _0x53c8bd(_0x3e00d3(0x950));
                global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)][_0x58b0eb] = {
                    'text': _0x153b74,
                    'mentionedJid': _0x3bbe8d[_0x3e00d3(0x22f)],
                    'creator': _0x3bbe8d[_0x3e00d3(0x448)],
                    'at': +new Date(),
                    'locked': ![]
                }, _0x53c8bd(_0x3e00d3(0x5fd));
            }
            break;
            case 'delcmd': {
                let _0x5c6ffd = _0x3bbe8d['quoted']['fileSha256'][_0x3e00d3(0x7b6)](_0x3e00d3(0x4fc));
                if (!_0x5c6ffd) return _0x53c8bd(_0x3e00d3(0x3b3));
                if (global['db']['data']['sticker'][_0x5c6ffd] && global['db']['data'][_0x3e00d3(0xc6a)][_0x5c6ffd][_0x3e00d3(0x8e0)]) return _0x53c8bd(_0x3e00d3(0x1f2));
                delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)][_0x5c6ffd], _0x53c8bd(_0x3e00d3(0x5fd));
            }
            break;
            case _0x3e00d3(0x1f4): {
                let _0x5b2ea3 = (_0x3e00d3(0x2e0) + Object[_0x3e00d3(0xbf0)](global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)])['map'](([_0x4303c5, _0x467d40], _0x85818d) => _0x85818d + 0x1 + '.\x20' + (_0x467d40['locked'] ? '*' + _0x4303c5 + '*' : _0x4303c5) + _0x3e00d3(0x44e) + _0x467d40[_0x3e00d3(0x5e0)])[_0x3e00d3(0xbb1)]('\x0a') + '\x0a')[_0x3e00d3(0xc79)]();
                _0x4b49f7[_0x3e00d3(0xa97)](_0x3bbe8d['chat'], _0x5b2ea3, _0x3bbe8d, {
                    'mentions': Object[_0x3e00d3(0xb01)](global['db']['data']['sticker'])[_0x3e00d3(0x56d)](_0x1f0084 => _0x1f0084['mentionedJid'])[_0x3e00d3(0x4f9)]((_0x1b0d1b, _0x2d1689) => [..._0x1b0d1b, ..._0x2d1689], [])
                });
            }
            break;
            case _0x3e00d3(0xae3): {
                if (!_0x5ef7c8) return _0x2f1bc9('' + mess[_0x3e00d3(0x3f2)]);
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd('Reply\x20Message!');
                if (!_0x3bbe8d['quoted'][_0x3e00d3(0x372)]) return _0x53c8bd(_0x3e00d3(0xb91));
                let _0x3d3cca = _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x372)]['toString'](_0x3e00d3(0x4fc));
                if (!(_0x3d3cca in global['db'][_0x3e00d3(0x646)][_0x3e00d3(0xc6a)])) return _0x53c8bd('Hash\x20Not\x20Found\x20In\x20Database');
                global['db']['data']['sticker'][_0x3d3cca][_0x3e00d3(0x8e0)] = !/^un/i ['test'](_0x5a7691), _0x53c8bd(_0x3e00d3(0x5fd));
            }
            break;
            case _0x3e00d3(0x2bf): {
                if (!_0x3bbe8d[_0x3e00d3(0xbad)]) return _0x53c8bd('Reply\x20Message\x20You\x20Want\x20To\x20Save\x20In\x20Database');
                if (!_0x153b74) return _0x53c8bd(Lang[_0x3e00d3(0x582)] + _0x3e00d3(0x994) + (_0x440929 + _0x5a7691) + _0x3e00d3(0x4e8));
                let _0x310da9 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x952)];
                if (_0x153b74['toLowerCase']() in _0x310da9) return _0x53c8bd('\x27' + _0x153b74 + _0x3e00d3(0x930));
                _0x310da9[_0x153b74[_0x3e00d3(0xa8d)]()] = _0x2d884d[_0x3e00d3(0x6aa)], _0x53c8bd(_0x3e00d3(0x8c1) + _0x153b74 + '\x27\x0a\x20\x20\x20\x20\x0aAccess\x20With\x20' + _0x440929 + _0x3e00d3(0x7cd) + _0x153b74 + _0x3e00d3(0x9a7) + _0x440929 + _0x3e00d3(0x6ca));
            }
            break;
            case _0x3e00d3(0x5db): {
                if (!_0x153b74) return _0x53c8bd(Lang[_0x3e00d3(0x582)] + '\x0a\x20:\x20' + (_0x440929 + _0x5a7691) + _0x3e00d3(0x7dc) + _0x440929 + 'listmsg');
                let _0xce5725 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x952)];
                if (!(_0x153b74[_0x3e00d3(0xa8d)]() in _0xce5725)) return _0x53c8bd('\x27' + _0x153b74 + _0x3e00d3(0x3dd));
                _0x4b49f7[_0x3e00d3(0x20d)](_0x3bbe8d['chat'], _0xce5725[_0x153b74[_0x3e00d3(0xa8d)]()], !![]);
            }
            break;
            case _0x3e00d3(0x6ca): {
                let _0x4d4676 = JSON[_0x3e00d3(0x685)](fs[_0x3e00d3(0xab9)](_0x3e00d3(0x779))),
                    _0x4cf5a9 = Object[_0x3e00d3(0xbf0)](global['db'][_0x3e00d3(0x646)]['database'])['map'](([_0x26ff91, _0x188ea9]) => {
                        return {
                            'nama': _0x26ff91,
                            ..._0x188ea9
                        };
                    }),
                    _0x3932ea = _0x3e00d3(0x514);
                for (let _0x5596c4 of _0x4cf5a9) {
                    _0x3932ea += '💫\x20*Name\x20:*\x20' + _0x5596c4['nama'] + _0x3e00d3(0x4f2) + getContentType(_0x5596c4[_0x3e00d3(0x9e1)])[_0x3e00d3(0x449)](/Message/i, '') + _0x3e00d3(0xb31);
                }
                _0x53c8bd(_0x3932ea);
            }
            break;
            case _0x3e00d3(0xc46):
            case _0x3e00d3(0x4e9): {
                let _0x2d3ce6 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x952)];
                if (!(_0x153b74[_0x3e00d3(0xa8d)]() in _0x2d3ce6)) return _0x53c8bd('\x27' + _0x153b74 + _0x3e00d3(0x3dd));
                delete _0x2d3ce6[_0x153b74[_0x3e00d3(0xa8d)]()], _0x53c8bd(_0x3e00d3(0x838) + _0x153b74 + _0x3e00d3(0xb6b));
            }
            break;
            case 'anonymous': {
                if (_0x3bbe8d['isGroup']) return _0x53c8bd(_0x3e00d3(0x1fb));
                this['anonymous'] = this[_0x3e00d3(0x865)] ? this[_0x3e00d3(0x865)] : {};
                let _0x33ed12 = [{
                    'urlButton': {
                        'displayText': _0x3e00d3(0x8ba),
                        'url': _0x3e00d3(0x77d)
                    }
                }, {
                    'quickReplyButton': {
                        'displayText': _0x3e00d3(0xc65),
                        'id': _0x3e00d3(0x7a7)
                    }
                }];
                _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], _0x33ed12, _0x3e00d3(0xada) + await _0x4b49f7[_0x3e00d3(0x302)](_0x3bbe8d['sender']) + _0x3e00d3(0x985), _0x4b49f7[_0x3e00d3(0x2a0)]['name'], _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x918):
            case _0x3e00d3(0x70f): {
                if (_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(_0x3e00d3(0x1fb));
                this[_0x3e00d3(0x865)] = this[_0x3e00d3(0x865)] ? this[_0x3e00d3(0x865)] : {};
                let _0x4574a7 = Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0xaec371 => _0xaec371[_0x3e00d3(0x3ed)](_0x3bbe8d[_0x3e00d3(0x448)]));
                if (!_0x4574a7) {
                    let _0x17a4b8 = [{
                        'buttonId': _0x3e00d3(0x7a7),
                        'buttonText': {
                            'displayText': 'START'
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], _0x17a4b8, _0x3e00d3(0x744));
                    throw ![];
                }
                let _0x3358fe = await _0x4b49f7[_0x3e00d3(0x5c9)](_0x4574a7['b']),
                    _0x269ddd = await _0x4b49f7[_0x3e00d3(0x88b)](_0x4574a7['b']),
                    _0x5df8e8 = await _0x4b49f7[_0x3e00d3(0x9d6)](_0x4574a7['a'], _0x3358fe, _0x3e00d3(0xc01) + await _0x4b49f7[_0x3e00d3(0x302)](_0x4574a7['b']) + '\x0aBio\x20:\x20' + _0x269ddd['status'] + _0x3e00d3(0x594) + _0x4574a7['b'][_0x3e00d3(0x341)]('@')[0x0], _0x3bbe8d, {
                        'mentions': [_0x4574a7['b']]
                    });
                _0x4b49f7[_0x3e00d3(0x6d7)](_0x4574a7['a'], [_0x4574a7['b']['split']('@')[0x0]], _0x5df8e8);
            }
            break;
            case _0x3e00d3(0xb27):
            case _0x3e00d3(0x899): {
                if (_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd(_0x3e00d3(0x1fb));
                this[_0x3e00d3(0x865)] = this[_0x3e00d3(0x865)] ? this[_0x3e00d3(0x865)] : {};
                let _0xc5c7d6 = Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0x4bceb0 => _0x4bceb0[_0x3e00d3(0x3ed)](_0x3bbe8d[_0x3e00d3(0x448)]));
                if (!_0xc5c7d6) {
                    let _0x5dde7b = [{
                        'buttonId': _0x3e00d3(0x7a7),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x5a7)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], _0x5dde7b, _0x3e00d3(0x744));
                    throw ![];
                }
                _0x53c8bd('Ok');
                let _0x76320f = _0xc5c7d6['other'](_0x3bbe8d[_0x3e00d3(0x448)]);
                if (_0x76320f) await _0x4b49f7[_0x3e00d3(0xa97)](_0x76320f, _0x3e00d3(0xaf0), _0x3bbe8d);
                delete this['anonymous'][_0xc5c7d6['id']];
                if (_0x5a7691 === _0x3e00d3(0xc22)) break;
            }
            case _0x3e00d3(0xaf3):
            case _0x3e00d3(0x967): {
                if (_0x3bbe8d['isGroup']) return _0x53c8bd(_0x3e00d3(0x1fb));
                this[_0x3e00d3(0x865)] = this[_0x3e00d3(0x865)] ? this[_0x3e00d3(0x865)] : {};
                if (Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0xcb5a8a => _0xcb5a8a[_0x3e00d3(0x3ed)](_0x3bbe8d[_0x3e00d3(0x448)]))) {
                    let _0x13e6ea = [{
                        'buttonId': _0x3e00d3(0x738),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xab3)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d['chat'], _0x13e6ea, '_You\x20Are\x20Still\x20In\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20Below\x20To\x20Terminate\x20Your\x20Anonymous\x20Session_', _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                    throw ![];
                }
                let _0x560471 = Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0x48d442 => _0x48d442['state'] === _0x3e00d3(0xb41) && !_0x48d442[_0x3e00d3(0x3ed)](_0x3bbe8d[_0x3e00d3(0x448)]));
                if (_0x560471) {
                    let _0x20f133 = [{
                        'buttonId': _0x3e00d3(0x616),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xb06)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0x738),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xab3)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7['sendButtonText'](_0x560471['a'], _0x20f133, _0x3e00d3(0x907), _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d), _0x560471['b'] = _0x3bbe8d['sender'], _0x560471[_0x3e00d3(0x4f5)] = _0x3e00d3(0x22b), await _0x4b49f7[_0x3e00d3(0xa5b)](_0x560471['b'], _0x20f133, _0x3e00d3(0x907), _0x4b49f7[_0x3e00d3(0x2a0)]['name'], _0x3bbe8d);
                } else {
                    let _0x13e8ce = +new Date();
                    this['anonymous'][_0x13e8ce] = {
                        'id': _0x13e8ce,
                        'a': _0x3bbe8d['sender'],
                        'b': '',
                        'state': 'WAITING',
                        'check': function(_0x1bfd05 = '') {
                            const _0x238677 = _0x3e00d3;
                            return [this['a'], this['b']][_0x238677(0x3d5)](_0x1bfd05);
                        },
                        'other': function(_0x214502 = '') {
                            return _0x214502 === this['a'] ? this['b'] : _0x214502 === this['b'] ? this['a'] : '';
                        }
                    };
                    let _0x437348 = [{
                        'buttonId': _0x3e00d3(0xb27),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xab3)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x437348, _0x3e00d3(0x949), _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                }
                break;
            }
            case _0x3e00d3(0xc59):
            case _0x3e00d3(0x3cb): {
                if (_0x3bbe8d[_0x3e00d3(0x900)]) return _0x53c8bd('This\x20Feature\x20Cannot\x20Be\x20Used\x20In\x20Group!');
                this[_0x3e00d3(0x865)] = this[_0x3e00d3(0x865)] ? this['anonymous'] : {};
                let _0x3921b9 = Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0x2b7aad => _0x2b7aad[_0x3e00d3(0x3ed)](_0x3bbe8d[_0x3e00d3(0x448)]));
                if (!_0x3921b9) {
                    let _0xcd0f8 = [{
                        'buttonId': _0x3e00d3(0x7a7),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x5a7)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0xcd0f8, _0x3e00d3(0x4ba));
                    throw ![];
                }
                let _0x2263ba = _0x3921b9['other'](_0x3bbe8d[_0x3e00d3(0x448)]);
                if (_0x2263ba) await _0x4b49f7[_0x3e00d3(0xa97)](_0x2263ba, _0x3e00d3(0xc47), _0x3bbe8d);
                delete this[_0x3e00d3(0x865)][_0x3921b9['id']];
                let _0x11b7fd = Object[_0x3e00d3(0xb01)](this[_0x3e00d3(0x865)])[_0x3e00d3(0x581)](_0x47b617 => _0x47b617[_0x3e00d3(0x4f5)] === _0x3e00d3(0xb41) && !_0x47b617['check'](_0x3bbe8d[_0x3e00d3(0x448)]));
                if (_0x11b7fd) {
                    let _0x232989 = [{
                        'buttonId': _0x3e00d3(0x616),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xb06)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0xb27),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xab3)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x11b7fd['a'], _0x232989, '```Successfully\x20Found\x20Partner,\x20now\x20you\x20can\x20send\x20message```', _0x4b49f7[_0x3e00d3(0x2a0)]['name'], _0x3bbe8d), _0x11b7fd['b'] = _0x3bbe8d[_0x3e00d3(0x448)], _0x11b7fd[_0x3e00d3(0x4f5)] = 'CHATTING', await _0x4b49f7[_0x3e00d3(0xa5b)](_0x11b7fd['b'], _0x232989, _0x3e00d3(0x43c), _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                } else {
                    let _0x50862b = +new Date();
                    this['anonymous'][_0x50862b] = {
                        'id': _0x50862b,
                        'a': _0x3bbe8d[_0x3e00d3(0x448)],
                        'b': '',
                        'state': 'WAITING',
                        'check': function(_0x465a36 = '') {
                            return [this['a'], this['b']]['includes'](_0x465a36);
                        },
                        'other': function(_0x1a1671 = '') {
                            return _0x1a1671 === this['a'] ? this['b'] : _0x1a1671 === this['b'] ? this['a'] : '';
                        }
                    };
                    let _0x42011a = [{
                        'buttonId': _0x3e00d3(0xb27),
                        'buttonText': {
                            'displayText': _0x3e00d3(0xab3)
                        },
                        'type': 0x1
                    }];
                    await _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x42011a, _0x3e00d3(0xc27), _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                }
                break;
            }
            case 'public': {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                _0x4b49f7['public'] = !![], _0x53c8bd(_0x3e00d3(0x94c));
            }
            break;
            case 'self': {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                _0x4b49f7[_0x3e00d3(0x253)] = ![], _0x53c8bd(_0x3e00d3(0x67e));
            }
            break;
            case 'owner':
            case _0x3e00d3(0x78c): {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '👤',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), _0x4b49f7[_0x3e00d3(0x6d7)](_0x3bbe8d['chat'], global[_0x3e00d3(0x3f2)], _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x9c0):
            case _0x3e00d3(0x87a): {
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '⛔',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                if (!_0x153b74) throw 'Enter\x20The\x20Bug\x20Example\x0a\x0a' + _0x5a7691 + _0x3e00d3(0xbd4);
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e00d3(0x464), {
                    'text': _0x3e00d3(0x86b) + _0x3bbe8d[_0x3e00d3(0x448)]['split']('@')[0x0] + _0x3e00d3(0xadc) + _0x153b74
                });
                const _0xbf2216 = await _0x4b49f7[_0x3e00d3(0x69f)]('*『\x20𝙱𝚄𝙶\x20𝚁𝙴𝙿𝙾𝚁𝚃\x20』*\x20' + Lang[_0x3e00d3(0x68d)]);
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '✅',
                        'key': _0xbf2216[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case _0x3e00d3(0x6ae): {
                num = _0x153b74[_0x3e00d3(0x341)]('&')[0x0], massage = _0x153b74[_0x3e00d3(0x341)]('&')[0x1], await _0x4b49f7[_0x3e00d3(0xa97)](num + _0x3e00d3(0x5c5), massage);
            }
            break;
            case _0x3e00d3(0x5b2):
            case _0x3e00d3(0x57a):
            case 'hug':
            case 'pat':
            case _0x3e00d3(0xb14):
            case _0x3e00d3(0x36d):
            case _0x3e00d3(0x397):
            case _0x3e00d3(0x31f):
            case _0x3e00d3(0x5b6):
            case _0x3e00d3(0xb1b):
            case _0x3e00d3(0xaf8):
            case 'wink':
            case _0x3e00d3(0x87d):
            case _0x3e00d3(0x4b3):
            case _0x3e00d3(0x2a3):
            case _0x3e00d3(0x1fd):
            case _0x3e00d3(0x272):
            case 'awoo':
            case _0x3e00d3(0x1e9):
            case _0x3e00d3(0x8d2):
            case _0x3e00d3(0x89b):
            case _0x3e00d3(0x233):
            case 'dance':
            case 'cringe':
            case _0x3e00d3(0xc29):
            case _0x3e00d3(0xb10):
            case 'shinobu':
            case _0x3e00d3(0x881):
            case 'handhold':
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0xa53),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), _0x2c3b6e(mess[_0x3e00d3(0x42d)]), axios[_0x3e00d3(0xb3f)](_0x3e00d3(0x24b) + _0x5a7691)[_0x3e00d3(0x6e3)](({
                    data: _0x1fb07c
                }) => {
                    const _0x3032d3 = _0x3e00d3;
                    _0x4b49f7[_0x3032d3(0x7b9)](_0x3bbe8d[_0x3032d3(0x5f1)], _0x1fb07c[_0x3032d3(0x47e)], _0x3bbe8d, {
                        'packname': global[_0x3032d3(0x7f6)],
                        'author': global[_0x3032d3(0xb43)]
                    });
                });
                break;
            case 'tr':
            case _0x3e00d3(0xa29): {
                const {
                    translate: _0x42b2b0
                } = require('@vitalets/google-translate-api'), _0xcf6dac = 'si', _0x5718b0 = 'cn';
                let _0x11e20e = _0x3e00d3(0x7bb)[_0x3e00d3(0xc79)](),
                    _0x1889a4 = _0x9b834d[0x0],
                    _0x359dd0 = _0x9b834d['slice'](0x1)[_0x3e00d3(0xbb1)]('\x20');
                (_0x9b834d[0x0] || '')['length'] !== 0x2 && (_0x1889a4 = _0xcf6dac, _0x359dd0 = _0x9b834d[_0x3e00d3(0xbb1)]('\x20'));
                if (!_0x359dd0 && _0x3bbe8d['quoted'] && _0x3bbe8d['quoted']['text']) _0x359dd0 = _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)];
                let _0x566d9f = await _0x42b2b0(_0x359dd0, {
                    'to': _0x1889a4,
                    'autoCorrect': !![]
                })[_0x3e00d3(0x8c3)](_0x2dc909 => null);
                _0x5ef4bf(_0x566d9f[_0x3e00d3(0x5e0)]);
            }
            break;
            case _0x3e00d3(0x7aa):
            case _0x3e00d3(0xaaa):
                _0x53c8bd(mess[_0x3e00d3(0x42d)]), axios['get'](_0x3e00d3(0xbf2))[_0x3e00d3(0x6e3)](({
                    data: _0x35f94f
                }) => {
                    const _0x51b835 = _0x3e00d3;
                    _0x4b49f7[_0x51b835(0x9d6)](_0x3bbe8d[_0x51b835(0x5f1)], _0x35f94f[_0x51b835(0x47e)], mess['success'], _0x3bbe8d);
                });
                break;
            case 'menu':
            case _0x3e00d3(0x97f): {
                const _0x73934b = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json'),
                    _0x4df0bc = _0x73934b['MENU_NOTE'],
                    _0x3f6f03 = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📃',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x1a813 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x5b3997 = _0x1a813 - _0x3f6f03,
                    _0x98d36b = ['https://telegra.ph/file/b91dbaab278c1fe440de6.jpg', _0x3e00d3(0x2e6), 'https://telegra.ph/file/6576c2b80ddd95740f302.jpg', 'https://telegra.ph/file/48e575fbd6978f77ac796.jpg', _0x3e00d3(0x964), _0x3e00d3(0xc20)],
                    _0x1f7a64 = _0x98d36b[Math[_0x3e00d3(0xa8b)](Math['random']() * _0x98d36b['length'])],
                    _0x20608b = _0x3e00d3(0x74f) + _0x1f7a64 + '&width=300&height=250';
                ram0 = (process[_0x3e00d3(0xac2)]()[_0x3e00d3(0x364)] / 0x400 / 0x400)['toFixed'](0x2) + _0x3e00d3(0xaf9) + Math[_0x3e00d3(0x277)](require('os')['totalmem'] / 0x400 / 0x400) + 'MB';
                const _0x122aa8 = {
                    'weekday': 'long',
                    'year': _0x3e00d3(0xaa4),
                    'month': 'long',
                    'day': 'numeric'
                };
                var _0x5c81d3 = new Date()[_0x3e00d3(0x32b)](_0x122aa8),
                    _0x84bc11 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                const _0x37c1c4 = '*📅\x20ᴛᴏᴅᴀʏ\x20ɪs\x20:*\x20' + _0x5c81d3 + '\x0a*⌚\x20ɴᴏᴡ\x20ᴛɪᴍᴇ\x20:*\x20' + _0x84bc11;
                message = await prepareWAMessageMedia({
                    'image': {
                        'url': global[_0x3e00d3(0xbbe)]
                    }
                }, {
                    'upload': _0x4b49f7[_0x3e00d3(0x997)]
                });
                const _0x4b6d09 = _0x3e00d3(0x812) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x6fd) + runtime(process[_0x3e00d3(0x62b)]()) + '\x0a' + _0x37c1c4 + _0x3e00d3(0x324) + global[_0x3e00d3(0x673)] + '\x0a➮\x20𝙱𝙾𝚃\x20𝙾𝚆𝙽𝙴𝚁\x20-\x20' + global[_0x3e00d3(0x951)] + _0x3e00d3(0x9ba) + global[_0x3e00d3(0x3f2)] + '\x0a➮\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳\x20𝚂𝙿𝙴𝙴𝙳\x20-\x20' + (_0x1a813 - _0x3f6f03) + _0x3e00d3(0x5fc) + ram0 + '\x0a\x0a' + _0x4df0bc + _0x3e00d3(0x688) + _0x440929 + _0x3e00d3(0x7d6) + _0x440929 + _0x3e00d3(0x90d) + _0x440929 + _0x3e00d3(0x3df) + _0x440929 + 'video2\x0a│\x20' + _0x440929 + _0x3e00d3(0x39d) + _0x440929 + _0x3e00d3(0x5dc) + _0x440929 + _0x3e00d3(0x2c7) + _0x440929 + 'fb\x0a│\x20' + _0x440929 + _0x3e00d3(0xc28) + _0x440929 + _0x3e00d3(0xa31) + _0x440929 + _0x3e00d3(0x4eb) + _0x440929 + 'ig\x0a│\x20' + _0x440929 + _0x3e00d3(0x4cd) + _0x440929 + 'twitter\x0a│\x20' + _0x440929 + _0x3e00d3(0x813) + _0x440929 + _0x3e00d3(0x93e) + _0x440929 + 'ehi\x0a│\x20' + _0x440929 + _0x3e00d3(0x7fe) + _0x440929 + _0x3e00d3(0x515) + _0x440929 + _0x3e00d3(0xa5d) + _0x440929 + _0x3e00d3(0x446) + _0x440929 + _0x3e00d3(0x655) + _0x440929 + 'img\x0a│\x20' + _0x440929 + _0x3e00d3(0x922) + _0x440929 + _0x3e00d3(0xb73) + _0x440929 + 'ytsearch\x0a│\x20' + _0x440929 + _0x3e00d3(0x7fe) + _0x440929 + _0x3e00d3(0xbc0) + _0x440929 + 'pic\x0a│\x20' + _0x440929 + _0x3e00d3(0xc4b) + _0x440929 + 'couplepp\x0a╰─────────────⦁\x0a\x0a╭──❰\x20*𝙵𝚄𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20' + _0x440929 + _0x3e00d3(0xbd8) + _0x440929 + _0x3e00d3(0x62c) + _0x440929 + _0x3e00d3(0x7e0) + _0x440929 + 'cecan\x0a│\x20' + _0x440929 + 'china\x0a│\x20' + _0x440929 + _0x3e00d3(0x378) + _0x440929 + 'indonesia\x0a│\x20' + _0x440929 + _0x3e00d3(0x6a4) + _0x440929 + 'korea\x0a│\x20' + _0x440929 + _0x3e00d3(0x37d) + _0x440929 + _0x3e00d3(0x929) + _0x440929 + _0x3e00d3(0x1e1) + _0x440929 + _0x3e00d3(0x8f3) + _0x440929 + _0x3e00d3(0x471) + _0x440929 + _0x3e00d3(0x3c0) + _0x440929 + _0x3e00d3(0x6dd) + _0x440929 + _0x3e00d3(0xa4d) + _0x440929 + 'fat\x0a│\x20' + _0x440929 + 'nightcore\x0a│\x20' + _0x440929 + _0x3e00d3(0x282) + _0x440929 + 'robot\x0a│\x20' + _0x440929 + _0x3e00d3(0x4f8) + _0x440929 + _0x3e00d3(0x9ac) + _0x440929 + 'photo\x0a│\x20' + _0x440929 + _0x3e00d3(0x412) + _0x440929 + _0x3e00d3(0x795) + _0x440929 + _0x3e00d3(0x469) + _0x440929 + _0x3e00d3(0x4a9) + _0x440929 + 'tovideo\x0a│\x20' + _0x440929 + _0x3e00d3(0x8ab) + _0x440929 + 'attp\x0a│\x20' + _0x440929 + _0x3e00d3(0x40a) + _0x440929 + 'attp3\x0a│\x20' + _0x440929 + _0x3e00d3(0x510) + _0x440929 + _0x3e00d3(0x9c5) + _0x440929 + _0x3e00d3(0x63b) + _0x440929 + _0x3e00d3(0x477) + _0x440929 + _0x3e00d3(0xb35) + _0x440929 + _0x3e00d3(0x86f) + _0x440929 + _0x3e00d3(0x6d3) + _0x440929 + _0x3e00d3(0x7c8) + _0x440929 + _0x3e00d3(0xa59) + _0x440929 + _0x3e00d3(0xb76) + _0x440929 + _0x3e00d3(0x4df) + _0x440929 + 'erza\x20\x20\x0a│\x20' + _0x440929 + _0x3e00d3(0x6f7) + _0x440929 + _0x3e00d3(0xace) + _0x440929 + _0x3e00d3(0x568) + _0x440929 + 'kaori\x20\x20\x0a│\x20' + _0x440929 + _0x3e00d3(0x5e8) + _0x440929 + 'loli\x20\x20\x0a│\x20' + _0x440929 + _0x3e00d3(0x9e5) + _0x440929 + _0x3e00d3(0x41a) + _0x440929 + _0x3e00d3(0x83f) + _0x440929 + _0x3e00d3(0x649) + _0x440929 + _0x3e00d3(0x60c) + _0x440929 + _0x3e00d3(0x285) + _0x440929 + _0x3e00d3(0x5ea) + _0x440929 + 'sasuke\x20\x20\x0a│\x20' + _0x440929 + 'shina\x20\x20\x0a│\x20' + _0x440929 + _0x3e00d3(0x608) + _0x440929 + _0x3e00d3(0x567) + _0x440929 + _0x3e00d3(0xb5e) + _0x440929 + _0x3e00d3(0xba9) + _0x440929 + _0x3e00d3(0x901) + _0x440929 + _0x3e00d3(0xb9d) + _0x440929 + _0x3e00d3(0x402) + _0x440929 + _0x3e00d3(0xaa9) + _0x440929 + _0x3e00d3(0x43d) + _0x440929 + 'kiss\x0a│\x20' + _0x440929 + _0x3e00d3(0x311) + _0x440929 + _0x3e00d3(0x629) + _0x440929 + _0x3e00d3(0x8c0) + _0x440929 + _0x3e00d3(0x780) + _0x440929 + _0x3e00d3(0x4ce) + _0x440929 + _0x3e00d3(0x925) + _0x440929 + 'smile\x0a│\x20' + _0x440929 + 'wave\x0a│\x20' + _0x440929 + 'highfive\x0a│\x20' + _0x440929 + _0x3e00d3(0x80a) + _0x440929 + 'nom\x0a│\x20' + _0x440929 + _0x3e00d3(0x846) + _0x440929 + _0x3e00d3(0x27b) + _0x440929 + _0x3e00d3(0x9aa) + _0x440929 + 'kill\x0a│\x20' + _0x440929 + _0x3e00d3(0x71b) + _0x440929 + 'wink\x0a│\x20' + _0x440929 + _0x3e00d3(0x53c) + _0x440929 + _0x3e00d3(0x278) + _0x440929 + 'cringe\x0a╰─────────────⦁\x0a\x0a╭──❰\x20*𝙶𝚁𝙾𝚄𝙿\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20' + _0x440929 + _0x3e00d3(0xa22) + _0x440929 + _0x3e00d3(0x734) + _0x440929 + _0x3e00d3(0x86a) + _0x440929 + _0x3e00d3(0x735) + _0x440929 + _0x3e00d3(0x9a6) + _0x440929 + _0x3e00d3(0x521) + _0x440929 + _0x3e00d3(0x3ae) + _0x440929 + _0x3e00d3(0x50e) + _0x440929 + _0x3e00d3(0x8f5) + _0x440929 + _0x3e00d3(0x9c2) + _0x440929 + _0x3e00d3(0x789) + _0x440929 + 'delm\x0a╰────────────⦁\x0a\x0a╭──❰\x20*𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x0a│\x20' + _0x440929 + _0x3e00d3(0xc08) + _0x440929 + 'ping\x0a│\x20' + _0x440929 + _0x3e00d3(0x722) + _0x440929 + _0x3e00d3(0x536) + _0x440929 + _0x3e00d3(0x6bd) + _0x440929 + _0x3e00d3(0x34d) + _0x440929 + _0x3e00d3(0xab4) + _0x440929 + _0x3e00d3(0x660) + _0x440929 + _0x3e00d3(0x8a6) + _0x440929 + 'listpc\x0a│\x20' + _0x440929 + 'listgc\x0a│\x20' + _0x440929 + _0x3e00d3(0xb11) + _0x440929 + _0x3e00d3(0xc4d) + _0x440929 + _0x3e00d3(0x712) + _0x440929 + _0x3e00d3(0xb70) + _0x440929 + _0x3e00d3(0x9ae) + _0x440929 + _0x3e00d3(0xb98) + _0x440929 + 'addmsg\x0a│\x20' + _0x440929 + _0x3e00d3(0xb1f) + _0x440929 + _0x3e00d3(0x84c) + _0x440929 + 'delmsg\x0a╰─────────────⦁\x20\x0a\x0a╭────❰\x20*𝙻𝙾𝙶𝙾\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\x20❱\x20\x20\x20\x0a│\x20' + _0x440929 + _0x3e00d3(0x814) + _0x440929 + 'logo2\x0a│\x20' + _0x440929 + _0x3e00d3(0x3c7) + _0x440929 + _0x3e00d3(0x506) + _0x440929 + _0x3e00d3(0xb21) + _0x440929 + _0x3e00d3(0x4d0) + _0x440929 + 'leave\x0a│\x20' + _0x440929 + _0x3e00d3(0x288) + _0x440929 + _0x3e00d3(0x6b8) + _0x440929 + _0x3e00d3(0x28e) + _0x440929 + _0x3e00d3(0x56a) + _0x440929 + _0x3e00d3(0xc78) + _0x440929 + _0x3e00d3(0xb2b) + _0x440929 + _0x3e00d3(0x83b) + _0x440929 + _0x3e00d3(0x47d) + _0x440929 + 'setmessage\x0a│\x20' + _0x440929 + _0x3e00d3(0x7d3) + _0x440929 + _0x3e00d3(0xab4) + _0x440929 + _0x3e00d3(0x4d1) + _0x440929 + _0x3e00d3(0x95c) + _0x440929 + 'alive\x0a│\x20' + _0x440929 + _0x3e00d3(0x2e7) + _0x440929 + 'xnxxsh\x0a│\x20' + _0x440929 + _0x3e00d3(0x3af) + _0x440929 + _0x3e00d3(0x247) + _0x440929 + _0x3e00d3(0x76d) + _0x440929 + _0x3e00d3(0x7f0) + _0x440929 + 'areadmore\x0a│\x20' + _0x440929 + _0x3e00d3(0x2cb) + _0x440929 + 'mountain\x0a│\x20' + _0x440929 + _0x3e00d3(0x4d7) + _0x440929 + 'technology\x0a╰─────────────⦁',
                    _0x5ae8c2 = [{
                        'buttonId': 'list',
                        'buttonText': {
                            'displayText': _0x3e00d3(0x9ad)
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0x3f2),
                        'buttonText': {
                            'displayText': 'ᴏᴡɴᴇʀ‍️'
                        },
                        'type': 0x1
                    }, {
                        'buttonId': _0x3e00d3(0x76e),
                        'buttonText': {
                            'displayText': _0x3e00d3(0x572)
                        },
                        'type': 0x1
                    }];
                let _0x4d70d8 = {
                    'image': {
                        'url': _0x1f7a64
                    },
                    'caption': _0x4b6d09,
                    'footer': global[_0x3e00d3(0x673)],
                    'buttons': _0x5ae8c2,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x4d70d8, {
                    'quoted': _0x134aea
                });
            }
            break;
            case _0x3e00d3(0x26b): {
                _0x4b49f7[_0x3e00d3(0xb18)]([_0x3bbe8d[_0x3e00d3(0x2da)]]), await _0x4b49f7[_0x3e00d3(0x379)](_0x3e00d3(0x9d0), _0x3bbe8d['chat']), await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], {
                    'audio': {
                        'url': _0x3e00d3(0x256)
                    },
                    'mimetype': 'audio/mp4',
                    'ptt': !![]
                }, {
                    'quoted': _0x3bbe8d
                });
                if (global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x26b)]) {
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '👋',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    const _0x1a7e8b = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb]['MASSAGE'];
                    let _0x63efb4 = [{
                            'buttonId': _0x3e00d3(0xbed),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x396)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x76e),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x3fe)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x3f2),
                            'buttonText': {
                                'displayText': '𝙾𝚆𝙽𝙴𝚁'
                            },
                            'type': 0x1
                        }],
                        _0x35ed70 = {
                            'image': {
                                'url': global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0xa88)]
                            },
                            'caption': _0x1a7e8b,
                            'footer': global[_0x3e00d3(0x673)],
                            'buttons': _0x63efb4,
                            'headerType': 0x4
                        };
                    await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x35ed70, {
                        'quoted': _0x3bbe8d
                    });
                } else {
                    const _0x5ab28d = _0x3e00d3(0x30f);
                    await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                        'react': {
                            'text': '👋',
                            'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                        }
                    });
                    let _0x4824d3 = [{
                            'buttonId': 'menu',
                            'buttonText': {
                                'displayText': _0x3e00d3(0x396)
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x76e),
                            'buttonText': {
                                'displayText': '𝚂𝚃𝙰𝚃𝚄𝚂'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': 'owner',
                            'buttonText': {
                                'displayText': '𝙾𝚆𝙽𝙴𝚁'
                            },
                            'type': 0x1
                        }],
                        _0x207a6e = {
                            'image': {
                                'url': global[_0x3e00d3(0xbbe)]
                            },
                            'caption': _0x5ab28d + _0x3e00d3(0xa9b) + _0x5ab28d + _0x3e00d3(0x9d2) + BOT_VERSION + _0x3e00d3(0x225),
                            'footer': global[_0x3e00d3(0x673)],
                            'buttons': _0x4824d3,
                            'headerType': 0x4
                        };
                    await _0x4b49f7['sendMessage'](_0x3bbe8d['chat'], _0x207a6e, {
                        'quoted': _0x3bbe8d
                    });
                }
            }
            break;
            case _0x3e00d3(0x346): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x36e)];
                if (_0x9b834d[0x0] == _0x3e00d3(0x85b)) delete global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb]['kickmessage'], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                else {
                    if (_0x9b834d[0x0] == _0x3e00d3(0x564)) delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xbfd)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                    else {
                        if (_0x9b834d[0x0] == _0x3e00d3(0xa89)) delete global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb]['promotemessage'], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                        else {
                            if (_0x9b834d[0x0] == 'demote') delete global['db']['data'][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x965)], _0x53c8bd(mess['success']);
                            else {
                                if (_0x9b834d[0x0] == 'block') delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xbbf)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                                else {
                                    if (_0x9b834d[0x0] == _0x3e00d3(0x23f)) delete global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0x707)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                                    else {
                                        const _0x1169f6 = _0x3e00d3(0x7c6);
                                        let _0x27809d = [{
                                            'rows': [{
                                                'title': _0x3e00d3(0x273),
                                                'rowId': _0x3e00d3(0x392)
                                            }, {
                                                'title': _0x3e00d3(0x6a2),
                                                'rowId': _0x3e00d3(0x79f)
                                            }, {
                                                'title': _0x3e00d3(0x9c1),
                                                'rowId': _0x3e00d3(0x31d)
                                            }, {
                                                'title': _0x3e00d3(0xc45),
                                                'rowId': _0x3e00d3(0x457)
                                            }, {
                                                'title': _0x3e00d3(0x694),
                                                'rowId': _0x3e00d3(0x6c0)
                                            }, {
                                                'title': _0x3e00d3(0x835),
                                                'rowId': 'deletemessage\x20unblock'
                                            }]
                                        }];
                                        await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x1169f6, '' + global[_0x3e00d3(0x673)], _0x3e00d3(0x416), _0x3e00d3(0xc1e), _0x27809d, _0x3bbe8d);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            break;
            case _0x3e00d3(0x687): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x3f2)];
                if (!_0x2d884d) throw _0x3e00d3(0x2ff);
                if (_0x9b834d[0x0] == _0x3e00d3(0x85b)) global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb]['kickmessage'] = _0x3bbe8d['quoted']['text'], _0x53c8bd(mess['success']);
                else {
                    if (_0x9b834d[0x0] == _0x3e00d3(0x564)) global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xbfd)] = _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                    else {
                        if (_0x9b834d[0x0] == 'promote') global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x86c)] = _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                        else {
                            if (_0x9b834d[0x0] == _0x3e00d3(0x443)) global['db']['data']['settings'][_0xca02fb][_0x3e00d3(0x965)] = _0x3bbe8d[_0x3e00d3(0xbad)]['text'], _0x53c8bd(mess['success']);
                            else {
                                if (_0x9b834d[0x0] == 'block') global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb]['blockmessage'] = _0x3bbe8d['quoted'][_0x3e00d3(0x5e0)], _0x53c8bd(mess[_0x3e00d3(0x226)]);
                                else {
                                    if (_0x9b834d[0x0] == _0x3e00d3(0x23f)) global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb]['unblockmessage'] = _0x3bbe8d[_0x3e00d3(0xbad)]['text'], _0x53c8bd(mess['success']);
                                    else _0x9b834d[0x0] == 'leave' ? global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0x83c)] = _0x3bbe8d[_0x3e00d3(0xbad)]['text'] : await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
                                        'image': {
                                            'url': _0x3e00d3(0x9a4)
                                        },
                                        'caption': _0x3e00d3(0x249)
                                    }, {
                                        'quoted': _0x3bbe8d
                                    });
                                }
                            }
                        }
                    }
                }
            }
            break;
            case 'setalive': {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x36e)];
                if (!_0x2d884d) throw _0x3e00d3(0x908);
                const {
                    UploadFileUgu: _0x575dea,
                    webp2mp4File: _0x2e3fa5,
                    TelegraPh: _0x4622e2
                } = require(_0x3e00d3(0x1f7));
                if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) throw '```Please\x20reply\x20Photo\x20Massage```';
                const _0x5385e2 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d),
                    _0x3e169d = await _0x4622e2(_0x5385e2);
                await fs[_0x3e00d3(0x36a)](_0x5385e2), global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb] = {
                    'MASSAGE': _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)],
                    'LOGO': _0x3e169d
                }, global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x26b)] = !![], _0x53c8bd(mess[_0x3e00d3(0x226)]);
            }
            break;
            case _0x3e00d3(0xa56): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x36e)];
                global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb]['alive'] = ![], _0x53c8bd(mess['success']);
            }
            break;
            case _0x3e00d3(0x2fc): {
                if (!_0x5ef7c8) return _0x53c8bd(mess['owner']);
                if (_0x9b834d[0x0] == _0x3e00d3(0x26b)) delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x26b)], _0x53c8bd(_0x3e00d3(0x8bf));
                else {
                    if (_0x9b834d[0x0] == _0x3e00d3(0xc76)) {
                        if (!db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['welcome']) return _0x53c8bd(_0x3e00d3(0x5a4));
                        delete global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0x698)], delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0x3a6)], _0x53c8bd('*✅\x20Done\x20Using\x20Default\x20Welcome\x20Massage*');
                    } else {
                        if (_0x9b834d[0x0] == _0x3e00d3(0x293)) delete global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x3e5)][_0xca02fb][_0x3e00d3(0xb0e)], delete global['db'][_0x3e00d3(0x646)]['settings'][_0xca02fb][_0x3e00d3(0x931)], _0x53c8bd(_0x3e00d3(0xaf6));
                        else {
                            const _0x574d4b = _0x3e00d3(0xbd3);
                            let _0x274284 = [{
                                'rows': [{
                                    'title': _0x3e00d3(0x370),
                                    'rowId': _0x3e00d3(0x59a)
                                }, {
                                    'title': 'Welcome\x20Message',
                                    'rowId': _0x3e00d3(0xa35)
                                }, {
                                    'title': _0x3e00d3(0x98a),
                                    'rowId': _0x3e00d3(0xb19)
                                }]
                            }];
                            await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d[_0x3e00d3(0x5f1)], '' + _0x574d4b, '' + global[_0x3e00d3(0x673)], _0x3e00d3(0x416), _0x3e00d3(0xc1e), _0x274284, _0x3bbe8d);
                        }
                    }
                }
            }
            break;
            case _0x3e00d3(0x68a): {
                if (!_0x5ef7c8) throw mess[_0x3e00d3(0x36e)];
                if (!_0x2d884d) throw _0x3e00d3(0x908);
                const {
                    UploadFileUgu: _0x18e0aa,
                    webp2mp4File: _0x2c78e6,
                    TelegraPh: _0x5dd8bb
                } = require(_0x3e00d3(0x1f7));
                if (!/image/ [_0x3e00d3(0x2f1)](_0x253f71)) throw '```Please\x20reply\x20Photo\x20Massage```';
                const _0x2e9353 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d),
                    _0x3fd4f3 = await _0x5dd8bb(_0x2e9353);
                await fs[_0x3e00d3(0x36a)](_0x2e9353), global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]] = {
                    'welcome_message': _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)],
                    'welcome_image': _0x3fd4f3,
                    'goodbye_message': global['db'][_0x3e00d3(0x646)]['chats'][_0x3bbe8d[_0x3e00d3(0x5f1)]]['goodbye_message'],
                    'goodbye_image': global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['goodbye_image']
                }, _0x53c8bd(mess[_0x3e00d3(0x226)]);
            }
            break;
            case 'setgoodbye': {
                if (!_0x5ef7c8) throw mess['admin'];
                if (!_0x2d884d) throw _0x3e00d3(0x908);
                const {
                    UploadFileUgu: _0x2561c8,
                    webp2mp4File: _0x186736,
                    TelegraPh: _0x52b466
                } = require(_0x3e00d3(0x1f7));
                if (!/image/ ['test'](_0x253f71)) throw _0x3e00d3(0x908);
                const _0x47a0c0 = await _0x4b49f7[_0x3e00d3(0x643)](_0x2d884d),
                    _0x31b050 = await _0x52b466(_0x47a0c0);
                await fs[_0x3e00d3(0x36a)](_0x47a0c0), global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]] = {
                    'goodbye_message': _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0x5e0)],
                    'goodbye_image': _0x31b050,
                    'welcome_message': global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x698)],
                    'welcome_image': global['db'][_0x3e00d3(0x646)]['chats'][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0x3a6)]
                }, _0x53c8bd(mess[_0x3e00d3(0x226)]);
            }
            break;
            case _0x3e00d3(0xc76): {
                var _0x405c6e = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x405c6e = _0x3e00d3(0xc4a) + _0x3bbe8d[_0x3e00d3(0x7a2)] + '*\x20\x0aYou\x20can\x20turn\x20the\x20welcome\x20message\x20on/off\x20by\x20pressing\x20the\x20button\x20below\x0a';
                if (global['LANG'] == 'SI') _0x405c6e = '*Hello\x20' + _0x3bbe8d['pushName'] + _0x3e00d3(0x9df);
                if (!_0x3bbe8d[_0x3e00d3(0x900)]) return _0x2f1bc9('' + mess['group']);
                if (_0x9b834d[0x0] === 'on') {
                    if (db['data'][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]]['welcome']) return _0x53c8bd(_0x3e00d3(0xb02));
                    db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d['chat']] = {
                        'welcome': !![],
                        'welcome_message': '',
                        'welcome_image': '',
                        'goodbye_message': '',
                        'goodbye_image': ''
                    }, _0x53c8bd('*Welcome\x20message\x20is\x20on*');
                } else {
                    if (_0x9b834d[0x0] === _0x3e00d3(0xb2f)) {
                        if (!db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d['chat']][_0x3e00d3(0xc76)]) return _0x53c8bd(_0x3e00d3(0xa36));
                        db[_0x3e00d3(0x646)][_0x3e00d3(0x9e9)][_0x3bbe8d[_0x3e00d3(0x5f1)]][_0x3e00d3(0xc76)] = ![], _0x53c8bd('*Welcome\x20Message\x20is\x20off*');
                    } else {
                        let _0x4797e7 = [{
                            'buttonId': 'welcome\x20on',
                            'buttonText': {
                                'displayText': 'On'
                            },
                            'type': 0x1
                        }, {
                            'buttonId': _0x3e00d3(0x267),
                            'buttonText': {
                                'displayText': _0x3e00d3(0x40c)
                            },
                            'type': 0x1
                        }];
                        _0x4b49f7[_0x3e00d3(0xa5b)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x4797e7, _0x405c6e, _0x4b49f7[_0x3e00d3(0x2a0)][_0x3e00d3(0xb12)], _0x3bbe8d);
                    }
                }
            }
            break;
            case 'command':
            case _0x3e00d3(0x552):
            case 'cmd': {
                const _0x5e2ab1 = require(_0x3e00d3(0xa17));
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🗒️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x578490 = {
                    'weekday': _0x3e00d3(0x27a),
                    'year': _0x3e00d3(0xaa4),
                    'month': _0x3e00d3(0x27a),
                    'day': 'numeric'
                };
                var _0x3bc5aa = new Date()[_0x3e00d3(0x32b)](_0x578490),
                    _0x84bc11 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })['split']('\x20')[0x1];
                ram0 = (process[_0x3e00d3(0xac2)]()[_0x3e00d3(0x364)] / 0x400 / 0x400)['toFixed'](0x2) + _0x3e00d3(0xaf9) + Math['round'](require('os')[_0x3e00d3(0x7d9)] / 0x400 / 0x400) + 'MB', desmsg = _0x3e00d3(0x78e) + _0x3bbe8d[_0x3e00d3(0x448)][_0x3e00d3(0x341)]('@')[0x0] + _0x3e00d3(0x764) + _0x3bbe8d[_0x3e00d3(0x7a2)] + _0x3e00d3(0x7c2) + global[_0x3e00d3(0x673)] + _0x3e00d3(0x63c) + _0xca02fb['split']('@')[0x0] + _0x3e00d3(0x7e3) + _0x440929 + _0x3e00d3(0x5f4) + _0x84bc11 + _0x3e00d3(0x672) + _0x3bc5aa + _0x3e00d3(0x82c) + ram0 + '\x0a╰┄┄┄┄┄┄┄┄┄◯';
                let _0x2c6137 = [{
                    'title': _0x3e00d3(0x6f4),
                    'rows': [{
                        'title': _0x3e00d3(0x436),
                        'description': Lang['GROUP_CMD_DESC'],
                        'rowId': _0x440929 + _0x3e00d3(0x355)
                    }]
                }, {
                    'title': global[_0x3e00d3(0x673)] + _0x3e00d3(0x5cd),
                    'rows': [{
                        'title': _0x3e00d3(0x7e6),
                        'description': Lang['DOWNLOAD_CMD'],
                        'rowId': _0x440929 + _0x3e00d3(0x4cf)
                    }, {
                        'title': _0x3e00d3(0x7d0),
                        'description': Lang[_0x3e00d3(0x95e)],
                        'rowId': _0x440929 + _0x3e00d3(0x445)
                    }, {
                        'title': _0x3e00d3(0x53d),
                        'description': Lang[_0x3e00d3(0xa4e)],
                        'rowId': _0x440929 + _0x3e00d3(0x61d)
                    }, {
                        'title': '▷\x20CONVERT\x20MENU\x20◁',
                        'description': Lang[_0x3e00d3(0xc82)],
                        'rowId': _0x440929 + _0x3e00d3(0xb64)
                    }, {
                        'title': _0x3e00d3(0xa6b),
                        'description': Lang[_0x3e00d3(0x64d)],
                        'rowId': _0x440929 + 'elisaranimemenu'
                    }, {
                        'title': '▷\x20MISC\x20MENU\x20◁',
                        'description': Lang[_0x3e00d3(0xa42)],
                        'rowId': _0x440929 + 'elisanocategorymenu'
                    }, {
                        'title': _0x3e00d3(0x8af),
                        'description': Lang[_0x3e00d3(0x7f7)],
                        'rowId': _0x440929 + 'textlogo'
                    }, {
                        'title': _0x3e00d3(0xabd),
                        'description': Lang[_0x3e00d3(0x7f7)],
                        'rowId': _0x440929 + _0x3e00d3(0x547)
                    }, {
                        'title': '▷\x20VOICE\x20MENU\x20◁',
                        'description': Lang[_0x3e00d3(0x366)],
                        'rowId': _0x440929 + _0x3e00d3(0x864)
                    }]
                }, {
                    'title': _0x3e00d3(0x391),
                    'rows': [{
                        'title': _0x3e00d3(0x8ea),
                        'description': Lang[_0x3e00d3(0x4db)],
                        'rowId': _0x440929 + _0x3e00d3(0xbe2)
                    }]
                }, {
                    'title': _0x3e00d3(0x6f1),
                    'rows': [{
                        'title': '▷\x20ABOUT\x20◁',
                        'description': Lang[_0x3e00d3(0x326)],
                        'rowId': _0x440929 + 'about'
                    }, {
                        'title': '▷\x20HELPERS\x20◁',
                        'description': Lang[_0x3e00d3(0x326)],
                        'rowId': _0x440929 + 'helpers'
                    }]
                }];
                await _0x4b49f7[_0x3e00d3(0x7a4)](_0x3bbe8d['chat'], '' + desmsg, '' + global[_0x3e00d3(0x673)], _0x3e00d3(0x2ea), _0x3e00d3(0xc53), _0x2c6137, _0x3bbe8d);
            }
            break;
            case _0x3e00d3(0x355): {
                const _0x32d0f2 = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '♥️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x38a133 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x1af394 = _0x38a133 - _0x32d0f2 + _0x3e00d3(0x716),
                    _0x5ad929 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })['split']('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📜',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x46b4 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x46b4 = '```Get\x20Group\x20link```';
                if (global['LANG'] == 'SI') _0x46b4 = _0x3e00d3(0x75f);
                var _0x4e1ee5 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4e1ee5 = '```Change\x20Group\x20Profile\x20photo\x20[\x20reply\x20photo\x20]```';
                if (global['LANG'] == 'SI') _0x4e1ee5 = '```සමූහයේ\x20ප්‍රොෆයිල්\x20චායාරූපය\x20වෙනස්\x20කරයි\x20[\x20ජායාරූපයකට\x20රිප්ලයි\x20ලබාදෙන්න\x20]```';
                var _0x5a769b = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5a769b = _0x3e00d3(0x2ad);
                if (global['LANG'] == 'SI') _0x5a769b = _0x3e00d3(0x6cf);
                var _0x508eba = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x508eba = _0x3e00d3(0x601);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x508eba = '```සමූහයේ\x20මැස්ස්සේජ්\x20යවන\x20ආකාරය\x20වෙනස්\x20කරයි\x20(\x20ඇඩ්මින්ලට\x20පමණක්\x20/\x20සියලු\x20දෙනාට\x20)```';
                var _0x126db8 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x126db8 = _0x3e00d3(0x6d9);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x126db8 = _0x3e00d3(0x944);
                var _0x17e774 = '';
                if (global['LANG'] == 'EN') _0x17e774 = _0x3e00d3(0x818);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x17e774 = _0x3e00d3(0x3ad);
                var _0x559469 = '';
                if (global['LANG'] == 'EN') _0x559469 = _0x3e00d3(0x859);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x559469 = _0x3e00d3(0x47b);
                var _0x351085 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x351085 = _0x3e00d3(0x43b);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x351085 = _0x3e00d3(0x682);
                var _0x4f1340 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4f1340 = _0x3e00d3(0x956);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x4f1340 = _0x3e00d3(0xb66);
                var _0x31a6e4 = '';
                if (global['LANG'] == 'EN') _0x31a6e4 = _0x3e00d3(0x7c4);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x31a6e4 = '```ගෲප්\x20එකේ\x20ඇඩ්මින්\x20වරයෙකුගේ\x20ඇඩ්මින්\x20ඉවත්කිරීමට```';
                var _0x316988 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x316988 = _0x3e00d3(0x35f);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x316988 = _0x3e00d3(0x56c);
                _0x440929 = '.', (anu = _0x3e00d3(0x4c0) + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x1af394 + _0x3e00d3(0xc7d) + _0x5ad929 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x733) + D_E + '\x20' + _0x46b4 + '\x0a' + M_E + '\x20*' + _0x440929 + 'setgrouppp*\x20\x0a\x20\x20\x20' + D_E + '\x20' + _0x4e1ee5 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x6f9) + D_E + '\x20' + _0x5a769b + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xc5c) + D_E + '\x20' + _0x508eba + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x2a8) + D_E + '\x20' + _0x126db8 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x880) + D_E + '\x20' + _0x17e774 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb1c) + D_E + '\x20' + _0x559469 + '\x0a' + M_E + '\x20*' + _0x440929 + 'kick*\x20\x0a\x20\x20\x20' + D_E + '\x20' + _0x351085 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb32) + D_E + '\x20' + _0x4f1340 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x7a0) + D_E + '\x20' + _0x31a6e4 + _0x3e00d3(0x9d1), next = Lang[_0x3e00d3(0x93a)]), back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x552),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x4cf),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x53c5da = {
                    'image': {
                        'url': _0x3e00d3(0x81d)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x53c5da, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x5b9): {
                await _0x4b49f7['sendText'](_0x3bbe8d[_0x3e00d3(0x5f1)], '\x20\x20\x20*👸\x20𝙷𝙴𝙻𝙿𝙴𝚁𝚂\x20👸*\x0a\x20\x20\x0a💞\x20𝚂𝙻\x20𝚁𝙴𝙰𝙻\x20𝚃𝙴𝙲𝙷\x20\x0a💞\x20𝙳𝙰𝚁𝙺\x20𝙰𝙻𝙿𝙷𝙰\x0a💞\x20𝚂𝙰𝙽𝙷𝚆𝙰\x0a💞\x20𝚃𝙷𝙰𝚂𝙷𝙸\x0a\x0a');
            }
            break;
            case 'elisadownloadmenu': {
                const _0x107794 = new Date()['getTime']();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '♥️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x1d752d = new Date()[_0x3e00d3(0x3a9)](),
                    _0x26a4d9 = _0x1d752d - _0x107794 + '\x20*_ᴍs_*',
                    _0xf3d89 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x16f8a1 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x16f8a1 = _0x3e00d3(0x74e);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x16f8a1 = '```ඔබගේ\x20ටික්ටොක්\x20වීඩියෝ\x20ලින්කුව\x20බාගතකරයි```';
                var _0xf89b09 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xf89b09 = '```Download\x20your\x20instagram\x20link\x20Video```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0xf89b09 = '```ඔබගේ\x20ඉන්ස්ටාග්‍රෑම්\x20වීඩියෝ\x20ලින්ක්\x20බාගත\x20කරයි```';
                var _0x3458f8 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x3458f8 = _0x3e00d3(0x604);
                if (global['LANG'] == 'SI') _0x3458f8 = '```ඔබගේ\x20ඉන්ස්ටාග්‍රෑම්\x20වීඩියෝ\x20ලින්ක්\x20බාගත\x20කරයි\x20ආකාරය\x20(\x20ii\x20)```';
                var _0xe25638 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xe25638 = '```Download\x20your\x20youtube\x20link\x20song```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0xe25638 = _0x3e00d3(0x5e6);
                var _0x180359 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x180359 = _0x3e00d3(0xbb0);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x180359 = _0x3e00d3(0xa04);
                var _0xbd8ff1 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xbd8ff1 = _0x3e00d3(0x45e);
                if (global['LANG'] == 'SI') _0xbd8ff1 = '```ඔබගේ\x20සින්දුව\x20එවයි```';
                var _0x43cfd1 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x43cfd1 = '```get\x20your\x20video```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x43cfd1 = _0x3e00d3(0x9ee);
                var _0x379092 = '',
                    _0x3f829f = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x3f829f = _0x3e00d3(0x359);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3f829f = _0x3e00d3(0x466);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x379092 = _0x3e00d3(0x61a);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x379092 = _0x3e00d3(0xbef);
                var _0x3ae75e = '';
                if (global['LANG'] == 'EN') _0x3ae75e = _0x3e00d3(0x91a);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3ae75e = '```ඔබ\x20නම්\x20යෙදූ\x20ගීතය\x20බාගත\x20කරයි```';
                var _0x11ce74 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x11ce74 = _0x3e00d3(0x67d);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x11ce74 = _0x3e00d3(0x41b);
                var _0x53af3f = '';
                if (global['LANG'] == 'EN') _0x53af3f = _0x3e00d3(0x27e);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x53af3f = '```ඔබගේ\x20ෆේස්\x20බූක්\x20වීඩියෝ\x20ලින්කුව\x20බාගත\x20කරයි```';
                var _0xb4a5b9 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xb4a5b9 = _0x3e00d3(0x9fb);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0xb4a5b9 = '```ඔබගේ\x20ෆේස්\x20බූක්\x20වීඩියෝ\x20ලින්කුව\x20බාගත\x20කරය\x20ආකාරය\x20(\x20ii\x20)```';
                var _0x5b3cc6 = '',
                    _0x169d9c = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5b3cc6 = '```The\x20song\x20you\x20name\x20will\x20download\x20[\x20none\x20button\x20]```';
                if (global['LANG'] == 'SI') _0x5b3cc6 = '```ඔබ\x20නම්\x20යෙදූ\x20ගීතය\x20බාගත\x20කරයි\x20[\x20බටන්\x20මැස්ස්සේජ්\x20නොමැතිව\x20]```';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x169d9c = '```The\x20video\x20you\x20name\x20will\x20download\x20[\x20none\x20button\x20]```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x169d9c = _0x3e00d3(0x72c);
                var _0x5dd6e6 = '',
                    _0x29558d = '',
                    _0x4aaef1 = '',
                    _0x6f29c9 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5dd6e6 = _0x3e00d3(0x4a4);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x5dd6e6 = '```Plastore\x20Apk\x20බාගත\x20කිරීමට```';
                if (global['LANG'] == 'EN') _0x29558d = _0x3e00d3(0x4a5);
                if (global['LANG'] == 'SI') _0x29558d = _0x3e00d3(0x21c);
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4aaef1 = _0x3e00d3(0x2b4);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x4aaef1 = _0x3e00d3(0xaa6);
                if (global['LANG'] == 'EN') _0x6f29c9 = '```Xnxx\x20Video\x20Download\x20(\x20only\x20main\x20Group\x20)```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x6f29c9 = _0x3e00d3(0x5a1);
                _0x440929 = '.', (anu = _0x3e00d3(0x726) + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x26a4d9 + _0x3e00d3(0xc7d) + _0xf3d89 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x5b1) + D_E + '\x20' + _0x16f8a1 + _0x3e00d3(0x8b1) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb4b) + D_E + '\x20\x20' + _0x16f8a1 + _0x3e00d3(0xabf) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x711) + D_E + '\x20\x20' + _0xf89b09 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x955) + D_E + '\x20\x20' + _0x3458f8 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x3f3) + D_E + '\x20\x20' + _0x53af3f + '\x20\x20\x20\x0a' + M_E + '\x20*' + _0x440929 + 'fb2*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0xb4a5b9 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x479) + D_E + '\x20\x20' + _0xe25638 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x742) + D_E + '\x20\x20' + _0x180359 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + 'getmusic*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0xbd8ff1 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x8ca) + D_E + '\x20\x20' + _0x43cfd1 + '\x20\x20\x20\x0a' + M_E + '\x20*' + _0x440929 + 'song*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x379092 + '\x20\x20\x20\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x8ed) + D_E + '\x20\x20' + _0x5b3cc6 + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x896) + D_E + '\x20\x20' + _0x3ae75e + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + 'video2*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x169d9c + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xc57) + D_E + '\x20\x20' + _0x3f829f + _0x3e00d3(0x4cb) + M_E + '\x20*' + _0x440929 + 'yt*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x11ce74 + '\x20\x20\x20\x20\x0a' + M_E + '\x20*' + _0x440929 + 'apk*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x5dd6e6 + '\x20\x20\x20\x20\x0a' + M_E + '\x20*' + _0x440929 + 'modapk*\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x29558d + _0x3e00d3(0x8b1) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x382) + D_E + '\x20\x20' + _0x4aaef1 + _0x3e00d3(0x8b1) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb4f) + D_E + '\x20\x20' + _0x6f29c9 + '\x20\x0a\x0a*────────◯*', next = Lang[_0x3e00d3(0x93a)]), back = Lang['BACK_BUTTON'], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x355),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x445),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x9e7aed = {
                    'image': {
                        'url': _0x3e00d3(0x56e)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x9e7aed, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x445): {
                const _0x433bcf = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '♥️',
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x3b2915 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x33277a = _0x3b2915 - _0x433bcf + '\x20*_ᴍs_*',
                    _0x474c74 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🔍',
                        'key': _0x3bbe8d['key']
                    }
                });
                var _0x384b88 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x384b88 = '```Search\x20youtube\x20and\x20download```';
                if (global['LANG'] == 'SI') _0x384b88 = _0x3e00d3(0x64f);
                var _0x1e5f45 = '';
                if (global['LANG'] == 'EN') _0x1e5f45 = _0x3e00d3(0x314);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x1e5f45 = _0x3e00d3(0x4dd);
                var _0x1599b3 = '';
                if (global['LANG'] == 'EN') _0x1599b3 = _0x3e00d3(0x6fc);
                if (global['LANG'] == 'SI') _0x1599b3 = _0x3e00d3(0x55c);
                var _0x478bc4 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x478bc4 = '```search\x20google\x20image```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x478bc4 = _0x3e00d3(0x9d3);
                var _0x3fff45 = '';
                if (global['LANG'] == 'EN') _0x3fff45 = '```search\x20image\x20from\x20pinterest```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3fff45 = _0x3e00d3(0xc31);
                var _0x57c3f1 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x57c3f1 = _0x3e00d3(0xa74);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x57c3f1 = _0x3e00d3(0x8a0);
                var _0x3c1a86 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x3c1a86 = '```search\x20on\x20wikipidia```';
                if (global['LANG'] == 'SI') _0x3c1a86 = _0x3e00d3(0x948);
                _0x440929 = '.', anu = '*◯───────[\x20SEARCH\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20' + global['ownernma'] + _0x3e00d3(0x71d) + _0x33277a + _0x3e00d3(0xc7d) + _0x474c74 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x669) + D_E + '\x20\x20' + _0x384b88 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x271) + D_E + '\x20\x20' + _0x1e5f45 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x202) + D_E + '\x20\x20' + _0x1599b3 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x723) + D_E + '\x20\x20' + _0x478bc4 + '\x0a' + M_E + '\x20*' + _0x440929 + 'pinterest*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x3fff45 + '\x0a' + M_E + '\x20*' + _0x440929 + 'wallpaper*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x57c3f1 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x709) + D_E + '\x20\x20' + _0x3c1a86 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x840) + D_E + '\x20\x20' + _0x1e5f45 + _0x3e00d3(0x4e0), next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], footer = global['botnma'], buttons = [{
                    'buttonId': _0x3e00d3(0x4cf),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'randommenu',
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x3d7830 = {
                    'image': {
                        'url': _0x3e00d3(0x298)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3d7830, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'randommenu': {
                const _0x4d5a8d = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x56fe46 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x58403d = _0x56fe46 - _0x4d5a8d + _0x3e00d3(0x716),
                    _0x853a3a = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })['split']('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x804),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x103c15 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x103c15 = _0x3e00d3(0x9cf);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x103c15 = _0x3e00d3(0xa13);
                var _0x12819e = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x12819e = _0x3e00d3(0x245);
                if (global['LANG'] == 'SI') _0x12819e = _0x3e00d3(0x5c8);
                _0x440929 = '.', anu = _0x3e00d3(0xb45) + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x58403d + _0x3e00d3(0xc7d) + _0x853a3a + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + 'coffee*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x103c15 + '\x0a' + M_E + '\x20*' + _0x440929 + 'couplepp*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x12819e + '\x0a\x20\x20\x20\x0a*──────────◯*\x0a', next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': 'elisasearchmenu',
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'funmenu',
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x3c94fc = {
                    'image': {
                        'url': 'https://telegra.ph/file/60f9d53af312a48e619ad.jpg'
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x3c94fc, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'funmenu': {
                const _0x562d9f = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x3017d9 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x46bc47 = _0x3017d9 - _0x562d9f + _0x3e00d3(0x716),
                    _0x598008 = new Date()['toLocaleString']('HI', {
                        'timeZone': TIME_ZONE
                    })['split']('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🤪',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x1d1684 = '';
                if (global['LANG'] == 'EN') _0x1d1684 = _0x3e00d3(0x45f);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x1d1684 = _0x3e00d3(0xa23);
                var _0x25fc17 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x25fc17 = _0x3e00d3(0x54b);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x25fc17 = _0x3e00d3(0x4e1);
                var _0x49a5c9 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x49a5c9 = _0x3e00d3(0xb57);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x49a5c9 = _0x3e00d3(0xb99);
                _0x440929 = '.', anu = _0x3e00d3(0xad0) + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x46bc47 + _0x3e00d3(0xc7d) + _0x598008 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + 'couple*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x1d1684 + '\x0a' + M_E + '\x20*' + _0x440929 + 'mysoulmate*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x25fc17 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x454) + D_E + '\x20\x20' + _0x49a5c9 + _0x3e00d3(0x5ed), next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x3ec),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x864),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x260daf = {
                    'image': {
                        'url': _0x3e00d3(0x9bd)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x260daf, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x864): {
                const _0x232184 = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0xa14e36 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x1b6279 = _0xa14e36 - _0x232184 + _0x3e00d3(0x716),
                    _0x175342 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x579),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                var _0x197e08 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x197e08 = _0x3e00d3(0x7e4);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x197e08 = _0x3e00d3(0x6db);
                _0x440929 = '.', anu = '*◯───────[\x20VOICE\x20MENU\x20]───────◯*\x0a\x0a╭⛒\x20\x20*ᴏᴡɴᴇʀ*\x20' + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x1b6279 + '\x0a╰⛒\x20\x20*ᴛɪᴍᴇ*\x20' + _0x175342 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + 'bass*\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x68f) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xa77) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x627) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x6c3) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x870) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x1e7) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb5a) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x89c) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x2c4) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x9f2) + _0x197e08 + '\x0a\x0a*──────────◯*\x0a', next = Lang['NEXT_BUTTON'], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': 'funmenu',
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0xb64),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x13a822 = {
                    'image': {
                        'url': _0x3e00d3(0x8da)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x13a822, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x381): {
                anu = '\x0a*𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡\x20𝗠𝗘𝗡𝗨*\x0a\x20Islamic\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x435) + _0x440929 + _0x3e00d3(0x94d) + _0x440929 + _0x3e00d3(0x57f) + _0x440929 + 'juzamma\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x290);
                const _0x499230 = generateWAMessageFromContent(_0x3bbe8d[_0x3e00d3(0x5f1)], proto[_0x3e00d3(0x910)][_0x3e00d3(0x747)]({
                    'templateMessage': {
                        'hydratedTemplate': {
                            'hydratedContentText': anu,
                            'locationMessage': {
                                'jpegThumbnail': fs[_0x3e00d3(0xab9)]('./media/image/Elisa.jpg')
                            },
                            'hydratedFooterText': _0x3e00d3(0x5e1),
                            'hydratedButtons': [{
                                'urlButton': {
                                    'displayText': _0x3e00d3(0x2f0),
                                    'url': 'https://www.youtube.com/c/MRNIMAOFC'
                                }
                            }, {
                                'quickReplyButton': {
                                    'displayText': 'OWNER',
                                    'id': _0x440929 + _0x3e00d3(0x3f2)
                                }
                            }]
                        }
                    }
                }), {
                    'userJid': _0x3bbe8d[_0x3e00d3(0x5f1)]
                });
                _0x4b49f7[_0x3e00d3(0xb51)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x499230[_0x3e00d3(0x9e1)], {
                    'messageId': _0x499230['key']['id']
                });
            }
            break;
            case _0x3e00d3(0x384): {
                anu = _0x3e00d3(0x577) + _0x440929 + 'hockeynumber\x0a🔵\x20' + _0x440929 + 'dreammeaning\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x2d6) + _0x440929 + _0x3e00d3(0x8a2) + _0x440929 + 'marriageprediction\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x76c) + _0x440929 + _0x3e00d3(0x820) + _0x440929 + _0x3e00d3(0x894) + _0x440929 + _0x3e00d3(0x49d) + _0x440929 + 'married\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x8f4) + _0x440929 + _0x3e00d3(0x442) + _0x440929 + _0x3e00d3(0xa7a) + _0x440929 + _0x3e00d3(0x491) + _0x440929 + _0x3e00d3(0x3c1) + _0x440929 + _0x3e00d3(0xbda) + _0x440929 + _0x3e00d3(0xc74) + _0x440929 + _0x3e00d3(0x24a) + _0x440929 + _0x3e00d3(0x5d8) + _0x440929 + _0x3e00d3(0x2e2) + _0x440929 + _0x3e00d3(0x2fe) + _0x440929 + _0x3e00d3(0x529) + _0x440929 + 'luck\x0a🔵\x20' + _0x440929 + 'weton\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x90f) + _0x440929 + _0x3e00d3(0x63d) + _0x440929 + _0x3e00d3(0xc49) + _0x440929 + _0x3e00d3(0xa62) + _0x440929 + 'zodiac\x0a🔵\x20' + _0x440929 + _0x3e00d3(0x6ff);
                const _0x310a64 = generateWAMessageFromContent(_0x3bbe8d[_0x3e00d3(0x5f1)], proto[_0x3e00d3(0x910)][_0x3e00d3(0x747)]({
                    'templateMessage': {
                        'hydratedTemplate': {
                            'hydratedContentText': anu,
                            'locationMessage': {
                                'jpegThumbnail': fs[_0x3e00d3(0xab9)](_0x3e00d3(0x809))
                            },
                            'hydratedFooterText': '𝚀𝚞𝚎𝚎𝚗\x20𝙴𝚕𝚒𝚜𝚊\x20𝙿𝚞𝚋𝚕𝚒𝚌\x20𝙴𝚍𝚒𝚝𝚒𝚘𝚗\x20',
                            'hydratedButtons': [{
                                'urlButton': {
                                    'displayText': _0x3e00d3(0x2f0),
                                    'url': 'https://www.youtube.com/c/MRNIMAOFC'
                                }
                            }, {
                                'quickReplyButton': {
                                    'displayText': _0x3e00d3(0x465),
                                    'id': _0x440929 + 'owner'
                                }
                            }]
                        }
                    }
                }), {
                    'userJid': _0x3bbe8d[_0x3e00d3(0x5f1)]
                });
                _0x4b49f7[_0x3e00d3(0xb51)](_0x3bbe8d['chat'], _0x310a64[_0x3e00d3(0x9e1)], {
                    'messageId': _0x310a64[_0x3e00d3(0x2da)]['id']
                });
            }
            break;
            case _0x3e00d3(0xb64): {
                const _0x4e9fca = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '⚙️',
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x9fb4f6 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x2f5f0b = _0x9fb4f6 - _0x4e9fca + _0x3e00d3(0x716),
                    _0x4cb965 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                _0x440929 = '.';
                var _0x478bc4 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x478bc4 = _0x3e00d3(0x4ec);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x478bc4 = _0x3e00d3(0x41f);
                var _0x4cdbf0 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4cdbf0 = _0x3e00d3(0x291);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x4cdbf0 = '```ජායාරූප\x20වල\x20පසුබිම\x20ඉවත්කරයි```';
                var _0x27ef90 = '';
                if (global['LANG'] == 'EN') _0x27ef90 = _0x3e00d3(0xbe6);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x27ef90 = _0x3e00d3(0x9f0);
                var _0x501e77 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x501e77 = '```Mix\x202\x20imoji\x20and\x20make\x20sticker```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x501e77 = _0x3e00d3(0x9ff);
                var _0x50de88 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x50de88 = _0x3e00d3(0x48c);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x50de88 = _0x3e00d3(0x4b5);
                var _0x57ebdd = '';
                if (global['LANG'] == 'EN') _0x57ebdd = '```Animation\x20Sticker\x20Convert\x20to\x20Gif```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x57ebdd = _0x3e00d3(0x315);
                var _0xa4985c = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xa4985c = _0x3e00d3(0x5af);
                if (global['LANG'] == 'SI') _0xa4985c = '```ඔබගේ\x20ජායාරූපයට\x20හෝ\x20වීඩියෝවට\x20ලින්කුවක්\x20ලබාදෙයි```';
                var _0x44c13e = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x44c13e = _0x3e00d3(0xa7c);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x44c13e = '```විවිද\x20හැඩවලින්\x20අකුරු\x20සෑදීම\x20[\x20only\x20english\x20]```';
                anu = _0x3e00d3(0x287) + global[_0x3e00d3(0x951)] + '\x0a├⛒\x20\x20*ʀᴇsᴘᴏɴ\x20sᴘᴇᴇᴅ*\x20' + _0x2f5f0b + _0x3e00d3(0xc7d) + _0x4cb965 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xbff) + D_E + '\x20\x20' + _0x478bc4 + '\x0a' + M_E + '\x20*' + _0x440929 + 'removebg*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x4cdbf0 + '\x0a' + M_E + '\x20*' + _0x440929 + 'sticker*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20' + _0x27ef90 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xbbc) + D_E + '\x20\x20' + _0x501e77 + '\x0a' + M_E + '\x20*' + _0x440929 + 'tovideo*\x20\x20\x20\x0a\x20\x20\x20' + D_E + '\x20\x20' + _0x50de88 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x3c4) + D_E + '\x20\x20' + _0x57ebdd + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb59) + D_E + '\x20\x20' + _0xa4985c + '\x20\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x750) + D_E + '\x20\x20' + _0x44c13e + _0x3e00d3(0x59d), next = Lang['NEXT_BUTTON'], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': 'elisavoicemenu',
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'elisaranimemenu',
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0xfac55 = {
                    'image': {
                        'url': _0x3e00d3(0x4aa)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0xfac55, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'elisaranimemenu': {
                const _0x540c67 = new Date()['getTime']();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '📥',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0xb9088f = new Date()[_0x3e00d3(0x3a9)](),
                    _0x4335cc = _0xb9088f - _0x540c67 + _0x3e00d3(0x716),
                    _0x355a5a = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                next = Lang[_0x3e00d3(0x93a)], back = Lang['BACK_BUTTON'], anu = _0x3e00d3(0x726) + global['ownernma'] + '\x0a├⛒\x20\x20*ʀᴇsᴘᴏɴ\x20sᴘᴇᴇᴅ*\x20' + _0x4335cc + _0x3e00d3(0xc7d) + _0x355a5a + '\x0a\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x957) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x490) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x596) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x511) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x6a8) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x95d) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x489) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x455) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x28f) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x80c) + M_E + '\x20' + _0x440929 + 'kaga\x20\x20\x0a' + M_E + '\x20' + _0x440929 + 'kaori\x20\x20\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x8ee) + M_E + '\x20' + _0x440929 + 'loli\x20\x20\x0a' + M_E + '\x20' + _0x440929 + 'madara\x20\x20\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x241) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x246) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xb71) + M_E + '\x20' + _0x440929 + 'nezuko\x20\x20\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x4c8) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x2a2) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x8bc) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x763) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x6f3) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x227) + M_E + '\x20' + _0x440929 + 'waifu\x20\x20\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x7bd) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x895) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xb7f) + M_E + '\x20' + _0x440929 + 'cry\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x4ee) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xa08) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x8d7) + M_E + '\x20' + _0x440929 + 'lick\x0a' + M_E + '\x20' + _0x440929 + 'pat\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x6e9) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xc56) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x319) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x53f) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x71a) + M_E + '\x20' + _0x440929 + 'wave\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0x420) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x334) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x4d5) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xc0a) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x8c6) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x6ac) + M_E + '\x20' + _0x440929 + _0x3e00d3(0xb37) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x8c5) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x5f3) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x7b8) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x35a) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x474), footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': 'elisaconvertmenu',
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x21e),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0xf73172 = {
                    'image': {
                        'url': _0x3e00d3(0x2af)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0xf73172, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'elisanocategorymenu': {
                const _0x6686ca = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🎗️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x171398 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x57ab8a = _0x171398 - _0x6686ca + _0x3e00d3(0x716),
                    _0x42abaf = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                _0x440929 = '.', next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)];
                var _0x5d505f = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5d505f = '```Test\x20Bot\x20Speed```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x5d505f = _0x3e00d3(0xb6e);
                var _0x3d2749 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x3d2749 = '```Test\x20Bot\x20ping.```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3d2749 = _0x3e00d3(0xa1f);
                var _0x3a7c93 = '';
                if (global['LANG'] == 'EN') _0x3a7c93 = _0x3e00d3(0x2e9);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3a7c93 = _0x3e00d3(0xc37);
                var _0x34c193 = '';
                if (global['LANG'] == 'EN') _0x34c193 = _0x3e00d3(0x3b9);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x34c193 = _0x3e00d3(0x6c9);
                var _0xe6bacd = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xe6bacd = _0x3e00d3(0x40e);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0xe6bacd = _0x3e00d3(0x27c);
                var _0x25cf36 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x25cf36 = '```Delete\x20massage\x20if\x20bot\x20send```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x25cf36 = _0x3e00d3(0x5dd);
                var _0x4227cc = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x4227cc = _0x3e00d3(0x7ef);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x4227cc = _0x3e00d3(0xc4f);
                var _0x12dec6 = '';
                if (global['LANG'] == 'EN') _0x12dec6 = _0x3e00d3(0x268);
                if (global['LANG'] == 'SI') _0x12dec6 = _0x3e00d3(0x200);
                var _0xb3e299 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0xb3e299 = _0x3e00d3(0xaa0);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0xb3e299 = _0x3e00d3(0x31e);
                var _0x5130ee = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x5130ee = '```report\x20from\x20bot\x20owner```';
                if (global['LANG'] == 'SI') _0x5130ee = _0x3e00d3(0x589);
                anu = _0x3e00d3(0x4a0) + global['ownernma'] + _0x3e00d3(0x71d) + _0x57ab8a + _0x3e00d3(0xc7d) + _0x42abaf + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xc62) + D_E + '\x20\x20' + _0x5d505f + '\x0a' + M_E + '\x20*' + _0x440929 + 'ping*\x20\x20\x20\x0a\x20\x20\x20\x20' + D_E + '\x20\x20' + _0x3d2749 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x5f0) + D_E + '\x20\x20' + _0x3a7c93 + '\x0a' + M_E + '\x20*' + _0x440929 + 'donate*\x20\x20\x20\x0a\x20\x20\x20\x20' + D_E + '\x20\x20' + _0x34c193 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xaa3) + D_E + '\x20\x20' + _0xe6bacd + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x4e4) + D_E + '\x20\x20' + _0x25cf36 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x347) + D_E + '\x20\x20' + _0x4227cc + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x3ee) + D_E + '\x20\x20' + _0x12dec6 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x422) + D_E + '\x20\x20' + _0xb3e299 + '\x0a' + M_E + '\x20*' + _0x440929 + 'report*\x20\x20\x20\x0a\x20\x20\x20\x20' + D_E + '\x20\x20' + _0x5130ee + _0x3e00d3(0x6c5), footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x9a9),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x546),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x2a85c8 = {
                    'image': {
                        'url': _0x3e00d3(0xc7a)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2a85c8, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x546): {
                const _0x12058a = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '👻',
                        'key': _0x3bbe8d['key']
                    }
                });
                const _0x1605fd = new Date()[_0x3e00d3(0x3a9)](),
                    _0x1a7cbb = _0x1605fd - _0x12058a + _0x3e00d3(0x716),
                    _0x1e1b32 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0x636),
                        'key': _0x3bbe8d['key']
                    }
                }), _0x440929 = '.', anu = _0x3e00d3(0x1f1) + global['ownernma'] + _0x3e00d3(0x71d) + _0x1a7cbb + _0x3e00d3(0xc7d) + _0x1e1b32 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x58f) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xaf4) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x1f9) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x62e) + M_E + '\x20*' + _0x440929 + 'ethunder*\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb2c) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x32d) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x6a3) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x42f) + M_E + '\x20*' + _0x440929 + 'eflaming*\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x413) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x463) + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x35d) + M_E + '\x20*' + _0x440929 + 'ecoffee*\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x425) + D_E + '\x20' + _0x440929 + _0x3e00d3(0x376), next = Lang[_0x3e00d3(0x93a)], back = Lang['BACK_BUTTON'], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x21e),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x547),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x3bebbd = {
                    'image': {
                        'url': _0x3e00d3(0x8a1)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x3bebbd, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x296): {
                next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], anu = _0x3e00d3(0xa44) + _0x440929 + _0x3e00d3(0x42e) + _0x440929 + _0x3e00d3(0x4ed) + _0x440929 + _0x3e00d3(0x586), footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x7b1),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'logomenu',
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x552b47 = {
                    'image': {
                        'url': _0x3e00d3(0x757)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x552b47, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case 'logomenu': {
                const _0x25d058 = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '♥️',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x289a78 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x1ed2c6 = _0x289a78 - _0x25d058 + _0x3e00d3(0x716),
                    _0x1aa1fc = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🌸',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), _0x440929 = '.';
                var _0x10bddb = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x10bddb = _0x3e00d3(0x24e);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x10bddb = '```ලෝගෝ\x20සෑදීම\x20ආකාරය\x20-\x201```';
                var _0x38abc8 = '';
                if (global['LANG'] == 'EN') _0x38abc8 = '```Make\x20logos\x20on\x20logo\x20pack\x20-2```';
                if (global['LANG'] == 'SI') _0x38abc8 = _0x3e00d3(0x3db);
                var _0x469d8d = '';
                if (global['LANG'] == 'EN') _0x469d8d = _0x3e00d3(0x7ac);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x469d8d = _0x3e00d3(0x1fc);
                anu = _0x3e00d3(0x727) + global['ownernma'] + _0x3e00d3(0x71d) + _0x1ed2c6 + '\x0a╰⛒\x20\x20*ᴛɪᴍᴇ*\x20' + _0x1aa1fc + '\x0a\x0a' + M_E + _0x3e00d3(0x29e) + D_E + '\x20\x20' + _0x10bddb + '\x0a' + M_E + _0x3e00d3(0x3e4) + D_E + '\x20\x20' + _0x38abc8 + '\x0a' + M_E + '\x20*.logo3*\x0a\x20\x20\x20\x20' + D_E + '\x20\x20' + _0x469d8d + _0x3e00d3(0xa51), next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x21e),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x4c9),
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x1c18e9 = {
                    'image': {
                        'url': _0x3e00d3(0xc41)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x1c18e9, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x4c9): {
                const _0x30aced = new Date()['getTime']();
                await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '🧬',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x5340c5 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x519d20 = _0x5340c5 - _0x30aced + '\x20*_ᴍs_*',
                    _0x18b366 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })[_0x3e00d3(0x341)]('\x20')[0x1];
                anu = _0x3e00d3(0x49c) + global[_0x3e00d3(0x951)] + '\x0a├⛒\x20\x20*ʀᴇsᴘᴏɴ\x20sᴘᴇᴇᴅ*\x20' + _0x519d20 + _0x3e00d3(0xc7d) + _0x18b366 + '\x0a\x0a' + M_E + '\x20' + _0x440929 + _0x3e00d3(0xbc6) + M_E + '\x20' + _0x440929 + _0x3e00d3(0x4fe) + M_E + '\x20' + _0x440929 + 'blockgc\x0a\x0a*──────────◯*\x0a', footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': _0x3e00d3(0x547),
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': 'ownermenu',
                    'buttonText': {
                        'displayText': next
                    },
                    'type': 0x1
                }];
                let _0x34be81 = {
                    'image': {
                        'url': _0x3e00d3(0x923)
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x34be81, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0xbe2): {
                const _0xf4c5fb = new Date()[_0x3e00d3(0x3a9)]();
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': _0x3e00d3(0xb7e),
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
                const _0x57ad32 = new Date()[_0x3e00d3(0x3a9)](),
                    _0x4a7257 = _0x57ad32 - _0xf4c5fb + '\x20*_ᴍs_*',
                    _0x24fdf1 = new Date()[_0x3e00d3(0xb53)]('HI', {
                        'timeZone': TIME_ZONE
                    })['split']('\x20')[0x1];
                var _0x20a907 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x20a907 = _0x3e00d3(0x81c);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x20a907 = _0x3e00d3(0x7d5);
                var _0x471148 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x471148 = _0x3e00d3(0x7e8);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x471148 = _0x3e00d3(0x90a);
                var _0x244c1a = '';
                if (global['LANG'] == 'EN') _0x244c1a = '```Change\x20bit\x20profile\x20photo```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x244c1a = _0x3e00d3(0x607);
                var _0x328056 = '';
                if (global['LANG'] == 'EN') _0x328056 = '```Block\x20user```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x328056 = _0x3e00d3(0x3be);
                var _0x34115c = '';
                if (global['LANG'] == 'EN') _0x34115c = _0x3e00d3(0x231);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x34115c = _0x3e00d3(0x2bc);
                var _0x38c6c8 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x38c6c8 = _0x3e00d3(0x5cc);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x38c6c8 = _0x3e00d3(0x6ef);
                var _0x3c1633 = '';
                if (global['LANG'] == 'EN') _0x3c1633 = _0x3e00d3(0x8ec);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x3c1633 = _0x3e00d3(0xb87);
                var _0x10043a = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x10043a = '```Change\x20Bot\x20alive\x20message\x20[\x20reply\x20your\x20image\x20alive\x20message\x20]```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x10043a = _0x3e00d3(0x624);
                var _0x38c01f = '';
                if (global['LANG'] == 'EN') _0x38c01f = _0x3e00d3(0x676);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x38c01f = '```බොට්ගේ\x20පිලිගැනීම්\x20පනිවිඩය\x20වෙනස්\x20කිරීමට\x20[\x20ඔබගේ\x20පිලිගැනීම්\x20පනිවිඩයට\x20රිප්ලයි\x20කරන්න\x20]```';
                var _0x2a6a9d = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x2a6a9d = _0x3e00d3(0xa00);
                if (global['LANG'] == 'SI') _0x2a6a9d = _0x3e00d3(0x7ea);
                var _0x12606a = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x12606a = _0x3e00d3(0x43e);
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x12606a = '```ඔබගේ\x20බොට්ගේ\x20පනිවිඩය\x20වෙනස්\x20කිරීමට\x20[\x20add\x20,\x20kick\x20,\x20promote\x20,\x20demote\x20,\x20block\x20,\x20unblock\x20,\x20leave\x20]\x20```';
                var _0x50a469 = '';
                if (global['LANG'] == 'EN') _0x50a469 = '```delete\x20your\x20message\x20[\x20add\x20,\x20kick\x20,\x20promote\x20,\x20demote\x20,\x20block\x20,\x20unblock\x20,\x20leave\x20]```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x50a469 = _0x3e00d3(0xb04);
                var _0x78a019 = '';
                if (global[_0x3e00d3(0x79a)] == 'EN') _0x78a019 = '```Use\x20default\x20[\x20welcome\x20,\x20goodbye\x20,\x20alive\x20]\x20messages```';
                if (global[_0x3e00d3(0x79a)] == 'SI') _0x78a019 = _0x3e00d3(0xb48);
                _0x440929 = '.', anu = _0x3e00d3(0x80d) + global[_0x3e00d3(0x951)] + _0x3e00d3(0x71d) + _0x4a7257 + _0x3e00d3(0xc7d) + _0x24fdf1 + '\x0a\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x668) + D_E + '\x20\x20' + _0x20a907 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xa2c) + D_E + '\x20\x20' + _0x471148 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x60f) + D_E + '\x20\x20' + _0x244c1a + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x97b) + D_E + '\x20\x20' + _0x328056 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xb6a) + D_E + '\x20\x20' + _0x34115c + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x2e1) + D_E + '\x20\x20' + _0x38c6c8 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x44b) + D_E + '\x20\x20' + _0x3c1633 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x528) + D_E + '\x20\x20' + _0x10043a + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xa8e) + D_E + '\x20\x20' + _0x38c01f + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x258) + D_E + '\x20\x20' + _0x2a6a9d + '\x0a' + M_E + '\x20*' + _0x440929 + 'setmessage*\x20\x20\x20\x0a\x20\x20\x20\x20' + D_E + '\x20\x20' + _0x12606a + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0xa11) + D_E + '\x20\x20' + _0x50a469 + '\x0a' + M_E + '\x20*' + _0x440929 + _0x3e00d3(0x4e4) + D_E + '\x20\x20' + _0x78a019 + _0x3e00d3(0x26d), next = Lang[_0x3e00d3(0x93a)], back = Lang[_0x3e00d3(0x8fa)], footer = global[_0x3e00d3(0x673)], buttons = [{
                    'buttonId': 'elisasistemmenu',
                    'buttonText': {
                        'displayText': back
                    },
                    'type': 0x1
                }, {
                    'buttonId': _0x3e00d3(0x697),
                    'buttonText': {
                        'displayText': _0x3e00d3(0x753)
                    },
                    'type': 0x1
                }];
                let _0x455b66 = {
                    'image': {
                        'url': 'https://telegra.ph/file/f9ef7247406e4a86c3a77.jpg'
                    },
                    'caption': anu,
                    'footer': footer,
                    'buttons': buttons,
                    'headerType': 0x4
                };
                _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0x455b66, {
                    'quoted': _0x3bbe8d
                });
            }
            break;
            case _0x3e00d3(0x983): {
                anu = await fetchJson(_0x3e00d3(0x869)), G_LINK = anu['PUBLIC_GROUP'];
                const _0x47a9 = _0x3e00d3(0x998),
                    _0x37a8f0 = [{
                        'index': 0x1,
                        'urlButton': {
                            'displayText': _0x3e00d3(0x90c),
                            'url': 'https://github.com/darkmakerofc/Queen-Elisa-Md-V2'
                        }
                    }, {
                        'index': 0x2,
                        'urlButton': {
                            'displayText': '𝗪𝗔𝗧𝗖𝗛\x20𝗩𝗜𝗗𝗘𝗢',
                            'url': G_LINK
                        }
                    }, {
                        'index': 0x3,
                        'quickReplyButton': {
                            'displayText': _0x3e00d3(0xc4c),
                            'id': 'publicgroup'
                        }
                    }],
                    _0xea1970 = {
                        'image': {
                            'url': _0x3e00d3(0x8be)
                        },
                        'caption': _0x47a9,
                        'footer': _0x3e00d3(0x77b),
                        'templateButtons': _0x37a8f0,
                        'headerType': 0x4
                    };
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d['chat'], _0xea1970, {
                    'quoted': _0x3bbe8d
                }), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '❤',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0x918244 => setTimeout(_0x918244, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🧡',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0x31227a => setTimeout(_0x31227a, 0x1388)), await _0x4b49f7['sendMessage'](_0x3e5538, {
                    'react': {
                        'text': '💛',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0xcd6b63 => setTimeout(_0xcd6b63, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💚',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0x1c6628 => setTimeout(_0x1c6628, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💙',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0x1d1956 => setTimeout(_0x1d1956, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💜',
                        'key': _0x3bbe8d['key']
                    }
                }), await new Promise(_0x21e2c => setTimeout(_0x21e2c, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🤎',
                        'key': _0x3bbe8d['key']
                    }
                }), await new Promise(_0x53528b => setTimeout(_0x53528b, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🖤',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0xe437 => setTimeout(_0xe437, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '🤍',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), await new Promise(_0x5466a6 => setTimeout(_0x5466a6, 0x1388)), await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '💖',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                });
            }
            break;
            case 'thank': {
                await _0x4b49f7[_0x3e00d3(0x69f)](_0x3e5538, {
                    'react': {
                        'text': '❤',
                        'key': _0x3bbe8d[_0x3e00d3(0x2da)]
                    }
                }), _0x53c8bd(_0x3e00d3(0x991));
            }
            break;
            case 'publicgroup': {
                const _0x2813d8 = await fetchJson(_0x3e00d3(0x869)),
                    _0x13851f = _0x3e00d3(0x736) + _0x2813d8[_0x3e00d3(0x35c)] + '\x0a\x0a',
                    _0x4fed27 = [{
                        'index': 0x1,
                        'urlButton': {
                            'displayText': 'ᴊᴏɪɴ\x20ɴᴏᴡ',
                            'url': 'https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc'
                        }
                    }, {
                        'index': 0x2,
                        'urlButton': {
                            'displayText': _0x3e00d3(0x219),
                            'url': _0x3e00d3(0x841)
                        }
                    }],
                    _0x50a2cb = {
                        'text': _0x13851f,
                        'footer': 'ＱＵＥＥＮ\x20ＥＬＩＳＡ\x20Ｖ2',
                        'templateButtons': _0x4fed27
                    },
                    _0x1ed94e = await _0x4b49f7['sendMessage'](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x50a2cb, {
                        'quoted': _0x3bbe8d
                    });
            }
            break;
            default:
                if (_0x29f03b['startsWith']('=>')) {
                    if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);

                    function _0x2375a5(_0x112d39) {
                        const _0x28572a = _0x3e00d3;
                        sat = JSON[_0x28572a(0x6d6)](_0x112d39, null, 0x2), bang = util[_0x28572a(0x945)](sat), sat == undefined && (bang = util[_0x28572a(0x945)](_0x112d39)), _0x53c8bd(bang);
                    }
                    try {
                        _0x53c8bd(util[_0x3e00d3(0x945)](eval(_0x3e00d3(0x503) + _0x29f03b[_0x3e00d3(0x86e)](0x3) + '\x20})()')));
                    } catch (_0x533f8c) {
                        _0x53c8bd(String(_0x533f8c));
                    }
                }
                if (_0x29f03b['startsWith']('>')) {
                    if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                    try {
                        let _0x16bfa8 = await eval(_0x29f03b[_0x3e00d3(0x86e)](0x2));
                        if (typeof _0x16bfa8 !== _0x3e00d3(0x60e)) _0x16bfa8 = require(_0x3e00d3(0x482))[_0x3e00d3(0x339)](_0x16bfa8);
                        await _0x53c8bd(_0x16bfa8);
                    } catch (_0x104ff1) {
                        await _0x53c8bd(String(_0x104ff1));
                    }
                }
                if (_0x29f03b['startsWith']('$')) {
                    if (!_0x5ef7c8) return _0x53c8bd(mess[_0x3e00d3(0x3f2)]);
                    exec(_0x29f03b['slice'](0x2), (_0x5aee94, _0x235772) => {
                        if (_0x5aee94) return _0x53c8bd(_0x5aee94);
                        if (_0x235772) return _0x53c8bd(_0x235772);
                    });
                }
                if (_0x3bbe8d[_0x3e00d3(0x5f1)][_0x3e00d3(0x746)](_0x3e00d3(0x5c5)) && _0x208f9e) {
                    this[_0x3e00d3(0x865)] = this[_0x3e00d3(0x865)] ? this[_0x3e00d3(0x865)] : {};
                    let _0x1faca4 = Object[_0x3e00d3(0xb01)](this['anonymous'])[_0x3e00d3(0x581)](_0xde93a => [_0xde93a['a'], _0xde93a['b']]['includes'](_0x3bbe8d[_0x3e00d3(0x448)]) && _0xde93a[_0x3e00d3(0x4f5)] === _0x3e00d3(0x22b));
                    if (_0x1faca4) {
                        if (/^.*(next|leave|start)/ [_0x3e00d3(0x2f1)](_0x3bbe8d[_0x3e00d3(0x5e0)])) return;
                        if (['.next', _0x3e00d3(0x8b0), _0x3e00d3(0x7a6), _0x3e00d3(0x52b), 'Cari\x20Partner', _0x3e00d3(0x5ac), _0x3e00d3(0x916), _0x3e00d3(0x874)][_0x3e00d3(0x3d5)](_0x3bbe8d['text'])) return;
                        let _0x7f806d = [_0x1faca4['a'], _0x1faca4['b']][_0x3e00d3(0x581)](_0x555310 => _0x555310 !== _0x3bbe8d[_0x3e00d3(0x448)]);
                        _0x3bbe8d[_0x3e00d3(0x20d)](_0x7f806d, !![], _0x3bbe8d[_0x3e00d3(0xbad)] && _0x3bbe8d[_0x3e00d3(0xbad)][_0x3e00d3(0xb89)] ? {
                            'contextInfo': {
                                ..._0x3bbe8d[_0x3e00d3(0x259)][_0x3e00d3(0x999)],
                                'forwardingScore': 0x0,
                                'isForwarded': !![],
                                'participant': _0x7f806d
                            }
                        } : {});
                    }
                    return !0x0;
                }
                if (_0x208f9e && _0x29f03b[_0x3e00d3(0xa8d)]() != undefined) {
                    if (_0x3bbe8d[_0x3e00d3(0x5f1)][_0x3e00d3(0x746)](_0x3e00d3(0x203))) return;
                    if (_0x3bbe8d[_0x3e00d3(0x94f)]) return;
                    let _0x2e8532 = global['db'][_0x3e00d3(0x646)][_0x3e00d3(0x952)];
                    if (!(_0x29f03b[_0x3e00d3(0xa8d)]() in _0x2e8532)) return;
                    _0x4b49f7[_0x3e00d3(0x20d)](_0x3bbe8d[_0x3e00d3(0x5f1)], _0x2e8532[_0x29f03b[_0x3e00d3(0xa8d)]()], !![]);
                }
        }
    } catch (_0x58686d) {
        await _0x4b49f7[_0x3e00d3(0x69f)](_0x3bbe8d[_0x3e00d3(0x5f1)], {
            'text': '' + _0x58686d
        }), await _0x4b49f7[_0x3e00d3(0x69f)](mek['key'][_0x3e00d3(0x76b)], {
            'react': {
                'text': '⚠️',
                'key': _0x3bbe8d[_0x3e00d3(0x2da)]
            }
        });
    }
};
let file = require['resolve'](__filename);
fs[_0x1ce957(0xa99)](file, () => {
    const _0x4c5303 = _0x1ce957;
    fs[_0x4c5303(0xb54)](file), console[_0x4c5303(0x788)](chalk['redBright'](_0x4c5303(0xac9) + __filename)), delete require['cache'][file], require(file);
});