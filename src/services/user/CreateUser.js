const User = require("../../models/User")
const generateHash = require("../security/GenerateHash")
const generateToken = require("../security/GenerateToken")

async function CreateUser(data){
    const UserAlreadyExists = await User.findOne({ where: {
        email: data.email
    }})

    if (UserAlreadyExists){
        return data.response.status(400).send({ error: "email already used" })
    }

    const senha = await generateHash(data.senha)

    const user = await User.create({ email: data.email, senha, nome: data.nome, foto_url: "" })
    
    user.senha = undefined

    const token = generateToken(user.id)

    return [user, token]
}

module.exports = CreateUser