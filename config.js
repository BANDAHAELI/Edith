const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0QvZ1ZicjRKMVFmQTI3dnV1UHgvL1pRQThMK3VmUTBleFo2NHhiUTNIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVZyR1h3UjBIcWVIUGViaW5ibUMrcjBPaGdQbzdPRmp6SlkzYXBOclNYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TENVUzlJK0g5MENSS0dlVFhIWDYrY1NvY0hRWGJHdDcyMktybCs2RDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1JuVUozdzlPU0pIaU1BYUVHVHpRVlU2dzUzcGRpRytBRnVWQzJ6SEY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOZ0VQSmlxaEsvczQ0eCtHMTV6V1VNQzVEaExQWS9zS2xLcGk5SVplVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGNGlzRTVZSUlPTTFvV0F1SUMyZzNJelNkQ2hQZnR1TkI5NTgxSEFLVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU91cTJ4Zkc3dVM5YmlFanNmUW01UGN0Q0RzemU0YkJ5bTNSODFSNkprQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjcvWWR4eWFwQmFCNHd0OU1tUVcvNnNJanRJVEVYWVJIZTY0dTludldpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpMVFlRHNTZ0h5RCtpaDM4TXZMZlhqWG0rRGt2Q21zb3FTOFdvNmJQekhhdytjemdpYTkxUk5VbklKN2tLNkEzdDF5TVhMTGtRK3RKZUUzMjh5cUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IktGMUxOSmZFTHhaaW81RkZXY1BNSkl5bkV3elhLVUZtaDRJV3lpOW1pUEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzc1NjYzMzc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk3MEU3MTkyMzFEQTIwMzRBQkEzQUQzNTY3REU5NUVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY3ODg4MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NTY2MzM3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNzZBRTdDNTBERjlENDZBNDA2MTI1NTIyM0QyOEZDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2Nzg4ODM1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzU2NjMzNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTNGMjJBRDQ0N0VEN0M1QTgyNzcwQUE2NjQ0MTJFQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njc4ODgzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWFc0QjROMVgiLCJtZSI6eyJpZCI6IjI2Mzc3NTY2MzM3Njo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzcxNTEyMTkwMTU5MTA6NEBsaWQiLCJuYW1lIjoiU2ltYmEgRnVudGFzdGljIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQTDg0WWdIRU4zdzJjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHcTlTQnR3QlJaNGRvTmtwQ3ZXUUlpaW1KaXJ0L2NJNFFKaUdXWFVCc1JRPSIsImFjY291bnRTaWduYXR1cmUiOiJaRm9sWVNZanM4d0RIRS94ZlZmb3k2UVR3RzN5VzF5dm01b2VxU3JCVktZVUlUaTRWNUVnSjI0NWlkenJPSFVlSHluZ2o3V3dQWXVlUTJ3MCtvRE1BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRjZGSEErU0FqU3ZHMythNERiZldKYnlpRVcwVTVObEFyc3d3ZjJ5K3RBdkRORDZYa25ORGQ4TzUrOHJGOUUvdUV3WGtlYld5YklWaUNNaTJoZVowQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzU2NjMzNzY6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScXZVZ2JjQVVXZUhhRFpLUXIxa0NJb3BpWXE3ZjNDT0VDWWhsbDFBYkVVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY3ODg4MzEsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjRZIn0=",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
