let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/049834130c5a4d7dd9c97.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah KAGUYA MD, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n*.allmenu* [Menampilkan Semua Perintah]\n\n_2023 © KaguyaMD_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
