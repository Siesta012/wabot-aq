let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085871388418]
│ • Telkomsel [-]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [083195903801]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
