require('dotenv').config()

const port = process.env.PORT || 3000
const app = require("./app")

require("./database")

app.listen(port, () => {
    console.log("server rodando na porta " + port)
})