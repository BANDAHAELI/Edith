const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME15ajVoWXN2MFZDWlBQeEtiN3Nic1NDeXBCWWN0S0RqdVlENTJ2cTlIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVdnNXMyZlZDdWpkYnR6ZXBTekJWREU2RTk2UU9IYmc2NzRHc0FEa0pHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SWxQTEFvc09DSnNod1dhM29ORFRqYm9hc1FqcC9uaVoyM1c4LzNPUzF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZE5aVllTY25ocnlXWVg0SUlLY0xDdzNDLzhqLytEZ3F1MjBiSDlTVUVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNOWR6SXcwdVpOWjhJczg2YVFEbzlHMEhqQ3ZmZDZvRkt6RXNOMTZtMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild1Kytmd0ZaVG5sTWY5bzc5RjFSQzM5Rm4zTXZqV2tjOEY4YWEvUHdCeXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01GMXJaK25sQVp5YkxBQzdHRkMzK2Z0OWpSZmdFVWRMcWZKT285eUVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFNMRTkzOUNjcjVnc0NKclYva1VRUEJRQ3VsSGJaWXNtVTVQNldLUzlXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFVdDZqS3Z4T3J5RU0vMDVqMjlza0JFZ2RsSG51Mk1zNEdUZHN4dm4waTRxeUxoTVVmelZKclloZ2ZaN2NJTE96T0Y1RUd3YmFaYW1kNGpTL0tRT2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJZWHErK2cySWV5cGh2L2kyS0gzTDlqS1hnMFZlN29pYjNrZXVPaXNHM3VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzMjUzNjE3NDIyOjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8olxu772BXG7vvY5cbu+9hFxu772BXG7vvYhcbu+9hVxu772BXG7vvYxcbu+9iSIsImxpZCI6IjI1NTI4MDM3Mzg0NjEyMTo0N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlWit1Z0RFTDJjdWNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRsNjRLaW9LVGo5WFgrQlhGQkx1Qm05c3QyMGZNZVI5Z0JzY3R5QllmbXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRuK3NJZGcvSWUwTUphWjUrMHRhWHFKaHljNWxrdjRpL0NLYWlqcmR4RXU4U3ZyUFNaM09xVlpMWDA5d2tON2dtKytwUGJKamFlVUx1YndYblhCY0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMWTFZbU5qZFVFQXVTVVpVK2dMeGZHRFVwTEFBWC93bFlreVU5MmpXVVBsQTFqbVRkVS9xUGxiNVgvWStSaVp0R0U5RHU4aHptaE0vYSs1d1NnRjlpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1MzYxNzQyMjo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNWV1Q29xQ2s0L1YxL2dWeFFTN2dadmJMZHRIekhrZllBYkhMY2dXSDVyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYyNTM3NjEsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBbC8ifQ==",
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
