const createVideo = require("../services/video/CreateVideo")
const getVideos = require("../services/video/GetVideos")
const getVideo = require("../services/video/GetVideo")
const updateVisualizations = require("../services/video/UpdateVisualizations")
const searchVideos = require("../services/video/SearchVideos")

class VideoController {
    async CreateVideo(request, response){
        const { nome, owner } = request.headers
        const { url } = request.file
        console.log(nome, owner, url)
        try {
            const CreateUserResponse = await createVideo({
                nome, owner, url, response
            })

            console.log(CreateUserResponse)
            
            return response.status(200).send({ success: true })
        } catch (error) {
            console.log(error)
            return response.status(400).send({ error: "create video failed"})
        } 
    }
    async GetVideos(request, response){
        try {
            const GetVideosResponse = await getVideos()
            
            return response.status(200).send({ success: true, videos: GetVideosResponse })
        } catch (error) {
            return response.status(400).send({ error: "get videos failed"})
        }
    }
    async GetVideo(request, response){
        const { videoId } = request.body

        try {
            const GetVideoResponse = await getVideo({
                videoId, response
            })

            return response.status(200).send({ success: true, video: GetVideoResponse })
        } catch (error) {
            return response.status(400).send({ error: "get video failed"})
        }
    }
    async UpdateVisualizations(request, response){
        const { videoId } = request.body

        try {
            const UpdateVisulaizationsResponse = await updateVisualizations({
                videoId, response
            })

            return response.status(200).send({ success: true, video: UpdateVisulaizationsResponse })
        } catch (error) {
            return response.status(400).send({ error: "update failed"})
        }
    }
    async SearchVideos(request, response){
        const { namesearch } = request.body
        try {
            const SearchVideosResponse = await searchVideos({
                namesearch
            })

            return response.status(200).send({ success: true, videos: SearchVideosResponse })
        } catch (error) {
            return response.status(400).send({ error: "search videos failed"})
        }
    }
}

module.exports = VideoController
