const Video = require("../../models/Video")

async function GetVideos(){
    return await Video.findAll()
}

module.exports = GetVideos