const Video = require("../../models/Video")

async function UpdateVisualizations(data){
    const video = await Video.findAll({
        attributes: ["visualizacoes"],
        where: {
            id: data.videoId
        }
    })

    if (video){
        const visualizacoes = await Video.update(
            {
                visualizacoes: Number(video[0]["dataValues"]["visualizacoes"]) + 1
            },
            {
                where: {
                        id: data.videoId
                    }
            }
        )
        return video
    } else {
        return data.response.status(400).send({ error: "video not found" })
    }
}

module.exports = UpdateVisualizations