const bcrypt = require("bcryptjs")

async function GenerateHash(senha){
    const newSenha = await bcrypt.hash(senha, 10)

    return newSenha
}

module.exports = GenerateHash