const connection = require("../database/index")

module.exports = {
    async store(req, res){
        try {
            const rows = await connection.query("INSERT INTO videos (nome, url) VALUES ($1, $2)", [req.body["nome"], req.body["url"]])
           // const rows = await connection.query("TRUNCATE videos")
            return res.status(200).send({ success: true, rows: rows })
        } catch (error) {
            return res.status(200).send({ error: "error"})
        }
    },
    async getdata(req, res){
        try {
            const rows = await connection.query("SELECT * FROM videos")
            return res.status(200).send({ success: true, rows: rows })
        } catch (error) {
            return res.status(200).send({ error: "error"})
        }
    },
    async getexpecifyvideo(req, res){
        try {
            const rows = await connection.query(`SELECT * FROM videos WHERE id = '${req.body["videoId"]}'`)
            return res.status(200).send({ success: true, rows: rows })
        } catch (error) {
            console.log(error)
            return res.status(200).send({ error: "error"})
        }
    }
}