const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "27613106647";
global.sudo = process.env.SUDO || "27613106647";
global.owner = process.env.OWNER_NUMBER || "27613106647";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FQNm9NSkIvVVpUc3M2eW9kSFR4R2hsS3o4azIzK2lrcm5XS1BCWGdHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXR2SXF2MWhid3pXbi9DbEdUazR1a2pSckpiakpoKzIzbVdJczlDL056VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSFJ5YXY1VjFZU2hsTUQ0YjlmQUhPS3ZrYXBIdDB2WFM4YnJxZGxrdUZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSHhRSndjNXFXd3NwUTVPck13TU40NitLK2s2eFZ0TkxBRkgwVXR1VWpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHd3M4ZFlRTDhMRy9JalBHYVZXRG5EMURidThtMWZ2T0JBUlBqakZCRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1xc1N2a0t4QXBuYThYQisvSWNxQVptTnBJLzkrNVk2Wmp2c2NEODRraEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xvSUpFVmFMT1ZkMTJPU2ZubGMyZkhZMS8zdmV0SFYzNzdhYkxPcnpGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWkyWUQxZjF2eVB2OXllT2MreW1UOUNWUENmSXpKTGdPeDYxeTN4RVFXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRPaXJFUFQyazZQaG1jbzZnMTRZMVFvb1d4eEpOTWNOTWZJR25NS3B6OWk2dzNCZ3lUZWwwbVhhVFR2QVhUa1czakFrYmErTEVyUlVaYXZ4dzluN2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJicDhuazhvMDAzZ1I1NWJQdjhveVlNc21KRnluK085WHV0YmxxN2YxQXprPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLQU9IaXN1R1NEcWRURTJvMDZzZG5nIiwicGhvbmVJZCI6ImJmMDQxOTAzLTAzZDYtNGZkZS05YzBhLWYwYzQ5MjNjZjhiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJobVdMaUV6TjRuNTYrbXFkbjRsUzYrMzNyVnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWF6eEkyRXRyZXY0WDNlenZoYWpkYjVJeS9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg0V0NDMU1XIiwibWUiOnsiaWQiOiIyNjM3ODE1MjYxNDg6MzlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5QWs4QUhFTGVWaHJjR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVTYTYyYXpjSmFUdHJ6V1NXY2F5Ynl5MWxSSkMydUlra21sM1EwOWh0RDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtQUzdtOHBpQnV3cElpdEo4eHg2eFpablNtb2tiMmd4a29URElyeTZVL1l0T2hFeUVuNnB4UElzUDZCK3hZaUhkR2tTUEs2YmtkN0ptQW5tMHhjQ0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPbVdHeEF3U1BBMnhZVWhLVlZod0V4S1E2Qy9hN0dWODFkZEtpVlh3OStxaGxpc0FpbEptZG94cDRKVGtEVEdpSVJUOHVlWWpnLzc4NUFWUEhIcHFqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MTUyNjE0ODozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRW11dG1zM0NXazdhODFrbG5Hc204c3RaVVNRdHJpSkpKcGQwTlBZYlEvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MDU3MTU5fQ==";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Mr-Jones",
  errorChat: process.env.ERROR_CHAT || "27613106647",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
