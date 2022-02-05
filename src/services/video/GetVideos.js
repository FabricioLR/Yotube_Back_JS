const Video = require("../../models/Video")

async function GetVideos(){
    return await Video.findAll({
        include: {
            association: "users"
        }
    })
}

module.exports = GetVideos