const User = require("../../models/User")

async function AuthenticateByToken(data){
    const user = await User.findOne({ where: {
            id: data.userId
        }})

    if (!user){
        return data.response.status(400).send({ error: "user not found" })
    }

    user.senha = undefined

    return user
}

module.exports = AuthenticateByToken