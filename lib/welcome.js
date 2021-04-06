const fs = require('fs')
const { ind } = require('../language')
const { getBuffer } = require('../lib/functions')

module.exports = welcome = async ( client , mem , image ) => {
	const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
	const isWelcome = welkom.includes(mem.jid)
	if (!isWelcome) return
		try {
			const mdata = await client.groupMetadata(mem.jid)
			if (mem.action == 'add') {
				num = mem.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${mem.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const buf = await getBuffer(ppimg)
				client.sendMessage(mdata.id , buf , image , { caption : ind.welcome(mdata , num) , contextInfo: {"mentionedJid": [num]}})
			} else if (mem.action == 'remove') {
				num = mem.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, image, {caption: ind.left() , contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
				