const bcrypt = require("bcryptjs")

async function VerifyPassword(data){
    if (!await bcrypt.compare(data.senha, data.userSenha)) return false

    return true
}

module.exports = VerifyPassword