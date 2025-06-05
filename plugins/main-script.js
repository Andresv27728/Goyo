const handler = async (m, { conn }) => {
  const texto = `
 _Black Clover_ 🥷

\`\`\`Repositorio Oficial:\`\`\`
https://github.com/thecarlos19/Black-clover-MD

> 🌟 Dejar tu estrella en GitHub ayudaría mucho.

🔗 Grupo oficial del bot: https://chat.whatsapp.com/GrcUknwrJbNIXIIrbsuXc0
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
