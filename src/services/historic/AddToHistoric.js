const User = require("../../models/User")
const Video = require("../../models/Video")

async function AuthenticateByToken(data){
    const user = await User.findOne({ where: {
        id: data.userId
    }})

    const video = await Video.findOne({ where: {
        id: data.videoId
    }})

    if (!user || !video){
        return data.response.status(400).send({ error: "user or video not found" })
    }

    const historic = await user.addVideo(video)

    return historic
}

module.exports = AuthenticateByToken