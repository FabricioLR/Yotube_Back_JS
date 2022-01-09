const Video = require("../models/Video")
const User = require("../models/User")

module.exports = {
    async store(req, res){
        try {
            const { nome, url, owner } = req.body
            
            if (!await User.findByPk(owner)){
                return res.status(400).send({ error: "user not found" })
            }

            const video = await Video.create({
                nome,
                url,
                owner,
                like: 0,
                deslike: 0,
                visualizacoes: 0,
            }) 
            
            return res.status(200).send({ success: true, video: video})
        } catch (error) {
            return res.status(400).send({ error: "create failed"})
        }
    },
    async getdata(req, res){
        try {
            const videos = await Video.findAll()
            
            return res.status(200).send({ success: true, videos: videos})
        } catch (error) {
            return res.status(400).send({ error: "cath failed"})
        }
    },
    async updatevisualizacoes(req, res){
        try {
            const video = await Video.findAll({
                attributes: ["visualizacoes"],
                where: {
                    id: req.body["videoId"]
                }
            })

            if (video){
                const visualizacoes = await Video.update(
                    {
                        visualizacoes: Number(video[0]["dataValues"]["visualizacoes"]) + 1
                    },
                    {
                        where: {
                                id: req.body["videoId"]
                            }
                    }
                )
                return res.status(200).send({ success: true, video: video})
            } else {
                return res.status(400).send({ error: "id not found" })
            }
        } catch (error) {
            return res.status(400).send({ error: "update failed"})
        }
    },
    async getexpecifyvideo(req, res){
        try {
            const video = await Video.findByPk(req.body["videoId"], {
                include: { association: "users" }
            })

            video.users.senha = undefined
            
            return res.status(200).send({ success: true, video: video})
        } catch (error) {
            return res.status(400).send({ error: "cath failed"})
        }
    },
}
