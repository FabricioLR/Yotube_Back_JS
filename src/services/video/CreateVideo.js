const Video = require("../../models/Video")
const User = require("../../models/User")

async function CreateVideo(data){
    const user = await User.findByPk(data.owner)

    if (!user){
        return data.response.status(400).send({ error: "user not found" })
    }

    const video = await Video.create({
        nome: data.nome,
        url: data.url,
        owner: data.owner,
        like: 0,
        deslike: 0,
        visualizacoes: 0,
    })
}

module.exports = CreateVideo