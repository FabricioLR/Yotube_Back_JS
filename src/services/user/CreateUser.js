const User = require("../../models/User")
const generateHash = require("../security/GenerateHash")
const generateToken = require("../security/GenerateToken")

async function CreateUser(data){
    const UserAlreadyExists = await User.findOne({ where: {
        email: data.email
    }})

    if (UserAlreadyExists){
        console.log("sim")
        return data.response.status(400).send({ error: "email already used" })
    }

    console.log("nao")

    const senha = await generateHash(data.senha)

    console.log(senha)

    const user = await User.create({ email: data.email, senha, nome: data.nome, foto_url: "" })

    console.log(user)
    
    user.senha = undefined

    const token = generateToken(user.id)

    console.log(token)

    return [user, token]
}

module.exports = CreateUser