const User = require("../../models/User")

async function ChangeUserImage(data){
    const user = await User.update({
        foto_url: data.url
    }, {
        where: {
            id: data.userId
        }
    })

    if (!user){
        return data.response.status(400).send({ error: "update user image failed" })
    }
}

module.exports = ChangeUserImage