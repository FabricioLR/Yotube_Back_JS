const Video = require("../../models/Video")

async function GetVideo(data){
    const video = await Video.findByPk(data.videoId, {
        include: { association: "users" }
    })

    if (!video){
        return data.response.status(400).send({ error: "video not found" })
    }

    video.users.senha = undefined

    return video
}

module.exports = GetVideo