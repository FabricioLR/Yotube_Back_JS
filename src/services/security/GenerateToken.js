const jwt = require("jsonwebtoken")

function GenerateToken(id){
    const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 86400,
    })

    return token
}

module.exports = GenerateToken