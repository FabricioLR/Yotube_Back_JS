const User = require("../../models/User")
const verifyPassword = require("../security/VerifyPassword")
const generateToken = require("../security/GenerateToken")

async function AuthenticateUser(data){
    const user = await User.findOne({ where: {
        email: data.email
    }})

    if (!user){
        return data.response.status(400).send({ error: "user not found" })
    }

    const verify = verifyPassword({ senha: data.senha, userSenha: user.senha})

    if (!verify){
        return data.response.status(400).send({ error: "password or email invalid" })
    }

    user.senha = undefined

    const token = generateToken(user.id)

    return { user, token }
}

module.exports = AuthenticateUser