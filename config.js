//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285813708397', 'FallZx', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285813708397' //Ganti
global.packname = '© Sticker by FallZx'
global.author = 'KAGUYA-MD'
global.namebot = 'Kaguya - MD'
global.wm = '© Kaguya MD By FallZx'
global.stickpack = '© Sticker by FallZx'
global.stickauth = 'KAGUYA-MD'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/FallEzz'
global.sgc = 'https://chat.whatsapp.com/C207rWMh5SQ2Ps9CwFfjhZ'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '0858-1370-8397'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'j9XFN6zChx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})