const Video = require("../../models/Video")

async function SearchVideos(data){
    const videos = await Video.findAll({
        include: { association: "users" }
    })

    const list = []

    for (const video of videos){
        if (String(video.nome).toLocaleLowerCase().includes(String(data.namesearch).toLocaleLowerCase())){
            list.push(video)
        }
    }

    return list
}

module.exports = SearchVideos