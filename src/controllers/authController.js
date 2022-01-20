const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

function generateToken(id){
    const token = jwt.sign({ id: id }, process.env.SECRET, {
        expiresIn: 86400,
    })

    return token
}

module.exports = {
    async register(req, res){
        try {
            if (await User.findOne({ where: { "email": req.body["email"] }})){
                return res.status(400).send({ error: "email already used" })
            }
            const senha = await bcrypt.hash(req.body["senha"], 10)
            const user = await User.create({ email: req.body["email"], senha: senha, nome: req.body["nome"], foto_url: "" })
            
            user["senha"] = undefined

            return res.status(200).send({ success: true, user: user, token: generateToken(user.id) })
        } catch (error) {
            return res.status(400).send({ error: "register failed" })
        }
    },
    async authenticate(req, res){
        try {
            const user = await User.findOne({ where: { "email": req.body["email"] }})

            if (!user){
                return res.status(400).send({ error: "user not found" })
            }
            
            if (!await bcrypt.compare(req.body["senha"], user.senha)){
                return res.status(400).send({ error: "password invalid" })
            }

            user["senha"] = undefined

            return res.status(200).send({ success: true, user: user, token: generateToken(user.id) })
        } catch (error) {
            return res.status(400).send({ error: "authenticate failed" })
        }
    },
    async profile(req, res){
        try {
            const user = await User.findOne({ where: { "id": req.userId }})

            if (!user){
                return res.status(400).send({ error: "user not found" })
            }

            user.senha = undefined

            return res.status(200).send({ success: true, user: user })
        } catch (error) {
            return res.status(400).send({ error: "profile failed" })
        }
    },
    async changeImage(req, res){
        try {
            const user = await User.update({
                foto_url: req.file.url
            }, {
                where: {
                    id: req.userId
                }
            })

            if (!user){
                return res.status(400).send({ error: "user not found" })
            }

            return res.status(200).send({ success: true })
        } catch (error) {
            return res.status(400).send({ error: "profile failed" })
        } 
    }
}